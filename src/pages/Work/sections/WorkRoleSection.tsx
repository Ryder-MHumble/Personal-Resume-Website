import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkRoleSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section work-section--role">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Role and collaboration' : 'Role and collaboration'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '我负责什么、如何协同、最终交付了什么。'
            : 'What I owned, how collaboration worked, and what I delivered.'}
        </h2>
      </RevealBlock>

      <div className="work-columns work-columns--role">
        <RevealBlock as="article" className="slate-panel" revealDelay={80} revealDistance={24}>
          <p className="eyebrow">{locale === 'zh' ? 'My role' : 'My role'}</p>
          <p>{pickText(project.myRole, locale)}</p>
          <ul className="work-list">
            {project.collaboration.map((item, index) => (
              <li key={`${project.slug}-collaboration-${index}`}>{pickText(item, locale)}</li>
            ))}
          </ul>
        </RevealBlock>

        <RevealBlock as="article" className="slate-panel" revealDelay={140} revealDistance={24}>
          <p className="eyebrow">{locale === 'zh' ? 'Deliverables' : 'Deliverables'}</p>
          <div className="work-deliverables">
            {project.deliverables.map((item, index) => (
              <div className="work-deliverable" key={pickText(item.label, locale)}>
                <strong className="work-deliverable__index">{String(index + 1).padStart(2, '0')}</strong>
                <span>{pickText(item.label, locale)}</span>
                <p>{pickText(item.detail, locale)}</p>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
