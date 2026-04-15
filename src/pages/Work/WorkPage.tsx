import {
  WorkDemoSection,
  WorkEvidenceSection,
  WorkHeroSection,
  WorkMetricsSection,
  WorkPagerSection,
  WorkProblemSection,
  WorkResourcesSection,
  WorkRetrospectiveSection,
  WorkRoleSection,
  WorkSolutionSection,
  WorkSystemSection,
} from './sections'
import type { WorkPageProps } from './types'

export function WorkPage({
  locale,
  project,
  nextProject,
  previousProject,
  onBackHome,
  onOpenProject,
}: WorkPageProps) {
  return (
    <main className="work-page">
      <WorkHeroSection locale={locale} project={project} onBackHome={onBackHome} />
      <WorkMetricsSection locale={locale} project={project} />
      <WorkDemoSection locale={locale} project={project} />
      <WorkProblemSection locale={locale} project={project} />
      <WorkSolutionSection locale={locale} project={project} />
      <WorkSystemSection locale={locale} project={project} />
      <WorkEvidenceSection locale={locale} project={project} />
      <WorkRoleSection locale={locale} project={project} />
      <WorkResourcesSection locale={locale} project={project} />
      <WorkRetrospectiveSection locale={locale} project={project} />
      <WorkPagerSection
        locale={locale}
        nextProject={nextProject}
        previousProject={previousProject}
        onBackHome={onBackHome}
        onOpenProject={onOpenProject}
      />
    </main>
  )
}
