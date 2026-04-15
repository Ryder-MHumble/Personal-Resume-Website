import type { ProjectDetail, ProjectSlug } from '../types/content'
import { careerProjectDetails } from './project-details/careerDetails'
import { platformProjectDetails } from './project-details/platformDetails'

export const projectDetails: ProjectDetail[] = [
  ...careerProjectDetails,
  ...platformProjectDetails,
]

export const getProjectDetail = (slug: ProjectSlug) =>
  projectDetails.find((project) => project.slug === slug) ?? null
