import { projectSlugs, type ProjectSlug, type RouteState } from '../types/content'

const normalizeHistoryState = (historyState?: Partial<RouteState> | null) => ({
  restoreProjectId:
    typeof historyState?.restoreProjectId === 'string'
      ? historyState.restoreProjectId
      : null,
  restoreScrollY:
    typeof historyState?.restoreScrollY === 'number' &&
    Number.isFinite(historyState.restoreScrollY) &&
    historyState.restoreScrollY > 0
      ? historyState.restoreScrollY
      : 0,
})

export const createHomeRoute = (
  restoreProjectId: string | null = null,
  restoreScrollY = 0,
): RouteState => ({
  page: 'home',
  projectSlug: null,
  restoreProjectId,
  restoreScrollY,
})

export const createWorkRoute = (projectSlug: ProjectSlug): RouteState => ({
  page: 'work',
  projectSlug,
  restoreProjectId: null,
  restoreScrollY: 0,
})

export const createWorkRouteWithOrigin = (
  projectSlug: ProjectSlug,
  restoreProjectId: string | null,
  restoreScrollY: number,
): RouteState => ({
  page: 'work',
  projectSlug,
  restoreProjectId,
  restoreScrollY,
})

export const createResourcesRoute = (
  restoreProjectId: string | null = null,
  restoreScrollY = 0,
): RouteState => ({
  page: 'resources',
  projectSlug: null,
  restoreProjectId,
  restoreScrollY,
})

export const getRouteUrl = (route: RouteState) =>
  route.page === 'work' && route.projectSlug
    ? `/work/${route.projectSlug}`
    : route.page === 'resources'
      ? '/resources'
      : '/'

export const parseLocationRoute = (
  pathname: string,
  historyState?: Partial<RouteState> | null,
): RouteState => {
  const normalizedState = normalizeHistoryState(historyState)
  const cleanPath = pathname.replace(/\/+$/, '') || '/'
  const resourcesRoute = cleanPath === '/resources'
  const workMatch = cleanPath.match(/^\/work\/([^/]+)$/)
  const rawProjectSlug = workMatch ? decodeURIComponent(workMatch[1]) : null

  if (resourcesRoute) {
    return createResourcesRoute(normalizedState.restoreProjectId, normalizedState.restoreScrollY)
  }

  if (
    rawProjectSlug &&
    projectSlugs.some((projectSlug) => projectSlug === rawProjectSlug)
  ) {
    return {
      page: 'work',
      projectSlug: rawProjectSlug as ProjectSlug,
      restoreProjectId: normalizedState.restoreProjectId,
      restoreScrollY: normalizedState.restoreScrollY,
    }
  }

  return createHomeRoute(normalizedState.restoreProjectId, normalizedState.restoreScrollY)
}
