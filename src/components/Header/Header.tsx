import { pickText, profileIdentity } from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'
import type { HomeSectionId } from '../../types/content'

interface HeaderProps {
  menuOpen: boolean
  onNavigate: (sectionId: HomeSectionId) => void
  onToggleMenu: () => void
  onToggleLocale: () => void
}

export function Header({
  menuOpen,
  onNavigate,
  onToggleMenu,
  onToggleLocale,
}: HeaderProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <header className="site-header" aria-label="Primary">
      <button
        className="brand-mark"
        onClick={() => onNavigate('hero')}
        type="button"
      >
        <span className="brand-mark__icon" aria-hidden="true">
          +
        </span>
        <span className="brand-mark__text">
          {profileIdentity.brandName} / {locale === 'zh' ? 'AI PM' : 'AI PM'}
        </span>
      </button>

      <div className="site-header__actions">
        <button
          className="pill pill--dark"
          type="button"
          onClick={() => onNavigate('contact')}
        >
          <span className="pill__dot" aria-hidden="true" />
          {pickText(profileIdentity.secondaryCta, locale)}
        </button>

        <button className="pill pill--ghost locale-toggle" type="button" onClick={onToggleLocale}>
          <span className="locale-toggle__current">{locale === 'zh' ? '中' : 'EN'}</span>
          <span className="locale-toggle__divider" aria-hidden="true">
            /
          </span>
          <span className="locale-toggle__next">{locale === 'zh' ? 'EN' : '中'}</span>
        </button>

        <button
          className={`pill pill--light ${menuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu-overlay"
        >
          <span className="pill__icon" aria-hidden="true">
            {menuOpen ? '×' : '··'}
          </span>
          {menuOpen ? (locale === 'zh' ? '关闭' : 'Close') : 'Menu'}
        </button>
      </div>
    </header>
  )
}
