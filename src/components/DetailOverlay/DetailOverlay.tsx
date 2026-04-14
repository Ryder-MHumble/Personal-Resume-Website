import { useEffect, useMemo } from 'react'
import {
  experienceTimeline,
  insightExcerpts,
  pickText,
} from '../../data/siteContent'
import { setAppState, useAppStore } from '../../systems/state/appStore'

const closeOverlay = () => {
  setAppState({
    activeOverlay: {
      open: false,
      type: null,
      id: null,
    },
  })
}

export function DetailOverlay() {
  const locale = useAppStore((state) => state.locale)
  const activeOverlay = useAppStore((state) => state.activeOverlay)

  const resolved = useMemo(() => {
    if (!activeOverlay.id) {
      return null
    }

    if (activeOverlay.type === 'experience') {
      const experience = experienceTimeline.find((item) => item.id === activeOverlay.id)

      if (!experience) {
        return null
      }

      return {
        kicker: experience.kind === 'education'
          ? locale === 'zh'
            ? '教育经历'
            : 'Education'
          : locale === 'zh'
            ? '工作经历'
            : 'Experience',
        title: pickText(experience.company, locale),
        subtitle: `${pickText(experience.title, locale)} / ${experience.period}`,
        body: (
          <>
            <section className="detail-overlay__section">
              <p>{pickText(experience.summary, locale)}</p>
            </section>
            <section className="detail-overlay__section">
              <p className="detail-overlay__label">
                {locale === 'zh' ? '关键推进' : 'Key Moves'}
              </p>
              <ul className="detail-overlay__list">
                {experience.achievements.map((item, index) => (
                  <li key={`${experience.id}-achievement-${index}`}>{pickText(item, locale)}</li>
                ))}
              </ul>
            </section>
          </>
        ),
        tags: [
          experience.year,
          locale === 'zh'
            ? experience.kind === 'education'
              ? '教育'
              : '工作'
            : experience.kind === 'education'
              ? 'Education'
              : 'Work',
        ],
      }
    }

    const insight = insightExcerpts.find((item) => item.id === activeOverlay.id)

    if (!insight) {
      return null
    }

    return {
      kicker: pickText(insight.theme, locale),
      title: pickText(insight.title, locale),
      subtitle: pickText(insight.quote, locale),
      body: (
        <>
          <section className="detail-overlay__section">
            <p>{pickText(insight.excerpt, locale)}</p>
          </section>
          <section className="detail-overlay__section">
            <p className="detail-overlay__label">
              {locale === 'zh' ? '展开说明' : 'Expanded Note'}
            </p>
            <div className="detail-overlay__stack">
              {insight.detail.map((item, index) => (
                <p key={`${insight.id}-detail-${index}`}>{pickText(item, locale)}</p>
              ))}
            </div>
          </section>
        </>
      ),
      tags: [pickText(insight.theme, locale)],
    }
  }, [activeOverlay.id, activeOverlay.type, locale])

  useEffect(() => {
    if (!activeOverlay.open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeOverlay()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeOverlay.open])

  if (!activeOverlay.open || !resolved) {
    return null
  }

  return (
    <div className="detail-overlay" role="presentation" onClick={closeOverlay}>
      <div
        className="detail-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-overlay-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="detail-overlay__topline">
          <div className="detail-overlay__header">
            <p className="eyebrow">{resolved.kicker}</p>
            <h2 className="detail-overlay__title" id="detail-overlay-title">
              {resolved.title}
            </h2>
            <p className="detail-overlay__subtitle">{resolved.subtitle}</p>
          </div>

          <button className="detail-overlay__close" type="button" onClick={closeOverlay}>
            {locale === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>

        <div className="detail-overlay__body">{resolved.body}</div>

        <div className="detail-overlay__footer">
          <div className="detail-overlay__tags">
            {resolved.tags.map((tag) => (
              <span className="detail-overlay__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
