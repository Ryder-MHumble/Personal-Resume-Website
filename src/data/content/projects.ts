import type { ProjectCase } from '../../types/content'
export const featuredProjects: ProjectCase[] = [
  {
    id: 'info-engine',
    slug: 'info-engine',
    track: 'career',
    metricAsOf: '2026-04-14',
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
      zh: '围绕研究院产业孵化场景，把“多源抓取 + 内容判断 + 知识沉淀”做成一条可持续产品链，支撑每日推送、人才地图与论文图谱三类核心消费面。',
      en: 'Built a durable product chain from multi-source intake to knowledge surfaces for daily briefs, talent maps, and paper graphs.',
    },
    problem: {
      zh: '外部信号分散在社媒、博客、论文与机构渠道，组织每天都在“重复看信息”，却难形成跨周期复用的判断资产。',
      en: 'Signals were fragmented across channels, causing repetitive reading but weak reusable judgment assets.',
    },
    productMove: {
      zh: '先定义角色化消费场景，再反推采集、筛选、摘要、结构化和分发链路，把一次性爬虫工作升级为长期可运维的信息引擎。',
      en: 'Reframed one-off crawling into an operable intelligence engine with role-based consumption paths.',
    },
    systemShape: {
      zh: '前台是每日推送，长期层是人才地图与论文图谱，底层通过统一数据管线连接“信号输入-组织判断-迭代反馈”。',
      en: 'Daily briefing front with durable talent/paper knowledge layers on a unified data pipeline.',
    },
    outcome: [
      {
        zh: '形成跨媒体信号接入和去重管线，持续支撑多模块内容生产。',
        en: 'Established a durable intake and dedup pipeline for multi-module output.',
      },
      {
        zh: '把每日推送、人才地图、论文图谱连接成统一产品闭环。',
        en: 'Connected daily push, talent map, and paper graph into one product loop.',
      },
    ],
    myRole: {
      zh: '负责问题定义、模块边界、版本节奏和跨团队验收，确保系统从“能跑”走向“能持续被组织使用”。',
      en: 'Owned framing, module boundaries, iteration cadence, and cross-team acceptance.',
    },
    tags: ['Signal Ops', 'Knowledge Graph', 'Product Strategy', 'AI Workflow'],
    accent: '#2747ff',
    glaze: '#dce1ff',
    resultBadge: {
      zh: '长期情报链路',
      en: 'Durable intel loop',
    },
    resourceLinks: [
      {
        label: {
          zh: '相关底座仓库：DeanAgent-Backend',
          en: 'Related repo: DeanAgent-Backend',
        },
        href: 'https://github.com/Ryder-MHumble/DeanAgent-Backend',
      },
      {
        label: {
          zh: '相关前台仓库：Dean-Agent-Fronted',
          en: 'Related repo: Dean-Agent-Fronted',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-Agent-Fronted',
      },
    ],
  },
  {
    id: 'mcp-eval',
    slug: 'mcp-eval',
    track: 'career',
    metricAsOf: '2026-04-14',
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
      zh: '面向 MCP Tool 存量快速增长场景，重构评测方式：从静态可用性检查转向贴近真实任务的 Agent 化评测。',
      en: 'Redesigned MCP evaluation from static checks to agent-based, task-like assessment.',
    },
    problem: {
      zh: '大量工具“可调用但不可判断”，缺少统一口径来回答：这个 Tool 是否值得继续维护、扩展、或者下线。',
      en: 'Tools were callable but hard to evaluate for keep/extend/deprecate decisions.',
    },
    productMove: {
      zh: '引入 Agent 作为测试执行体，设计多阶段评测任务与参照基线，补齐“可比性、可解释性、可复测性”三条主线。',
      en: 'Introduced agent-run tasks with baselines to improve comparability and explainability.',
    },
    systemShape: {
      zh: '框架由任务集、评测执行器、证据记录与结论面板组成，既能做质量诊断，也能反哺工具治理策略。',
      en: 'Task set + evaluator + evidence records + decision panel for quality and governance.',
    },
    outcome: [
      {
        zh: '建立 MCP Server 统一评测口径，减少“凭经验判断”的维护决策。',
        en: 'Established a unified MCP evaluation method for maintenance decisions.',
      },
      {
        zh: '输出可追溯评测证据，为 Tool 生命周期管理提供依据。',
        en: 'Produced traceable evidence for tool lifecycle management.',
      },
    ],
    myRole: {
      zh: '负责评测问题建模、方案调研、方法落地与评审沟通，把抽象“测评”变成可执行产品流程。',
      en: 'Owned problem framing, method design, and evaluation workflow delivery.',
    },
    tags: ['MCP', 'Agent Evaluation', 'Developer Platform', 'Testing Design'],
    accent: '#0b1023',
    glaze: '#e7ecff',
    resultBadge: {
      zh: '评测重构',
      en: 'Eval redesign',
    },
    resourceLinks: [
      {
        label: {
          zh: 'MCP 官方文档',
          en: 'MCP official docs',
        },
        href: 'https://modelcontextprotocol.io/',
      },
      {
        label: {
          zh: '案例相关平台背景',
          en: 'Related platform context',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-Agent-Fronted',
      },
    ],
  },
  {
    id: 'smart-recruitment',
    slug: 'smart-recruitment',
    track: 'career',
    metricAsOf: '2026-04-14',
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
      zh: '将 Boss、飞书、OA 与智谱清言的离散流程打通成统一 Agent 链路，覆盖主流程自动化、异常识别与回收。',
      en: 'Connected fragmented recruiting tools into one agent workflow with exception recovery.',
    },
    problem: {
      zh: '招聘流程跨系统、跨角色、跨时段，靠人工串联导致耗时高、漏项多、状态不可追踪。',
      en: 'Cross-system recruiting flow was costly, fragile, and hard to track.',
    },
    productMove: {
      zh: '用规则引擎兜底关键节点，用 LLM 处理复杂语义任务，并加上异常分流机制，保证“自动化可控”。',
      en: 'Combined rule guardrails with LLM orchestration and exception routing.',
    },
    systemShape: {
      zh: '系统分为流程编排层、执行层、监控层和人工接管层，覆盖主路径与失败路径。',
      en: 'Orchestration, execution, monitoring, and human-takeover layers across happy/failure paths.',
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
      zh: '负责全流程产品建模、Agent 行为约束与跨系统协同方案，推动项目从 PoC 到稳定运行。',
      en: 'Owned full-flow modeling, agent constraints, and cross-system rollout.',
    },
    tags: ['Multi-Agent', 'Workflow Automation', 'Enterprise AI', 'HR Tech'],
    accent: '#596dff',
    glaze: '#f2f5ff',
    resultBadge: {
      zh: '3h → 20min',
      en: '3h → 20min',
    },
    resourceLinks: [
      {
        label: {
          zh: '智谱 AI 官方站',
          en: 'Zhipu AI website',
        },
        href: 'https://www.zhipuai.cn/',
      },
    ],
  },
  {
    id: 'chatbi',
    slug: 'chatbi',
    track: 'career',
    metricAsOf: '2026-04-14',
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
      zh: '把结构化报表查询改造为自然语言入口，面向防汛等高频业务场景提供可解释的问数体验。',
      en: 'Shifted structured BI queries to natural-language access for high-frequency operations.',
    },
    problem: {
      zh: '传统查询依赖复杂参数和操作经验，业务角色知道“要问什么”，但不知道“系统怎么配”。',
      en: 'Operators knew what to ask, but not how to configure complex query parameters.',
    },
    productMove: {
      zh: '围绕真实业务问法构建多维 query 数据集，结合模型路由和参数抽取，把“会说业务语言”转成“会发正确查询”。',
      en: 'Built query datasets and routing logic to map business language into executable queries.',
    },
    systemShape: {
      zh: '产品由自然语言入口、解析决策层、参数映射层与结果解释层组成，强调稳定性而非演示感。',
      en: 'NL entry + intent parsing + parameter mapping + result explanation with stability focus.',
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
      zh: '负责需求拆解、场景建模、数据构造和验证口径设计，确保结果可复测、可解释。',
      en: 'Owned scenario modeling, dataset construction, and validation criteria.',
    },
    tags: ['ChatBI', 'Enterprise Search', 'Data UX', 'LLM Application'],
    accent: '#070812',
    glaze: '#c9d0ff',
    resultBadge: {
      zh: '2000+ 数据样本',
      en: '2000+ data samples',
    },
    resourceLinks: [
      {
        label: {
          zh: 'ChatBI 方法相关演讲资料（公开参考）',
          en: 'Public references on ChatBI patterns',
        },
        href: 'https://www.databricks.com/blog/how-build-chatbi',
      },
    ],
  },
  {
    id: 'core-platform',
    slug: 'core-platform',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: '情报引擎 Core 平台',
      en: 'Intelligence Core Platform',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2025.12 - Present',
    category: {
      zh: '统一采集与 API 底座',
      en: 'Unified Ingestion & API Core',
    },
    summary: {
      zh: '将多源采集、处理流水线、知识对象与 API 服务整合为统一底座，支撑多个上层工作台与 Agent 入口共享同一数据口径。',
      en: 'Unified ingestion, processing, knowledge entities, and APIs into one shared platform core.',
    },
    problem: {
      zh: '各业务系统过去各自接信源、各自做转换，重复建设高、维护成本高、数据口径难统一。',
      en: 'Teams duplicated ingestion and transformation with inconsistent data semantics.',
    },
    productMove: {
      zh: '以配置驱动和分层架构重构底座，让“新增信源、发布接口、接入新前台”都变成可持续运营动作。',
      en: 'Rebuilt with config-driven layered architecture to make extension operational.',
    },
    systemShape: {
      zh: '采集层、处理层、知识层、服务层分离，配套任务调度、日志追踪、接口文档自动生成。',
      en: 'Separated ingestion, processing, knowledge, and service layers with schedulers and doc generation.',
    },
    outcome: [
      {
        zh: '实时口径达到 268 个信源，其中 191 个启用信源。',
        en: 'Real-time inventory reached 268 sources with 191 enabled.',
      },
      {
        zh: 'REST 路由库存达到 143 条，支撑多前台复用。',
        en: 'API inventory reached 143 routes for multi-workbench reuse.',
      },
    ],
    myRole: {
      zh: '主导底座能力定义、服务域边界和迭代优先级，推动从“项目交付”升级到“平台经营”。',
      en: 'Led capability definition, service boundaries, and platform-level iteration priorities.',
    },
    tags: ['Platform Core', 'Data Pipeline', 'REST API', 'Product Architecture'],
    accent: '#1232d7',
    glaze: '#dbe3ff',
    resultBadge: {
      zh: '143 路由 / 268 信源',
      en: '143 routes / 268 sources',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：DeanAgent-Backend',
          en: 'GitHub: DeanAgent-Backend',
        },
        href: 'https://github.com/Ryder-MHumble/DeanAgent-Backend',
      },
    ],
  },
  {
    id: 'dean-workbench',
    slug: 'dean-workbench',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: 'Dean Workbench 决策驾驶舱',
      en: 'Dean Workbench',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2026.01 - Present',
    category: {
      zh: '领导决策前台',
      en: 'Executive Decision Workbench',
    },
    summary: {
      zh: '为管理层构建“早报 + 模块看板 + 行动入口”一体化前台，把复杂情报压缩成可快速判断的工作界面。',
      en: 'Built an executive workbench that compresses complex intelligence into actionable views.',
    },
    problem: {
      zh: '底层数据能力不断增强，但管理角色获取信息仍依赖多入口切换，判断链路过长。',
      en: 'Leadership still faced fragmented entry points despite stronger data infrastructure.',
    },
    productMove: {
      zh: '以角色任务为中心设计信息架构，统一导航、搜索、通知和模块入口，减少跨模块认知成本。',
      en: 'Used role-task IA with unified navigation, search, and notification.',
    },
    systemShape: {
      zh: '前端采用 Next.js + 模块化页面组合，连接统一 API 底座并兼容移动端场景。',
      en: 'Next.js modular frontend connected to shared APIs with mobile support.',
    },
    outcome: [
      {
        zh: '形成 9 个核心导航模块，覆盖外部情报、内部管理与行动日程。',
        en: 'Delivered 9 core navigation modules across intelligence, operations, and agenda.',
      },
      {
        zh: '沉淀 48 个 UI 基础组件，提升迭代复用与界面一致性。',
        en: 'Consolidated 48 UI components for faster and consistent iteration.',
      },
    ],
    myRole: {
      zh: '负责前台产品定义、模块优先级、跨模块信息结构与关键交互策略。',
      en: 'Owned product definition, module prioritization, and cross-module information strategy.',
    },
    tags: ['Workbench', 'Next.js', 'Executive UX', 'Module Design'],
    accent: '#1a2546',
    glaze: '#dee7ff',
    resultBadge: {
      zh: '9 模块驾驶舱',
      en: '9-module cockpit',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：Dean-Agent-Fronted',
          en: 'GitHub: Dean-Agent-Fronted',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-Agent-Fronted',
      },
    ],
  },
  {
    id: 'scholar-workbench',
    slug: 'scholar-workbench',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: 'Scholar Workbench 知识运营台',
      en: 'Scholar Workbench',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2026.01 - Present',
    category: {
      zh: '学术生态资产运营',
      en: 'Knowledge Operations Console',
    },
    summary: {
      zh: '面向科研管理与知识运营角色，构建学者、机构、项目、活动、学生等对象的一体化运营工作台。',
      en: 'Built an operations console for scholars, institutions, projects, activities, and students.',
    },
    problem: {
      zh: '学术资产长期散落在文档和群消息中，更新不可追踪、关系不可回溯、协同效率低。',
      en: 'Academic assets were fragmented and hard to track or reuse.',
    },
    productMove: {
      zh: '将对象建模、导航分层、详情页治理和批量操作整合，兼顾“日常维护效率”和“长期资产沉淀”。',
      en: 'Combined object modeling, layered navigation, detail governance, and batch operations.',
    },
    systemShape: {
      zh: '基于 React + Vite 的多对象工作台，路由化详情页与统一服务层对接，支持多子类目分层浏览。',
      en: 'React/Vite workbench with routed details and unified service modules.',
    },
    outcome: [
      {
        zh: '形成 53 个导航节点的知识运营树，支撑多维对象治理。',
        en: 'Built a 53-node navigation tree for multi-entity governance.',
      },
      {
        zh: '沉淀 8 个服务模块，覆盖 scholar/institution/project/activity/student/venue 等核心域。',
        en: 'Delivered 8 service modules covering key knowledge domains.',
      },
    ],
    myRole: {
      zh: '负责知识工作台的产品边界、导航结构、对象模型策略与阶段性交付推进。',
      en: 'Owned workbench boundaries, navigation strategy, and object-model delivery.',
    },
    tags: ['Knowledge Ops', 'React', 'Entity Modeling', 'Data Governance'],
    accent: '#0f3d5f',
    glaze: '#d6ecff',
    resultBadge: {
      zh: '53 节点运营树',
      en: '53-node nav tree',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：Scholars-System',
          en: 'GitHub: Scholars-System',
        },
        href: 'https://github.com/Ryder-MHumble/Scholars-System',
      },
    ],
  },
  {
    id: 'monitoring-framework',
    slug: 'monitoring-framework',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: 'Monitoring Framework 监测引擎',
      en: 'Monitoring Framework',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2026.01 - Present',
    category: {
      zh: '目标监测与合规审查',
      en: 'Target Monitoring & Compliance',
    },
    summary: {
      zh: '把“学生论文审查”抽象成通用 MonitoringTarget 框架，支持多目标类型持续发现、评估与审计留痕。',
      en: 'Generalized student audit into a target-centric monitoring and compliance framework.',
    },
    problem: {
      zh: '专项工具往往只能服务单一对象，难复用、难扩展、难形成组织级长期监测能力。',
      en: 'Single-scenario tools lacked extensibility and long-term monitoring value.',
    },
    productMove: {
      zh: '先做目标抽象与规则分层，再接入 OpenAlex/arXiv 数据源与 API 服务，把专项流程升级成通用引擎。',
      en: 'Introduced target abstraction and layered rules, then connected data sources and APIs.',
    },
    systemShape: {
      zh: '核心由目标模型、发现策略、评估规则、会话执行与存储层构成，支持 profile 化兼容。',
      en: 'Target model + discovery + rule engine + session execution + storage layers.',
    },
    outcome: [
      {
        zh: '实现 6 类 MonitoringTarget 类型，支持从学生扩展到研究者/机构/课题等对象。',
        en: 'Implemented 6 MonitoringTarget types beyond student-only scenarios.',
      },
      {
        zh: '对外提供 25 条 API 路由，覆盖目标、会话、论文和审计流程。',
        en: 'Exposed 25 API routes for targets, sessions, papers, and audits.',
      },
    ],
    myRole: {
      zh: '负责目标抽象、流程分层和评估机制设计，推动“一次性审查”向“持续监测框架”迁移。',
      en: 'Led abstraction, pipeline layering, and assessment design for continuous monitoring.',
    },
    tags: ['MonitoringTarget', 'Compliance', 'FastAPI', 'Framework Design'],
    accent: '#123c3a',
    glaze: '#d8fff7',
    resultBadge: {
      zh: '6 类型 / 25 路由',
      en: '6 types / 25 routes',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：academic-monitor',
          en: 'GitHub: academic-monitor',
        },
        href: 'https://github.com/Ryder-MHumble/academic-monitor',
      },
    ],
  },
  {
    id: 'agent-gateway',
    slug: 'agent-gateway',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: 'Agent Gateway（NanoBot）',
      en: 'Agent Gateway (NanoBot)',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2026.02 - Present',
    category: {
      zh: '自然语言入口与触达层',
      en: 'Natural-language Entry & Delivery',
    },
    summary: {
      zh: '将平台能力封装为统一 Agent 入口，支持多渠道消息接入、工具调用、定时任务与结果回传。',
      en: 'Built a multi-channel agent gateway with tools, scheduling, and message delivery.',
    },
    problem: {
      zh: '上层系统虽多，但非技术用户仍依赖固定前台操作；跨场景问数与提醒触达门槛高。',
      en: 'Non-technical users still needed rigid frontends for cross-scenario queries and reminders.',
    },
    productMove: {
      zh: '以“会话 + 工具 + 任务”模型重构入口，让用户可在 IM 渠道直接发起查询、订阅和执行动作。',
      en: 'Used session-tool-task model for direct IM-based query and task execution.',
    },
    systemShape: {
      zh: '架构包含多渠道适配器、消息总线、会话管理、工具注册与 cron 调度，连接平台底座能力。',
      en: 'Adapters, message bus, session manager, tool registry, and cron service on top of core APIs.',
    },
    outcome: [
      {
        zh: '支持 9 类渠道适配器，覆盖 IM 与协作场景接入。',
        en: 'Supported 9 channel adapters for messaging/collaboration entry points.',
      },
      {
        zh: '沉淀 12 类工具实现与 13 个技能目录，支撑查询、文件、调度和自动化任务。',
        en: 'Delivered 12 tool implementations and 13 skill directories for operational tasks.',
      },
    ],
    myRole: {
      zh: '负责入口策略、工具边界、渠道能力规划与落地协同，保证 Agent 入口既可用又可治理。',
      en: 'Owned gateway strategy, tool boundaries, and channel capability planning.',
    },
    tags: ['Agent Gateway', 'Multi-channel', 'Tooling', 'Cron'],
    accent: '#232323',
    glaze: '#e3e3e3',
    resultBadge: {
      zh: '9 渠道 / 12 工具',
      en: '9 channels / 12 tools',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：Dean-NanoBot',
          en: 'GitHub: Dean-NanoBot',
        },
        href: 'https://github.com/Ryder-MHumble/Dean-NanoBot',
      },
    ],
  },
  {
    id: 'doc2brief',
    slug: 'doc2brief',
    track: 'platform',
    metricAsOf: '2026-04-14',
    title: {
      zh: 'Doc2Brief 报告生成系统',
      en: 'Doc2Brief',
    },
    company: {
      zh: '平台项目群（服务器实战）',
      en: 'Platform Cluster (Server Delivery)',
    },
    period: '2026.02 - Present',
    category: {
      zh: '文档到周报的生成发布',
      en: 'Document-to-Brief Pipeline',
    },
    summary: {
      zh: '把文件/文本输入升级为可预览、可切模板、可发布的报告产线，服务周报与专题汇报场景。',
      en: 'Built an end-to-end doc-to-report pipeline with preview, templates, and publishing.',
    },
    problem: {
      zh: '汇报材料长期依赖手工整理和反复排版，产出效率与一致性难以兼顾。',
      en: 'Manual report drafting caused slow delivery and inconsistent quality.',
    },
    productMove: {
      zh: '设计“双路径生成引擎”：结构化模板模式保证稳定，LLM HTML 模式保证表达弹性，并设置质量闸门回退。',
      en: 'Designed dual generation paths: structured-template stability and LLM-HTML flexibility.',
    },
    systemShape: {
      zh: '系统由输入抽取、结构化编排、模板渲染、发布管理和用量仪表盘组成，兼容端到端审计。',
      en: 'Input extraction, structured orchestration, template rendering, publishing, and usage dashboard.',
    },
    outcome: [
      {
        zh: '内置 8 套模板并支持风格映射，显著提升报告交付速度。',
        en: 'Shipped 8 built-in templates for faster and more consistent delivery.',
      },
      {
        zh: '提供 2 种生成模式与实时用量监控接口，兼顾稳定产出与模型成本治理。',
        en: 'Delivered 2 generation modes plus real-time usage endpoints for cost governance.',
      },
    ],
    myRole: {
      zh: '负责生成链路定义、模板策略、质量回退逻辑和发布体验设计。',
      en: 'Owned generation workflow, template strategy, fallback quality gates, and publishing UX.',
    },
    tags: ['Doc2Brief', 'Template Engine', 'LLM Orchestration', 'Reporting'],
    accent: '#223d79',
    glaze: '#dce9ff',
    resultBadge: {
      zh: '8 模板 / 2 模式',
      en: '8 templates / 2 modes',
    },
    resourceLinks: [
      {
        label: {
          zh: 'GitHub：File-to-WeeklyReport',
          en: 'GitHub: File-to-WeeklyReport',
        },
        href: 'https://github.com/Ryder-MHumble/File-to-WeeklyReport',
      },
    ],
  },
]

