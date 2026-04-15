import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type RefCallback,
} from 'react'
import { featuredProjects, pickText, sectionEyebrows } from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'
import type { ProjectSlug, ProjectTrack } from '../../../types/content'

interface FeaturedWorkSectionProps {
  sectionRef: RefCallback<HTMLElement>
  highlightedProjectId: string | null
  onOpenProject: (slug: ProjectSlug, projectId: string) => void
}

const resetTilt = (element: HTMLElement) => {
  element.style.setProperty('--card-rotate-x', '0deg')
  element.style.setProperty('--card-rotate-y', '0deg')
  element.style.setProperty('--card-shift-x', '0px')
  element.style.setProperty('--card-shift-y', '0px')
}

const applyTilt = (element: HTMLElement, px: number, py: number) => {
  element.style.setProperty('--card-rotate-x', `${(-py * 6).toFixed(2)}deg`)
  element.style.setProperty('--card-rotate-y', `${(px * 8).toFixed(2)}deg`)
  element.style.setProperty('--card-shift-x', `${(px * 10).toFixed(2)}px`)
  element.style.setProperty('--card-shift-y', `${(py * 10).toFixed(2)}px`)
}

export function FeaturedWorkSection({
  sectionRef,
  highlightedProjectId,
  onOpenProject,
}: FeaturedWorkSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const reducedMotion = useAppStore((state) => state.reducedMotion)
  const deviceProfile = useAppStore((state) => state.deviceProfile)
  const [activeTrack, setActiveTrack] = useState<ProjectTrack>('career')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const tiltFrameRef = useRef<number | null>(null)
  const tiltPayloadRef = useRef<{
    element: HTMLElement
    px: number
    py: number
  } | null>(null)

  const tiltEnabled = deviceProfile === 'desktop' && !reducedMotion

  useEffect(
    () => () => {
      if (tiltFrameRef.current !== null) {
        window.cancelAnimationFrame(tiltFrameRef.current)
      }
    },
    [],
  )

  const visibleProjects = useMemo(
    () =>
      showAllProjects
        ? featuredProjects
        : featuredProjects.filter((project) => project.track === activeTrack),
    [activeTrack, showAllProjects],
  )

  const revealStyle = (index: number) => ({ '--reveal-index': index } as CSSProperties)
  const trackLabels = {
    career: {
      zh: '职业案例',
      en: 'Career Cases',
    },
    platform: {
      zh: '平台项目',
      en: 'Platform Projects',
    },
  } as const

  const queueTilt = (element: HTMLElement, px: number, py: number) => {
    tiltPayloadRef.current = { element, px, py }

    if (tiltFrameRef.current !== null) {
      return
    }

    tiltFrameRef.current = window.requestAnimationFrame(() => {
      tiltFrameRef.current = null
      const payload = tiltPayloadRef.current

      if (!payload) {
        return
      }

      applyTilt(payload.element, payload.px, payload.py)
    })
  }

  const handleCardPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!tiltEnabled) {
      return
    }

    const element = event.currentTarget
    const bounds = element.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width - 0.5
    const py = (event.clientY - bounds.top) / bounds.height - 0.5

    queueTilt(element, px, py)
  }

  const handleCardPointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (tiltFrameRef.current !== null) {
      window.cancelAnimationFrame(tiltFrameRef.current)
      tiltFrameRef.current = null
    }

    tiltPayloadRef.current = null
    resetTilt(event.currentTarget)
  }

  return (
    <section
      ref={sectionRef}
      className="section section--featured"
      data-section-id="featured"
      id="featured"
    >
      <div className="featured-header">
        <div className="featured-header__lead" data-reveal style={revealStyle(0)}>
          <p className="eyebrow">{pickText(sectionEyebrows.featured, locale)}</p>
          <h2 className="section-title featured-header__title">
            {locale === 'zh' ? (
              <>
                <span className="featured-header__title-line">职业案例与平台项目</span>
                <span className="featured-header__title-line">分组展示我的方法与交付</span>
              </>
            ) : (
              <>
                <span className="featured-header__title-line">Career cases and platform projects</span>
                <span className="featured-header__title-line">Grouped to show how I work and ship</span>
              </>
            )}
          </h2>
        </div>
        <div className="featured-header__aside" data-reveal style={revealStyle(1)}>
          <p className="featured-header__text">
            {locale === 'zh'
              ? '职业案例侧重业务闭环与结果转化，平台项目侧重底座抽象与可复用能力。所有指标均按代码实时口径更新。'
              : 'Career cases focus on business outcomes; platform projects focus on reusable architecture. Metrics follow live code inventories.'}
          </p>
          <div className="featured-header__actions">
            <div className="featured-track-switch">
              {(['career', 'platform'] as const).map((track) => (
                <button
                  key={track}
                  className={`featured-track-switch__button ${
                    !showAllProjects && activeTrack === track ? 'is-active' : ''
                  }`}
                  type="button"
                  onClick={() => {
                    setActiveTrack(track)
                    setShowAllProjects(false)
                  }}
                >
                  {pickText(trackLabels[track], locale)}
                </button>
              ))}
            </div>
            <button
              className={`featured-viewall ${showAllProjects ? 'is-active' : ''}`}
              type="button"
              onClick={() => setShowAllProjects((value) => !value)}
            >
              {showAllProjects
                ? locale === 'zh'
                  ? '收起到当前分组'
                  : 'Collapse to active track'
                : locale === 'zh'
                  ? `查看全部项目 · ${featuredProjects.length}`
                  : `View all projects · ${featuredProjects.length}`}
            </button>
          </div>
        </div>
      </div>

      <div className={`project-grid ${showAllProjects ? 'is-expanded' : ''}`}>
        {visibleProjects.map((project, index) => (
          <button
            className={`project-card ${highlightedProjectId === project.id ? 'is-highlighted' : ''}`}
            key={project.id}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={handleCardPointerLeave}
            onClick={() => onOpenProject(project.slug, project.id)}
            style={
              {
                '--project-accent': project.accent,
                '--project-glaze': project.glaze,
                '--reveal-index': 3 + index,
              } as CSSProperties
            }
            data-cursor-kind="case"
            data-reveal
            data-project-id={project.id}
            data-tilt-enabled={tiltEnabled ? 'true' : 'false'}
            type="button"
          >
            <div className="project-card__media">
              <div className="project-card__badge">{pickText(project.resultBadge, locale)}</div>
              <div className="project-card__shard project-card__shard--one" />
              <div className="project-card__shard project-card__shard--two" />
              <div className="project-card__shard project-card__shard--three" />
              <div className="project-card__signal">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.period}</span>
              </div>
              <div className="project-card__gridline" />
            </div>

            <div className="project-card__meta">
              {pickText(project.company, locale)} / {pickText(project.category, locale)}
            </div>
            <div className="project-card__title">{pickText(project.title, locale)}</div>
            <p className="project-card__description">{pickText(project.summary, locale)}</p>
            <div className="project-card__footer">
              <div className="project-card__tags">
                {project.tags.slice(0, 3).map((tag) => (
                  <span className="project-card__tag" key={`${project.id}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-card__cta">
                {locale === 'zh' ? '展开案例' : 'Open Case'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
