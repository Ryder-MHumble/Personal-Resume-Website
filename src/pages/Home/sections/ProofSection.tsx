import type { RefCallback } from 'react'
import {
  capabilityTags,
  companyBand,
  pickText,
  profileIdentity,
  proofStats,
  sectionEyebrows,
} from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'

interface ProofSectionProps {
  sectionRef: RefCallback<HTMLElement>
}

export function ProofSection({ sectionRef }: ProofSectionProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <section
      ref={sectionRef}
      className="section section--proof"
      data-section-id="proof"
      id="proof"
    >
      <div className="proof-copy">
        <p className="eyebrow">{pickText(sectionEyebrows.proof, locale)}</p>
        <h2 className="display display--massive proof-copy__title">
          {locale === 'zh'
            ? '不是一句“我会做 AI 产品”就够了，而是要给出判断、证据和长期可用的交付面。'
            : '“I build AI products” is not enough. The work needs judgment, proof, and a delivery surface that survives reality.'}
        </h2>
        <p className="proof-copy__lede">{pickText(profileIdentity.summary, locale)}</p>
      </div>

      <div className="proof-shell">
        <div className="proof-shell__stats">
          {proofStats.map((stat) => (
            <article className="proof-shell__stat" key={stat.id}>
              <p className="proof-shell__value">{stat.value}</p>
              <p className="proof-shell__label">{pickText(stat.label, locale)}</p>
              <p className="proof-shell__note">{pickText(stat.note, locale)}</p>
            </article>
          ))}
        </div>

        <div className="proof-shell__capabilities">
          <p className="eyebrow">{locale === 'zh' ? 'Operating grammar' : 'Operating grammar'}</p>
          <div className="proof-shell__tags">
            {capabilityTags.map((tag) => (
              <span className="proof-tag" key={tag.id}>
                {pickText(tag.label, locale)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="proof-marquee" aria-hidden="true">
        <div className="proof-marquee__track">
          {[...companyBand, ...companyBand].map((company, index) => (
            <span className="proof-marquee__item" key={`${pickText(company, locale)}-${index}`}>
              {pickText(company, locale)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
