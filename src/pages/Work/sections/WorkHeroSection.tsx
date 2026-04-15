import type { CSSProperties } from 'react'
import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText, profileIdentity } from '../../../data/siteContent'
import type { WorkHeroSectionProps } from './types'

export function WorkHeroSection({ locale, project, onBackHome }: WorkHeroSectionProps) {
  return (
    <section className="work-hero">
      <RevealBlock as="div" className="work-hero__copy" revealDelay={0} revealDistance={24}>
        <p className="eyebrow">{pickText(project.category, locale)}</p>
        <div className="work-hero__topline">
          <span>{profileIdentity.brandName}</span>
          <span>{profileIdentity.formalNameLatin}</span>
          <span>{pickText(project.status, locale)}</span>
        </div>
        <h1 className="work-hero__title">{pickText(project.title, locale)}</h1>
        <p className="work-hero__subtitle">
          {pickText(project.company, locale)} / {project.period} / {pickText(project.roleLabel, locale)}
        </p>
        <p className="work-hero__statement">{pickText(project.heroStatement, locale)}</p>

        <div className="work-hero__actions">
          <a className="pill pill--dark" href="#demo-stage">
            <span className="pill__dot" aria-hidden="true" />
            {locale === 'zh' ? '观看演示位' : 'View Demo Stage'}
          </a>
          <a className="pill pill--ghost" href="#system-structure">
            {locale === 'zh' ? '查看系统结构' : 'View System Shape'}
          </a>
          <button className="pill pill--light" type="button" onClick={onBackHome}>
            {locale === 'zh' ? '返回首页' : 'Back Home'}
          </button>
        </div>
      </RevealBlock>

      <RevealBlock
        as="div"
        className="work-hero__frame"
        revealDelay={90}
        revealDistance={32}
        style={
          {
            '--project-accent': project.accent,
            '--project-glaze': project.glaze,
          } as CSSProperties
        }
      >
        <div className="work-hero__frame-topline">
          <span>{locale === 'zh' ? 'Case monitor' : 'Case monitor'}</span>
          <span>{project.slug}</span>
        </div>
        <div className="work-hero__poster">
          <div className="work-hero__poster-plate work-hero__poster-plate--glow" />
          <div className="work-hero__poster-plate work-hero__poster-plate--matte" />
          <div className="work-hero__poster-grid" />
          <div className="work-hero__poster-badge">{pickText(project.resultBadge, locale)}</div>
          <div className="work-hero__poster-meta">
            <span>{pickText(project.demoVideo.posterLabel, locale)}</span>
            <span>{pickText(project.status, locale)}</span>
          </div>
        </div>
      </RevealBlock>
    </section>
  )
}
