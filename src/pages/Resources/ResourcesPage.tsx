import { Footer } from '../../components/Footer/Footer'
import {
  pickText,
  resourceHubCollections,
  resourceHubHighlights,
  resourceHubIntro,
} from '../../data/siteContent'
import { useAppStore } from '../../systems/state/appStore'
import type { HomeSectionId } from '../../types/content'

interface ResourcesPageProps {
  onNavigateHome: (sectionId: HomeSectionId) => void
  onOpenResources: () => void
}

export function ResourcesPage({ onNavigateHome, onOpenResources }: ResourcesPageProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <main className="resources-page" id="resources">
      <section className="resources-hero">
        <p className="eyebrow">{pickText(resourceHubIntro.eyebrow, locale)}</p>
        <h1 className="resources-hero__title">{pickText(resourceHubIntro.title, locale)}</h1>
        <p className="resources-hero__summary">{pickText(resourceHubIntro.summary, locale)}</p>
        <p className="resources-hero__note">{pickText(resourceHubIntro.note, locale)}</p>

        <div className="resources-hero__actions">
          <button className="pill pill--dark" type="button" onClick={() => onNavigateHome('hero')}>
            <span className="pill__dot" aria-hidden="true" />
            {locale === 'zh' ? '回到首页' : 'Back Home'}
          </button>
          <a className="pill pill--ghost" href="https://github.com/Ryder-MHumble" target="_blank" rel="noreferrer">
            {locale === 'zh' ? '查看 GitHub' : 'View GitHub'}
          </a>
          <a className="pill pill--light" href="mailto:mhumble010221@gmail.com">
            {locale === 'zh' ? '领取更多资料' : 'Get More Materials'}
          </a>
        </div>
      </section>

      <section className="resources-highlights" aria-label="Resource highlights">
        {resourceHubHighlights.map((item) => (
          <article className="resources-highlight" key={item.id}>
            <p className="eyebrow">{pickText(item.label, locale)}</p>
            <p className="resources-highlight__value">{item.value}</p>
            <p className="resources-highlight__note">{pickText(item.note, locale)}</p>
          </article>
        ))}
      </section>

      <section className="resources-lanes" aria-label="Resource collections">
        {resourceHubCollections.map((collection) => (
          <article className="resource-lane" key={collection.id}>
            <header className="resource-lane__header">
              <p className="eyebrow">{collection.id.replace(/-/g, ' ')}</p>
              <h2 className="resource-lane__title">{pickText(collection.title, locale)}</h2>
              <p className="resource-lane__description">{pickText(collection.description, locale)}</p>
            </header>

            <div className="resource-lane__grid">
              {collection.items.map((item) => (
                <a
                  className="resource-item"
                  href={item.href}
                  key={item.id}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="resource-item__kind">{item.kind}</span>
                  <strong className="resource-item__title">{pickText(item.title, locale)}</strong>
                  <p className="resource-item__detail">{pickText(item.detail, locale)}</p>
                  <div className="resource-item__tags">
                    {item.tags.map((tag) => (
                      <span key={`${item.id}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <Footer currentPage="resources" onNavigate={onNavigateHome} onOpenResources={onOpenResources} />
    </main>
  )
}
