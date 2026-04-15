import type {
  ResourceHubCollection,
  ResourceHubHighlight,
  ResourceHubIntro,
} from '../../types/content'

export const resourceHubIntro: ResourceHubIntro = {
  eyebrow: {
    zh: 'Open Resource Library',
    en: 'Open Resource Library',
  },
  title: {
    zh: '我把长期沉淀的项目、教程、工具与方法论都公开放在这里。',
    en: 'I publish my long-term project assets, guides, tool stacks, and frameworks here.',
  },
  summary: {
    zh: '这个页面不谈求职叙事，只提供可以直接使用、参考或复刻的免费材料。',
    en: 'This page is not resume storytelling. It is a practical collection of free materials you can use and remix.',
  },
  note: {
    zh: '持续更新，优先围绕 Agent 系统、平台工程化与产品方法论。',
    en: 'Continuously updated with a focus on agent systems, platform engineering, and product methodology.',
  },
}

export const resourceHubHighlights: ResourceHubHighlight[] = [
  {
    id: 'repo-scale',
    label: {
      zh: '公开仓库入口',
      en: 'Public Repositories',
    },
    value: '10+',
    note: {
      zh: '覆盖后端、前端、监控、Agent 网关与报告生成系统',
      en: 'Covering backend, frontend, monitoring, agent gateway, and report-generation systems',
    },
  },
  {
    id: 'resource-lanes',
    label: {
      zh: '资料分区',
      en: 'Resource Lanes',
    },
    value: '04',
    note: {
      zh: '项目、教程、工具收藏、方法论四条主线',
      en: 'Projects, guides, toolkits, and methodology',
    },
  },
  {
    id: 'access-model',
    label: {
      zh: '访问方式',
      en: 'Access Model',
    },
    value: 'Free',
    note: {
      zh: '全部为公开可访问资源，无需内网权限',
      en: 'All resources are publicly accessible with no internal access required',
    },
  },
]

