import { contactChannels, menuNote, navigationItems, pickText } from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'
import type { AppPage, HomeSectionId } from '../../types/content'

interface MenuOverlayProps {
  currentPage: AppPage
  open: boolean
  onClose: () => void
  onNavigate: (sectionId: HomeSectionId) => void
  onOpenResources: () => void
  onToggleLocale: () => void
}

export function MenuOverlay({
  currentPage,
  open,
  onClose,
  onNavigate,
  onOpenResources,
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
          <div className="menu-overlay__controls">
            <button className="pill pill--ghost menu-overlay__locale" type="button" onClick={onToggleLocale}>
              <span>{locale === 'zh' ? '切到 EN' : 'Switch to 中'}</span>
            </button>
            <button className="menu-overlay__close" type="button" onClick={onClose}>
              {locale === 'zh' ? '关闭' : 'Close'}
            </button>
          </div>
        </div>

        <div className="menu-overlay__body">
          <div className="menu-overlay__main">
            <div className="menu-overlay__routes" role="group" aria-label="Site routes">
              <button
                className={`menu-route ${currentPage === 'home' ? 'is-active' : ''}`}
                type="button"
                onClick={() => onNavigate('hero')}
              >
                <span>{locale === 'zh' ? '首页' : 'Home'}</span>
                <small>
                  {locale === 'zh' ? '求职案例与经历主页面' : 'Main page for flagship cases and timeline'}
                </small>
              </button>
              <button
                className={`menu-route ${currentPage === 'resources' ? 'is-active' : ''}`}
                type="button"
                onClick={onOpenResources}
              >
                <span>{locale === 'zh' ? '免费资料库' : 'Free Resources'}</span>
                <small>
                  {locale === 'zh' ? '项目、教程、工具和方法论合集' : 'Projects, guides, tools, and frameworks'}
                </small>
              </button>
            </div>

            <nav className="menu-overlay__nav" aria-label="Sections">
              {navigationItems.map((link, index) => (
                <button
                  className="menu-link"
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                >
                  <span className="menu-link__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="menu-link__content">
                    <span className="menu-link__label">{pickText(link.label, locale)}</span>
                    <span className="menu-link__detail">{pickText(link.detail, locale)}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="menu-overlay__aside">
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
      </div>
    </aside>
  )
}
