import type { RefCallback } from 'react'
import type { HomeSectionId, OverlayType, ProjectSlug } from '../../types/content'
import { FeaturedWorkSection } from './sections/FeaturedWorkSection'
import { HeroSection } from './sections/HeroSection'
import { ProofSection } from './sections/ProofSection'
import { TimelineSection } from './sections/TimelineSection'
import { LinksSection } from './sections/LinksSection'
import { InsightsSection } from './sections/InsightsSection'
import { ContactSection } from './sections/ContactSection'

interface HomePageProps {
  bindSection: (id: HomeSectionId) => RefCallback<HTMLElement>
  onNavigate: (sectionId: HomeSectionId) => void
  onOpenProject: (slug: ProjectSlug, projectId: string) => void
  onOpenOverlay: (type: OverlayType, id: string) => void
  highlightedProjectId: string | null
  webglAvailable: boolean
}

export function HomePage({
  bindSection,
  onNavigate,
  onOpenProject,
  onOpenOverlay,
  highlightedProjectId,
  webglAvailable,
}: HomePageProps) {
  return (
    <main className="home-page">
      <HeroSection
        sectionRef={bindSection('hero')}
        onNavigate={onNavigate}
        webglAvailable={webglAvailable}
      />
      <ProofSection sectionRef={bindSection('proof')} />
      <FeaturedWorkSection
        sectionRef={bindSection('featured')}
        highlightedProjectId={highlightedProjectId}
        onOpenProject={onOpenProject}
      />
      <TimelineSection
        sectionRef={bindSection('timeline')}
        onOpenOverlay={(id) => onOpenOverlay('experience', id)}
      />
      <LinksSection sectionRef={bindSection('links')} />
      <InsightsSection
        sectionRef={bindSection('insights')}
        onOpenOverlay={(id) => onOpenOverlay('insight', id)}
      />
      <ContactSection sectionRef={bindSection('contact')} onNavigate={onNavigate} />
    </main>
  )
}
