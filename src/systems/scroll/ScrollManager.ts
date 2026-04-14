import type {
  ScrollSnapshot,
  SectionPhase,
  SectionSpec,
  VelocityBand,
} from '../../types/runtime'
import type { HomeSectionId } from '../../types/content'
import { clamp, damp } from '../../utils/math'

const getVisibleRatio = (
  current: number,
  viewportHeight: number,
  start: number,
  end: number,
) => {
  const total = viewportHeight + Math.max(1, end - start)
  const visible = current + viewportHeight - start

  return clamp(visible / total, 0, 1)
}

const getVelocityBand = (velocity: number): VelocityBand => {
  const magnitude = Math.abs(velocity)

  if (magnitude < 0.35) {
    return 'idle'
  }

  if (magnitude < 18) {
    return 'glide'
  }

  return 'fast'
}

const getSectionPhase = (
  anchor: number,
  start: number,
  end: number,
  viewportHeight: number,
): SectionPhase => {
  const sectionLength = Math.max(1, end - start)
  const enterEnd = start + sectionLength * 0.38
  const activeEnd = end - sectionLength * 0.14

  if (anchor < start - viewportHeight * 0.08) {
    return 'preEnter'
  }

  if (anchor < enterEnd) {
    return 'entering'
  }

  if (anchor <= activeEnd) {
    return 'active'
  }

  if (anchor <= end + viewportHeight * 0.22) {
    return 'leaving'
  }

  return 'postExit'
}

export class ScrollManager {
  private current = 0
  private target = 0
  private velocity = 0
  private direction = 1
  private maxScroll = 1
  private reducedMotion = false
  private locked = false
  private nativeFlow = false
  private sectionSpecs: SectionSpec[] = []

  setReducedMotion(reducedMotion: boolean) {
    this.reducedMotion = reducedMotion
  }

  setLocked(locked: boolean) {
    this.locked = locked

    if (locked) {
      this.target = this.current
      window.scrollTo(0, this.current)
    }
  }

  setNativeFlow(nativeFlow: boolean) {
    this.nativeFlow = nativeFlow
  }

  syncBodyHeight(contentHeight: number) {
    document.body.style.height = this.nativeFlow
      ? ''
      : `${Math.ceil(contentHeight)}px`
    this.maxScroll = Math.max(1, contentHeight - window.innerHeight)
  }

  setSections(sections: Array<Omit<SectionSpec, 'scrollStart' | 'scrollEnd'>>) {
    this.sectionSpecs = sections
      .filter((section) => section.domEl)
      .map((section) => {
        const top = section.domEl.offsetTop
        const height = section.domEl.offsetHeight
        const start = Math.max(0, top - window.innerHeight * 0.72)
        const end = Math.max(start + 1, top + height - window.innerHeight * 0.28)

        return {
          ...section,
          scrollStart: start,
          scrollEnd: end,
        }
      })
  }

  getSectionSpecs() {
    return this.sectionSpecs
  }

  getCurrent() {
    return this.current
  }

  jumpTo(next: number) {
    const safeNext = clamp(next, 0, this.maxScroll)

    this.current = safeNext
    this.target = safeNext
    window.scrollTo(0, safeNext)
  }

  update(delta: number): ScrollSnapshot {
    if (!this.locked) {
      this.target = window.scrollY
    }

    const previous = this.current

    if (this.reducedMotion) {
      this.current = this.target
    } else {
      this.current = damp(this.current, this.target, 11, delta)
    }

    this.velocity = this.current - previous

    if (Math.abs(this.velocity) > 0.0001) {
      this.direction = Math.sign(this.velocity) || this.direction
    }

    const viewportHeight = window.innerHeight
    const focusAnchor = this.current + viewportHeight * 0.48

    let activeSection: HomeSectionId | null = null
    let nextSection: HomeSectionId | null = null
    let transitionProgress = 0

    if (this.sectionSpecs.length > 0) {
      let activeIndex = 0
      let smallestDistance = Number.POSITIVE_INFINITY

      this.sectionSpecs.forEach((section, index) => {
        const midpoint = (section.scrollStart + section.scrollEnd) * 0.5
        const distance = Math.abs(focusAnchor - midpoint)

        if (distance < smallestDistance) {
          smallestDistance = distance
          activeIndex = index
        }
      })

      const activeSpec = this.sectionSpecs[activeIndex]
      const activeMidpoint = (activeSpec.scrollStart + activeSpec.scrollEnd) * 0.5
      const candidateIndex =
        focusAnchor >= activeMidpoint ? activeIndex + 1 : activeIndex - 1

      activeSection = activeSpec.id

      if (candidateIndex >= 0 && candidateIndex < this.sectionSpecs.length) {
        const nextSpec = this.sectionSpecs[candidateIndex]
        const nextMidpoint = (nextSpec.scrollStart + nextSpec.scrollEnd) * 0.5

        nextSection = nextSpec.id
        transitionProgress = clamp(
          Math.abs(focusAnchor - activeMidpoint) /
            Math.max(1, Math.abs(nextMidpoint - activeMidpoint)),
          0,
          1,
        )
      }
    }

    const sections = Object.fromEntries(
      this.sectionSpecs.map((section) => {
        const progress = clamp(
          (this.current - section.scrollStart) /
            Math.max(1, section.scrollEnd - section.scrollStart),
          0,
          1,
        )
        const visible = getVisibleRatio(
          this.current,
          viewportHeight,
          section.scrollStart,
          section.scrollEnd,
        )
        const enterProgress = clamp(
          (focusAnchor - (section.scrollStart - viewportHeight * 0.08)) /
            Math.max(1, viewportHeight * 0.46),
          0,
          1,
        )
        const exitProgress = clamp(
          (focusAnchor - (section.scrollEnd - viewportHeight * 0.12)) /
            Math.max(1, viewportHeight * 0.34),
          0,
          1,
        )
        const focusWeight =
          section.id === activeSection
            ? 1 - transitionProgress
            : section.id === nextSection
              ? transitionProgress
              : 0

        return [
          section.id,
          {
            progress,
            visible,
            start: section.scrollStart,
            end: section.scrollEnd,
            phase: getSectionPhase(
              focusAnchor,
              section.scrollStart,
              section.scrollEnd,
              viewportHeight,
            ),
            enterProgress,
            exitProgress,
            focusWeight,
          },
        ]
      }),
    )

    return {
      current: this.current,
      target: this.target,
      progress: clamp(this.current / this.maxScroll, 0, 1),
      velocity: this.velocity,
      direction: this.direction,
      maxScroll: this.maxScroll,
      activeSection,
      nextSection,
      transitionProgress,
      velocityBand: getVelocityBand(this.velocity),
      sections,
    }
  }
}
