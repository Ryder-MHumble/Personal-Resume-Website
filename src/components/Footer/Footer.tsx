import { footerCopy, navigationItems, pickText, profileIdentity } from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'

export function Footer() {
  const locale = useAppStore((state) => state.locale)

  return (
    <footer className="footer-surface">
      <div className="footer-surface__grid">
        <div>
          <p className="eyebrow">{locale === 'zh' ? 'Identity' : 'Identity'}</p>
          <p className="footer-surface__copy">
            {profileIdentity.brandName} / {profileIdentity.formalNameLatin}
          </p>
          <p>{pickText(profileIdentity.name, locale)} / {pickText(footerCopy, locale)}</p>
        </div>

        <div>
          <p className="eyebrow">{locale === 'zh' ? 'Base' : 'Base'}</p>
          <p>{pickText(profileIdentity.location, locale)}</p>
          <p>{pickText(profileIdentity.availability, locale)}</p>
        </div>

        <div>
          <p className="eyebrow">{locale === 'zh' ? 'Navigate' : 'Navigate'}</p>
          {navigationItems.slice(0, 3).map((item) => (
            <a data-cursor-kind="link" href={`#${item.id}`} key={item.id}>
              {pickText(item.label, locale)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
