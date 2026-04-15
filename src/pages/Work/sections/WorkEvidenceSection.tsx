import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkEvidenceSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Result evidence' : 'Result evidence'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '结果必须能被解释，而不是只留下一个好看的结论。'
            : 'Results must be explainable, not just pretty conclusions.'}
        </h2>
      </RevealBlock>

      <div className="work-evidence-grid">
        {project.evidence.map((item, index) => (
          <RevealBlock
            as="article"
            className="work-evidence"
            key={pickText(item.label, locale)}
            revealDelay={index * 70}
            revealDistance={20}
          >
            <p className="eyebrow">{pickText(item.label, locale)}</p>
            <p className="work-evidence__value">{item.value}</p>
            <p>{pickText(item.note, locale)}</p>
            <span className="work-evidence__source">{pickText(item.source, locale)}</span>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
