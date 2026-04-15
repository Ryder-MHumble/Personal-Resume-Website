import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkSystemSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section" id="system-structure">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'System structure' : 'System structure'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '系统真正稳定的地方，不是界面，而是它如何承接输入、判断、执行和反馈。'
            : 'The stable part of a system is not the screen. It is how it holds intake, judgment, execution, and feedback.'}
        </h2>
      </RevealBlock>

      <div className="work-system-grid">
        {project.systemModules.map((module, index) => (
          <RevealBlock
            as="article"
            className="slate-panel slate-panel--system"
            key={pickText(module.title, locale)}
            revealDelay={index * 80}
            revealDistance={24}
          >
            <p className="eyebrow">{pickText(module.title, locale)}</p>
            <p className="work-system-grid__description">{pickText(module.description, locale)}</p>
            <ul className="work-list">
              {module.bullets.map((bullet, bulletIndex) => (
                <li key={`${pickText(module.title, locale)}-${bulletIndex}`}>{pickText(bullet, locale)}</li>
              ))}
            </ul>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
