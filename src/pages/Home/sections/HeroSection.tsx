import type { RefCallback } from 'react'
import {
  featuredProjects,
  pickText,
  profileIdentity,
  proofStats,
  sectionEyebrows,
} from '../../../data/siteContent'
import type { HomeSectionId } from '../../../types/content'
import { useAppStore } from '../../../systems/state/appStore'

interface HeroSectionProps {
  sectionRef: RefCallback<HTMLElement>
  onNavigate: (sectionId: HomeSectionId) => void
  webglAvailable: boolean
}

export function HeroSection({
  sectionRef,
  onNavigate,
  webglAvailable,
}: HeroSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const monitorProject = featuredProjects[0]

  return (
    <section
      ref={sectionRef}
      className="section section--hero"
      data-section-id="hero"
      id="hero"
    >
      <div className="section__cross section__cross--tl" aria-hidden="true" />
      <div className="section__cross section__cross--br" aria-hidden="true" />

      <div className="hero-copy hero-copy--personal">
        <p className="eyebrow">{pickText(sectionEyebrows.hero, locale)}</p>
        <p className="hero-copy__eyeline">{pickText(profileIdentity.roleLine, locale)}</p>
        <h1 className="display display--hero hero-display">
          <span className="hero-display__latin">{profileIdentity.brandName}</span>
          <span className="hero-display__formal">{profileIdentity.formalNameLatin}</span>
          <span className="hero-display__local">{pickText(profileIdentity.name, locale)}</span>
        </h1>
        <p className="hero-copy__philosophy">{pickText(profileIdentity.philosophy, locale)}</p>
        <p className="hero-copy__lede">{pickText(profileIdentity.positioning, locale)}</p>
        <p className="hero-copy__summary">{pickText(profileIdentity.summary, locale)}</p>

        <div className="hero-stats" aria-label={locale === 'zh' ? '关键信号' : 'Key proof points'}>
          {proofStats.slice(0, 4).map((stat) => (
            <article className="hero-stat" key={stat.id}>
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{pickText(stat.label, locale)}</span>
            </article>
          ))}
        </div>

        <div className="hero-copy__actions">
          <button className="pill pill--dark" type="button" onClick={() => onNavigate('featured')}>
            <span className="pill__dot" aria-hidden="true" />
            {pickText(profileIdentity.primaryCta, locale)}
          </button>

          <button className="pill pill--ghost" type="button" onClick={() => onNavigate('contact')}>
            {pickText(profileIdentity.secondaryCta, locale)}
          </button>

          <button className="pill pill--light" type="button" onClick={() => onNavigate('timeline')}>
            {locale === 'zh' ? '浏览经历脊柱' : 'Browse Career Spine'}
          </button>
        </div>
      </div>

      <div className="hero-window hero-window--personal">
        <div className="hero-window__chrome">
          <span className="hero-window__tag">
            {locale === 'zh' ? 'AI 产品判断 / 实时空间场' : 'AI product judgment / realtime field'}
          </span>
          <span className="hero-window__tag">
            {webglAvailable
              ? locale === 'zh'
                ? 'WebGL 已启用'
                : 'WebGL active'
              : locale === 'zh'
                ? 'DOM 降级'
                : 'DOM fallback'}
          </span>
        </div>

        <div className="hero-window__body hero-window__body--personal">
          <div className="hero-window__fallback">
            <div className="hero-window__axis hero-window__axis--horizontal" />
            <div className="hero-window__axis hero-window__axis--vertical" />
            <div className="hero-window__core hero-window__core--white" />
            <div className="hero-window__core hero-window__core--blue" />
            <div className="hero-window__grain" />
            <div className="hero-window__monitor">
              <div className="hero-window__focus">
                <p className="eyebrow">{locale === 'zh' ? 'Current focus' : 'Current focus'}</p>
                <strong>{pickText(monitorProject.title, locale)}</strong>
                <span>
                  {pickText(monitorProject.company, locale)} / {monitorProject.period}
                </span>
              </div>

              <div className="hero-window__poster">
                <div className="hero-window__poster-plate hero-window__poster-plate--major" />
                <div className="hero-window__poster-plate hero-window__poster-plate--minor" />
                <div className="hero-window__signal hero-window__signal--one" />
                <div className="hero-window__signal hero-window__signal--two" />
              </div>

              <div className="hero-window__signal-grid">
                <article className="hero-window__signal-card">
                  <span>{locale === 'zh' ? 'Selected metric' : 'Selected metric'}</span>
                  <strong>{proofStats[3].value}</strong>
                  <p>{pickText(proofStats[3].label, locale)}</p>
                </article>
                <article className="hero-window__signal-card">
                  <span>{locale === 'zh' ? 'Latest system' : 'Latest system'}</span>
                  <strong>{pickText(monitorProject.resultBadge, locale)}</strong>
                  <p>{pickText(monitorProject.summary, locale)}</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-window__footer hero-window__footer--personal">
          <span>{pickText(profileIdentity.location, locale)}</span>
          <span>
            {locale === 'zh'
              ? 'Agent 系统 / 平台工具 / 企业级 AI'
              : 'Agent systems / platform tools / enterprise AI'}
          </span>
        </div>
      </div>

      <div className="hero-rail">
        <p className="hero-rail__label">{locale === 'zh' ? '代表判断' : 'Selected signal'}</p>
        <p className="hero-rail__text">
          {locale === 'zh'
            ? '我偏爱能稳定落地的系统，而不是只在展示时发光的概念。'
            : 'I prefer systems that land stably, not concepts that only shine in demos.'}
        </p>
      </div>
    </section>
  )
}
