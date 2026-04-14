import type { RefCallback } from 'react'
import { insightExcerpts, pickText, sectionEyebrows } from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'

interface InsightsSectionProps {
  sectionRef: RefCallback<HTMLElement>
  onOpenOverlay: (id: string) => void
}

export function InsightsSection({
  sectionRef,
  onOpenOverlay,
}: InsightsSectionProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <section
      ref={sectionRef}
      className="section section--insights"
      data-section-id="insights"
      id="insights"
    >
      <div className="insights-copy">
        <p className="eyebrow">{pickText(sectionEyebrows.insights, locale)}</p>
        <h2 className="display display--massive insights-copy__title">
          {locale === 'zh'
            ? '判断不是装饰，它决定我会做什么、不做什么，以及系统该如何被放进现实。'
            : 'Judgment is not decoration. It defines what I build, what I refuse, and how a system enters reality.'}
        </h2>
      </div>

      <div className="insight-grid">
        {insightExcerpts.map((insight) => (
          <button
            className="insight-card"
            key={insight.id}
            type="button"
            onClick={() => onOpenOverlay(insight.id)}
          >
            <p className="eyebrow">{pickText(insight.theme, locale)}</p>
            <h3 className="insight-card__title">{pickText(insight.title, locale)}</h3>
            <p className="insight-card__quote">{pickText(insight.quote, locale)}</p>
            <p className="insight-card__excerpt">{pickText(insight.excerpt, locale)}</p>
            <span className="insight-card__cta">
              {locale === 'zh' ? '展开判断' : 'Expand Note'}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
