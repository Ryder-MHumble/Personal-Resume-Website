import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkResourcesSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section work-section--resources">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Resources' : 'Resources'}</p>
        <h2 className="section-title">
          {locale === 'zh' ? '公开资源与补充资料' : 'Public resources and supporting materials'}
        </h2>
      </RevealBlock>

      <div className="work-resource-grid">
        {project.resourceLinks.length > 0 ? (
          project.resourceLinks.map((item, index) => (
            <RevealBlock
              as="a"
              className="work-resource slate-panel"
              href={item.href}
              key={`${project.slug}-resource-${index}`}
              target="_blank"
              rel="noreferrer"
              revealDelay={index * 70}
              revealDistance={18}
            >
              <p className="eyebrow">{locale === 'zh' ? 'Public link' : 'Public link'}</p>
              <strong>{pickText(item.label, locale)}</strong>
              <span>{item.href.replace(/^https?:\/\//, '')}</span>
            </RevealBlock>
          ))
        ) : (
          <RevealBlock as="article" className="slate-panel" revealDistance={18}>
            <p className="eyebrow">{locale === 'zh' ? 'Resources' : 'Resources'}</p>
            <p>
              {locale === 'zh'
                ? '当前案例暂无可公开链接，面试中可补充演示材料。'
                : 'No public links are available for this case yet. Additional materials can be shared in interviews.'}
            </p>
          </RevealBlock>
        )}
      </div>
    </section>
  )
}
