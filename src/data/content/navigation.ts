import type { NavigationItem } from '../../types/content'
export const navigationItems: NavigationItem[] = [
  {
    id: 'hero',
    label: {
      zh: '起始甲板',
      en: 'Launch Deck',
    },
    detail: {
      zh: '先看定位、证据和总气质',
      en: 'Positioning, proof, and first impression',
    },
  },
  {
    id: 'proof',
    label: {
      zh: '证据区',
      en: 'Proof Layer',
    },
    detail: {
      zh: '快速判断我到底擅长什么',
      en: 'Understand the shape of my work fast',
    },
  },
  {
    id: 'featured',
    label: {
      zh: '旗舰案例',
      en: 'Flagship Cases',
    },
    detail: {
      zh: '职业案例与平台项目双分组',
      en: 'Grouped career and platform cases',
    },
  },
  {
    id: 'timeline',
    label: {
      zh: '经历脊柱',
      en: 'Career Spine',
    },
    detail: {
      zh: '工作与教育的纵向轨迹',
      en: 'A vertical track of work and education',
    },
  },
  {
    id: 'links',
    label: {
      zh: '外部表面',
      en: 'External Surfaces',
    },
    detail: {
      zh: 'GitHub、研究、表达与联系',
      en: 'GitHub, research, public expression, and reach-out',
    },
  },
  {
    id: 'insights',
    label: {
      zh: '判断片段',
      en: 'Judgment Notes',
    },
    detail: {
      zh: '我如何看待 AI 产品',
      en: 'How I frame AI products',
    },
  },
  {
    id: 'contact',
    label: {
      zh: '联系轨道',
      en: 'Contact Orbit',
    },
    detail: {
      zh: '如果你想聊下一步',
      en: 'If you want to discuss the next move',
    },
  },
]

export const menuNote = {
  zh: '这个首页不打算把简历全部摊平，而是先让你在几分钟内判断：我是否值得继续聊下去。',
  en: 'This homepage does not flatten my entire resume. It is built to help you decide within minutes whether I am worth the next conversation.',
}

export const footerCopy = {
  zh: 'AI 产品经理 · Agent 系统设计 · 平台工具与 0→1 交付',
  en: 'AI product manager · agent systems · platform tools · 0→1 delivery',
}

