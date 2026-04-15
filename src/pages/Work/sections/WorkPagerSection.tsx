import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkPagerSectionProps } from './types'

export function WorkPagerSection({
  locale,
  nextProject,
  previousProject,
  onBackHome,
  onOpenProject,
}: WorkPagerSectionProps) {
  const pagerProject = nextProject ?? previousProject

  return (
    <section className="work-section work-section--pager">
      <div className="work-pager">
        <RevealBlock
          as="button"
          className="work-pager__item"
          type="button"
          onClick={onBackHome}
          revealDelay={80}
          revealDistance={20}
        >
          <span className="eyebrow">{locale === 'zh' ? 'Back home' : 'Back home'}</span>
          <strong>{locale === 'zh' ? '返回旗舰首页' : 'Return to the flagship home'}</strong>
        </RevealBlock>

        {pagerProject ? (
          <RevealBlock
            as="button"
            className="work-pager__item"
            key={pagerProject.slug}
            type="button"
            onClick={() => onOpenProject(pagerProject.slug)}
            revealDelay={140}
            revealDistance={20}
          >
            <span className="eyebrow">
              {nextProject
                ? locale === 'zh'
                  ? 'Next case'
                  : 'Next case'
                : locale === 'zh'
                  ? 'Previous case'
                  : 'Previous case'}
            </span>
            <strong>{pickText(pagerProject.title, locale)}</strong>
          </RevealBlock>
        ) : null}
      </div>
    </section>
  )
}
