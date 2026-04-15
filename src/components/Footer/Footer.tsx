import {
  footerCopy,
  navigationItems,
  pickText,
  profileIdentity,
  resourceHubIntro,
} from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'
import type { AppPage, HomeSectionId } from '../../types/content'

interface FooterProps {
  currentPage: AppPage
  onNavigate: (sectionId: HomeSectionId) => void
  onOpenResources: () => void
}

export function Footer({ currentPage, onNavigate, onOpenResources }: FooterProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <footer className={`footer-surface footer-surface--${currentPage}`}>
      <div className="footer-surface__panel">
        <div className="footer-surface__hero">
          <p className="eyebrow">{locale === 'zh' ? 'Ryder Resource Deck' : 'Ryder Resource Deck'}</p>
          <h3 className="footer-surface__headline">
            {locale === 'zh'
              ? '把复杂 AI 系统做成可复用资产，而不是一次性 Demo。'
              : 'Turn complex AI systems into reusable assets, not one-off demos.'}
          </h3>
          <p className="footer-surface__description">{pickText(resourceHubIntro.summary, locale)}</p>

          <div className="footer-surface__actions">
            <a className="pill pill--dark" href="mailto:mhumble010221@gmail.com" data-cursor-kind="link">
              <span className="pill__dot" aria-hidden="true" />
              {locale === 'zh' ? '发送邮件' : 'Send Email'}
            </a>
            <a
              className="pill pill--ghost"
              href="https://github.com/Ryder-MHumble"
              target="_blank"
              rel="noreferrer"
              data-cursor-kind="link"
            >
              {locale === 'zh' ? 'GitHub 项目' : 'GitHub Projects'}
            </a>
            {currentPage === 'resources' ? (
              <button
                className="pill pill--light"
                type="button"
                onClick={() => onNavigate('hero')}
                data-cursor-kind="link"
              >
                {locale === 'zh' ? '返回首页' : 'Back Home'}
              </button>
            ) : (
              <button className="pill pill--light" type="button" onClick={onOpenResources} data-cursor-kind="link">
                {locale === 'zh' ? '免费资料库' : 'Free Resources'}
              </button>
            )}
          </div>
        </div>

        <div className="footer-surface__meta">
          <article className="footer-surface__block">
            <p className="eyebrow">{locale === 'zh' ? 'Identity' : 'Identity'}</p>
            <p className="footer-surface__copy">
              {profileIdentity.brandName} / {profileIdentity.formalNameLatin}
            </p>
            <p>{pickText(profileIdentity.name, locale)}</p>
            <p>{pickText(footerCopy, locale)}</p>
          </article>

          <article className="footer-surface__block">
            <p className="eyebrow">{locale === 'zh' ? 'Base' : 'Base'}</p>
            <p>{pickText(profileIdentity.location, locale)}</p>
            <p>{pickText(profileIdentity.availability, locale)}</p>
          </article>

          <article className="footer-surface__block">
            <p className="eyebrow">{locale === 'zh' ? 'Navigate' : 'Navigate'}</p>
            <div className="footer-surface__links">
              {navigationItems.slice(0, 5).map((item) => (
                <button
                  className="footer-surface__link"
                  data-cursor-kind="link"
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                >
                  {pickText(item.label, locale)}
                </button>
              ))}
              <button
                className="footer-surface__link"
                data-cursor-kind="link"
                type="button"
                onClick={onOpenResources}
              >
                {locale === 'zh' ? '免费资料库' : 'Free Resources'}
              </button>
            </div>
          </article>
        </div>
      </div>
    </footer>
  )
}
