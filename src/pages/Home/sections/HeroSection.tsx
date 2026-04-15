import type { CSSProperties, RefCallback } from 'react'
import {
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
}

export function HeroSection({
  sectionRef,
  onNavigate,
}: HeroSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const revealStyle = (index: number) => ({ '--reveal-index': index } as CSSProperties)

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
        <p className="eyebrow" data-reveal style={revealStyle(0)}>
          {pickText(sectionEyebrows.hero, locale)}
        </p>
        <p className="hero-copy__eyeline" data-reveal style={revealStyle(1)}>
          {pickText(profileIdentity.roleLine, locale)}
        </p>
        <h1 className="display display--hero hero-display" data-reveal style={revealStyle(2)}>
          <span className="hero-display__latin">{profileIdentity.brandName}</span>
          <span className="hero-display__formal">{profileIdentity.formalNameLatin}</span>
          <span className="hero-display__local">{pickText(profileIdentity.name, locale)}</span>
        </h1>
        <p className="hero-copy__philosophy" data-reveal style={revealStyle(3)}>
          {pickText(profileIdentity.philosophy, locale)}
        </p>
        <p className="hero-copy__lede" data-reveal style={revealStyle(4)}>
          {pickText(profileIdentity.positioning, locale)}
        </p>
        <p className="hero-copy__summary" data-reveal style={revealStyle(5)}>
          {pickText(profileIdentity.summary, locale)}
        </p>

        <div className="hero-proofbelt" aria-label={locale === 'zh' ? '关键信号' : 'Key proof points'}>
          {proofStats.slice(0, 4).map((stat) => (
            <article
              className={`hero-proof ${stat.id === 'company-count' ? 'hero-proof--wide' : 'hero-proof--compact'}`}
              data-reveal
              key={stat.id}
              style={revealStyle(6 + proofStats.findIndex((item) => item.id === stat.id))}
            >
              <span className="hero-proof__value">{stat.value}</span>
              <div className="hero-proof__body">
                <span className="hero-proof__label">{pickText(stat.label, locale)}</span>
                <span className="hero-proof__note">{pickText(stat.note, locale)}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="hero-copy__actions">
          <button
            className="pill pill--dark"
            data-reveal
            style={revealStyle(10)}
            type="button"
            onClick={() => onNavigate('featured')}
          >
            <span className="pill__dot" aria-hidden="true" />
            {pickText(profileIdentity.primaryCta, locale)}
          </button>

          <button
            className="pill pill--ghost"
            data-reveal
            style={revealStyle(11)}
            type="button"
            onClick={() => onNavigate('contact')}
          >
            {pickText(profileIdentity.secondaryCta, locale)}
          </button>

          <button
            className="pill pill--light"
            data-reveal
            style={revealStyle(12)}
            type="button"
            onClick={() => onNavigate('timeline')}
          >
            {locale === 'zh' ? '浏览经历脊柱' : 'Browse Career Spine'}
          </button>
        </div>
      </div>

      <div className="hero-rail" data-reveal style={revealStyle(13)}>
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
