import type { ExperienceEntry } from '../../types/content'
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
      zh: '负责研究院情报平台产品群（Core + Workbench + Monitoring + Agent + Doc2Brief）的方法设计与节奏推进，持续把分散能力收束为统一可复用底座。',
      en: 'Leading the platform-product cluster to turn fragmented capabilities into one reusable intelligence stack.',
    },
    achievements: [
      {
        zh: '推动 Core 平台形成 268 信源（191 启用）与 143 路由的统一服务底座，并标注可追踪口径。',
        en: 'Drove the core platform to 268 sources (191 enabled) and 143 routes with traceable metrics.',
      },
      {
        zh: '将 Dean Workbench、Scholar Workbench、Monitoring Framework 与 NanoBot 的能力边界拉通，减少重复建设与数据口径冲突。',
        en: 'Aligned boundaries across workbenches, monitoring, and gateway to reduce duplication.',
      },
      {
        zh: '通过 Doc2Brief 建立“输入-生成-发布-监控”材料产线，补齐从情报消费到成果输出的闭环。',
        en: 'Closed the loop from intelligence consumption to report delivery via Doc2Brief.',
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
      zh: '聚焦开发者平台与 MCP 生态治理，解决“工具增长快但质量判断慢”的系统性问题。',
      en: 'Focused on MCP ecosystem governance where tool growth outpaced quality evaluation.',
    },
    achievements: [
      {
        zh: '将 8 个 MCP Server、35 个 Tool 封装成内部 API 服务。',
        en: 'Wrapped 8 MCP servers and 35 tools into internal API services.',
      },
      {
        zh: '提出 Agent 化评测框架，补齐“可调用 ≠ 可维护”的证据链，降低后续运维盲区。',
        en: 'Designed an agent-based evaluation method to close the callable-vs-maintainable gap.',
      },
      {
        zh: '把工具治理标准落到可比较、可复测、可决策三项产品指标。',
        en: 'Turned tool governance into comparable, reproducible, decision-ready metrics.',
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
      zh: '在交付一线负责智能招聘和 ChatBI 两条核心场景，目标是让 AI 从概念演示进入可稳定运行的业务流程。',
      en: 'Owned smart recruitment and ChatBI delivery tracks focused on stable business operation.',
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
        zh: '建立规则+模型协同机制，兼顾执行稳定性、异常处理和业务可接受性。',
        en: 'Built a rule+LLM mechanism balancing stability, exception handling, and adoption.',
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
      zh: '参与 LLM 平台能力建设与产品化验证，关注“能力上线”到“日常使用”的转化效率。',
      en: 'Worked on LLM platform productization with a focus on everyday adoption.',
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
        zh: '推动从“功能可见”转向“使用可达”的体验改造，降低内部用户上手门槛。',
        en: 'Pushed the platform from visible capability to reachable daily usage.',
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

