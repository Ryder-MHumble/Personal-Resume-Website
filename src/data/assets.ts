import type { AssetManifest } from '../types/runtime'

export const assetManifest: AssetManifest[] = [
  {
    id: 'font-plus-jakarta-sans',
    type: 'font',
    priority: 'critical',
    mobilePolicy: 'always',
    preloadGroup: 'boot',
  },
  {
    id: 'font-ibm-plex-mono',
    type: 'font',
    priority: 'critical',
    mobilePolicy: 'always',
    preloadGroup: 'boot',
  },
  {
    id: 'scene-bootstrap',
    type: 'runtime',
    priority: 'critical',
    mobilePolicy: 'always',
    preloadGroup: 'scene',
  },
  {
    id: 'hero-layout-measure',
    type: 'layout',
    priority: 'high',
    mobilePolicy: 'always',
    preloadGroup: 'boot',
  },
  {
    id: 'shader-warmup',
    type: 'shader',
    priority: 'high',
    mobilePolicy: 'liteFallback',
    preloadGroup: 'scene',
  },
]
