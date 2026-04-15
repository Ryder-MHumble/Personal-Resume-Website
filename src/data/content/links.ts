import type { LinkSurface } from '../../types/content'
export const linkSurfaces: LinkSurface[] = [
  {
    id: 'github',
    kicker: {
      zh: 'Code surface',
      en: 'Code surface',
    },
    title: {
      zh: 'GitHub 不是附件，而是我的第二履历。',
      en: 'GitHub is not an attachment. It is my second resume.',
    },
    description: {
      zh: '优先看能代表判断力与执行密度的仓库，而不是仓库数量本身。',
      en: 'Start with repositories that show judgment and execution density, not repository count.',
    },
    items: [
      {
        label: {
          zh: 'Ryder-MHumble / GitHub 主页',
          en: 'Ryder-MHumble / GitHub Profile',
        },
        detail: {
          zh: '统一查看开源项目与实验记录',
          en: 'Unified entry for open-source work and experiments',
        },
        href: 'https://github.com/Ryder-MHumble',
        external: true,
      },
      {
        label: {
          zh: 'EvoLabeler',
          en: 'EvoLabeler',
        },
        detail: {
          zh: 'AI Agent 驱动的 MLOps 引擎',
          en: 'AI-agent-driven MLOps engine',
        },
        href: 'https://github.com/Ryder-MHumble/EvoLabeler-AIAgent-MLOps',
        external: true,
      },
    ],
  },
  {
    id: 'research',
    kicker: {
      zh: 'Research surface',
      en: 'Research surface',
    },
    title: {
      zh: '研究与开源，是我做产品时的第二判断系。',
      en: 'Research and open source form a second judgment system behind my product work.',
    },
    description: {
      zh: '我不把论文当装饰，也不把算法当神秘学，而是把它们转回真实产品语境。',
      en: 'I do not treat papers as decoration or algorithms as mysticism. I translate them back into product context.',
    },
    items: [
      {
        label: {
          zh: 'LPS-YOLO',
          en: 'LPS-YOLO',
        },
        detail: {
          zh: 'Scientific Reports 论文与代码',
          en: 'Scientific Reports paper and code',
        },
        href: 'https://github.com/Ryder-MHumble/LPS-YOLO',
        external: true,
      },
      {
        label: {
          zh: 'TDA-YOLO',
          en: 'TDA-YOLO',
        },
        detail: {
          zh: '自适应目标检测框架研究',
          en: 'Adaptive detection framework research',
        },
        href: 'https://github.com/Ryder-MHumble/TDA-YOLO',
        external: true,
      },
    ],
  },
  {
    id: 'expression',
    kicker: {
      zh: 'Public expression',
      en: 'Public expression',
    },
    title: {
      zh: '我也在公开表达，但表达服务于判断，而不是表演。',
      en: 'I publish in public, but expression serves judgment, not performance.',
    },
    description: {
      zh: 'Bilibili 和观点片段一起构成我的对外表达面。',
      en: 'Bilibili and insight fragments form the public-facing side of how I think.',
    },
    items: [
      {
        label: {
          zh: 'Bilibili',
          en: 'Bilibili',
        },
        detail: {
          zh: '外部表达与个人内容更新',
          en: 'Public-facing content and updates',
        },
        href: 'https://space.bilibili.com/296920670?spm_id_from=333.1007.0.0',
        external: true,
      },
      {
        label: {
          zh: '观点卡片',
          en: 'Insight Cards',
        },
        detail: {
          zh: '继续向下滚动，查看我对 AI 产品的判断',
          en: 'Scroll further for the way I frame AI products',
        },
        href: '#insights',
      },
    ],
  },
]

