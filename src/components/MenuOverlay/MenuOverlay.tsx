import { contactChannels, menuNote, navigationItems, pickText } from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'
import type { HomeSectionId } from '../../types/content'

interface MenuOverlayProps {
  open: boolean
  onClose: () => void
  onNavigate: (sectionId: HomeSectionId) => void
  onToggleLocale: () => void
}

export function MenuOverlay({
  open,
  onClose,
  onNavigate,
  onToggleLocale,
}: MenuOverlayProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <aside
      id="menu-overlay"
      className={`menu-overlay ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      aria-modal="true"
      role="dialog"
    >
      <div className="menu-overlay__panel">
        <div className="menu-overlay__topline">
          <p className="eyebrow eyebrow--light">
            {locale === 'zh' ? '旗舰首页导航' : 'Flagship navigation'}
          </p>
          <button className="pill pill--ghost menu-overlay__locale" type="button" onClick={onToggleLocale}>
            <span>{locale === 'zh' ? '切到 EN' : 'Switch to 中'}</span>
          </button>
          <button className="menu-overlay__close" type="button" onClick={onClose}>
            {locale === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>

        <div className="menu-overlay__body">
          <nav className="menu-overlay__nav" aria-label="Sections">
            {navigationItems.map((link) => (
              <button
                className="menu-link"
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
              >
                <span className="menu-link__label">{pickText(link.label, locale)}</span>
                <span className="menu-link__detail">{pickText(link.detail, locale)}</span>
              </button>
            ))}
          </nav>

          <div className="menu-overlay__note">
            <p className="eyebrow eyebrow--light">
              {locale === 'zh' ? '构建说明' : 'Build note'}
            </p>
            <p>{pickText(menuNote, locale)}</p>
          </div>

          <div className="menu-overlay__contact">
            <p className="eyebrow eyebrow--light">
              {locale === 'zh' ? '联系通道' : 'Channel'}
            </p>
            {contactChannels.map((item) => (
              <a href={item.href} key={pickText(item.label, locale)}>
                {pickText(item.detail, locale)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
