import type { HomeSectionId } from './content'

export type AssetType = 'font' | 'runtime' | 'layout' | 'shader'

export type AssetPriority = 'critical' | 'high' | 'lazy'

export type AssetMobilePolicy = 'always' | 'desktopOnly' | 'liteFallback'

export interface AssetManifest {
  id: string
  type: AssetType
  priority: AssetPriority
  mobilePolicy: AssetMobilePolicy
  preloadGroup: 'boot' | 'scene' | 'lazy'
}

export type DeviceProfile = 'desktop' | 'tablet' | 'mobileLite' | 'reducedMotion'

export type VelocityBand = 'idle' | 'glide' | 'fast'

export type SectionPhase =
  | 'preEnter'
  | 'entering'
  | 'active'
  | 'leaving'
  | 'postExit'

export type TransitionState =
  | 'boot'
  | 'preloading'
  | 'introLock'
  | 'introHandoff'
  | 'introSettle'
  | 'ready'
  | 'menuLocked'

export interface PointerState {
  x: number
  y: number
}

export interface ViewportMetrics {
  width: number
  height: number
  dpr: number
}

export interface ScrollSectionState {
  progress: number
  visible: number
  start: number
  end: number
  phase: SectionPhase
  enterProgress: number
  exitProgress: number
  focusWeight: number
}

export interface ScrollSnapshot {
  current: number
  target: number
  progress: number
  velocity: number
  direction: number
  maxScroll: number
  activeSection: HomeSectionId | null
  nextSection: HomeSectionId | null
  transitionProgress: number
  velocityBand: VelocityBand
  sections: Partial<Record<HomeSectionId, ScrollSectionState>>
}

export interface SceneController {
  id: HomeSectionId
  enter?(): void
  exit?(): void
  resize?(section: SectionSpec, viewport: ViewportMetrics): void
  update(context: SceneUpdateContext): void
}

export interface SectionSpec {
  id: HomeSectionId
  scrollStart: number
  scrollEnd: number
  domEl: HTMLElement
  sceneController: SceneController
}

export interface SceneUpdateContext {
  progress: number
  velocity: number
  pointer: PointerState
  section: SectionSpec
  scroll: ScrollSnapshot
  deviceProfile: DeviceProfile
  time: number
  delta: number
  reducedMotion: boolean
}
