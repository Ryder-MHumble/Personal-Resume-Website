import type {
  CapabilityTag,
  ExperienceEntry,
  HomeSectionId,
  InsightExcerpt,
  LinkSurface,
  LocalizedText,
  NavigationItem,
  ProfileIdentity,
  ProjectCase,
  ProofStat,
} from '../types/content'

export const pickText = (value: LocalizedText, locale: 'zh' | 'en') => value[locale]

export const profileIdentity: ProfileIdentity = {
  name: {
    zh: '孙铭浩',
    en: 'Sun Minghao',
  },
  brandName: 'Ryder',
  formalNameLatin: 'Sun Minghao',
  roleLine: {
    zh: 'AI Product Manager / Agent Systems / 0→1 Builder',
    en: 'AI Product Manager / Agent Systems / 0→1 Builder',
  },
  positioning: {
    zh: '把复杂的 AI 能力压成清晰的产品路径，做给真实用户能用、团队能交付、组织能扩张的系统。',
    en: 'I turn complex AI capability into product paths that real users can adopt, teams can ship, and organizations can scale.',
  },
  philosophy: {
    zh: '只做 AI 的驾驭者，不做 AI 的信徒。',
    en: 'Drive AI with judgment. Do not worship it.',
  },
  summary: {
    zh: '聚焦 Agent 系统、平台工具和企业级 AI 产品落地，擅长在用户场景、系统设计和交付节奏之间建立稳定闭环。',
    en: 'Focused on agent systems, platform tooling, and enterprise AI products with a bias toward stable delivery across user context, system design, and execution cadence.',
  },
  location: {
    zh: '北京 / 杭州 / Remote',
    en: 'Beijing / Hangzhou / Remote',
  },
  availability: {
    zh: '开放 AI 产品、Agent 系统、平台工具与 0→1 项目交流。',
    en: 'Open to conversations around AI products, agent systems, platform tooling, and 0→1 builds.',
  },
  primaryCta: {
    zh: '查看旗舰案例',
    en: 'View Flagship Cases',
  },
  secondaryCta: {
    zh: '发起一次交流',
    en: 'Start a Conversation',
  },
}

export const proofStats: ProofStat[] = [
  {
    id: 'company-count',
    value: '06',
    label: {
      zh: 'AI 团队与公司经历',
      en: 'AI Teams Worked With',
    },
    note: {
      zh: '美团、智谱、中关村人工智能学院等',
      en: 'Including Meituan, Zhipu AI, and Zhongguancun AI Institute',
    },
  },
  {
    id: 'agent-products',
    value: '07',
    label: {
      zh: 'Agent / AI 产品实践',
      en: 'Agent / AI Products',
    },
    note: {
      zh: '覆盖招聘、MCP、信息引擎、ChatBI 等方向',
      en: 'Across recruitment, MCP, information engines, and ChatBI',
    },
  },
  {
    id: 'mcp-tools',
    value: '35',
    label: {
      zh: 'MCP Tools 封装规模',
      en: 'MCP Tools Packaged',
    },
    note: {
      zh: '8 个 MCP Server 封装成可调用内部服务',
      en: '35 tools across 8 MCP servers wrapped into internal services',
    },
  },
  {
    id: 'signal-sources',
    value: '100+',
    label: {
      zh: '多媒体信源接入',
      en: 'Signal Sources Integrated',
    },
    note: {
      zh: '构建每日推送、人才地图与内部论文图谱',
      en: 'Used to build daily push, talent map, and internal paper atlas',
    },
  },
]

export const capabilityTags: CapabilityTag[] = [
  {
    id: 'agent-design',
    label: {
      zh: 'Agent 架构设计',
      en: 'Agent Architecture',
    },
  },
  {
    id: 'platform-pm',
    label: {
      zh: '平台产品规划',
      en: 'Platform Product Strategy',
    },
  },
  {
    id: 'devtools',
    label: {
      zh: '开发者工具与 MCP',
      en: 'Developer Tools & MCP',
    },
  },
  {
    id: 'delivery',
    label: {
      zh: '0→1 交付推进',
      en: '0→1 Delivery',
    },
  },
  {
    id: 'research',
    label: {
      zh: '研究转产品',
      en: 'Research-to-Product',
    },
  },
  {
    id: 'narrative',
    label: {
      zh: '产品叙事与表达',
      en: 'Product Narrative',
    },
  },
]

