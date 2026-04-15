import type { Locale, ProjectDetail, ProjectSlug } from '../../../types/content'

export interface WorkSectionProps {
  locale: Locale
  project: ProjectDetail
}

export interface WorkHeroSectionProps extends WorkSectionProps {
  onBackHome: () => void
}

export interface WorkPagerSectionProps {
  locale: Locale
  nextProject: ProjectDetail | null
  previousProject: ProjectDetail | null
  onBackHome: () => void
  onOpenProject: (slug: ProjectSlug) => void
}
