import { useEffect, useRef } from 'react'
import { useAppStore } from '../../systems/state/appStore'

type CursorKind = 'default' | 'link' | 'case'

const POINT_COUNT = 7

const getCursorKind = (target: EventTarget | null): CursorKind => {
  if (!(target instanceof HTMLElement)) {
    return 'default'
  }

  const explicitKind = target.closest<HTMLElement>('[data-cursor-kind]')?.dataset.cursorKind

  if (explicitKind === 'case' || explicitKind === 'link') {
    return explicitKind
  }

  if (target.closest('a, button')) {
    return 'link'
  }

  return 'default'
}

export function CursorLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const deviceProfile = useAppStore((state) => state.deviceProfile)
  const reducedMotion = useAppStore((state) => state.reducedMotion)
  const ready = useAppStore((state) => state.ready)

  useEffect(() => {
    if (deviceProfile !== 'desktop' || reducedMotion || !ready) {
      return
    }

    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5, active: false }
    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: pointer.x,
      y: pointer.y,
    }))
    let cursorKind: CursorKind = 'default'
    let animationFrame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
      cursorKind = getCursorKind(event.target)
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let index = 0; index < points.length; index += 1) {
        const source = index === 0 ? pointer : points[index - 1]
        const easing = index === 0 ? 0.28 : 0.2 - index * 0.012

        points[index].x += (source.x - points[index].x) * easing
        points[index].y += (source.y - points[index].y) * easing
      }

      if (!pointer.active) {
        animationFrame = window.requestAnimationFrame(draw)
        return
      }

      context.lineCap = 'round'
      context.lineJoin = 'round'

      for (let index = points.length - 1; index > 0; index -= 1) {
        const point = points[index]
        const previous = points[index - 1]
        const alpha = index / points.length
        const width = cursorKind === 'case' ? 5 - index * 0.42 : 3.8 - index * 0.34

        context.strokeStyle =
          cursorKind === 'case'
            ? `rgba(39, 71, 255, ${0.12 + alpha * 0.18})`
            : `rgba(208, 219, 255, ${0.08 + alpha * 0.2})`
        context.lineWidth = Math.max(0.6, width)
        context.beginPath()
        context.moveTo(previous.x, previous.y)
        context.lineTo(point.x, point.y)
        context.stroke()
      }

      const lead = points[0]
      const radius = cursorKind === 'case' ? 4.6 : cursorKind === 'link' ? 3.7 : 3.1

      context.fillStyle = cursorKind === 'case' ? 'rgba(39, 71, 255, 0.85)' : 'rgba(255, 255, 255, 0.88)'
      context.beginPath()
      context.arc(lead.x, lead.y, radius, 0, Math.PI * 2)
      context.fill()

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }
  }, [deviceProfile, ready, reducedMotion])

  if (deviceProfile !== 'desktop' || reducedMotion || !ready) {
    return null
  }

  return <canvas ref={canvasRef} className="cursor-layer" aria-hidden="true" />
}
