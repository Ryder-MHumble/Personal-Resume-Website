import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkRetrospectiveSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section work-section--retro">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Retrospective' : 'Retrospective'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '案例不止是成果展示，也应该留下判断的后坐力。'
            : 'A case should not stop at outcomes. It should leave the afterforce of judgment.'}
        </h2>
      </RevealBlock>

      <div className="work-retro-grid">
        <RevealBlock as="article" className="slate-panel" revealDelay={80} revealDistance={20}>
          <p className="eyebrow">{locale === 'zh' ? 'What worked' : 'What worked'}</p>
          <ul className="work-list">
            {project.retrospective.worked.map((item, index) => (
              <li key={`${project.slug}-worked-${index}`}>{pickText(item, locale)}</li>
            ))}
          </ul>
        </RevealBlock>
        <RevealBlock as="article" className="slate-panel" revealDelay={140} revealDistance={20}>
          <p className="eyebrow">{locale === 'zh' ? 'Would change' : 'Would change'}</p>
          <ul className="work-list">
            {project.retrospective.wouldChange.map((item, index) => (
              <li key={`${project.slug}-change-${index}`}>{pickText(item, locale)}</li>
            ))}
          </ul>
        </RevealBlock>
        <RevealBlock as="article" className="slate-panel" revealDelay={200} revealDistance={20}>
          <p className="eyebrow">{locale === 'zh' ? 'Next step' : 'Next step'}</p>
          <ul className="work-list">
            {project.retrospective.nextStep.map((item, index) => (
              <li key={`${project.slug}-next-${index}`}>{pickText(item, locale)}</li>
            ))}
          </ul>
        </RevealBlock>
      </div>
    </section>
  )
}
