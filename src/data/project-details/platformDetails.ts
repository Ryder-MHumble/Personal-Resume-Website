import type { ProjectDetail } from '../../types/content'
import { withCase } from './helpers'

export const platformProjectDetails: ProjectDetail[] = [
  withCase('core-platform', {
    seoTitle: {
      zh: '情报引擎 Core 平台 | Ryder',
      en: 'Intelligence Core Platform | Ryder',
    },
    seoDescription: {
      zh: '基于 DeanAgent-Backend 的统一采集与 API 底座案例：268 信源、191 启用、143 路由（截至 2026-04-14）。',
      en: 'Unified ingestion and API core case with 268 sources, 191 enabled, and 143 routes as of 2026-04-14.',
    },
    heroStatement: {
      zh: '这个项目的关键不是“爬得更多”，而是把采集、处理、知识和服务变成组织能长期复用的一套平台能力。',
      en: 'The core win was not crawling more data, but turning intake-to-service into a reusable platform capability.',
    },
    roleLabel: {
      zh: '平台产品负责人 / 架构抽象与迭代推进',
      en: 'Platform PM / Architecture & Iteration Lead',
    },
    status: {
      zh: '持续迭代中',
      en: 'Actively iterating',
    },
    keyMetrics: [
      {
        label: {
          zh: 'API 路由库存',
          en: 'API Route Inventory',
        },
        value: '143',
        note: {
          zh: '来自 docs/api/api_inventory.json 的自动清点（口径日期 2026-04-14）。',
          en: 'Auto-counted from docs/api/api_inventory.json (as of 2026-04-14).',
        },
      },
      {
        label: {
          zh: '信源规模',
          en: 'Source Inventory',
        },
        value: '268 / 191',
        note: {
          zh: '总信源 268、启用信源 191（source_inventory.json）。',
          en: '268 total sources and 191 enabled from source_inventory.json.',
        },
      },
      {
        label: {
          zh: '服务域覆盖',
          en: 'Service Domain Coverage',
        },
        value: '06+',
        note: {
          zh: '覆盖情报、学者、机构、项目、活动、报告等上层消费域。',
          en: 'Supports intelligence, scholar, institution, project, activity, and report domains.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Core 平台链路演示位',
        en: 'Core Platform Walkthrough',
      },
      caption: {
        zh: '展示从信源配置、任务调度、处理产物到 API 暴露的端到端链路。',
        en: 'Demonstrates source config, scheduling, processing outputs, and API exposure end-to-end.',
      },
      duration: '03:08',
      posterLabel: {
        zh: 'Core / ingestion-to-API',
        en: 'Core / ingestion-to-API',
      },
    },
    audience: {
      zh: '依赖统一数据口径的产品团队、运营团队与上层应用开发者。',
      en: 'Product, ops, and application teams requiring a unified data contract.',
    },
    context: {
      zh: '过去多个前台系统分别接信源、分别做转换，造成重复建设和治理失焦。平台需要一个“稳定且可扩展”的统一底座。',
      en: 'Multiple frontends previously duplicated ingestion and transformations. A stable, extensible core was needed.',
    },
    constraints: [
      {
        zh: '信源类型和更新频率差异大，单一采集模式难覆盖。',
        en: 'Source types and update cadence vary widely.',
      },
      {
        zh: '必须兼容历史能力，同时支持新服务域快速扩展。',
        en: 'Had to preserve legacy compatibility while expanding new domains.',
      },
      {
        zh: '对上游变动和下游调用都要可观测、可追溯。',
        en: 'Required observability and traceability for both upstream and downstream changes.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '能力分层',
          en: 'Capability Layering',
        },
        objective: {
          zh: '先把平台边界定清楚，避免继续以“临时需求”驱动架构。',
          en: 'Define clear boundaries instead of continuing ad-hoc architecture.',
        },
        move: {
          zh: '将系统拆分为采集、处理、知识、服务四层，并建立跨层契约。',
          en: 'Split into ingestion, processing, knowledge, and service layers with contracts.',
        },
        decision: {
          zh: '优先做“统一口径”而非“新增功能数量”，保证后续复用效率。',
          en: 'Prioritized unified semantics over feature count for reuse.',
        },
      },
      {
        title: {
          zh: '配置化扩展',
          en: 'Config-driven Expansion',
        },
        objective: {
          zh: '把新增信源成本从代码开发降到配置运营。',
          en: 'Lower new-source onboarding from code work to configuration ops.',
        },
        move: {
          zh: '引入 YAML 驱动信源管理和爬虫路由，区分模板爬虫与自定义解析。',
          en: 'Introduced YAML-driven source management with template/custom parser routing.',
        },
        decision: {
          zh: '保留少量高复杂度自定义能力，其余尽量模板化。',
          en: 'Kept limited custom paths and standardized the majority.',
        },
      },
      {
        title: {
          zh: '服务化交付',
          en: 'Service Delivery',
        },
        objective: {
          zh: '让上层应用调用 API 即可完成业务拼装，不再读取底层细节。',
          en: 'Enable frontends to compose via APIs without low-level coupling.',
        },
        move: {
          zh: '统一 REST 暴露、自动化清点文档与接口库存，配合健康和日志能力。',
          en: 'Unified REST exposure with automated inventories and health/log tooling.',
        },
        decision: {
          zh: '以“可追踪证据”替代“口头对齐”，降低跨团队协作误差。',
          en: 'Used traceable evidence over informal alignment.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Ingestion Layer',
          en: 'Ingestion Layer',
        },
        description: {
          zh: '以配置驱动采集任务，管理多源接入、调度与去重。',
          en: 'Config-driven collection for multi-source onboarding, scheduling, and dedup.',
        },
        bullets: [
          {
            zh: '模板爬虫 + 自定义解析双轨并存',
            en: 'Template crawlers + custom parsers',
          },
          {
            zh: '任务调度与失败重试机制',
            en: 'Task scheduling and retry mechanisms',
          },
        ],
      },
      {
        title: {
          zh: 'Processing Layer',
          en: 'Processing Layer',
        },
        description: {
          zh: '将原始信号转为政策、人事、科技前沿等结构化产物。',
          en: 'Transforms raw signals into structured domain outputs.',
        },
        bullets: [
          {
            zh: '按服务域拆分 pipeline',
            en: 'Domain-specific pipelines',
          },
          {
            zh: '处理中间态与产物分层落盘',
            en: 'Layered persistence of intermediate and final outputs',
          },
        ],
      },
      {
        title: {
          zh: 'Service Layer',
          en: 'Service Layer',
        },
        description: {
          zh: '向多前台与 Agent 统一提供标准 API 和可观测能力。',
          en: 'Unified API and observability surface for workbenches and agents.',
        },
        bullets: [
          {
            zh: 'REST API + 自动化清点文档',
            en: 'REST APIs with automated inventory docs',
          },
          {
            zh: '健康检查与调用证据留存',
            en: 'Health checks and traceable call evidence',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '接口证据',
          en: 'API Evidence',
        },
        value: '143 Routes',
        note: {
          zh: '自动扫描生成，避免手写统计失真。',
          en: 'Auto-generated inventory avoids manual drift.',
        },
        source: {
          zh: 'docs/api/api_inventory.json',
          en: 'docs/api/api_inventory.json',
        },
      },
      {
        label: {
          zh: '信源证据',
          en: 'Source Evidence',
        },
        value: '268 / 191',
        note: {
          zh: '总信源与启用信源分离统计，便于运营治理。',
          en: 'Tracks total vs enabled sources for governance.',
        },
        source: {
          zh: 'docs/api/source_inventory.json',
          en: 'docs/api/source_inventory.json',
        },
      },
      {
        label: {
          zh: '口径日期',
          en: 'Metric Date',
        },
        value: '2026-04-14',
        note: {
          zh: '以仓库实时库存为准，覆盖旧版文档口径偏差。',
          en: 'Uses current repository inventories over legacy static docs.',
        },
        source: {
          zh: '代码仓库实时清点',
          en: 'Repository live inventory',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责平台产品定义、跨服务域边界和迭代优先级。',
        en: 'I owned platform framing, domain boundaries, and iteration priorities.',
      },
      {
        zh: '与前台团队对齐接口契约，减少重复数据加工。',
        en: 'Aligned API contracts with frontend teams to reduce duplicate transformations.',
      },
      {
        zh: '推动“证据化交付”，以自动库存和日志替代主观汇报。',
        en: 'Pushed evidence-based delivery via auto inventories and logs.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '平台能力地图',
          en: 'Capability Map',
        },
        detail: {
          zh: '定义采集-处理-知识-服务四层边界',
          en: 'Defined four-layer core architecture boundaries',
        },
      },
      {
        label: {
          zh: '统一 API 交付口径',
          en: 'Unified API Contract',
        },
        detail: {
          zh: '建立多前台共用的数据服务接口',
          en: 'Built shared service interfaces for multiple workbenches',
        },
      },
      {
        label: {
          zh: '实时库存证据链',
          en: 'Live Inventory Evidence',
        },
        detail: {
          zh: '将路由/信源库存纳入持续可追踪管理',
          en: 'Made route/source inventories continuously traceable',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '先定义平台边界，再接需求，避免了重复建设持续放大。',
          en: 'Defining boundaries first prevented compounding duplication.',
        },
      ],
      wouldChange: [
        {
          zh: '如果重做，会更早建立跨系统 SLA 和版本治理规则。',
          en: 'I would introduce cross-system SLA/version governance earlier.',
        },
      ],
      nextStep: [
        {
          zh: '继续推进统一交付层（gateway/bff/订阅中心）能力沉淀。',
          en: 'Continue building a unified delivery layer (gateway/BFF/subscription).',
        },
      ],
    },
  }),
  withCase('dean-workbench', {
    seoTitle: {
      zh: 'Dean Workbench 决策驾驶舱 | Ryder',
      en: 'Dean Workbench | Ryder',
    },
    seoDescription: {
      zh: '面向管理层的情报消费前台案例：9 个核心模块、48 个 UI 基础组件（截至 2026-04-14）。',
      en: 'Executive intelligence workbench case with 9 core modules and 48 UI components (as of 2026-04-14).',
    },
    heroStatement: {
      zh: '我把它定义成“决策驾驶舱”，不是通用门户。重点是让管理者在碎片时间进入判断状态。',
      en: 'I framed it as an executive cockpit, not a generic portal.',
    },
    roleLabel: {
      zh: '产品负责人 / 信息架构与交互策略',
      en: 'Product Lead / Information Architecture',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '导航模块',
          en: 'Navigation Modules',
        },
        value: '09',
        note: {
          zh: '按导航配置实时统计（home + 8 个业务模块）。',
          en: 'Live count from navigation config (home + 8 business modules).',
        },
      },
      {
        label: {
          zh: 'UI 基础组件',
          en: 'UI Component Base',
        },
        value: '48',
        note: {
          zh: 'components/ui 组件库存，用于支撑快速迭代。',
          en: 'Component inventory in components/ui for rapid iteration.',
        },
      },
      {
        label: {
          zh: '响应场景',
          en: 'Device Surfaces',
        },
        value: 'Desktop + Mobile',
        note: {
          zh: '覆盖桌面侧边导航与移动底部导航两种主场景。',
          en: 'Covers desktop sidebar and mobile bottom navigation.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Dean Workbench 模块切换演示位',
        en: 'Dean Workbench Module Demo',
      },
      caption: {
        zh: '展示早报入口、模块导航、Cmd+K 搜索与消息入口协同。',
        en: 'Shows daily briefing entry, module navigation, command palette, and assistant flow.',
      },
      duration: '02:46',
      posterLabel: {
        zh: 'Workbench / cockpit flow',
        en: 'Workbench / cockpit flow',
      },
    },
    audience: {
      zh: '院办、管理层和支持决策的业务角色。',
      en: 'Leadership office and decision-support roles.',
    },
    context: {
      zh: '随着底座能力提升，管理角色的信息获取方式仍然割裂。需要一个高密度、低认知负担的决策消费前台。',
      en: 'Core capability improved, but executive information access remained fragmented.',
    },
    constraints: [
      {
        zh: '管理角色时间碎片化，阅读路径必须短。',
        en: 'Executive time is fragmented; reading paths must be short.',
      },
      {
        zh: '模块多但不允许入口混乱，信息层级必须稳定。',
        en: 'Many modules but navigation must remain coherent.',
      },
      {
        zh: '要兼顾桌面和移动场景的一致体验。',
        en: 'Needs consistent behavior across desktop and mobile.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '角色聚焦',
          en: 'Role Focus',
        },
        objective: {
          zh: '把“看什么”变成“先判断什么”。',
          en: 'Turn “what to read” into “what to decide first.”',
        },
        move: {
          zh: '将首页固定为 AI 综述 + 指标卡 + 今日事项，建立稳定判断入口。',
          en: 'Set homepage as AI summary + metrics + today agenda.',
        },
        decision: {
          zh: '拒绝做通用门户，聚焦决策消费场景。',
          en: 'Rejected generic portal behavior in favor of decision workflows.',
        },
      },
      {
        title: {
          zh: '模块化编排',
          en: 'Modular Orchestration',
        },
        objective: {
          zh: '让多模块并存且不互相干扰。',
          en: 'Keep many modules coherent without interference.',
        },
        move: {
          zh: '建立统一导航树、模块壳层和共享交互组件。',
          en: 'Built unified nav tree, module shell, and shared interaction components.',
        },
        decision: {
          zh: '先统一交互语法，再扩功能，避免后期返工。',
          en: 'Standardized interaction grammar before scaling features.',
        },
      },
      {
        title: {
          zh: '跨端可达',
          en: 'Cross-device Reach',
        },
        objective: {
          zh: '让关键动作在移动端同样可达。',
          en: 'Keep critical actions reachable on mobile.',
        },
        move: {
          zh: '补齐移动端底部导航与状态反馈机制。',
          en: 'Added mobile bottom navigation and consistent status feedback.',
        },
        decision: {
          zh: '保留核心判断路径，不追求全量功能复制。',
          en: 'Preserved core decision paths over full feature parity.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Entry & Navigation',
          en: 'Entry & Navigation',
        },
        description: {
          zh: '统一模块入口和跳转语义，降低跨模块切换成本。',
          en: 'Unified entry points and navigation semantics across modules.',
        },
        bullets: [
          {
            zh: '侧边导航 + 移动底部导航',
            en: 'Sidebar + mobile bottom nav',
          },
          {
            zh: 'Cmd+K 全局搜索入口',
            en: 'Command palette search entry',
          },
        ],
      },
      {
        title: {
          zh: 'Decision Surfaces',
          en: 'Decision Surfaces',
        },
        description: {
          zh: '用高密度但可扫读的模块把复杂情报压缩成判断线索。',
          en: 'Compresses complex signals into scan-friendly decision surfaces.',
        },
        bullets: [
          {
            zh: '首页总览与分模块下钻',
            en: 'Overview first, deep-dive by module',
          },
          {
            zh: '新鲜度与优先级表达',
            en: 'Freshness and priority signals',
          },
        ],
      },
      {
        title: {
          zh: 'Interaction Layer',
          en: 'Interaction Layer',
        },
        description: {
          zh: '通过共享组件和动效规范保证一致体验。',
          en: 'Ensures consistent UX via shared components and motion standards.',
        },
        bullets: [
          {
            zh: '48 个 UI 基础组件复用',
            en: '48 reusable UI components',
          },
          {
            zh: '模块化懒加载与状态占位',
            en: 'Modular lazy loading and skeleton states',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '模块规模',
          en: 'Module Scale',
        },
        value: '09',
        note: {
          zh: '导航配置中的实时模块数量。',
          en: 'Live module count from navigation configuration.',
        },
        source: {
          zh: 'lib/mock-data/navigation.ts',
          en: 'lib/mock-data/navigation.ts',
        },
      },
      {
        label: {
          zh: '组件规模',
          en: 'Component Scale',
        },
        value: '48',
        note: {
          zh: 'UI 基础组件库存，支撑一致性和快速迭代。',
          en: 'UI component inventory supporting consistency and velocity.',
        },
        source: {
          zh: 'components/ui/*.tsx',
          en: 'components/ui/*.tsx',
        },
      },
      {
        label: {
          zh: '口径日期',
          en: 'Metric Date',
        },
        value: '2026-04-14',
        note: {
          zh: '基于仓库结构实时统计。',
          en: 'Calculated from current repository structure.',
        },
        source: {
          zh: '代码目录清点',
          en: 'Repository inventory',
        },
      },
    ],
    collaboration: [
      {
        zh: '我主导信息架构、模块边界和优先级决策。',
        en: 'I led information architecture, module boundaries, and prioritization.',
      },
      {
        zh: '与底座服务团队协同接口契约，保障数据消费一致性。',
        en: 'Collaborated on API contracts with the core platform team.',
      },
      {
        zh: '与设计/前端共同维护跨端体验和交互规范。',
        en: 'Worked with design/frontend on cross-device interaction standards.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '驾驶舱 IA 方案',
          en: 'Cockpit IA Design',
        },
        detail: {
          zh: '定义模块层级、入口顺序和判断路径',
          en: 'Defined module hierarchy, entry order, and decision paths',
        },
      },
      {
        label: {
          zh: '模块壳层与导航体系',
          en: 'Module Shell & Navigation',
        },
        detail: {
          zh: '统一模块布局和跨模块切换体验',
          en: 'Unified module layout and switching behavior',
        },
      },
      {
        label: {
          zh: '共享组件资产',
          en: 'Shared UI Assets',
        },
        detail: {
          zh: '沉淀基础组件库存并支持持续复用',
          en: 'Consolidated reusable UI component inventory',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '先把角色任务讲清楚，再做页面，会显著降低后期改版成本。',
          en: 'Clarifying role tasks before UI build reduced later redesign cost.',
        },
      ],
      wouldChange: [
        {
          zh: '会更早引入行为埋点，量化不同模块的决策效率差异。',
          en: 'I would add analytics earlier to quantify decision efficiency by module.',
        },
      ],
      nextStep: [
        {
          zh: '继续强化搜索、订阅和跨模块联动能力。',
          en: 'Further strengthen search, subscription, and cross-module linkage.',
        },
      ],
    },
  }),
  withCase('scholar-workbench', {
    seoTitle: {
      zh: 'Scholar Workbench 知识运营台 | Ryder',
      en: 'Scholar Workbench | Ryder',
    },
    seoDescription: {
      zh: '学术生态知识运营台案例：53 节点导航树、8 个服务模块，面向对象治理与关系沉淀。',
      en: 'Knowledge operations workbench with a 53-node nav tree and 8 service modules.',
    },
    heroStatement: {
      zh: '我把“资料管理”升级成“知识运营”：重点不在录了多少条，而在对象关系是否能持续维护。',
      en: 'I reframed record management into knowledge operations with durable entity relationships.',
    },
    roleLabel: {
      zh: '产品负责人 / 对象模型与运营流程设计',
      en: 'Product Lead / Entity & Operations Design',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '导航节点',
          en: 'Navigation Nodes',
        },
        value: '53',
        note: {
          zh: '来自 NAV_TREE 结构统计，覆盖机构/学者/项目/活动/学生/期刊等域。',
          en: 'Counted from NAV_TREE across institution/scholar/project/activity/student/venue domains.',
        },
      },
      {
        label: {
          zh: '服务模块',
          en: 'Service Modules',
        },
        value: '08',
        note: {
          zh: 'services 目录核心模块数，支撑对象 CRUD 与查询。',
          en: 'Core service module count for entity CRUD and queries.',
        },
      },
      {
        label: {
          zh: '详情路由',
          en: 'Detail Routes',
        },
        value: '08',
        note: {
          zh: '包含学者、机构、项目、活动、学生等对象详情路径。',
          en: 'Includes routed detail views for major entity types.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Scholar Workbench 对象治理演示位',
        en: 'Scholar Workbench Governance Demo',
      },
      caption: {
        zh: '展示从对象列表、关系下钻、详情维护到回跳的完整运营流程。',
        en: 'Shows list-to-detail operations and relationship maintenance flow.',
      },
      duration: '02:52',
      posterLabel: {
        zh: 'Workbench / entity operations',
        en: 'Workbench / entity operations',
      },
    },
    audience: {
      zh: '科研管理办、学术运营、数据治理与合作推进角色。',
      en: 'Research admin, knowledge ops, and data governance teams.',
    },
    context: {
      zh: '学术生态信息跨人跨部门分散，缺少统一对象模型和可追溯运营界面，导致资产沉淀效率低。',
      en: 'Academic ecosystem data was fragmented without a unified entity model or operational surface.',
    },
    constraints: [
      {
        zh: '对象类型多、关系复杂，不能靠单表或单页面承载。',
        en: 'Many entity types and relationships cannot fit a single-view model.',
      },
      {
        zh: '历史数据结构不统一，迁移时需兼容存量字段。',
        en: 'Legacy schemas were inconsistent and required compatibility.',
      },
      {
        zh: '运营动作需高频执行，界面必须高效率可回跳。',
        en: 'High-frequency operations required efficient, reversible flows.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '对象建模',
          en: 'Entity Modeling',
        },
        objective: {
          zh: '先统一“对象是什么”，再谈“页面怎么做”。',
          en: 'Define entities first, then shape interfaces.',
        },
        move: {
          zh: '明确 scholars/institutions/projects/activities/students/venues 的核心字段与关系。',
          en: 'Defined core fields and links across six primary entity domains.',
        },
        decision: {
          zh: '坚持对象中心设计，而非按页面临时拼字段。',
          en: 'Kept an entity-centered design over page-centric patches.',
        },
      },
      {
        title: {
          zh: '导航分层',
          en: 'Navigation Layering',
        },
        objective: {
          zh: '让复杂对象体系可被运营角色快速定位。',
          en: 'Make complex entities quickly navigable for operators.',
        },
        move: {
          zh: '构建 53 节点导航树，按对象域和子类目分层。',
          en: 'Built a 53-node tree with domain and subtype layers.',
        },
        decision: {
          zh: '用“分层定位”替代“全量平铺”，控制认知负担。',
          en: 'Used layered discovery over flat listings.',
        },
      },
      {
        title: {
          zh: '运营闭环',
          en: 'Ops Loop',
        },
        objective: {
          zh: '把录入、校验、维护、回溯串成闭环流程。',
          en: 'Connect create-verify-maintain-trace into one loop.',
        },
        move: {
          zh: '建立列表-详情-关系-回跳链路，并补齐批量导入导出能力。',
          en: 'Implemented list-detail-relation-return flow with batch import/export.',
        },
        decision: {
          zh: '优先保障运营效率和可追踪性，再做视觉复杂化。',
          en: 'Prioritized operator efficiency and traceability over visual complexity.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Entity Hub',
          en: 'Entity Hub',
        },
        description: {
          zh: '统一管理核心对象及其基础属性。',
          en: 'Central management for core entities and attributes.',
        },
        bullets: [
          {
            zh: '对象列表、筛选、检索',
            en: 'Entity list, filtering, and search',
          },
          {
            zh: '详情页路由化治理',
            en: 'Routed detail governance',
          },
        ],
      },
      {
        title: {
          zh: 'Relationship Layer',
          en: 'Relationship Layer',
        },
        description: {
          zh: '承接对象之间的合作、归属与参与关系。',
          en: 'Manages affiliations, collaborations, and participation links.',
        },
        bullets: [
          {
            zh: '机构-学者-项目关系联动',
            en: 'Institution-scholar-project linkage',
          },
          {
            zh: '活动与学生画像关联',
            en: 'Activity-student profile linkage',
          },
        ],
      },
      {
        title: {
          zh: 'Service Layer',
          en: 'Service Layer',
        },
        description: {
          zh: '统一服务模块封装对象读写和聚合查询。',
          en: 'Service modules encapsulate entity CRUD and aggregated queries.',
        },
        bullets: [
          {
            zh: '8 个服务模块按域划分',
            en: '8 domain-oriented service modules',
          },
          {
            zh: '支持批量处理与详情联动',
            en: 'Supports batch operations and detail linkage',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '导航证据',
          en: 'Navigation Evidence',
        },
        value: '53 Nodes',
        note: {
          zh: '多层级对象导航树来自 navTree 常量实时统计。',
          en: 'Multi-level entity tree count from navTree constants.',
        },
        source: {
          zh: 'src/constants/navTree.ts',
          en: 'src/constants/navTree.ts',
        },
      },
      {
        label: {
          zh: '服务证据',
          en: 'Service Evidence',
        },
        value: '08 Modules',
        note: {
          zh: '服务目录模块化拆分，支持独立维护。',
          en: 'Service directory modularization supports independent maintenance.',
        },
        source: {
          zh: 'src/services/*.ts',
          en: 'src/services/*.ts',
        },
      },
      {
        label: {
          zh: '口径日期',
          en: 'Metric Date',
        },
        value: '2026-04-14',
        note: {
          zh: '按仓库结构清点，覆盖历史文档偏差。',
          en: 'Calculated from repository structure as the source of truth.',
        },
        source: {
          zh: '代码实时口径',
          en: 'Live code inventory',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责对象域定义、导航策略和运营动作闭环设计。',
        en: 'I owned domain definitions, nav strategy, and operations loop design.',
      },
      {
        zh: '与后端协同数据契约，确保详情页字段可追溯。',
        en: 'Aligned with backend contracts to keep detail fields traceable.',
      },
      {
        zh: '与运营角色共创筛选和回查路径，减少人工检索成本。',
        en: 'Co-designed filtering and lookup paths with operations users.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '对象模型蓝图',
          en: 'Entity Model Blueprint',
        },
        detail: {
          zh: '定义多对象域字段与关系治理方案',
          en: 'Defined multi-entity schemas and relationship governance',
        },
      },
      {
        label: {
          zh: '导航树体系',
          en: 'Navigation Tree System',
        },
        detail: {
          zh: '构建分层对象导航与子类目路径',
          en: 'Built layered entity navigation with subcategory paths',
        },
      },
      {
        label: {
          zh: '运营流程闭环',
          en: 'Operations Loop',
        },
        detail: {
          zh: '完成列表、详情、维护、回跳的一体化流程',
          en: 'Delivered integrated list-detail-maintain-return workflow',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '对象中心设计显著降低了后续需求变更的结构震荡。',
          en: 'Entity-centric design reduced structural churn during later changes.',
        },
      ],
      wouldChange: [
        {
          zh: '会更早建立对象质量评分体系，辅助治理优先级。',
          en: 'I would introduce entity quality scoring earlier for governance prioritization.',
        },
      ],
      nextStep: [
        {
          zh: '继续推进关系图谱可视化与跨对象联动分析。',
          en: 'Continue with graph visualization and cross-entity analysis.',
        },
      ],
    },
  }),
  withCase('monitoring-framework', {
    seoTitle: {
      zh: 'Monitoring Framework 监测引擎 | Ryder',
      en: 'Monitoring Framework | Ryder',
    },
    seoDescription: {
      zh: '目标监测与合规审查平台案例：6 类目标类型、25 条 API 路由（截至 2026-04-14）。',
      en: 'Monitoring framework case with 6 target types and 25 API routes as of 2026-04-14.',
    },
    heroStatement: {
      zh: '我把它从“学生审查工具”抽象成“通用监测框架”，核心价值在可扩展性和规则治理，而不只是单次审计结果。',
      en: 'I generalized a student-audit tool into a reusable monitoring framework.',
    },
    roleLabel: {
      zh: '框架产品负责人 / 目标抽象与规则体系',
      en: 'Framework PM / Target Abstraction Lead',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '目标类型',
          en: 'Target Types',
        },
        value: '06',
        note: {
          zh: 'student/researcher/department/institution/topic/project。',
          en: 'student, researcher, department, institution, topic, project.',
        },
      },
      {
        label: {
          zh: 'API 路由',
          en: 'API Routes',
        },
        value: '25',
        note: {
          zh: 'FastAPI 路由统计，覆盖目标、会话、论文、审计。',
          en: 'FastAPI route count for targets, sessions, papers, and audits.',
        },
      },
      {
        label: {
          zh: '评估规则',
          en: 'Assessment Rules',
        },
        value: '03',
        note: {
          zh: '内置 affiliation_whitelist / discovery_volume / identity_confidence。',
          en: 'Built-in rules for affiliation, volume, and identity confidence.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Monitoring Framework 执行链路演示位',
        en: 'Monitoring Execution Demo',
      },
      caption: {
        zh: '展示目标录入、会话执行、论文审计与结果追踪的完整流程。',
        en: 'Shows target intake, session run, paper audit, and traceable outputs.',
      },
      duration: '02:34',
      posterLabel: {
        zh: 'Monitoring / target-to-audit',
        en: 'Monitoring / target-to-audit',
      },
    },
    audience: {
      zh: '教务、科研管理、合规审查与监测运营团队。',
      en: 'Academic admin, compliance, and monitoring operations teams.',
    },
    context: {
      zh: '原始需求是学生论文核查，但组织需要的是“可扩对象、可换规则、可持续运行”的通用监测系统。',
      en: 'Initial student checks evolved into a need for an extensible monitoring system.',
    },
    constraints: [
      {
        zh: '历史数据格式混杂，需兼容旧数据导入。',
        en: 'Legacy data formats required compatibility handling.',
      },
      {
        zh: '监测对象和规则会持续变化，架构必须可配置。',
        en: 'Targets and rules evolve, requiring configurable architecture.',
      },
      {
        zh: '审计结果要可追溯，不允许“黑盒结论”。',
        en: 'Audit outputs must be traceable, not black-box conclusions.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '目标抽象',
          en: 'Target Abstraction',
        },
        objective: {
          zh: '摆脱“学生专用模型”，建立通用目标表示。',
          en: 'Move beyond student-only modeling to generic targets.',
        },
        move: {
          zh: '定义 MonitoringTargetType 和通用属性结构。',
          en: 'Defined MonitoringTargetType and generic target attributes.',
        },
        decision: {
          zh: '把对象差异交给 profile 和规则层处理。',
          en: 'Handled scenario differences via profiles and rules.',
        },
      },
      {
        title: {
          zh: '流程标准化',
          en: 'Pipeline Standardization',
        },
        objective: {
          zh: '把“人工临时核查”升级为可重复执行的会话流程。',
          en: 'Turn ad-hoc checks into repeatable session workflows.',
        },
        move: {
          zh: '拆分发现、评估、存储、通知等阶段，并建立会话状态管理。',
          en: 'Split discovery, assessment, storage, and notification stages.',
        },
        decision: {
          zh: '保留人工复核位，避免自动结论直接覆盖高风险判断。',
          en: 'Kept human review checkpoints for high-risk conclusions.',
        },
      },
      {
        title: {
          zh: '规则治理',
          en: 'Rule Governance',
        },
        objective: {
          zh: '让评估逻辑可解释、可升级、可审计。',
          en: 'Make assessment logic explainable, evolvable, and auditable.',
        },
        move: {
          zh: '将规则引擎独立封装，支持配置化启用和版本演进。',
          en: 'Isolated a configurable rule engine with versionable evolution.',
        },
        decision: {
          zh: '先稳住核心规则，再扩展高级策略。',
          en: 'Stabilized core rules before adding advanced strategies.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Target Model',
          en: 'Target Model',
        },
        description: {
          zh: '统一定义监测对象身份、搜索词和上下文属性。',
          en: 'Unified definition of identity, query terms, and context attributes.',
        },
        bullets: [
          {
            zh: '6 类目标类型抽象',
            en: '6 abstracted target types',
          },
          {
            zh: '兼容 legacy 数据转换',
            en: 'Legacy format compatibility conversion',
          },
        ],
      },
      {
        title: {
          zh: 'Assessment Engine',
          en: 'Assessment Engine',
        },
        description: {
          zh: '以规则包执行论文评估与风险判断。',
          en: 'Rule-pack execution for paper assessment and risk signals.',
        },
        bullets: [
          {
            zh: '白名单、发现量、身份置信度规则',
            en: 'Whitelist, discovery volume, identity confidence rules',
          },
          {
            zh: '结果可追踪并支持人工复核',
            en: 'Traceable outputs with human review support',
          },
        ],
      },
      {
        title: {
          zh: 'API & Session Layer',
          en: 'API & Session Layer',
        },
        description: {
          zh: '提供目标管理、执行队列、审计更新和结果查询接口。',
          en: 'Exposes target management, run queue, audit update, and query APIs.',
        },
        bullets: [
          {
            zh: '25 条 FastAPI 路由',
            en: '25 FastAPI routes',
          },
          {
            zh: '支持会话化执行状态跟踪',
            en: 'Sessionized execution status tracking',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '目标抽象证据',
          en: 'Target Abstraction Evidence',
        },
        value: '06 Types',
        note: {
          zh: '核心 domain 枚举中定义 6 类监测对象。',
          en: 'Six target classes defined in core domain enum.',
        },
        source: {
          zh: 'src/core/domain.py',
          en: 'src/core/domain.py',
        },
      },
      {
        label: {
          zh: '服务证据',
          en: 'Service Evidence',
        },
        value: '25 Routes',
        note: {
          zh: 'API 路由可覆盖监测全流程关键动作。',
          en: 'API routes cover key monitoring lifecycle operations.',
        },
        source: {
          zh: 'src/api/main.py',
          en: 'src/api/main.py',
        },
      },
      {
        label: {
          zh: '规则证据',
          en: 'Rule Evidence',
        },
        value: '03 Rules',
        note: {
          zh: '规则引擎内置三类核心评估规则。',
          en: 'Three core built-in assessment rules in rule engine.',
        },
        source: {
          zh: 'src/monitoring_framework/assessment_engine.py',
          en: 'src/monitoring_framework/assessment_engine.py',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责需求抽象、规则边界与执行链路定义。',
        en: 'I owned requirement abstraction, rule boundaries, and execution flow.',
      },
      {
        zh: '与业务方确认审计口径，确保结果可解释可追溯。',
        en: 'Aligned audit semantics with stakeholders for explainability.',
      },
      {
        zh: '与工程侧协同推进 profile 兼容和 API 落地。',
        en: 'Coordinated with engineering on profile compatibility and API delivery.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '通用监测目标模型',
          en: 'Generic Target Model',
        },
        detail: {
          zh: '将专项对象抽象为可扩展 MonitoringTarget',
          en: 'Generalized scenario objects into extensible MonitoringTarget',
        },
      },
      {
        label: {
          zh: '规则评估引擎',
          en: 'Assessment Rule Engine',
        },
        detail: {
          zh: '沉淀可配置的评估规则与审计结果结构',
          en: 'Built configurable rule packs and audit result schemas',
        },
      },
      {
        label: {
          zh: '会话化 API 服务',
          en: 'Sessionized API Service',
        },
        detail: {
          zh: '覆盖目标管理、执行与结果追踪关键接口',
          en: 'Delivered APIs for target management, runs, and result tracking',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '“对象抽象先行”让项目从专项工具成功升级为框架能力。',
          en: 'Target abstraction-first successfully elevated a point tool into framework capability.',
        },
      ],
      wouldChange: [
        {
          zh: '后续会引入更细粒度的规则实验和 A/B 验证机制。',
          en: 'Next I would add finer-grained rule experiments and A/B validation.',
        },
      ],
      nextStep: [
        {
          zh: '继续扩展告警闭环和跨系统工单联动能力。',
          en: 'Expand alert-closure loops and cross-system task linkage.',
        },
      ],
    },
  }),
  withCase('agent-gateway', {
    seoTitle: {
      zh: 'Agent Gateway（NanoBot）| Ryder',
      en: 'Agent Gateway (NanoBot) | Ryder',
    },
    seoDescription: {
      zh: '多渠道 Agent 入口案例：9 渠道适配器、12 工具实现、13 技能目录（截至 2026-04-14）。',
      en: 'Multi-channel agent gateway with 9 adapters, 12 tool implementations, and 13 skills (as of 2026-04-14).',
    },
    heroStatement: {
      zh: '我把它定位为“统一入口层”而不是聊天机器人：入口要能查、能做、能订阅、能触达。',
      en: 'I positioned it as a unified entry layer, not just a chatbot.',
    },
    roleLabel: {
      zh: '入口产品负责人 / 工具与渠道能力规划',
      en: 'Gateway PM / Tooling & Channel Strategy',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '渠道适配器',
          en: 'Channel Adapters',
        },
        value: '09',
        note: {
          zh: 'manager 中启用能力包含 telegram/whatsapp/discord/feishu/mochat/dingtalk/email/slack/qq。',
          en: 'Nine adapters defined in channel manager.',
        },
      },
      {
        label: {
          zh: '工具实现',
          en: 'Tool Implementations',
        },
        value: '12',
        note: {
          zh: 'agent/tools 下 Tool 类实现，覆盖文件、命令、搜索、调度、子代理等能力。',
          en: 'Twelve Tool-class implementations for file, exec, web, cron, and subagent tasks.',
        },
      },
      {
        label: {
          zh: '技能目录',
          en: 'Skill Packs',
        },
        value: '13',
        note: {
          zh: 'skills 目录现有技能包数量。',
          en: 'Current skill package count in the skills directory.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Agent Gateway 任务链路演示位',
        en: 'Agent Gateway Task Flow Demo',
      },
      caption: {
        zh: '展示消息接入、工具调用、定时任务和结果回传的端到端流程。',
        en: 'Shows message intake, tool execution, scheduled jobs, and delivery.',
      },
      duration: '02:22',
      posterLabel: {
        zh: 'Gateway / chat-to-tools',
        en: 'Gateway / chat-to-tools',
      },
    },
    audience: {
      zh: '需要通过 IM 渠道快速问数、触发任务和接收提醒的全员角色。',
      en: 'Users who need IM-based query, task trigger, and notification delivery.',
    },
    context: {
      zh: '底座能力已具备，但普通用户仍依赖前台页面。组织需要一个低门槛自然语言入口来提升能力可达性。',
      en: 'Core capabilities existed, but users still needed low-friction natural-language access.',
    },
    constraints: [
      {
        zh: '渠道能力差异大，需统一协议和会话模型。',
        en: 'Channel capabilities differ and need a unified protocol/session model.',
      },
      {
        zh: '自动化任务必须可控，不能因错误推送影响用户信任。',
        en: 'Automation must remain controlled to preserve trust.',
      },
      {
        zh: '工具能力扩展快，需防止权限和边界失控。',
        en: 'Rapid tool growth requires strict boundary control.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '入口模型设计',
          en: 'Entry Model Design',
        },
        objective: {
          zh: '让用户用自然语言直接触发平台能力。',
          en: 'Enable natural-language triggering of platform capabilities.',
        },
        move: {
          zh: '定义会话键、消息总线和渠道适配层，统一输入输出协议。',
          en: 'Defined session keys, message bus, and adapter layer with unified I/O.',
        },
        decision: {
          zh: '入口先统一，再逐步扩渠道与场景。',
          en: 'Unified the entry contract first, then expanded channels and scenarios.',
        },
      },
      {
        title: {
          zh: '工具体系落地',
          en: 'Tooling System',
        },
        objective: {
          zh: '把“能回答”升级为“能执行”。',
          en: 'Upgrade from answering to executing.',
        },
        move: {
          zh: '封装文件、命令、检索、定时、消息和子代理工具，并提供注册机制。',
          en: 'Wrapped file, shell, web, cron, message, and subagent tools with registry.',
        },
        decision: {
          zh: '保留显式工具边界，避免万能助手失控。',
          en: 'Kept explicit tool boundaries to avoid uncontrolled assistants.',
        },
      },
      {
        title: {
          zh: '任务与触达',
          en: 'Task & Delivery',
        },
        objective: {
          zh: '让用户可订阅、可回传、可追踪。',
          en: 'Make tasks subscribable, deliverable, and traceable.',
        },
        move: {
          zh: '实现 cron 作业管理和多渠道回传机制。',
          en: 'Implemented cron job lifecycle and multi-channel delivery.',
        },
        decision: {
          zh: '优先保证任务稳定和审计可回放。',
          en: 'Prioritized stability and replayable audit traces.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Channel Layer',
          en: 'Channel Layer',
        },
        description: {
          zh: '负责多渠道消息接入与发送。',
          en: 'Handles inbound/outbound messaging across channels.',
        },
        bullets: [
          {
            zh: '9 类渠道适配器统一接入',
            en: '9 unified channel adapters',
          },
          {
            zh: '按渠道独立启动与健康管理',
            en: 'Per-channel lifecycle and health handling',
          },
        ],
      },
      {
        title: {
          zh: 'Agent Tool Layer',
          en: 'Agent Tool Layer',
        },
        description: {
          zh: '负责能力调用和执行边界控制。',
          en: 'Executes capabilities with controlled boundaries.',
        },
        bullets: [
          {
            zh: '12 个工具实现 + 动态注册',
            en: '12 tool implementations + dynamic registry',
          },
          {
            zh: '支持子代理和外部 MCP 扩展',
            en: 'Supports subagents and external MCP extension',
          },
        ],
      },
      {
        title: {
          zh: 'Task Layer',
          en: 'Task Layer',
        },
        description: {
          zh: '承接计划任务和结果回传，形成自动化闭环。',
          en: 'Handles scheduled jobs and result delivery for automation loops.',
        },
        bullets: [
          {
            zh: 'Cron 服务与持久化作业',
            en: 'Cron service with persisted jobs',
          },
          {
            zh: '可指定渠道定向推送',
            en: 'Channel-targeted scheduled delivery',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '渠道证据',
          en: 'Channel Evidence',
        },
        value: '09 Adapters',
        note: {
          zh: '由 ChannelManager 适配器初始化逻辑统计。',
          en: 'Counted from ChannelManager adapter initialization.',
        },
        source: {
          zh: 'nanobot/channels/manager.py',
          en: 'nanobot/channels/manager.py',
        },
      },
      {
        label: {
          zh: '工具证据',
          en: 'Tool Evidence',
        },
        value: '12 Tools',
        note: {
          zh: 'agent/tools 目录 Tool 实现类实时统计。',
          en: 'Live Tool-class implementation count in agent/tools.',
        },
        source: {
          zh: 'nanobot/agent/tools/*.py',
          en: 'nanobot/agent/tools/*.py',
        },
      },
      {
        label: {
          zh: '技能证据',
          en: 'Skill Evidence',
        },
        value: '13 Skills',
        note: {
          zh: '技能目录数量，支撑可复用任务模板。',
          en: 'Skill directory count supporting reusable task templates.',
        },
        source: {
          zh: 'nanobot/skills',
          en: 'nanobot/skills',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责入口战略、工具边界与任务模型定义。',
        en: 'I owned gateway strategy, tool boundaries, and task model design.',
      },
      {
        zh: '与平台底座协同接口，确保查询结果可用且可解释。',
        en: 'Aligned with core APIs for usable and explainable responses.',
      },
      {
        zh: '与业务侧共创触达场景，明确推送规则和回执机制。',
        en: 'Co-designed delivery scenarios, push rules, and acknowledgements.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '统一入口协议',
          en: 'Unified Entry Protocol',
        },
        detail: {
          zh: '建立渠道消息与会话处理的标准流程',
          en: 'Standardized channel messaging and session handling',
        },
      },
      {
        label: {
          zh: '工具注册体系',
          en: 'Tool Registry System',
        },
        detail: {
          zh: '沉淀工具调用能力与边界控制机制',
          en: 'Built tool execution capabilities with boundary controls',
        },
      },
      {
        label: {
          zh: '自动化任务闭环',
          en: 'Automation Loop',
        },
        detail: {
          zh: '完成 cron 调度、执行与多渠道回传链路',
          en: 'Delivered cron scheduling, execution, and multi-channel delivery',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '入口层与工具层解耦，让能力扩展速度和安全边界可以同时保持。',
          en: 'Decoupling gateway and tools preserved both extensibility and safety boundaries.',
        },
      ],
      wouldChange: [
        {
          zh: '下一阶段会补更细粒度权限模型和组织级路由策略。',
          en: 'Next stage should add finer-grained permission models and org-level routing.',
        },
      ],
      nextStep: [
        {
          zh: '继续完善广播策略、任务审计看板与跨系统事件总线。',
          en: 'Improve broadcast policies, task-audit dashboard, and cross-system event bus.',
        },
      ],
    },
  }),
  withCase('doc2brief', {
    seoTitle: {
      zh: 'Doc2Brief 报告生成系统 | Ryder',
      en: 'Doc2Brief | Ryder',
    },
    seoDescription: {
      zh: '文档到周报自动生成案例：8 套模板、2 种生成模式、实时用量监控能力（截至 2026-04-14）。',
      en: 'Doc-to-report generation case with 8 templates, 2 generation modes, and live usage monitoring.',
    },
    heroStatement: {
      zh: '我把它做成“报告产线”而不是“单次生成器”：关注结构稳定、可发布、可追踪，而非一次性炫技输出。',
      en: 'I built a report production line, not a one-shot generator.',
    },
    roleLabel: {
      zh: '产品负责人 / 生成链路与模板策略',
      en: 'Product Lead / Generation Workflow & Template Strategy',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '模板数量',
          en: 'Template Variants',
        },
        value: '08',
        note: {
          zh: 'template catalog 实时配置数量。',
          en: 'Live count from template catalog.',
        },
      },
      {
        label: {
          zh: '生成模式',
          en: 'Generation Modes',
        },
        value: '02',
        note: {
          zh: 'structured-template 与 llm-html 双路径。',
          en: 'Dual paths: structured-template and llm-html.',
        },
      },
      {
        label: {
          zh: '可观测接口',
          en: 'Observable Endpoints',
        },
        value: '04',
        note: {
          zh: 'summary / records / live / stream 四类仪表盘接口。',
          en: 'Dashboard endpoints: summary, records, live, and stream.',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'Doc2Brief 生成与发布演示位',
        en: 'Doc2Brief Generation Demo',
      },
      caption: {
        zh: '展示上传、结构化、模板渲染、发布与用量监控的完整链路。',
        en: 'Shows upload, structuring, template render, publish, and usage monitoring.',
      },
      duration: '02:18',
      posterLabel: {
        zh: 'Doc2Brief / file-to-report',
        en: 'Doc2Brief / file-to-report',
      },
    },
    audience: {
      zh: '需要高频输出周报、简报和专题汇报页面的运营与管理角色。',
      en: 'Operations and management roles producing frequent briefs and reports.',
    },
    context: {
      zh: '报告产出长期依赖人工排版与改稿，难以在时效、稳定性和风格之间取得平衡。',
      en: 'Manual report production struggled to balance speed, stability, and style.',
    },
    constraints: [
      {
        zh: '输入格式多样且文本质量不稳定，易导致生成波动。',
        en: 'Input formats and text quality vary, causing generation volatility.',
      },
      {
        zh: '正式汇报对结构稳定性要求高，不能只追求“看起来像”。',
        en: 'Formal reporting requires structural reliability, not superficial quality.',
      },
      {
        zh: '模型成本需可监控，避免不可见开销。',
        en: 'Model usage cost must remain observable and controllable.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '生成双路径设计',
          en: 'Dual-path Generation',
        },
        objective: {
          zh: '兼顾稳定产出和表达弹性。',
          en: 'Balance stable output with expressive flexibility.',
        },
        move: {
          zh: '主路径采用 structured-template，保底路径采用 llm-html 并加质量闸门回退。',
          en: 'Primary structured-template with llm-html fallback and quality gates.',
        },
        decision: {
          zh: '稳定优先，允许在可控范围内开放风格自由度。',
          en: 'Stability first with controlled creative flexibility.',
        },
      },
      {
        title: {
          zh: '模板体系建设',
          en: 'Template System',
        },
        objective: {
          zh: '让不同业务语境可快速匹配可发布样式。',
          en: 'Enable fast matching from business context to publishable style.',
        },
        move: {
          zh: '构建 8 套模板和统一 view-model 注入机制。',
          en: 'Built 8 templates with a unified view-model injection layer.',
        },
        decision: {
          zh: '模板元数据先标准化，再扩展视觉差异。',
          en: 'Standardized template metadata before expanding visual variants.',
        },
      },
      {
        title: {
          zh: '发布与监控',
          en: 'Publish & Observe',
        },
        objective: {
          zh: '生成结果可交付、可追踪、可运营。',
          en: 'Make outputs deliverable, traceable, and operable.',
        },
        move: {
          zh: '补齐发布接口、报告留存和实时用量看板（SSE + 轮询兜底）。',
          en: 'Added publish APIs, report retention, and live usage dashboards (SSE + polling fallback).',
        },
        decision: {
          zh: '把“生成成功”定义为“可发布且可监控”。',
          en: 'Defined success as publishable and observable, not merely generated.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Ingestion & Parsing',
          en: 'Ingestion & Parsing',
        },
        description: {
          zh: '负责文件提取、文本清洗与输入截断保护。',
          en: 'Handles file extraction, text cleaning, and input guards.',
        },
        bullets: [
          {
            zh: '多格式输入统一抽取',
            en: 'Unified extraction across multiple formats',
          },
          {
            zh: 'MAX_SOURCE_CHARS 防护',
            en: 'MAX_SOURCE_CHARS guardrail',
          },
        ],
      },
      {
        title: {
          zh: 'Generation Engine',
          en: 'Generation Engine',
        },
        description: {
          zh: '双路径生成和质量回退机制保障产出稳定性。',
          en: 'Dual-path generation with quality fallback for stable outputs.',
        },
        bullets: [
          {
            zh: 'structured-template 稳定生成',
            en: 'Structured-template stable generation',
          },
          {
            zh: 'llm-html 自由生成 + 自动回退',
            en: 'LLM-HTML flexible generation + automatic fallback',
          },
        ],
      },
      {
        title: {
          zh: 'Publish & Dashboard',
          en: 'Publish & Dashboard',
        },
        description: {
          zh: '承接报告发布、归档和用量监控。',
          en: 'Supports report publishing, retention, and usage monitoring.',
        },
        bullets: [
          {
            zh: '4 类仪表盘接口 + SSE 实时流',
            en: '4 dashboard endpoints + SSE live stream',
          },
          {
            zh: '发布记录留存与清理策略',
            en: 'Publish record retention and cleanup strategy',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '模板证据',
          en: 'Template Evidence',
        },
        value: '08 Templates',
        note: {
          zh: '模板 catalog 中实时登记的可用模板数量。',
          en: 'Live available template count from template catalog.',
        },
        source: {
          zh: 'src/lib/templates/catalog.js',
          en: 'src/lib/templates/catalog.js',
        },
      },
      {
        label: {
          zh: '模式证据',
          en: 'Mode Evidence',
        },
        value: '02 Modes',
        note: {
          zh: '配置明确双路径生成模式。',
          en: 'Configuration explicitly defines two generation modes.',
        },
        source: {
          zh: 'src/config/workbench.js',
          en: 'src/config/workbench.js',
        },
      },
      {
        label: {
          zh: '可观测证据',
          en: 'Observability Evidence',
        },
        value: '04 Endpoints',
        note: {
          zh: '监控接口覆盖 summary/records/live/stream。',
          en: 'Monitoring endpoints include summary/records/live/stream.',
        },
        source: {
          zh: 'server/app.js',
          en: 'server/app.js',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责生成链路策略、模板体系和发布流程定义。',
        en: 'I owned generation strategy, template system, and publish flow design.',
      },
      {
        zh: '与工程协同落地质量回退和监控接口，降低生成不稳定风险。',
        en: 'Worked with engineering on quality fallback and monitoring APIs.',
      },
      {
        zh: '与使用方共创模板偏好和输出规范，提升采用率。',
        en: 'Co-designed template preferences and output standards with users.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '双路径生成引擎',
          en: 'Dual-path Engine',
        },
        detail: {
          zh: '实现稳定生成与自由生成的可切换体系',
          en: 'Delivered switchable stable/flexible generation paths',
        },
      },
      {
        label: {
          zh: '模板资产体系',
          en: 'Template Asset System',
        },
        detail: {
          zh: '沉淀 8 套模板与统一注入机制',
          en: 'Built 8 templates with unified payload injection',
        },
      },
      {
        label: {
          zh: '用量可观测面',
          en: 'Usage Observability Layer',
        },
        detail: {
          zh: '支持实时看板、明细追踪和成本核算',
          en: 'Enabled live dashboards, records tracking, and cost accounting',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '把“生成”与“发布运维”一起设计，显著提升了系统可用性。',
          en: 'Designing generation with publish operations greatly improved usability.',
        },
      ],
      wouldChange: [
        {
          zh: '下一步会增加模板效果评估和个性化推荐机制。',
          en: 'Next I would add template-effect evaluation and personalized recommendation.',
        },
      ],
      nextStep: [
        {
          zh: '继续强化报告审批流、组织级权限和跨系统发布联动。',
          en: 'Strengthen approval workflows, org-level permissions, and cross-system publishing.',
        },
      ],
    },
  }),
]
