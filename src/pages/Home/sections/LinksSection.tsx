import type { CSSProperties, RefCallback } from 'react'
import { linkSurfaces, pickText, sectionEyebrows } from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'

interface LinksSectionProps {
  sectionRef: RefCallback<HTMLElement>
}

export function LinksSection({ sectionRef }: LinksSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const revealStyle = (index: number) => ({ '--reveal-index': index } as CSSProperties)

  return (
    <section
      ref={sectionRef}
      className="section section--links"
      data-section-id="links"
      id="links"
    >
      <div className="links-copy">
        <p className="eyebrow" data-reveal style={revealStyle(0)}>{pickText(sectionEyebrows.links, locale)}</p>
        <h2 className="section-title" data-reveal style={revealStyle(1)}>
          {locale === 'zh'
            ? '继续深挖时，你会进入这些外部表面。'
            : 'If you want to dig deeper, these are the surfaces to enter next.'}
        </h2>
      </div>

      <div className="link-surface-grid">
        {linkSurfaces.map((surface, index) => (
          <article className="link-surface" data-reveal key={surface.id} style={revealStyle(2 + index)}>
            <p className="eyebrow">{pickText(surface.kicker, locale)}</p>
            <h3 className="link-surface__title">{pickText(surface.title, locale)}</h3>
            <p className="link-surface__description">{pickText(surface.description, locale)}</p>

            <div className="link-surface__items">
              {surface.items.map((item) => (
                <a
                  className="link-surface__item"
                  data-cursor-kind="link"
                  href={item.href}
                  key={`${surface.id}-${pickText(item.label, locale)}`}
                  rel={item.external ? 'noreferrer' : undefined}
                  target={item.external ? '_blank' : undefined}
                >
                  <span className="link-surface__label">{pickText(item.label, locale)}</span>
                  <span className="link-surface__detail">{pickText(item.detail, locale)}</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
