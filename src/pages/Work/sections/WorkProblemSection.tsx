import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkProblemSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section work-section--problem">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Problem definition' : 'Problem definition'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '为什么这个项目必须被做成产品，而不是停在概念或脚本层。'
            : 'Why this had to become a product instead of staying a concept or a script.'}
        </h2>
      </RevealBlock>

      <div className="work-columns">
        <RevealBlock as="article" className="slate-panel" revealDelay={80} revealDistance={24}>
          <p className="eyebrow">{locale === 'zh' ? '业务场景' : 'Context'}</p>
          <p>{pickText(project.context, locale)}</p>
        </RevealBlock>
        <RevealBlock as="article" className="slate-panel" revealDelay={140} revealDistance={24}>
          <p className="eyebrow">{locale === 'zh' ? '约束条件' : 'Constraints'}</p>
          <ul className="work-list">
            {project.constraints.map((item, index) => (
              <li key={`${project.slug}-constraint-${index}`}>{pickText(item, locale)}</li>
            ))}
          </ul>
        </RevealBlock>
      </div>
    </section>
  )
}
