import type { CSSProperties, RefCallback } from 'react'
import { Footer } from '../../../components/Footer/Footer'
import { contactChannels, pickText, profileIdentity, sectionEyebrows } from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'
import type { HomeSectionId } from '../../../types/content'

interface ContactSectionProps {
  sectionRef: RefCallback<HTMLElement>
  onNavigate: (sectionId: HomeSectionId) => void
  onOpenResources: () => void
}

export function ContactSection({
  sectionRef,
  onNavigate,
  onOpenResources,
}: ContactSectionProps) {
  const locale = useAppStore((state) => state.locale)
  const revealStyle = (index: number) => ({ '--reveal-index': index } as CSSProperties)

  return (
    <section
      ref={sectionRef}
      className="section section--contact"
      data-section-id="contact"
      id="contact"
    >
      <div className="contact-surface">
        <p className="eyebrow" data-reveal style={revealStyle(0)}>{pickText(sectionEyebrows.contact, locale)}</p>
        <div className="contact-surface__lead" data-reveal style={revealStyle(1)}>
          <h2 className="display display--end contact-surface__title">
            {locale === 'zh'
              ? '如果你需要一个能把复杂 AI 系统讲清楚、做出来、推进落地的人，我们可以聊。'
              : 'If you need someone who can clarify, build, and ship complex AI systems, let’s talk.'}
          </h2>
          <p className="contact-surface__copy">{pickText(profileIdentity.availability, locale)}</p>
        </div>

        <div className="contact-surface__actions" data-reveal style={revealStyle(2)}>
          <a className="pill pill--dark" data-cursor-kind="link" href="mailto:mhumble010221@gmail.com">
            <span className="pill__dot" aria-hidden="true" />
            {locale === 'zh' ? '发送邮件' : 'Send Email'}
          </a>
          <a className="pill pill--light" data-cursor-kind="link" href="tel:+8615268406215">
            {locale === 'zh' ? '拨打电话' : 'Call'}
          </a>
          <button className="pill pill--ghost" type="button" onClick={() => onNavigate('hero')}>
            {locale === 'zh' ? '返回顶部' : 'Back to Top'}
          </button>
        </div>

        <div className="contact-surface__grid">
          {contactChannels.map((item, index) => (
            <a
              className="contact-surface__item"
              data-cursor-kind="link"
              href={item.href}
              key={pickText(item.label, locale)}
              data-reveal
              style={revealStyle(3 + index)}
            >
              <span className="contact-surface__label">{pickText(item.label, locale)}</span>
              <span className="contact-surface__detail">{pickText(item.detail, locale)}</span>
            </a>
          ))}
        </div>
      </div>

      <Footer currentPage="home" onNavigate={onNavigate} onOpenResources={onOpenResources} />
    </section>
  )
}
