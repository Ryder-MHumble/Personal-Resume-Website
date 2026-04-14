import type { CSSProperties } from 'react'
import { pickText, profileIdentity } from '../../data/siteContent'
import type { Locale, ProjectDetail, ProjectSlug } from '../../types/content'

interface WorkPageProps {
  locale: Locale
  project: ProjectDetail
  nextProject: ProjectDetail | null
  previousProject: ProjectDetail | null
  onBackHome: () => void
  onOpenProject: (slug: ProjectSlug) => void
}

export function WorkPage({
  locale,
  project,
  nextProject,
  previousProject,
  onBackHome,
  onOpenProject,
}: WorkPageProps) {
  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="work-hero__copy">
          <p className="eyebrow">{pickText(project.category, locale)}</p>
          <div className="work-hero__topline">
            <span>{profileIdentity.brandName}</span>
            <span>{profileIdentity.formalNameLatin}</span>
            <span>{pickText(project.status, locale)}</span>
          </div>
          <h1 className="work-hero__title">{pickText(project.title, locale)}</h1>
          <p className="work-hero__subtitle">
            {pickText(project.company, locale)} / {project.period} / {pickText(project.roleLabel, locale)}
          </p>
          <p className="work-hero__statement">{pickText(project.heroStatement, locale)}</p>

          <div className="work-hero__actions">
            <a className="pill pill--dark" href="#demo-stage">
              <span className="pill__dot" aria-hidden="true" />
              {locale === 'zh' ? '观看演示位' : 'View Demo Stage'}
            </a>
            <a className="pill pill--ghost" href="#system-structure">
              {locale === 'zh' ? '查看系统结构' : 'View System Shape'}
            </a>
            <button className="pill pill--light" type="button" onClick={onBackHome}>
              {locale === 'zh' ? '返回首页' : 'Back Home'}
            </button>
          </div>
        </div>

        <div
          className="work-hero__frame"
          style={
            {
              '--project-accent': project.accent,
              '--project-glaze': project.glaze,
            } as CSSProperties
          }
        >
          <div className="work-hero__frame-topline">
            <span>{locale === 'zh' ? 'Case monitor' : 'Case monitor'}</span>
            <span>{project.slug}</span>
          </div>
          <div className="work-hero__poster">
            <div className="work-hero__poster-plate work-hero__poster-plate--glow" />
            <div className="work-hero__poster-plate work-hero__poster-plate--matte" />
            <div className="work-hero__poster-grid" />
            <div className="work-hero__poster-badge">{pickText(project.resultBadge, locale)}</div>
            <div className="work-hero__poster-meta">
              <span>{pickText(project.demoVideo.posterLabel, locale)}</span>
              <span>{pickText(project.status, locale)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-metrics">
        {project.keyMetrics.map((metric) => (
          <article className="work-metric" key={pickText(metric.label, locale)}>
            <p className="eyebrow">{pickText(metric.label, locale)}</p>
            <p className="work-metric__value">{metric.value}</p>
            <p className="work-metric__note">{pickText(metric.note, locale)}</p>
          </article>
        ))}
      </section>

      <section className="work-section work-section--demo" id="demo-stage">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'Demo stage' : 'Demo stage'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '先看系统存在的样子，再读我如何把它做出来。' : 'See the system first, then read how I shaped it.'}
          </h2>
        </div>

        <div className="work-demo">
          <div className="work-demo__screen">
            <div className="work-demo__screen-grid" />
            <div className="work-demo__signal work-demo__signal--one" />
            <div className="work-demo__signal work-demo__signal--two" />
            <div className="work-demo__badge">{project.demoVideo.duration}</div>
            <div className="work-demo__play">
              <span className="work-demo__play-dot" />
              {locale === 'zh' ? '视频占位 / 可替换录屏' : 'Video placeholder / replace with recording'}
            </div>
          </div>

          <div className="work-demo__meta slate-panel">
            <p className="eyebrow">{pickText(project.demoVideo.title, locale)}</p>
            <p>{pickText(project.demoVideo.caption, locale)}</p>
            <p>{pickText(project.audience, locale)}</p>
          </div>
        </div>
      </section>

      <section className="work-section work-section--problem">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'Problem definition' : 'Problem definition'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '为什么这个项目必须被做成产品，而不是停在概念或脚本层。' : 'Why this had to become a product instead of staying a concept or a script.'}
          </h2>
        </div>

        <div className="work-columns">
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? '业务场景' : 'Context'}</p>
            <p>{pickText(project.context, locale)}</p>
          </article>
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? '约束条件' : 'Constraints'}</p>
            <ul className="work-list">
              {project.constraints.map((item, index) => (
                <li key={`${project.slug}-constraint-${index}`}>{pickText(item, locale)}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="work-section" id="product-actions">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'Product actions' : 'Product actions'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '我如何把问题翻成一条能被团队执行、被系统承载、被组织消费的产品路径。' : 'How I translated the problem into a product path that teams could ship, systems could hold, and organizations could consume.'}
          </h2>
        </div>

        <div className="work-stage-grid">
          {project.productActions.map((stage, index) => (
            <article className="work-stage" key={`${project.slug}-stage-${index}`}>
              <div className="work-stage__index">{String(index + 1).padStart(2, '0')}</div>
              <p className="eyebrow">{pickText(stage.title, locale)}</p>
              <p className="work-stage__lead">{pickText(stage.objective, locale)}</p>
              <p>{pickText(stage.move, locale)}</p>
              <p className="work-stage__decision">{pickText(stage.decision, locale)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="system-structure">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'System structure' : 'System structure'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '系统真正稳定的地方，不是界面，而是它如何承接输入、判断、执行和反馈。' : 'The stable part of a system is not the screen. It is how it holds intake, judgment, execution, and feedback.'}
          </h2>
        </div>

        <div className="work-system-grid">
          {project.systemModules.map((module) => (
            <article className="slate-panel slate-panel--system" key={pickText(module.title, locale)}>
              <p className="eyebrow">{pickText(module.title, locale)}</p>
              <p className="work-system-grid__description">{pickText(module.description, locale)}</p>
              <ul className="work-list">
                {module.bullets.map((bullet, index) => (
                  <li key={`${pickText(module.title, locale)}-${index}`}>{pickText(bullet, locale)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'Result evidence' : 'Result evidence'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '结果必须能被解释，而不是只留下一个好看的结论。' : 'Results must be explainable, not just pretty conclusions.'}
          </h2>
        </div>

        <div className="work-evidence-grid">
          {project.evidence.map((item) => (
            <article className="work-evidence" key={pickText(item.label, locale)}>
              <p className="eyebrow">{pickText(item.label, locale)}</p>
              <p className="work-evidence__value">{item.value}</p>
              <p>{pickText(item.note, locale)}</p>
              <span className="work-evidence__source">{pickText(item.source, locale)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section work-section--role">
        <div className="work-columns work-columns--role">
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? 'My role' : 'My role'}</p>
            <p>{pickText(project.myRole, locale)}</p>
            <ul className="work-list">
              {project.collaboration.map((item, index) => (
                <li key={`${project.slug}-collaboration-${index}`}>{pickText(item, locale)}</li>
              ))}
            </ul>
          </article>

          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? 'Deliverables' : 'Deliverables'}</p>
            <div className="work-deliverables">
              {project.deliverables.map((item) => (
                <div className="work-deliverable" key={pickText(item.label, locale)}>
                  <span>{pickText(item.label, locale)}</span>
                  <p>{pickText(item.detail, locale)}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="work-section work-section--retro">
        <div className="work-section__header">
          <p className="eyebrow">{locale === 'zh' ? 'Retrospective' : 'Retrospective'}</p>
          <h2 className="section-title">
            {locale === 'zh' ? '案例不止是成果展示，也应该留下判断的后坐力。' : 'A case should not stop at outcomes. It should leave the afterforce of judgment.'}
          </h2>
        </div>

        <div className="work-retro-grid">
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? 'What worked' : 'What worked'}</p>
            <ul className="work-list">
              {project.retrospective.worked.map((item, index) => (
                <li key={`${project.slug}-worked-${index}`}>{pickText(item, locale)}</li>
              ))}
            </ul>
          </article>
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? 'Would change' : 'Would change'}</p>
            <ul className="work-list">
              {project.retrospective.wouldChange.map((item, index) => (
                <li key={`${project.slug}-change-${index}`}>{pickText(item, locale)}</li>
              ))}
            </ul>
          </article>
          <article className="slate-panel">
            <p className="eyebrow">{locale === 'zh' ? 'Next step' : 'Next step'}</p>
            <ul className="work-list">
              {project.retrospective.nextStep.map((item, index) => (
                <li key={`${project.slug}-next-${index}`}>{pickText(item, locale)}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="work-section work-section--pager">
        <div className="work-pager">
          <button className="work-pager__item" type="button" onClick={onBackHome}>
            <span className="eyebrow">{locale === 'zh' ? 'Back home' : 'Back home'}</span>
            <strong>{locale === 'zh' ? '返回旗舰首页' : 'Return to the flagship home'}</strong>
          </button>

          {previousProject ? (
            <button
              className="work-pager__item"
              type="button"
              onClick={() => onOpenProject(previousProject.slug)}
            >
              <span className="eyebrow">{locale === 'zh' ? 'Previous case' : 'Previous case'}</span>
              <strong>{pickText(previousProject.title, locale)}</strong>
            </button>
          ) : null}

          {nextProject ? (
            <button
              className="work-pager__item"
              type="button"
              onClick={() => onOpenProject(nextProject.slug)}
            >
              <span className="eyebrow">{locale === 'zh' ? 'Next case' : 'Next case'}</span>
              <strong>{pickText(nextProject.title, locale)}</strong>
            </button>
          ) : null}
        </div>
      </section>
    </main>
  )
}
