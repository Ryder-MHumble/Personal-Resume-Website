import type { CSSProperties, PointerEventHandler, RefCallback } from 'react'
import { featuredProjects, pickText, sectionEyebrows } from '../../../data/siteContent'
import { useAppStore } from '../../../systems/state/appStore'
import type { ProjectSlug } from '../../../types/content'

interface FeaturedWorkSectionProps {
  sectionRef: RefCallback<HTMLElement>
  highlightedProjectId: string | null
  onOpenProject: (slug: ProjectSlug, projectId: string) => void
}

const resetTilt = (element: HTMLElement) => {
  element.style.setProperty('--card-rotate-x', '0deg')
  element.style.setProperty('--card-rotate-y', '0deg')
  element.style.setProperty('--card-shift-x', '0px')
  element.style.setProperty('--card-shift-y', '0px')
}

const handlePointerMove: PointerEventHandler<HTMLElement> = (event) => {
  const element = event.currentTarget
  const bounds = element.getBoundingClientRect()
  const px = (event.clientX - bounds.left) / bounds.width - 0.5
  const py = (event.clientY - bounds.top) / bounds.height - 0.5

  element.style.setProperty('--card-rotate-x', `${(-py * 10).toFixed(2)}deg`)
  element.style.setProperty('--card-rotate-y', `${(px * 14).toFixed(2)}deg`)
  element.style.setProperty('--card-shift-x', `${(px * 16).toFixed(2)}px`)
  element.style.setProperty('--card-shift-y', `${(py * 16).toFixed(2)}px`)
}

export function FeaturedWorkSection({
  sectionRef,
  highlightedProjectId,
  onOpenProject,
}: FeaturedWorkSectionProps) {
  const locale = useAppStore((state) => state.locale)

  return (
    <section
      ref={sectionRef}
      className="section section--featured"
      data-section-id="featured"
      id="featured"
    >
      <div className="featured-header">
        <div>
          <p className="eyebrow">{pickText(sectionEyebrows.featured, locale)}</p>
          <h2 className="section-title">
            {locale === 'zh'
              ? '四个足够解释我的旗舰案例。'
              : 'Four flagship cases that explain how I work.'}
          </h2>
        </div>
        <p className="featured-header__text">
          {locale === 'zh'
            ? '它们覆盖了信息引擎、MCP 评测、招聘 Agent 与 ChatBI。我更在意问题结构、系统形态和落地结果，而不是把项目包装成漂亮名词。'
            : 'Together they cover signal systems, MCP evaluation, recruitment agents, and ChatBI. I care more about problem shape, system form, and outcomes than polished naming.'}
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <button
            className={`project-card ${highlightedProjectId === project.id ? 'is-highlighted' : ''}`}
            key={project.id}
            onPointerMove={handlePointerMove}
            onPointerLeave={(event) => resetTilt(event.currentTarget)}
            onClick={() => onOpenProject(project.slug, project.id)}
            style={
              {
                '--project-accent': project.accent,
                '--project-glaze': project.glaze,
              } as CSSProperties
            }
            data-cursor-kind="case"
            data-project-id={project.id}
            type="button"
          >
            <div className="project-card__media">
              <div className="project-card__badge">{pickText(project.resultBadge, locale)}</div>
              <div className="project-card__shard project-card__shard--one" />
              <div className="project-card__shard project-card__shard--two" />
              <div className="project-card__shard project-card__shard--three" />
              <div className="project-card__signal">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.period}</span>
              </div>
              <div className="project-card__gridline" />
            </div>

            <div className="project-card__meta">
              {pickText(project.company, locale)} / {pickText(project.category, locale)}
            </div>
            <div className="project-card__title">{pickText(project.title, locale)}</div>
            <p className="project-card__description">{pickText(project.summary, locale)}</p>
            <div className="project-card__footer">
              <div className="project-card__tags">
                {project.tags.slice(0, 3).map((tag) => (
                  <span className="project-card__tag" key={`${project.id}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-card__cta">
                {locale === 'zh' ? '展开案例' : 'Open Case'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
