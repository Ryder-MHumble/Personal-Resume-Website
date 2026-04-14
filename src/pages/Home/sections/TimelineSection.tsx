import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { RefCallback } from 'react'
import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import {
  experienceTimeline,
  pickText,
  sectionEyebrows,
} from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'

interface TimelineSectionProps {
  sectionRef: RefCallback<HTMLElement>
  onOpenOverlay: (id: string) => void
}

export function TimelineSection({
  sectionRef,
  onOpenOverlay,
}: TimelineSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const revealStyle = (index: number) => ({ '--reveal-index': index } as CSSProperties)

  const featuredItems = experienceTimeline.filter((item) => item.featured)
  const archiveItems = experienceTimeline.filter((item) => !item.featured)

  return (
    <section
      ref={sectionRef}
      className="section section--timeline"
      data-section-id="timeline"
      id="timeline"
    >
      <div className="section__cross section__cross--dark-left" aria-hidden="true" />
      <div className="section__cross section__cross--dark-right" aria-hidden="true" />

      <div className="timeline-copy">
        <p className="eyebrow eyebrow--light" data-reveal style={revealStyle(0)}>
          {pickText(sectionEyebrows.timeline, locale)}
        </p>
        <h2 className="display display--contrast timeline-copy__title" data-reveal style={revealStyle(1)}>
          {locale === 'zh'
            ? '我的履历不是零散站点，而是一条持续把 AI 能力压进现实场景的职业脊柱。'
            : 'My background is not a loose list of stops. It is a career spine shaped by turning AI capability into real operating systems.'}
        </h2>
      </div>

      <div className="timeline-shell">
        <div className="timeline-shell__line" aria-hidden="true" />

        {featuredItems.map((item, index) => (
          <RevealBlock
            as="button"
            className={`timeline-item timeline-item--${index % 2 === 0 ? 'left' : 'right'} ${index % 3 === 1 ? 'timeline-item--compact' : 'timeline-item--wide'}`}
            key={item.id}
            revealDelay={index * 90}
            revealOnce={false}
            rootMargin="0px 0px -18% 0px"
            style={{ '--timeline-index': index } as CSSProperties}
            type="button"
            onClick={() => onOpenOverlay(item.id)}
          >
            <div className="timeline-item__node" aria-hidden="true" />
            <div className="timeline-item__yearblock">
              <div className="timeline-item__year">{item.year}</div>
              <div className="timeline-item__period">{item.period}</div>
            </div>
            <div className="timeline-item__main">
              <p className="timeline-item__company">{pickText(item.company, locale)}</p>
              <h3 className="timeline-item__title">{pickText(item.title, locale)}</h3>
              <p className="timeline-item__summary">{pickText(item.summary, locale)}</p>
            </div>
            <div className="timeline-item__evidence">
              <p className="timeline-item__kicker">{locale === 'zh' ? 'Key moves' : 'Key moves'}</p>
              <ul className="timeline-item__list">
                {item.achievements.map((achievement, achievementIndex) => (
                  <li key={`${item.id}-summary-${achievementIndex}`}>{pickText(achievement, locale)}</li>
                ))}
              </ul>
              <span className="timeline-item__cta">
                {locale === 'zh' ? '展开完整经历' : 'Expand role detail'}
              </span>
            </div>
          </RevealBlock>
        ))}

        <div className={`timeline-archive ${archiveOpen ? 'is-open' : ''}`} data-reveal style={revealStyle(6)}>
          <button
            className="timeline-archive__toggle"
            type="button"
            onClick={() => setArchiveOpen((value) => !value)}
            aria-expanded={archiveOpen}
          >
            <span>{locale === 'zh' ? '更早经历与学术锚点' : 'Earlier roles and academic anchor'}</span>
            <span>{archiveOpen ? '−' : '+'}</span>
          </button>

          <div className="timeline-archive__items">
            {archiveItems.map((item) => (
              <button
                className="timeline-archive__item"
                key={item.id}
                type="button"
                onClick={() => onOpenOverlay(item.id)}
              >
                <span className="timeline-archive__meta">{item.year}</span>
                <span className="timeline-archive__headline">
                  {pickText(item.company, locale)} / {pickText(item.title, locale)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