export const companyBand: LocalizedText[] = [
  { zh: '中关村人工智能学院', en: 'Zhongguancun AI Institute' },
  { zh: '美团', en: 'Meituan' },
  { zh: '北京智谱科技', en: 'Zhipu AI' },
  { zh: '集度汽车', en: 'JIDU Auto' },
  { zh: '中科汇洲数据', en: 'Zhongke Huizhou Data' },
  { zh: '中央民族大学', en: 'Minzu University of China' },
]

export const featuredProjects: ProjectCase[] = [
  {
    id: 'info-engine',
    slug: 'info-engine',
    title: {
      zh: '信息引擎系统',
      en: 'Information Engine System',
    },
    company: {
      zh: '中关村人工智能学院',
      en: 'Zhongguancun AI Institute',
    },
    period: '2025.08 - Present',
    category: {
      zh: '多媒体信息聚合平台',
      en: 'Multimedia Intelligence Platform',
    },
    summary: {
      zh: '整合社媒、博客、论文等 100+ 信源，搭建每日推送、人才地图与内部论文图谱。',
      en: 'Integrated 100+ sources across social, blog, and paper channels to power daily push, talent map, and internal paper atlas modules.',
    },
    problem: {
      zh: '信息分散在不同媒介和组织边界里，研究团队需要稳定、可用、可持续更新的情报视图。',
      en: 'Signals were fragmented across channels and organizational boundaries, while the research team needed a stable and updateable intelligence view.',
    },
    productMove: {
      zh: '把抓取、总结、分发和结构化展示做成一条产品链，而不是只做一次性爬虫工具。',
      en: 'Turned crawling, summarization, distribution, and structured presentation into one product chain instead of a one-off scraping utility.',
    },
    systemShape: {
      zh: '以多板块每日推送为前台，以人才地图和内部论文图谱为可持续知识面，连接内容消费与组织判断。',
      en: 'Built a front layer of daily push and a durable knowledge layer of talent maps and paper graphs to connect content intake with organizational judgment.',
    },
    outcome: [
      {
        zh: '接入 100+ 多媒体信源，形成可持续的内容管线。',
        en: 'Integrated 100+ sources into a durable content pipeline.',
      },
      {
        zh: '把每日推送、人才地图、论文图谱串成统一信息引擎。',
        en: 'Connected daily push, talent map, and paper graph into one information engine.',
      },
    ],
    myRole: {
      zh: '负责产品框架、迭代规划、外部项目组需求提出与验收推进。',
      en: 'Owned product framing, iteration planning, and cross-team requirement definition and acceptance.',
    },
    tags: ['Signal Ops', 'Knowledge Graph', 'Product Strategy', 'AI Workflow'],
    accent: '#2747ff',
    glaze: '#dce1ff',
    resultBadge: {
      zh: '100+ 信源',
      en: '100+ sources',
    },
  },
  {
    id: 'mcp-eval',
    slug: 'mcp-eval',
    title: {
      zh: 'MCP 测试框架',
      en: 'MCP Evaluation Framework',
    },
    company: {
      zh: '美团',
      en: 'Meituan',
    },
    period: '2025.06 - 2025.08',
    category: {
      zh: 'Agent 化评测方案',
      en: 'Agent-based Evaluation System',
    },
    summary: {
      zh: '为存量 Tool 运维浪费问题设计更有活性的 MCP 评测 Agent 方案。',
      en: 'Designed a more active evaluation agent framework for MCP tools to reduce wasteful operational overhead.',
    },
    problem: {
      zh: '平台内大量存量 Tool 缺少更贴近真实使用方式的评测方法，运维与质量判断成本高。',
      en: 'A growing inventory of tools lacked evaluation methods that reflected real usage, making quality judgment and operations expensive.',
    },
    productMove: {
      zh: '把 Agent 作为测试载体，用外部工具能力作为参照，重构 MCP Server 的评测逻辑。',
      en: 'Reframed MCP evaluation by using agents as the test carrier and external tools as the reference signal.',
    },
    systemShape: {
      zh: '调研行业与学术方案后，整合成一套更强调活性、参考性和真实任务表现的测试框架。',
      en: 'Synthesized industry and research approaches into a framework that emphasized liveliness, comparability, and real-task behavior.',
    },
    outcome: [
      {
        zh: '建立了适用于 MCP Server 的统一评测方法论。',
        en: 'Established a unified evaluation methodology for MCP servers.',
      },
      {
        zh: '让平台判断 Tool 是否值得持续维护有了更可参考的证据。',
        en: 'Gave the platform a clearer basis for deciding which tools deserved continued maintenance.',
      },
    ],
    myRole: {
      zh: '负责评测方案调研、产品框架设计与创新测试思路整合。',
      en: 'Owned research, product framing, and synthesis of the evaluation approach.',
    },
    tags: ['MCP', 'Agent Evaluation', 'Developer Platform', 'Testing Design'],
    accent: '#0b1023',
    glaze: '#e7ecff',
    resultBadge: {
      zh: '评测重构',
      en: 'Eval redesign',
    },
  },
  {
    id: 'smart-recruitment',
    slug: 'smart-recruitment',
    title: {
      zh: '智能招聘全流程系统',
      en: 'Smart Recruitment System',
    },
    company: {
      zh: '北京智谱科技',
      en: 'Zhipu AI',
    },
    period: '2024.04 - 2025.06',
    category: {
      zh: '跨平台 Multi-Agent 招聘系统',
      en: 'Cross-platform Multi-Agent Recruitment',
    },
    summary: {
      zh: '把 Boss、飞书、OA 与智谱清言串成招聘 Agent 链路，实现流程自动化与异常处理。',
      en: 'Connected Boss, Feishu, OA, and Zhipu Qingyan into a recruitment agent workflow with automation and exception handling.',
    },
    problem: {
      zh: 'HR 流程跨平台、跨角色、跨节点，人工推进成本高且容易中断。',
      en: 'HR workflows spanned multiple platforms and handoffs, making manual coordination expensive and fragile.',
    },
    productMove: {
      zh: '用规则约束与 LLM 自主规划结合，构建稳定执行、异常检测与回收的全链路系统。',
      en: 'Combined rule constraints with LLM planning to build a full-chain system for stable execution, anomaly detection, and recovery.',
    },
    systemShape: {
      zh: '将招聘从单点工具变成完整流程产品，既覆盖交互路径，也覆盖失败路径。',
      en: 'Turned recruitment from a set of isolated tools into a full process product covering both primary and failure paths.',
    },
    outcome: [
      {
        zh: '把 HR 流程处理时间从 3 小时压缩到 20 分钟内。',
        en: 'Reduced HR process time from 3 hours to under 20 minutes.',
      },
      {
        zh: '面试者满意度提升 12%。',
        en: 'Improved candidate satisfaction by 12%.',
      },
    ],
    myRole: {
      zh: '负责产品框架设计、Agent 流程抽象、异常机制与跨平台能力落地。',
      en: 'Owned product architecture, agent flow abstraction, exception design, and cross-platform delivery.',
    },
    tags: ['Multi-Agent', 'Workflow Automation', 'Enterprise AI', 'HR Tech'],
    accent: '#596dff',
    glaze: '#f2f5ff',
    resultBadge: {
      zh: '3h → 20min',
      en: '3h → 20min',
    },
  },
  {
    id: 'chatbi',
    slug: 'chatbi',
    title: {
      zh: 'ChatBI 自然语言查询系统',
      en: 'ChatBI Query System',
    },
    company: {
      zh: '北京智谱科技',
      en: 'Zhipu AI',
    },
    period: '2024.04 - 2025.06',
    category: {
      zh: '自然语言数据查询产品',
      en: 'Natural-language Data Query Product',
    },
    summary: {
      zh: '为区县防汛负责人设计自然语言数据查询系统，提升气象信息获取效率。',
      en: 'Designed a natural-language data query system for local flood-control operators to improve access to weather intelligence.',
    },
    problem: {
      zh: '业务人员面对复杂气象数据时，查询路径长、参数多、人工解释成本高。',
      en: 'Operational users faced long query paths, dense parameters, and high interpretation costs when dealing with weather data.',
    },
    productMove: {
      zh: '围绕高频业务场景构造多维 query 与微调数据，让查询入口从结构化表单变成自然语言对话。',
      en: 'Built multi-dimensional query patterns and tuning data around high-frequency scenarios so the entry point could shift from forms to conversation.',
    },
    systemShape: {
      zh: '把产品方案设计、数据构造与高频场景覆盖绑成一个面向真实使用的 ChatBI 体验。',
      en: 'Combined product design, dataset construction, and scenario coverage into a ChatBI experience shaped around actual operational use.',
    },
    outcome: [
      {
        zh: '构建 2000+ 条覆盖多业务场景的数据集。',
        en: 'Built 2000+ records spanning multiple business scenarios.',
      },
      {
        zh: '模型信口选择准确率达 100%，参数提取准确率达 94%。',
        en: 'Reached 100% model-selection accuracy and 94% parameter extraction accuracy.',
      },
    ],
    myRole: {
      zh: '负责产品方案、场景设计、多维 query 构造与微调数据体系建设。',
      en: 'Owned product design, scenario framing, multi-dimensional query design, and tuning data construction.',
    },
    tags: ['ChatBI', 'Enterprise Search', 'Data UX', 'LLM Application'],
    accent: '#070812',
    glaze: '#c9d0ff',
    resultBadge: {
      zh: '2000+ 数据样本',
      en: '2000+ data samples',
    },
  },
]

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: 'zkv',
    year: '2025',
    title: {
      zh: '产业孵化部｜AI 产品经理实习生',
      en: 'Industrial Incubation Dept. | AI Product Manager Intern',
    },
    company: {
      zh: '中关村人工智能学院',
      en: 'Zhongguancun AI Institute',
    },
    period: '2025.08 - Present',
    summary: {
      zh: '围绕 AI 产业孵化场景设计信息引擎类产品，把分散情报压成组织可消费的系统。',
      en: 'Designing intelligence products for AI incubation contexts and turning fragmented signals into systems the organization can actually use.',
    },
    achievements: [
      {
        zh: '推进信息引擎系统从信源接入到每日推送、人才地图与论文图谱的模块化落地。',
        en: 'Drove the information engine from source integration to modular delivery across daily push, talent maps, and paper graphs.',
      },
      {
        zh: '负责需求提出、迭代规划与外部项目组验收推进。',
        en: 'Owned requirement definition, iteration planning, and cross-team acceptance.',
      },
      {
        zh: '把研究组织的情报消费路径拆成可持续运行的产品节奏，而不是一次性信息抓取。',
        en: 'Turned intelligence consumption for a research organization into a durable product rhythm instead of one-off information collection.',
      },
    ],
    featured: true,
    kind: 'work',
  },
  {
    id: 'meituan-foundation',
    year: '2025',
    title: {
      zh: '基础技术部｜产品经理实习生',
      en: 'Infrastructure Technology Dept. | Product Manager Intern',
    },
    company: {
      zh: '美团',
      en: 'Meituan',
    },
    period: '2025.06 - 2025.08',
    summary: {
      zh: '围绕 MCP Server 生态设计工具封装与评测体系，让平台能力更可用、更可维护。',
      en: 'Worked on MCP packaging and evaluation to make platform capabilities more usable and maintainable.',
    },
    achievements: [
      {
        zh: '将 8 个 MCP Server、35 个 Tool 封装成内部 API 服务。',
        en: 'Wrapped 8 MCP servers and 35 tools into internal API services.',
      },
      {
        zh: '提出以 Agent 为载体的 MCP 评测方案，提升平台判断依据。',
        en: 'Designed an agent-centered MCP evaluation scheme that improved platform judgment.',
      },
      {
        zh: '把“工具可调用”重新翻译成“平台可维护、可比较、可决策”的产品标准。',
        en: 'Reframed “callable tools” into product standards around maintainability, comparability, and decision support.',
      },
    ],
    featured: true,
    kind: 'work',
  },
  {
    id: 'zhipu',
    year: '2024 - 2025',
    title: {
      zh: '华北交付组｜产品经理实习生',
      en: 'North China Delivery Team | Product Manager Intern',
    },
    company: {
      zh: '北京智谱科技',
      en: 'Zhipu AI',
    },
    period: '2024.04 - 2025.06',
    summary: {
      zh: '在企业级场景中做智能招聘与 ChatBI，让 AI 真正进入稳定业务流程。',
      en: 'Built intelligent recruitment and ChatBI products for enterprise scenarios where AI needed to become operationally reliable.',
    },
    achievements: [
      {
        zh: '智能招聘全流程系统将 HR 处理时间从 3 小时压缩到 20 分钟内。',
        en: 'Reduced HR process time from 3 hours to under 20 minutes via the smart recruitment system.',
      },
      {
        zh: 'ChatBI 构建 2000+ 数据样本，达到 100% 模型选择准确率和 94% 参数提取准确率。',
        en: 'Built 2000+ data samples for ChatBI, reaching 100% model selection accuracy and 94% parameter extraction accuracy.',
      },
      {
        zh: '把企业级 AI 需求从概念咨询拉回可运行流程，兼顾交付推进与客户接受度。',
        en: 'Pulled enterprise AI requests back from conceptual consulting into operational flows that teams and clients could actually absorb.',
      },
    ],
    featured: true,
    kind: 'work',
  },
  {
    id: 'meituan-llm',
    year: '2024 - 2025',
    title: {
      zh: '智能产品部｜LLM 平台产品经理实习生',
      en: 'Intelligent Products | LLM Platform PM Intern',
    },
    company: {
      zh: '美团',
      en: 'Meituan',
    },
    period: '2024.11 - 2025.04',
    summary: {
      zh: '参与探索型 LLM 平台的产品设计，关注内部员工能否真正把 AI 用起来。',
      en: 'Worked on an exploratory LLM platform with a focus on whether employees could actually make AI useful in daily work.',
    },
    achievements: [
      {
        zh: '推动 AI 对话平台升级，两个月内内部使用量突破 2 万。',
        en: 'Helped scale an AI dialogue platform past 20,000 internal users within two months.',
      },
      {
        zh: '参与将 MCP Server 能力整合进平台产品体验。',
        en: 'Contributed to integrating MCP server capability into the platform experience.',
      },
      {
        zh: '持续判断内部员工真实使用路径，避免平台只停留在“有能力但不好用”的状态。',
        en: 'Continuously examined real employee usage paths so the platform would not remain “capable but awkward to use.”',
      },
    ],
    featured: true,
    kind: 'work',
  },
  {
    id: 'jidu',
    year: '2024',
    title: {
      zh: 'AI 算法产品经理实习生',
      en: 'AI Algorithm Product Manager Intern',
    },
    company: {
      zh: '集度汽车',
      en: 'JIDU Auto',
    },
    period: '2024.08 - 2024.11',
    summary: {
      zh: '参与 AI 数据平台与线索打分等产品，关注数据流转、线索效率和业务反馈闭环。',
      en: 'Worked on AI data platform and lead-scoring products with emphasis on data flow, lead quality, and business feedback loops.',
    },
    achievements: [
      {
        zh: '优化数据处理与监控流程，提升平台流转效率。',
        en: 'Improved data processing and monitoring workflows to increase platform efficiency.',
      },
      {
        zh: '参与智能营销与工单分类方向的产品实践。',
        en: 'Contributed to intelligent marketing and ticket-classification product work.',
      },
    ],
    featured: false,
    kind: 'work',
  },
  {
    id: 'zhongke',
    year: '2024',
    title: {
      zh: 'AI 产品经理实习生',
      en: 'AI Product Manager Intern',
    },
    company: {
      zh: '中科汇洲数据',
      en: 'Zhongke Huizhou Data',
    },
    period: '2024.05 - 2024.08',
    summary: {
      zh: '围绕 AI 标注工具、平台功能和客户支持推进产品迭代。',
      en: 'Worked across AI annotation tooling, platform features, and customer-facing product iteration.',
    },
    achievements: [
      {
        zh: '推动 2D/3D 标注工具和平台业务功能迭代。',
        en: 'Drove iteration on 2D/3D annotation tools and platform business features.',
      },
      {
        zh: '同时参与销售培训与客户需求反馈闭环。',
        en: 'Also supported sales enablement and customer feedback loops.',
      },
    ],
    featured: false,
    kind: 'work',
  },
  {
    id: 'muc',
    year: '2023 - 2026',
    title: {
      zh: '软件工程｜学术硕士',
      en: 'Software Engineering | M.S.',
    },
    company: {
      zh: '中央民族大学',
      en: 'Minzu University of China',
    },
    period: '2023.09 - 2026.06',
    summary: {
      zh: '研究方向覆盖遥感目标检测与算法优化，也持续把研究训练反哺到 AI 产品判断中。',
      en: 'Graduate work spans remote sensing object detection and algorithm optimization, with research rigor feeding back into product judgment.',
    },
    achievements: [
      {
        zh: 'LPS-YOLO 发表在 Scientific Reports。',
        en: 'Published LPS-YOLO in Scientific Reports.',
      },
      {
        zh: '持续推进目标检测与自适应框架研究。',
        en: 'Continues work on detection and adaptive framework research.',
      },
    ],
    featured: false,
    kind: 'education',
  },
]

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

