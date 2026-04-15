import type { Locale, ProjectDetail, ProjectSlug } from '../../types/content'

export interface WorkPageProps {
  locale: Locale
  project: ProjectDetail
  nextProject: ProjectDetail | null
  previousProject: ProjectDetail | null
  onBackHome: () => void
  onOpenProject: (slug: ProjectSlug) => void
}
