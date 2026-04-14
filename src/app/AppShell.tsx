import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { CursorLayer } from '../components/CursorLayer/CursorLayer'
import { DetailOverlay } from '../components/DetailOverlay/DetailOverlay'
import { Header } from '../components/Header/Header'
import { MenuOverlay } from '../components/MenuOverlay/MenuOverlay'
import { Preloader } from '../components/Preloader/Preloader'
import { assetManifest } from '../data/assets'
import { getProjectDetail, projectDetails } from '../data/projectDetails'
import type { Experience } from '../experience/core/Experience'
import { HomePage } from '../pages/Home/HomePage'
import { WorkPage } from '../pages/Work/WorkPage'
import { ScrollManager } from '../systems/scroll/ScrollManager'
import { appStore, setAppState, useAppStore } from '../systems/state/appStore'
import type { HomeSectionId, Locale, OverlayType, ProjectSlug, RouteState } from '../types/content'
import type { DeviceProfile, PointerState, SectionSpec } from '../types/runtime'
import { clamp } from '../utils/math'
import {
  createHomeRoute,
  createWorkRouteWithOrigin,
  getRouteUrl,
  parseLocationRoute,
} from '../utils/routing'

const sectionIds: HomeSectionId[] = [
  'hero',
  'proof',
  'featured',
  'timeline',
  'links',
  'insights',
  'contact',
]

const getInitialRoute = () =>
  parseLocationRoute(window.location.pathname, window.history.state as Partial<RouteState> | null)

const getCaptureMode = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const captureParam = searchParams.get('capture')

  if (captureParam === '1') {
    return true
  }

  if (captureParam === '0') {
    return false
  }

  return navigator.webdriver || window.innerHeight > 2200
}

const getDeviceProfile = (): DeviceProfile => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    return 'reducedMotion'
  }

  if (window.innerWidth <= 720) {
    return 'mobileLite'
  }

  if (window.innerWidth <= 1120) {
    return 'tablet'
  }

  return 'desktop'
}

const createLoadTasks = (sceneBoot: Promise<void>) => {
  const taskMap: Record<string, Promise<unknown>> = {
    [assetManifest[0].id]: document.fonts.ready,
    [assetManifest[1].id]: document.fonts.ready,
    [assetManifest[2].id]: sceneBoot,
    [assetManifest[3].id]: new Promise((resolve) => {
      window.setTimeout(resolve, 360)
    }),
    [assetManifest[4].id]: new Promise((resolve) => {
      window.setTimeout(resolve, 1180)
    }),
  }

  return assetManifest.map((asset) => taskMap[asset.id] ?? Promise.resolve())
}