export const resourceHubCollections: ResourceHubCollection[] = [
  {
    id: 'github-projects',
    title: {
      zh: 'GitHub 项目集',
      en: 'GitHub Projects',
    },
    description: {
      zh: '按“平台底座 → 工作台 → 监控与自动化”浏览我的核心开源项目。',
      en: 'Browse the core repos in the order of platform core, workbench surfaces, and monitoring automation.',
    },
    items: [
      {
        id: 'github-profile',
        title: {
          zh: 'Ryder-MHumble / GitHub 主页',
          en: 'Ryder-MHumble / GitHub Profile',
        },
        detail: {
          zh: '统一查看我所有公开项目与最近更新。',
          en: 'The single entry for all public repos and latest updates.',
        },
        href: 'https://github.com/Ryder-MHumble',
        kind: 'github',
        tags: ['Profile', 'All Projects'],
      },
      {
        id: 'deanagent-backend',
        title: {
          zh: 'DeanAgent-Backend',
          en: 'DeanAgent-Backend',
        },
        detail: {
          zh: '情报引擎后端底座：多源采集、标准化处理与 API 服务。',
          en: 'Backend core for signal intake, normalization, and API delivery.',
        },
        href: 'https://github.com/Ryder-MHumble/DeanAgent-Backend',
        kind: 'github',
        tags: ['Backend', 'Signal Pipeline', 'API'],
      },
      {
        id: 'deanagent-frontend',
        title: {
          zh: 'Dean-Agent-Fronted',
          en: 'Dean-Agent-Fronted',
        },
        detail: {
          zh: '情报工作台前端实现，包含多模块聚合与交互界面。',
          en: 'Frontend workbench implementation with multi-module intelligence surfaces.',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-Agent-Fronted',
        kind: 'github',
        tags: ['Frontend', 'Workbench'],
      },
      {
        id: 'scholars-system',
        title: {
          zh: 'Scholars-System',
          en: 'Scholars-System',
        },
        detail: {
          zh: '学者工作台与人才图谱相关系统实现。',
          en: 'Scholar workbench and talent-graph oriented system.',
        },
        href: 'https://github.com/Ryder-MHumble/Scholars-System',
        kind: 'github',
        tags: ['Scholar Graph', 'Workbench'],
      },
    ],
  },
  {
    id: 'guides-and-docs',
    title: {
      zh: '教程与文档',
      en: 'Guides and Documentation',
    },
    description: {
      zh: '适合快速入门我的工程方案，包含接口、结构、部署与复盘材料。',
      en: 'For fast onboarding into my engineering approach, including interfaces, architecture, deployment, and retrospectives.',
    },
    items: [
      {
        id: 'backend-docs',
        title: {
          zh: 'DeanAgent-Backend 文档入口',
          en: 'DeanAgent-Backend Docs Entry',
        },
        detail: {
          zh: '后端仓库中的接口与系统说明文档。',
          en: 'API and system documentation included in the backend repo.',
        },
        href: 'https://github.com/Ryder-MHumble/DeanAgent-Backend',
        kind: 'guide',
        tags: ['Docs', 'Backend', 'Architecture'],
      },
      {
        id: 'weekly-report-guides',
        title: {
          zh: 'File-to-WeeklyReport 教程材料',
          en: 'File-to-WeeklyReport Guide',
        },
        detail: {
          zh: '文档转周报系统的模板配置与生成流程说明。',
          en: 'Template setup and generation workflow for the document-to-brief pipeline.',
        },
        href: 'https://github.com/Ryder-MHumble/File-to-WeeklyReport',
        kind: 'guide',
        tags: ['Template', 'Automation', 'Workflow'],
      },
      {
        id: 'monitoring-framework-guide',
        title: {
          zh: 'academic-monitor 使用说明',
          en: 'academic-monitor Usage Guide',
        },
        detail: {
          zh: '监控框架与告警策略相关实现与说明。',
          en: 'Implementation and usage notes for the monitoring and alerting framework.',
        },
        href: 'https://github.com/Ryder-MHumble/academic-monitor',
        kind: 'guide',
        tags: ['Monitoring', 'Ops'],
      },
    ],
  },
  {
    id: 'toolbox-collection',
    title: {
      zh: 'AI 工具收藏',
      en: 'AI Toolbox Collection',
    },
    description: {
      zh: '我常用并已验证过的 Agent、监控与自动化工具实践。',
      en: 'Tooling stacks I use and validate in real agent, monitoring, and automation workflows.',
    },
    items: [
      {
        id: 'nanobot',
        title: {
          zh: 'Dean-NanoBot（Agent 网关）',
          en: 'Dean-NanoBot (Agent Gateway)',
        },
        detail: {
          zh: '多工具编排与调用路由示例，适合做 Agent 协作参考。',
          en: 'Tool orchestration and routing reference for agent collaboration.',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-NanoBot',
        kind: 'tools',
        tags: ['Agent Gateway', 'Tool Routing'],
      },
      {
        id: 'evolabeler',
        title: {
          zh: 'EvoLabeler',
          en: 'EvoLabeler',
        },
        detail: {
          zh: 'AI Agent 驱动的 MLOps 引擎实验项目。',
          en: 'An AI-agent-driven MLOps engine experiment.',
        },
        href: 'https://github.com/Ryder-MHumble/EvoLabeler-AIAgent-MLOps',
        kind: 'tools',
        tags: ['MLOps', 'Agents'],
      },
      {
        id: 'chatgpt-tools',
        title: {
          zh: '我常用的 OpenAI 工具入口',
          en: 'My Frequently Used OpenAI Tool Entry',
        },
        detail: {
          zh: '面向 Agent/自动化场景的官方平台入口。',
          en: 'Official platform entry for agent and automation scenarios.',
        },
        href: 'https://platform.openai.com/docs',
        kind: 'tools',
        tags: ['OpenAI', 'API', 'Docs'],
      },
    ],
  },
  {
    id: 'methodology',
    title: {
      zh: '方法论与实践框架',
      en: 'Methodology and Frameworks',
    },
    description: {
      zh: '从“问题定义 → 系统拆解 → 迭代验证”的实战方法。',
      en: 'Practical approaches from problem framing to system decomposition and iterative validation.',
    },
    items: [
      {
        id: 'video-channel',
        title: {
          zh: 'B 站频道：产品与方法论输出',
          en: 'Bilibili Channel: Product and Method Notes',
        },
        detail: {
          zh: '持续发布 AI 产品、系统化思考与案例复盘内容。',
          en: 'Ongoing notes on AI product thinking, system design, and case retrospectives.',
        },
        href: 'https://space.bilibili.com/296920670?spm_id_from=333.1007.0.0',
        kind: 'method',
        tags: ['Video', 'Methodology'],
      },
      {
        id: 'resume-website',
        title: {
          zh: 'Personal-Resume-Website',
          en: 'Personal-Resume-Website',
        },
        detail: {
          zh: '当前站点源码，完整展示“案例页 + 信息架构 + 性能优化”方法。',
          en: 'Source code of this site, showing case-page design, information architecture, and performance optimization.',
        },
        href: 'https://github.com/Ryder-MHumble/Personal-Resume-Website',
        kind: 'method',
        tags: ['Case Design', 'Frontend'],
      },
      {
        id: 'contact-for-materials',
        title: {
          zh: '更多专题材料（可免费领取）',
          en: 'More Topic Materials (Free)',
        },
        detail: {
          zh: '如果你需要某个专题的讲稿或模板，可邮件联系我直接获取。',
          en: 'If you need topic-specific decks or templates, email me and I will share them for free.',
        },
        href: 'mailto:mhumble010221@gmail.com',
        kind: 'method',
        tags: ['Template', 'Deck', 'Free'],
      },
    ],
  },
]
