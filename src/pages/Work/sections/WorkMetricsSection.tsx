import { RevealBlock } from '../../../components/RevealBlock/RevealBlock'
import { pickText } from '../../../data/siteContent'
import type { WorkSectionProps } from './types'

export function WorkMetricsSection({ locale, project }: WorkSectionProps) {
  return (
    <section className="work-metrics">
      <RevealBlock as="div" className="work-metrics__meta" revealDistance={20}>
        <p className="eyebrow">{locale === 'zh' ? 'Metric as of' : 'Metric as of'}</p>
        <p>
          {locale === 'zh'
            ? `指标口径日期：${project.metricAsOf}`
            : `Metric baseline date: ${project.metricAsOf}`}
        </p>
      </RevealBlock>
      {project.keyMetrics.map((metric, index) => (
        <RevealBlock
          as="article"
          className="work-metric"
          key={pickText(metric.label, locale)}
          revealDelay={index * 60}
          revealDistance={24}
        >
          <p className="eyebrow">{pickText(metric.label, locale)}</p>
          <p className="work-metric__value">{metric.value}</p>
          <p className="work-metric__note">{pickText(metric.note, locale)}</p>
        </RevealBlock>
      ))}
    </section>
  )
}