export function AppShell() {
  const pageTrackRef = useRef<HTMLDivElement | null>(null)
  const pageContentRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const progressRailRef = useRef<HTMLDivElement | null>(null)
  const progressFillRef = useRef<HTMLDivElement | null>(null)

  const sectionRefs = useRef<Record<HomeSectionId, HTMLElement | null>>({
    hero: null,
    proof: null,
    featured: null,
    timeline: null,
    links: null,
    insights: null,
    contact: null,
  })

  const pointerRef = useRef<PointerState>({ x: 0, y: 0 })
  const experienceRef = useRef<Experience | null>(null)
  const scrollManagerRef = useRef<ScrollManager | null>(null)
  const captureModeRef = useRef(false)
  const pendingSectionRef = useRef<HomeSectionId | null>(null)
  const highlightTimeoutRef = useRef<number | null>(null)
  const introTimersRef = useRef<number[]>([])

  const [routeState, setRouteState] = useState<RouteState>(() => getInitialRoute())
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(
    getInitialRoute().restoreProjectId,
  )
  const routeRef = useRef<RouteState>(routeState)

  const menuOpen = useAppStore((state) => state.menuOpen)
  const webglAvailable = useAppStore((state) => state.webglAvailable)
  const activeOverlay = useAppStore((state) => state.activeOverlay)
  const locale = useAppStore((state) => state.locale)
  const transitionState = useAppStore((state) => state.transitionState)

  const activeProject = useMemo(
    () =>
      routeState.page === 'work' && routeState.projectSlug
        ? getProjectDetail(routeState.projectSlug)
        : null,
    [routeState.page, routeState.projectSlug],
  )

  const projectNeighbors = useMemo(() => {
    if (!activeProject) {
      return {
        previousProject: null,
        nextProject: null,
      }
    }

    const currentIndex = projectDetails.findIndex((project) => project.slug === activeProject.slug)

    return {
      previousProject: currentIndex > 0 ? projectDetails[currentIndex - 1] : null,
      nextProject:
        currentIndex >= 0 && currentIndex < projectDetails.length - 1
          ? projectDetails[currentIndex + 1]
          : null,
    }
  }, [activeProject])

  const bindSection = (id: HomeSectionId) => (node: HTMLElement | null) => {
    sectionRefs.current[id] = node
  }

  const clearHighlightLater = () => {
    if (highlightTimeoutRef.current) {
      window.clearTimeout(highlightTimeoutRef.current)
    }

    highlightTimeoutRef.current = window.setTimeout(() => {
      setHighlightedProjectId(null)
    }, 1800)
  }

  const syncSectionSpecs = () => {
    const experience = experienceRef.current
    const scrollManager = scrollManagerRef.current
    const content = pageContentRef.current

    if (!experience || !scrollManager || !content) {
      return
    }

    scrollManager.syncBodyHeight(content.offsetHeight)

    if (routeRef.current.page !== 'home') {
      scrollManager.setSections([])
      experience.setSections([])
      return
    }

    const sections: Array<Omit<SectionSpec, 'scrollStart' | 'scrollEnd'>> = []

    sectionIds.forEach((id) => {
      const domEl = sectionRefs.current[id]
      const sceneController = experience.getSceneController(id)

      if (!domEl || !sceneController) {
        return
      }

      sections.push({
        id,
        domEl,
        sceneController,
      })
    })

    scrollManager.setSections(sections)
    experience.setSections(scrollManager.getSectionSpecs())
  }

  const closeMenu = () => {
    const state = appStore.getState()

    setAppState({
      menuOpen: false,
      transitionState: state.ready ? 'ready' : state.transitionState,
    })
  }

  const applyRoute = (nextRoute: RouteState, mode: 'push' | 'replace' = 'push') => {
    const method = mode === 'replace' ? 'replaceState' : 'pushState'

    window.history[method](nextRoute, '', getRouteUrl(nextRoute))
    routeRef.current = nextRoute
    setRouteState(nextRoute)

    closeMenu()
    setAppState({
      activeOverlay: {
        open: false,
        type: null,
        id: null,
      },
    })
  }

  const scrollToSection = (sectionId: HomeSectionId, immediate = false) => {
    const target = sectionRefs.current[sectionId]?.offsetTop ?? 0

    if (immediate) {
      scrollManagerRef.current?.jumpTo(target)
      return
    }

    window.setTimeout(() => {
      window.scrollTo({
        top: target,
        behavior: appStore.getState().reducedMotion ? 'auto' : 'smooth',
      })
    }, 32)
  }

  const handleToggleMenu = () => {
    const state = appStore.getState()
    const nextOpen = !state.menuOpen

    setAppState({
      menuOpen: nextOpen,
      transitionState: nextOpen
        ? 'menuLocked'
        : state.ready
          ? 'ready'
          : state.transitionState,
    })
  }

  const handleToggleLocale = () => {
    const nextLocale: Locale = appStore.getState().locale === 'zh' ? 'en' : 'zh'

    setAppState({
      locale: nextLocale,
    })
  }

  const handleOpenOverlay = (type: OverlayType, id: string) => {
    setAppState({
      activeOverlay: {
        open: true,
        type,
        id,
      },
      menuOpen: false,
    })
  }

  const handleNavigate = (sectionId: HomeSectionId) => {
    closeMenu()

    if (routeRef.current.page !== 'home') {
      pendingSectionRef.current = sectionId
      applyRoute(createHomeRoute(routeState.restoreProjectId, routeState.restoreScrollY))
      return
    }

    setAppState({
      activeOverlay: {
        open: false,
        type: null,
        id: null,
      },
    })
    scrollToSection(sectionId)
  }

  const handleOpenProject = (slug: ProjectSlug, projectId: string) => {
    const restoreScrollY = scrollManagerRef.current?.getCurrent() ?? window.scrollY
    setHighlightedProjectId(projectId)
    applyRoute(createWorkRouteWithOrigin(slug, projectId, restoreScrollY))
    scrollManagerRef.current?.jumpTo(0)
  }

  const handleOpenSiblingProject = (slug: ProjectSlug) => {
    applyRoute(createWorkRouteWithOrigin(slug, routeState.restoreProjectId, routeState.restoreScrollY))
    scrollManagerRef.current?.jumpTo(0)
  }

  const handleBackHome = () => {
    applyRoute(createHomeRoute(routeState.restoreProjectId, routeState.restoreScrollY))
  }

  useEffect(() => {
    routeRef.current = routeState
    syncSectionSpecs()
  }, [routeState])

  useEffect(() => {
    const onPopState = (event: PopStateEvent) => {
      const nextRoute = parseLocationRoute(
        window.location.pathname,
        event.state as Partial<RouteState> | null,
      )

      routeRef.current = nextRoute
      setRouteState(nextRoute)
      setAppState({
        activeOverlay: {
          open: false,
          type: null,
          id: null,
        },
        menuOpen: false,
      })
    }

    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  useEffect(() => {
    if (routeState.page === 'work' && !activeProject) {
      applyRoute(createHomeRoute(), 'replace')
    }
  }, [activeProject, routeState.page])

  useEffect(() => {
    if (routeState.page === 'work') {
      scrollManagerRef.current?.jumpTo(0)
      return
    }

    if (routeState.restoreProjectId) {
      setHighlightedProjectId(routeState.restoreProjectId)
      clearHighlightLater()
    }

    if (pendingSectionRef.current) {
      const sectionId = pendingSectionRef.current
      pendingSectionRef.current = null
      window.setTimeout(() => {
        scrollToSection(sectionId, true)
      }, 60)
      return
    }

    if (routeState.restoreScrollY > 0) {
      window.setTimeout(() => {
        scrollManagerRef.current?.jumpTo(routeState.restoreScrollY)
      }, 60)
    }
  }, [routeState])

  useEffect(() => {
    const scrollManager = scrollManagerRef.current
    const locked = menuOpen || activeOverlay.open || transitionState !== 'ready'

    scrollManager?.setLocked(locked)
    document.documentElement.classList.toggle('is-menu-open', menuOpen)
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'

    if (locked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [activeOverlay.open, locale, menuOpen, transitionState])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    const pageTrack = pageTrackRef.current
    const pageContent = pageContentRef.current

    if (!canvas || !pageTrack || !pageContent) {
      return
    }

    setAppState({
      transitionState: 'preloading',
      loadingProgress: 0,
      ready: false,
    })

    const scrollManager = new ScrollManager()
    scrollManagerRef.current = scrollManager
    let disposed = false

    const syncDeviceState = () => {
      const deviceProfile = getDeviceProfile()
      const captureMode = getCaptureMode()
      const reducedMotion = deviceProfile === 'reducedMotion'
      const runtimeReducedMotion = reducedMotion || captureMode

      captureModeRef.current = captureMode

      setAppState({
        deviceProfile,
        reducedMotion,
      })

      document.documentElement.classList.toggle('is-capture-mode', captureMode)

      scrollManager.setNativeFlow(captureMode)
      scrollManager.setReducedMotion(runtimeReducedMotion)
      experienceRef.current?.resize({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr:
          deviceProfile === 'mobileLite'
            ? 1.05
            : deviceProfile === 'tablet'
              ? 1.25
              : reducedMotion
                ? 1.1
                : 1.45,
      })
      syncSectionSpecs()
    }

    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    syncDeviceState()

    const pointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      }
    }

    const pointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 }
    }

    const resizeObserver = new ResizeObserver(() => {
      syncSectionSpecs()
    })
    resizeObserver.observe(pageContent)

    window.addEventListener('pointermove', pointerMove)
    window.addEventListener('pointerleave', pointerLeave)
    window.addEventListener('resize', syncDeviceState)
    reducedMotionMedia.addEventListener('change', syncDeviceState)

    let animationFrame = 0
    let previousTime = performance.now()

    const frame = (time: number) => {
      const delta = Math.min((time - previousTime) * 0.001, 0.05)
      previousTime = time

      const scroll = scrollManager.update(delta)
      pageTrack.style.transform = captureModeRef.current
        ? ''
        : `translate3d(0, ${(-scroll.current).toFixed(2)}px, 0)`

      pageContent.style.setProperty(
        '--scroll-velocity',
        clamp(Math.abs(scroll.velocity) * 0.03, 0, 1).toFixed(4),
      )

      sectionIds.forEach((id) => {
        const domEl = sectionRefs.current[id]
        const sectionState = scroll.sections[id]

        if (!domEl || !sectionState) {
          return
        }

        domEl.dataset.phase = sectionState.phase
        domEl.dataset.active = scroll.activeSection === id ? 'true' : 'false'
        domEl.style.setProperty('--section-progress', sectionState.progress.toFixed(4))
        domEl.style.setProperty('--section-visible', sectionState.visible.toFixed(4))
        domEl.style.setProperty('--enter-progress', sectionState.enterProgress.toFixed(4))
        domEl.style.setProperty('--exit-progress', sectionState.exitProgress.toFixed(4))
        domEl.style.setProperty('--focus-weight', sectionState.focusWeight.toFixed(4))
      })

      if (progressRailRef.current && progressFillRef.current) {
        progressRailRef.current.style.opacity = appStore.getState().ready ? '1' : '0'
        progressFillRef.current.style.transform = `scaleY(${scroll.progress.toFixed(4)})`
      }

      experienceRef.current?.setPointer(pointerRef.current)
      experienceRef.current?.update({
        time: time * 0.001,
        delta,
        scroll,
        deviceProfile: appStore.getState().deviceProfile,
        reducedMotion: appStore.getState().reducedMotion,
      })

      animationFrame = window.requestAnimationFrame(frame)
    }

    animationFrame = window.requestAnimationFrame(frame)

    void (async () => {
      const module = await import('../experience/core/Experience')

      if (disposed) {
        return
      }

      const experience = new module.Experience(canvas)
      experienceRef.current = experience

      setAppState({
        webglAvailable: experience.isSupported,
      })

      syncDeviceState()
      syncSectionSpecs()

      const sceneBoot = experience.boot()
      const tasks = createLoadTasks(sceneBoot)

      let completed = 0

      tasks.forEach((task) => {
        void task.then(() => {
          completed += 1
          setAppState({
            loadingProgress: completed / tasks.length,
          })
        })
      })

      await Promise.all(tasks)

      if (disposed) {
        return
      }

      setAppState({
        loadingProgress: 1,
        ready: true,
        transitionState: 'introLock',
      })

      introTimersRef.current = [
        window.setTimeout(() => {
          setAppState({
            transitionState: 'introHandoff',
          })
        }, 240),
        window.setTimeout(() => {
          setAppState({
            transitionState: 'introSettle',
          })
        }, 940),
        window.setTimeout(() => {
          setAppState({
            transitionState: 'ready',
          })
        }, 1840),
      ]
    })()

    return () => {
      disposed = true
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', pointerMove)
      window.removeEventListener('pointerleave', pointerLeave)
      window.removeEventListener('resize', syncDeviceState)
      reducedMotionMedia.removeEventListener('change', syncDeviceState)
      introTimersRef.current.forEach((timer) => window.clearTimeout(timer))
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current)
      }
      document.body.style.height = ''
      document.body.style.overflow = ''
      document.documentElement.classList.remove('is-capture-mode')
      document.documentElement.classList.remove('is-menu-open')
      experienceRef.current?.dispose()
      experienceRef.current = null
      scrollManagerRef.current = null
    }
  }, [])

  return (
    <div className={`app-shell ${routeState.page === 'work' ? 'is-work-route' : 'is-home-route'}`}>
      <canvas ref={canvasRef} className="experience-canvas" aria-hidden="true" />
      <CursorLayer />

      <Preloader />
      <Header
        menuOpen={menuOpen}
        onNavigate={(target) => handleNavigate(target)}
        onToggleMenu={handleToggleMenu}
        onToggleLocale={handleToggleLocale}
      />
      <MenuOverlay
        open={menuOpen}
        onClose={closeMenu}
        onNavigate={(sectionId) => handleNavigate(sectionId)}
        onToggleLocale={handleToggleLocale}
      />
      <DetailOverlay />

      <div className="scroll-indicator" ref={progressRailRef} aria-hidden="true">
        <div className="scroll-indicator__fill" ref={progressFillRef} />
      </div>

      <div className="page-shell">
        <div className="page-track" ref={pageTrackRef}>
          <div className="page-content" ref={pageContentRef}>
            {routeState.page === 'work' && activeProject ? (
              <WorkPage
                locale={locale}
                nextProject={projectNeighbors.nextProject}
                previousProject={projectNeighbors.previousProject}
                project={activeProject}
                onBackHome={handleBackHome}
                onOpenProject={handleOpenSiblingProject}
              />
            ) : (
              <HomePage
                bindSection={bindSection}
                highlightedProjectId={highlightedProjectId}
                onNavigate={handleNavigate}
                onOpenOverlay={handleOpenOverlay}
                onOpenProject={handleOpenProject}
                webglAvailable={webglAvailable}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
