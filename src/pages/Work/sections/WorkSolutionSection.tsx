import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkSolutionSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section" id="product-actions">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Solution strategy' : 'Solution strategy'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '我如何把问题翻成一条能被团队执行、被系统承载、被组织消费的产品路径。'
            : 'How I translated the problem into a product path that teams could ship, systems could hold, and organizations could consume.'}
        </h2>
      </RevealBlock>

      <div className="work-stage-grid">
        {project.productActions.map((stage, index) => (
          <RevealBlock
            as="article"
            className="work-stage"
            key={`${project.slug}-stage-${index}`}
            revealDelay={index * 80}
            revealDistance={28}
          >
            <div className="work-stage__index">{String(index + 1).padStart(2, '0')}</div>
            <p className="eyebrow">{pickText(stage.title, locale)}</p>
            <p className="work-stage__lead">{pickText(stage.objective, locale)}</p>
            <p>{pickText(stage.move, locale)}</p>
            <p className="work-stage__decision">{pickText(stage.decision, locale)}</p>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
