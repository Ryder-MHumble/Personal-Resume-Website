import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useAppStore } from '../../systems/state/appStore'

type RevealBlockBaseProps = {
  children: React.ReactNode
  className?: string
  revealDelay?: number
  revealDistance?: number
  revealOnce?: boolean
  rootMargin?: string
  threshold?: number
  style?: CSSProperties
}

type RevealDivProps = RevealBlockBaseProps &
  Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'style'> & {
    as?: 'div'
  }

type RevealArticleProps = RevealBlockBaseProps &
  Omit<ComponentPropsWithoutRef<'article'>, 'children' | 'className' | 'style'> & {
    as: 'article'
  }

type RevealButtonProps = RevealBlockBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'style'> & {
    as: 'button'
  }

type RevealAnchorProps = RevealBlockBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className' | 'style'> & {
    as: 'a'
  }

type RevealBlockProps =
  | RevealDivProps
  | RevealArticleProps
  | RevealButtonProps
  | RevealAnchorProps

const DEFAULT_ROOT_MARGIN = '0px 0px -12% 0px'
type EntryHandler = (entry: IntersectionObserverEntry) => void

interface ObserverPoolEntry {
  observer: IntersectionObserver
  handlers: WeakMap<Element, EntryHandler>
  refs: number
}

const observerPool = new Map<string, ObserverPoolEntry>()

const getObserverPoolEntry = (rootMargin: string, threshold: number): ObserverPoolEntry => {
  const key = `${rootMargin}|${threshold}`
  const existing = observerPool.get(key)

  if (existing) {
    return existing
  }

  const handlers = new WeakMap<Element, EntryHandler>()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const handler = handlers.get(entry.target)

        if (handler) {
          handler(entry)
        }
      })
    },
    {
      threshold: [0, threshold, 0.6],
      rootMargin,
    },
  )

  const poolEntry: ObserverPoolEntry = {
    observer,
    handlers,
    refs: 0,
  }

  observerPool.set(key, poolEntry)
  return poolEntry
}

const observeShared = (
  element: Element,
  rootMargin: string,
  threshold: number,
  handler: EntryHandler,
) => {
  const key = `${rootMargin}|${threshold}`
  const poolEntry = getObserverPoolEntry(rootMargin, threshold)
  poolEntry.handlers.set(element, handler)
  poolEntry.refs += 1
  poolEntry.observer.observe(element)

  return () => {
    const current = observerPool.get(key)

    if (!current) {
      return
    }

    current.observer.unobserve(element)
    current.handlers.delete(element)
    current.refs = Math.max(0, current.refs - 1)

    if (current.refs === 0) {
      current.observer.disconnect()
      observerPool.delete(key)
    }
  }
}

export function RevealBlock({
  as = 'div',
  children,
  className,
  revealDelay = 0,
  revealDistance = 28,
  revealOnce = true,
  rootMargin = DEFAULT_ROOT_MARGIN,
  threshold = 0.18,
  style,
  ...rest
}: RevealBlockProps) {
  const reducedMotion = useAppStore((state) => state.reducedMotion)
  const nodeRef = useRef<HTMLElement | null>(null)
  const enteredRef = useRef(false)
  const [inView, setInView] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      enteredRef.current = true
      return
    }

    const node = nodeRef.current

    if (!node || typeof IntersectionObserver === 'undefined') {
      const fallbackFrame = window.requestAnimationFrame(() => {
        setInView(true)
      })

      return () => {
        window.cancelAnimationFrame(fallbackFrame)
      }
    }

    const stopObserving = observeShared(node, rootMargin, threshold, (entry) => {
      if (entry.isIntersecting) {
        enteredRef.current = true
        setInView(true)
        return
      }

      if (!revealOnce || !enteredRef.current) {
        setInView(false)
      }
    })

    return () => {
      stopObserving()
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

  const visible = reducedMotion || inView
  const mergedClassName = `reveal-block ${visible ? 'is-inview' : ''}${className ? ` ${className}` : ''}`
  const setNodeRef = (node: HTMLElement | null) => {
    nodeRef.current = node
  }

  if (as === 'article') {
    const articleProps = rest as Omit<ComponentPropsWithoutRef<'article'>, 'children' | 'className' | 'style'>

    return (
      <article
        {...articleProps}
        ref={setNodeRef}
        className={mergedClassName}
        style={mergedStyle}
        data-inview={visible ? 'true' : 'false'}
      >
        {children}
      </article>
    )
  }

  if (as === 'button') {
    const buttonProps = rest as Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'style'>

    return (
      <button
        {...buttonProps}
        ref={setNodeRef}
        className={mergedClassName}
        style={mergedStyle}
        data-inview={visible ? 'true' : 'false'}
      >
        {children}
      </button>
    )
  }

  if (as === 'a') {
    const anchorProps = rest as Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className' | 'style'>

    return (
      <a
        {...anchorProps}
        ref={setNodeRef}
        className={mergedClassName}
        style={mergedStyle}
        data-inview={visible ? 'true' : 'false'}
      >
        {children}
      </a>
    )
  }

  const divProps = rest as Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'style'>

  return (
    <div
      {...divProps}
      ref={setNodeRef}
      className={mergedClassName}
      style={mergedStyle}
      data-inview={visible ? 'true' : 'false'}
    >
      {children}
    </div>
  )
}
