import {
  createElement,
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useAppStore } from '../../systems/state/appStore'

type RevealBlockProps<T extends ElementType> = {
  as?: T
  children: React.ReactNode
  className?: string
  revealDelay?: number
  revealDistance?: number
  revealOnce?: boolean
  rootMargin?: string
  threshold?: number
  style?: CSSProperties
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>

const DEFAULT_ROOT_MARGIN = '0px 0px -12% 0px'

export function RevealBlock<T extends ElementType = 'div'>({
  as,
  children,
  className,
  revealDelay = 0,
  revealDistance = 28,
  revealOnce = true,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = 0.18,
  style,
  ...rest
}: RevealBlockProps<T>) {
  const reducedMotion = useAppStore((state) => state.reducedMotion)
  const nodeRef = useRef<HTMLElement | null>(null)
  const enteredRef = useRef(false)
  const [inView, setInView] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setInView(true)
      return
    }

    const node = nodeRef.current

    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enteredRef.current = true
          setInView(true)
          return
        }

        if (!revealOnce || !enteredRef.current) {
          setInView(false)
        }
      },
      {
        threshold: [0, threshold, 0.6],
        rootMargin,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [reducedMotion, revealOnce, rootMargin, threshold])

  const mergedStyle = useMemo(
    () =>
      ({
        ...style,
        '--reveal-delay': `${revealDelay}ms`,
        '--reveal-distance': `${revealDistance}px`,
      }) as CSSProperties,
    [revealDelay, revealDistance, style],
  )

  const Component = (as ?? 'div') as ElementType

  return createElement(
    Component,
    {
      ...rest,
      ref: nodeRef,
      className: `reveal-block ${inView ? 'is-inview' : ''}${className ? ` ${className}` : ''}`,
      style: mergedStyle,
      'data-inview': inView ? 'true' : 'false',
    },
    children,
  )
}
