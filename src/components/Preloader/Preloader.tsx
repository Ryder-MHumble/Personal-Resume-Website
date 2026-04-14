import { useMemo } from 'react'
import { useAppStore } from '../../systems/state/appStore'

export function Preloader() {
  const progress = useAppStore((state) => state.loadingProgress)
  const transitionState = useAppStore((state) => state.transitionState)
  const percent = useMemo(() => Math.round(progress * 100), [progress])
  const stateClass =
    transitionState === 'preloading'
      ? 'is-preloading'
      : transitionState === 'introLock'
      ? 'is-locking'
      : transitionState === 'introHandoff'
        ? 'is-handoff'
        : transitionState === 'introSettle'
          ? 'is-settling'
          : transitionState === 'ready' || transitionState === 'menuLocked'
            ? 'is-hidden'
            : ''

  return (
    <div
      className={`preloader ${stateClass}`}
      aria-hidden={transitionState === 'ready'}
    >
      <div className="preloader__veil" aria-hidden="true" />
      <div className="preloader__aperture" aria-hidden="true" />
      <div className="preloader__glowline" aria-hidden="true" />

      <div className="preloader__bar">
        <div
          className="preloader__bar-fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div className="preloader__digits" aria-label={`Loading ${percent}%`}>
        {String(percent).padStart(3, '0')}
      </div>
      <p className="preloader__caption">Booting the stage / settling Ryder interface</p>
    </div>
  )
}
