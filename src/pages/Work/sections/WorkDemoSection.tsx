import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkDemoSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-section work-section--demo" id="demo-stage">
      <RevealBlock as="div" className="work-section__header" revealDistance={24}>
        <p className="eyebrow">{locale === 'zh' ? 'Demo stage' : 'Demo stage'}</p>
        <h2 className="section-title">
          {locale === 'zh'
            ? '先看系统存在的样子，再读我如何把它做出来。'
            : 'See the system first, then read how I shaped it.'}
        </h2>
      </RevealBlock>

      <div className="work-demo">
        <RevealBlock as="div" className="work-demo__screen" revealDelay={80} revealDistance={28}>
          <div className="work-demo__screen-grid" />
          <div className="work-demo__signal work-demo__signal--one" />
          <div className="work-demo__signal work-demo__signal--two" />
          <div className="work-demo__badge">{project.demoVideo.duration}</div>
          <div className="work-demo__play">
            <span className="work-demo__play-dot" />
            {locale === 'zh' ? '视频占位 / 可替换录屏' : 'Video placeholder / replace with recording'}
          </div>
        </RevealBlock>

        <RevealBlock as="div" className="work-demo__meta slate-panel" revealDelay={160} revealDistance={20}>
          <p className="eyebrow">{pickText(project.demoVideo.title, locale)}</p>
          <p>{pickText(project.demoVideo.caption, locale)}</p>
          <p>{pickText(project.audience, locale)}</p>
        </RevealBlock>
      </div>
    </section>
  )
}
