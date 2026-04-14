import { useSyncExternalStore } from 'react'
import type { DeviceProfile, TransitionState } from '../../types/runtime'
import type { Locale, OverlayState } from '../../types/content'

export interface AppState {
  deviceProfile: DeviceProfile
  reducedMotion: boolean
  transitionState: TransitionState
  loadingProgress: number
  menuOpen: boolean
  ready: boolean
  webglAvailable: boolean
  locale: Locale
  activeOverlay: OverlayState
}

type Listener = () => void

class AppStore {
  private state: AppState = {
    deviceProfile: 'desktop',
    reducedMotion: false,
    transitionState: 'boot',
    loadingProgress: 0,
    menuOpen: false,
    ready: false,
    webglAvailable: true,
    locale: 'zh',
    activeOverlay: {
      open: false,
      type: null,
      id: null,
    },
  }

  private listeners = new Set<Listener>()

  getState() {
    return this.state
  }

  setState(partial: Partial<AppState>) {
    this.state = {
      ...this.state,
      ...partial,
    }

    this.listeners.forEach((listener) => listener())
  }

  subscribe = (listener: Listener) => {
    this.listeners.add(listener)

    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const appStore = new AppStore()

export const setAppState = (partial: Partial<AppState>) => {
  appStore.setState(partial)
}

export const useAppStore = <T,>(selector: (state: AppState) => T) =>
  useSyncExternalStore(
    appStore.subscribe,
    () => selector(appStore.getState()),
    () => selector(appStore.getState()),
  )
