import type { ProjectCase, ProjectDetail, ProjectSlug } from '../../types/content'
import { featuredProjects } from '../siteContent'

export const getProjectCase = (slug: ProjectSlug): ProjectCase => {
  const projectCase = featuredProjects.find((project) => project.slug === slug)

  if (!projectCase) {
    throw new Error(`Missing project case for slug: ${slug}`)
  }

  return projectCase
}

export const withCase = (
  slug: ProjectSlug,
  detail: Omit<ProjectDetail, keyof ProjectCase>,
): ProjectDetail => {
  return {
    ...getProjectCase(slug),
    ...detail,
  }
}
