import type { LocalizedText } from '../../types/content'

export const pickText = (value: LocalizedText, locale: 'zh' | 'en') => value[locale]
