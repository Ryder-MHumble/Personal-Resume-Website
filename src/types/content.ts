export type Locale = 'zh' | 'en'

export type OverlayType = 'experience' | 'insight'

export type AppPage = 'home' | 'work' | 'resources'

export const projectSlugs = [
  'info-engine',
  'mcp-eval',
  'smart-recruitment',
  'chatbi',
  'core-platform',
  'dean-workbench',
  'scholar-workbench',
  'monitoring-framework',
  'agent-gateway',
  'doc2brief',
] as const

export type ProjectSlug = (typeof projectSlugs)[number]
export type ProjectTrack = 'career' | 'platform'

export type HomeSectionId =
  | 'hero'
  | 'proof'
  | 'featured'
  | 'timeline'
  | 'links'
  | 'insights'
  | 'contact'

export interface LocalizedText {
  zh: string
  en: string
}

export interface OverlayState {
  type: OverlayType | null
  id: string | null
  open: boolean
}

export interface RouteState {
  page: AppPage
  projectSlug: ProjectSlug | null
  restoreProjectId: string | null
  restoreScrollY: number
}

export interface ProfileIdentity {
  name: LocalizedText
  brandName: string
  formalNameLatin: string
  roleLine: LocalizedText
  positioning: LocalizedText
  philosophy: LocalizedText
  summary: LocalizedText
  location: LocalizedText
  availability: LocalizedText
  primaryCta: LocalizedText
  secondaryCta: LocalizedText
}

export interface ProofStat {
  id: string
  value: string
  label: LocalizedText
  note: LocalizedText
}

export interface CapabilityTag {
  id: string
  label: LocalizedText
}

export interface ProjectCase {
  id: string
  slug: ProjectSlug
  track: ProjectTrack
  metricAsOf: string
  title: LocalizedText
  company: LocalizedText
  period: string
  category: LocalizedText
  summary: LocalizedText
  problem: LocalizedText
  productMove: LocalizedText
  systemShape: LocalizedText
  outcome: LocalizedText[]
  myRole: LocalizedText
  tags: string[]
  accent: string
  glaze: string
  resultBadge: LocalizedText
  resourceLinks: ProjectResourceLink[]
  link?: string
}

export interface ProjectResourceLink {
  label: LocalizedText
  href: string
}

export interface ProjectMetric {
  label: LocalizedText
  value: string
  note: LocalizedText
}

export interface DemoVideo {
  mode: 'placeholder' | 'embed' | 'local'
  title: LocalizedText
  caption: LocalizedText
  duration: string
  url?: string
  posterLabel: LocalizedText
}

export interface ProjectStage {
  title: LocalizedText
  objective: LocalizedText
  move: LocalizedText
  decision: LocalizedText
}

export interface ProjectSystemModule {
  title: LocalizedText
  description: LocalizedText
  bullets: LocalizedText[]
}

export interface ProjectEvidence {
  label: LocalizedText
  value: string
  note: LocalizedText
  source: LocalizedText
}

export interface ProjectDeliverable {
  label: LocalizedText
  detail: LocalizedText
}

export interface ProjectRetrospective {
  worked: LocalizedText[]
  wouldChange: LocalizedText[]
  nextStep: LocalizedText[]
}

export interface ProjectDetail extends ProjectCase {
  seoTitle: LocalizedText
  seoDescription: LocalizedText
  heroStatement: LocalizedText
  roleLabel: LocalizedText
  status: LocalizedText
  keyMetrics: ProjectMetric[]
  demoVideo: DemoVideo
  audience: LocalizedText
  context: LocalizedText
  constraints: LocalizedText[]
  productActions: ProjectStage[]
  systemModules: ProjectSystemModule[]
  evidence: ProjectEvidence[]
  collaboration: LocalizedText[]
  deliverables: ProjectDeliverable[]
  retrospective: ProjectRetrospective
}

export interface ExperienceEntry {
  id: string
  year: string
  title: LocalizedText
  company: LocalizedText
  period: string
  summary: LocalizedText
  achievements: LocalizedText[]
  featured: boolean
  kind: 'work' | 'education'
}

export interface LinkSurfaceItem {
  label: LocalizedText
  detail: LocalizedText
  href: string
  external?: boolean
}

export interface LinkSurface {
  id: string
  kicker: LocalizedText
  title: LocalizedText
  description: LocalizedText
  items: LinkSurfaceItem[]
}

export interface InsightExcerpt {
  id: string
  theme: LocalizedText
  title: LocalizedText
  quote: LocalizedText
  excerpt: LocalizedText
  detail: LocalizedText[]
}

export interface NavigationItem {
  id: HomeSectionId
  label: LocalizedText
  detail: LocalizedText
}

export interface ResourceHubIntro {
  eyebrow: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  note: LocalizedText
}

export interface ResourceHubHighlight {
  id: string
  label: LocalizedText
  value: string
  note: LocalizedText
}

export interface ResourceHubItem {
  id: string
  title: LocalizedText
  detail: LocalizedText
  href: string
  kind: 'github' | 'guide' | 'tools' | 'method'
  tags: string[]
}

export interface ResourceHubCollection {
  id: string
  title: LocalizedText
  description: LocalizedText
  items: ResourceHubItem[]
}