export const insightExcerpts: InsightExcerpt[] = [
  {
    id: 'driver-not-believer',
    theme: {
      zh: 'AI judgment',
      en: 'AI judgment',
    },
    title: {
      zh: '只做 AI 的驾驭者，不做 AI 的信徒。',
      en: 'Drive AI. Do not worship it.',
    },
    quote: {
      zh: '真正的产品判断，不是把能力神化，而是把能力放回边界、成本和责任里。',
      en: 'Real product judgment is not about glorifying capability, but placing it back into boundaries, cost, and responsibility.',
    },
    excerpt: {
      zh: '我会优先判断 AI 在哪里真的能放大效率，哪里只是被包装成想象力。',
      en: 'I first ask where AI truly amplifies leverage, and where it is merely wrapped in imagination.',
    },
    detail: [
      {
        zh: '我不相信“模型更强”就自动等于“产品更好”。很多问题不是能力短板，而是流程设计、责任边界和异常处理没有被认真做完。',
        en: 'I do not believe a stronger model automatically makes a better product. Many failures come from weak flow design, unclear responsibility, and poor exception handling.',
      },
      {
        zh: '所以我做产品时，会同时看系统活性、组织承受能力和真实用户路径，而不是只看 demo 时刻。',
        en: 'That is why I look at system liveliness, organizational tolerance, and real user paths rather than demo moments alone.',
      },
    ],
  },
  {
    id: 'tool-bridge-value',
    theme: {
      zh: 'Product philosophy',
      en: 'Product philosophy',
    },
    title: {
      zh: '技术是工具，产品是桥梁，价值才是终点。',
      en: 'Technology is the tool. Product is the bridge. Value is the endpoint.',
    },
    quote: {
      zh: '我做的不是功能堆砌，而是让复杂能力变成组织愿意长期使用的路径。',
      en: 'I am not interested in feature piles. I care about turning complex capability into paths organizations will keep using.',
    },
    excerpt: {
      zh: '对我来说，产品经理的工作不是解释技术有多新，而是解释它为什么值得被接入现实。',
      en: 'To me, the PM job is not to explain how novel the technology is, but why it deserves entry into reality.',
    },
    detail: [
      {
        zh: '这也是为什么我会同时关心用户体验、系统约束和交付速度。缺任何一个，AI 产品都会掉回“看起来很强，实际上很难用”。',
        en: 'That is why I care about UX, system constraints, and delivery speed together. Miss any one of them, and an AI product slips back into “impressive but hard to use.”',
      },
      {
        zh: '真正成立的产品，不是讲得最热闹的那个，而是能稳定进入组织日常动作的那个。',
        en: 'The product that survives is not the loudest one. It is the one that becomes part of daily organizational motion.',
      },
    ],
  },
  {
    id: 'three-dimensions',
    theme: {
      zh: 'PM capability',
      en: 'PM capability',
    },
    title: {
      zh: 'AI 产品经理至少要同时守住技术敏感度、商业嗅觉和伦理底线。',
      en: 'An AI PM must hold technical sensitivity, commercial judgment, and ethical limits at the same time.',
    },
    quote: {
      zh: '少任何一维，产品都会失真。',
      en: 'Drop any one dimension and the product warps.',
    },
    excerpt: {
      zh: '我不想做只会写 PRD 的人，也不想做只会追模型热点的人。',
      en: 'I do not want to be a PM who only writes PRDs, or one who only chases model trends.',
    },
    detail: [
      {
        zh: '技术敏感度决定你能不能看穿系统约束，商业嗅觉决定你能不能判断价值优先级，伦理底线决定你是否值得被信任。',
        en: 'Technical sensitivity lets you see system constraints, commercial judgment lets you rank value, and ethical limits decide whether others should trust you.',
      },
      {
        zh: '对我来说，这三者不是补充项，而是 AI 产品工作的基本盘。',
        en: 'To me, those three are not extras. They are the baseline of AI product work.',
      },
    ],
  },
  {
    id: 'stable-systems',
    theme: {
      zh: 'Delivery bias',
      en: 'Delivery bias',
    },
    title: {
      zh: '我偏爱能稳定落地的系统，而不是只在展示时发光的概念。',
      en: 'I prefer systems that land stably, not concepts that only shine in demos.',
    },
    quote: {
      zh: '复杂性不是问题，失控的复杂性才是问题。',
      en: 'Complexity is not the problem. Uncontrolled complexity is.',
    },
    excerpt: {
      zh: '无论是 MCP、招聘 Agent 还是 ChatBI，我都会把失败路径和异常处理纳入产品结构。',
      en: 'Whether it is MCP, recruitment agents, or ChatBI, I treat failure paths and exception handling as part of the product structure.',
    },
    detail: [
      {
        zh: '我最在意的一类能力，是让系统在真实组织里继续跑，而不是只在评审会上看起来漂亮。',
        en: 'One of the capabilities I value most is making a system keep running inside a real organization rather than merely looking polished in a review meeting.',
      },
      {
        zh: '所以我的偏好一直很明确：对齐真实场景、控制复杂性、建立可持续交付面。',
        en: 'That preference stays consistent: align to real scenarios, control complexity, and build a sustainable delivery surface.',
      },
    ],
  },
]

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
      zh: '四个最能代表我的项目',
      en: 'The four cases that best represent me',
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

export const contactChannels = [
  {
    label: {
      zh: '邮箱',
      en: 'Email',
    },
    detail: {
      zh: 'mhumble010221@gmail.com',
      en: 'mhumble010221@gmail.com',
    },
    href: 'mailto:mhumble010221@gmail.com',
  },
  {
    label: {
      zh: '电话',
      en: 'Phone',
    },
    detail: {
      zh: '+86 15268406215',
      en: '+86 15268406215',
    },
    href: 'tel:+8615268406215',
  },
] as const

export const sectionEyebrows: Record<HomeSectionId, LocalizedText> = {
  hero: {
    zh: '个人旗舰首页 / 机会方优先',
    en: 'Personal flagship / opportunity first',
  },
  proof: {
    zh: 'Proof layer',
    en: 'Proof layer',
  },
  featured: {
    zh: 'Flagship cases',
    en: 'Flagship cases',
  },
  timeline: {
    zh: 'Career spine',
    en: 'Career spine',
  },
  links: {
    zh: 'External surfaces',
    en: 'External surfaces',
  },
  insights: {
    zh: 'Judgment notes',
    en: 'Judgment notes',
  },
  contact: {
    zh: 'Contact orbit',
    en: 'Contact orbit',
  },
}
