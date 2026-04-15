import type { ProjectDetail } from '../../types/content'
import { withCase } from './helpers'

export const careerProjectDetails: ProjectDetail[] = [
  withCase('info-engine', {
    seoTitle: {
      zh: '信息引擎系统 | Ryder',
      en: 'Information Engine System | Ryder',
    },
    seoDescription: {
      zh: '把 100+ 多媒体信源压缩成每日推送、人才地图与论文图谱的一体化信息引擎案例。',
      en: 'A case study on compressing 100+ media signals into one information engine spanning daily push, talent maps, and paper graphs.',
    },
    heroStatement: {
      zh: '我没有把它做成一次性爬虫项目，而是把研究组织真正需要的情报视图做成了一条可持续产品链。',
      en: 'I did not ship a one-off crawler. I turned the research organization’s intelligence need into a durable product chain.',
    },
    roleLabel: {
      zh: 'AI 产品经理 / 产品框架与迭代负责人',
      en: 'AI Product Manager / Product Framing Lead',
    },
    status: {
      zh: '持续迭代中',
      en: 'Ongoing',
    },
    keyMetrics: [
      {
        label: {
          zh: '信源规模',
          en: 'Signal Coverage',
        },
        value: '100+',
        note: {
          zh: '社媒、博客、论文与机构渠道统一接入',
          en: 'Social, blog, paper, and institutional channels unified into one intake layer',
        },
      },
      {
        label: {
          zh: '交付面',
          en: 'Delivery Surfaces',
        },
        value: '03',
        note: {
          zh: '每日推送、人才地图、内部论文图谱',
          en: 'Daily push, talent map, and internal paper graph',
        },
      },
      {
        label: {
          zh: '产品目标',
          en: 'Operating Goal',
        },
        value: '持续化',
        note: {
          zh: '从一次性获取信息转成组织可复用的情报系统',
          en: 'Shifted from ad hoc collection into a reusable organizational intelligence system',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: '信息引擎主界面演示位',
        en: 'Information Engine Demo Stage',
      },
      caption: {
        zh: '此处预留每日推送、人才地图与论文图谱的串联演示，可替换为录屏或嵌入视频。',
        en: 'Reserved for a walkthrough connecting daily push, talent maps, and the paper graph. Replace with a screen recording or embed later.',
      },
      duration: '02:18',
      posterLabel: {
        zh: 'Demo poster / 信息引擎场景',
        en: 'Demo poster / information engine scene',
      },
    },
    audience: {
      zh: '研究组织内部的产品、研究与管理角色，需要持续读取外部 AI 产业和学术情报的人。',
      en: 'Internal product, research, and management roles who need a durable view of external AI industry and academic signals.',
    },
    context: {
      zh: '学院内部要同时跟踪人才、论文、组织动态和行业热点，但信号分散在多个渠道里，既难持续，又难形成组织判断。',
      en: 'The institute needed to track talent, papers, organizational movement, and industry signals at once, but those signals lived across fragmented channels and were hard to sustain or turn into organizational judgment.',
    },
    constraints: [
      {
        zh: '信息来源跨平台、更新频率不一致，且质量参差。',
        en: 'Sources span platforms, update at uneven cadences, and vary in quality.',
      },
      {
        zh: '产品不能只展示“抓到了什么”，还要让组织能长期消费。',
        en: 'The product could not stop at showing what was captured. It had to support long-term organizational use.',
      },
      {
        zh: '功能必须支持后续模块扩展，而不是一次性脚本堆叠。',
        en: 'The system needed to support future module expansion instead of collapsing into one-off scripts.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '问题拆解',
          en: 'Problem Decomposition',
        },
        objective: {
          zh: '先把“信息很多”拆成“哪些信号值得持续看、哪些结果值得持续留”。',
          en: 'Translate “there is too much information” into which signals deserve continued intake and which outputs deserve persistent storage.',
        },
        move: {
          zh: '把需求拆成内容摄入、摘要判断、结构化沉淀和分发四条链路。',
          en: 'Split the need into intake, summarization, structured persistence, and distribution.',
        },
        decision: {
          zh: '放弃单一内容流产品定义，直接按“情报系统”而不是“内容工具”建模。',
          en: 'Rejected the idea of a single content feed and modeled the system as an intelligence layer rather than a content tool.',
        },
      },
      {
        title: {
          zh: '产品成形',
          en: 'Product Shaping',
        },
        objective: {
          zh: '让不同角色都能从同一条情报管线里得到适合自己的视图。',
          en: 'Ensure different roles can consume the same intelligence pipeline through role-appropriate surfaces.',
        },
        move: {
          zh: '将每日推送做成前台入口，把人才地图与论文图谱做成长期知识层。',
          en: 'Used daily push as the front surface and talent maps plus paper graphs as the durable knowledge layer.',
        },
        decision: {
          zh: '优先建立模块间关系，而不是把每个模块各自做完再拼接。',
          en: 'Prioritized relationships between modules instead of finishing each module in isolation and stitching later.',
        },
      },
      {
        title: {
          zh: '持续迭代',
          en: 'Sustained Iteration',
        },
        objective: {
          zh: '让内容摄入、结构沉淀和后续功能增长形成闭环。',
          en: 'Turn content intake, structured accumulation, and future feature growth into a stable loop.',
        },
        move: {
          zh: '围绕新增信源、展示入口和需求反馈逐步调整模块边界。',
          en: 'Refined module boundaries around newly added sources, display surfaces, and usage feedback.',
        },
        decision: {
          zh: '用产品迭代而不是临时项目方式推进，避免系统寿命只停留在演示阶段。',
          en: 'Drove the system as a product iteration instead of a temporary project so its lifespan would extend beyond demo value.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Signal Intake',
          en: 'Signal Intake',
        },
        description: {
          zh: '统一接入社媒、博客、论文与机构内容，为后续处理建立标准入口。',
          en: 'Unifies social, blog, paper, and institutional content into a standard intake layer.',
        },
        bullets: [
          {
            zh: '多平台信源收集与更新调度',
            en: 'Multi-platform source collection and refresh scheduling',
          },
          {
            zh: '按主题与对象做初步切片',
            en: 'Initial slicing by topic and subject',
          },
        ],
      },
      {
        title: {
          zh: 'Judgment Layer',
          en: 'Judgment Layer',
        },
        description: {
          zh: '把抓取结果转成可摘要、可筛选、可判断的内容单元。',
          en: 'Transforms captured signals into units that can be summarized, filtered, and judged.',
        },
        bullets: [
          {
            zh: '每日推送的内容筛选与编排',
            en: 'Content filtering and packaging for the daily push',
          },
          {
            zh: '将零散内容转回组织可消费语境',
            en: 'Recontextualizes fragmented content for organizational use',
          },
        ],
      },
      {
        title: {
          zh: 'Knowledge Surfaces',
          en: 'Knowledge Surfaces',
        },
        description: {
          zh: '以人才地图和论文图谱承接持续积累，让内容消费可以转成知识资产。',
          en: 'Uses talent maps and paper graphs as the surfaces where ongoing accumulation becomes organizational knowledge.',
        },
        bullets: [
          {
            zh: '人才关系与主题脉络可视化',
            en: 'Visualization of talent relationships and topical pathways',
          },
          {
            zh: '内部论文图谱作为长期知识面',
            en: 'Internal paper graph as the long-term knowledge surface',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '覆盖面',
          en: 'Coverage',
        },
        value: '100+ 信源',
        note: {
          zh: '把外部信息接入变成可持续内容管线，而非一次性导入。',
          en: 'Turned external signal intake into a durable pipeline rather than one-off imports.',
        },
        source: {
          zh: '项目范围与产品目标定义',
          en: 'Project scope and product objective',
        },
      },
      {
        label: {
          zh: '结果形态',
          en: 'Output Surfaces',
        },
        value: '03 核心模块',
        note: {
          zh: '每日推送、人才地图、论文图谱形成统一信息引擎。',
          en: 'Daily push, talent map, and paper graph formed one unified information engine.',
        },
        source: {
          zh: '产品结构设计',
          en: 'Product structure design',
        },
      },
      {
        label: {
          zh: '组织价值',
          en: 'Organizational Value',
        },
        value: '长期可消费',
        note: {
          zh: '重点不在“抓到了多少”，而在“组织能不能持续用”。',
          en: 'The win was not just how much was captured, but whether the organization could keep using it.',
        },
        source: {
          zh: '迭代目标与需求验收',
          en: 'Iteration goals and requirement acceptance',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责产品框架、需求提出、模块边界与迭代节奏。',
        en: 'I owned product framing, requirement definition, module boundaries, and the iteration cadence.',
      },
      {
        zh: '与外部项目组对接功能需求与验收标准。',
        en: 'Worked with external project teams on requirement definition and acceptance criteria.',
      },
      {
        zh: '把研究组织的使用方式持续翻译成产品结构，而不是只交给工程实现。',
        en: 'Continuously translated how the research organization worked into product structure instead of delegating everything to implementation.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '信息引擎产品框架',
          en: 'Information Engine Framework',
        },
        detail: {
          zh: '定义模块关系与前后台信息流',
          en: 'Defined module relationships and front-to-back information flow',
        },
      },
      {
        label: {
          zh: '每日推送方案',
          en: 'Daily Push Design',
        },
        detail: {
          zh: '确定入口形态、内容结构与组织消费方式',
          en: 'Defined the entry surface, content structure, and organizational consumption model',
        },
      },
      {
        label: {
          zh: '人才地图 / 论文图谱规划',
          en: 'Talent Map / Paper Graph Planning',
        },
        detail: {
          zh: '建立持续沉淀的知识资产层',
          en: 'Established the long-term knowledge asset layer',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '一开始就把它定义成产品链，而不是内容采集项目，这是整个系统可持续的关键。',
          en: 'Defining it as a product chain instead of a collection project was the key to making it sustainable.',
        },
        {
          zh: '把即时入口与长期知识面一起设计，让不同角色都能找到自己的使用方式。',
          en: 'Designing the immediate entry surface and long-term knowledge surfaces together let different roles find their own mode of use.',
        },
      ],
      wouldChange: [
        {
          zh: '如果重来，会更早定义评价内容质量和使用频率的度量体系。',
          en: 'If I did it again, I would define content quality and usage metrics earlier.',
        },
      ],
      nextStep: [
        {
          zh: '继续增强信源治理、结果分层与后续知识连接能力。',
          en: 'Continue strengthening source governance, result layering, and downstream knowledge linking.',
        },
      ],
    },
  }),
  withCase('mcp-eval', {
    seoTitle: {
      zh: 'MCP 测试框架 | Ryder',
      en: 'MCP Evaluation Framework | Ryder',
    },
    seoDescription: {
      zh: '以 Agent 为载体重构 MCP Server 评测逻辑的产品方案与方法论案例。',
      en: 'A case study on reframing MCP server evaluation by using agents as the evaluation carrier.',
    },
    heroStatement: {
      zh: '这个项目的核心不是“多做几轮测试”，而是为平台建立一套更接近真实使用方式的判断系统。',
      en: 'The core was not to run more tests. It was to give the platform a judgment system that looked more like real usage.',
    },
    roleLabel: {
      zh: '产品经理实习生 / 评测框架设计',
      en: 'Product Manager Intern / Evaluation Framework Design',
    },
    status: {
      zh: '方案完成',
      en: 'Shipped as a framework proposal',
    },
    keyMetrics: [
      {
        label: {
          zh: '评测对象',
          en: 'Evaluation Target',
        },
        value: 'MCP Server',
        note: {
          zh: '针对平台内已有工具能力建立统一判断方式',
          en: 'Built a unified decision framework for existing platform tool capabilities',
        },
      },
      {
        label: {
          zh: '方法变化',
          en: 'Method Shift',
        },
        value: 'Tool → Agent',
        note: {
          zh: '从静态工具校验转向更贴近真实任务的 Agent 化评测',
          en: 'Shifted from static tool checks to agent-led evaluation closer to real tasks',
        },
      },
      {
        label: {
          zh: '平台价值',
          en: 'Platform Value',
        },
        value: '更可维护',
        note: {
          zh: '帮助平台判断哪些工具值得继续维护',
          en: 'Helped the platform decide which tools deserved ongoing maintenance',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'MCP 评测流程演示位',
        en: 'MCP Evaluation Walkthrough',
      },
      caption: {
        zh: '预留 Agent 评测流程、参考工具对比和结果输出的演示区域。',
        en: 'Reserved for a walkthrough of the agent evaluation loop, reference tooling, and result output.',
      },
      duration: '01:42',
      posterLabel: {
        zh: 'Demo poster / MCP evaluation scene',
        en: 'Demo poster / MCP evaluation scene',
      },
    },
    audience: {
      zh: '维护平台工具生态、需要判断工具质量与维护价值的开发者平台团队。',
      en: 'Developer platform teams responsible for a tool ecosystem and for deciding maintenance priorities.',
    },
    context: {
      zh: '平台内积累了越来越多工具能力，但缺少一套既可比较、又贴近真实任务的评测方法。',
      en: 'The platform kept accumulating more tools, but lacked an evaluation method that was both comparable and close to real tasks.',
    },
    constraints: [
      {
        zh: '不能只测单个 API 是否返回结果，要看真实任务里是否可用。',
        en: 'It was not enough to test whether an API returned something. Usability inside real tasks mattered.',
      },
      {
        zh: '平台需要评测结果既能复用，又能指导维护决策。',
        en: 'The results had to be reusable and actionable for maintenance decisions.',
      },
      {
        zh: '方案必须兼顾行业实践和学术方法，而不是凭经验拍脑袋。',
        en: 'The framework needed to synthesize industry practice and research rather than rely on intuition alone.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '研究对标',
          en: 'Research Benchmarking',
        },
        objective: {
          zh: '先确认现有评测方法为什么不能解释 MCP Server 的真实价值。',
          en: 'Clarify why existing evaluation methods could not explain the real value of MCP servers.',
        },
        move: {
          zh: '调研行业与学术中的 Agent 评测、工具评测与真实任务评测方法。',
          en: 'Surveyed agent evaluation, tool evaluation, and real-task evaluation methods across industry and academia.',
        },
        decision: {
          zh: '不沿用静态 checklist，而是将 Agent 作为测试载体。',
          en: 'Chose not to rely on static checklists and instead used agents as the evaluation carrier.',
        },
      },
      {
        title: {
          zh: '框架重构',
          en: 'Framework Restructuring',
        },
        objective: {
          zh: '让评测能同时看活性、参考性与任务完成质量。',
          en: 'Make evaluation capture liveliness, comparability, and task completion quality at the same time.',
        },
        move: {
          zh: '引入外部工具作为参照，把 MCP Server 放进真实任务链路里观察表现。',
          en: 'Introduced external tools as references and evaluated MCP servers inside realistic task chains.',
        },
        decision: {
          zh: '把“是否能用”从单步验证升级为“在任务里是否值得被调用”。',
          en: 'Upgraded “does it work” from a step-level check into “is it worth calling inside a task.”',
        },
      },
      {
        title: {
          zh: '方法沉淀',
          en: 'Method Consolidation',
        },
        objective: {
          zh: '让平台后续评测可以沿用同一套结构，而不是每次重写。',
          en: 'Make future platform evaluations reuse one structure instead of being reinvented every time.',
        },
        move: {
          zh: '把测试流程、参考对象和结果解释逻辑整理成统一方法论。',
          en: 'Consolidated the test flow, reference objects, and interpretation logic into one methodology.',
        },
        decision: {
          zh: '重点沉淀“判断框架”，而不是单轮实验结果。',
          en: 'Prioritized preserving the judgment framework over one round of experiment results.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Reference Layer',
          en: 'Reference Layer',
        },
        description: {
          zh: '用外部工具与既有能力作为比较标尺，避免评测失去参照。',
          en: 'Uses external tools and existing capabilities as reference points so evaluation does not drift without comparison.',
        },
        bullets: [
          {
            zh: '引入对照工具结果',
            en: 'Brings in baseline tool outputs',
          },
          {
            zh: '构造可比较的任务输入',
            en: 'Builds comparable task inputs',
          },
        ],
      },
      {
        title: {
          zh: 'Agent Execution Layer',
          en: 'Agent Execution Layer',
        },
        description: {
          zh: '让 Agent 作为测试载体执行任务，观察 MCP Server 在真实链路中的表现。',
          en: 'Uses agents to execute tasks and observe MCP server behavior inside realistic chains.',
        },
        bullets: [
          {
            zh: '任务驱动评测',
            en: 'Task-driven evaluation',
          },
          {
            zh: '更贴近真实调用行为',
            en: 'Closer to real invocation behavior',
          },
        ],
      },
      {
        title: {
          zh: 'Judgment Output',
          en: 'Judgment Output',
        },
        description: {
          zh: '把结果转成平台可用的维护和演进判断，而不是单次分数。',
          en: 'Turns results into maintenance and evolution decisions rather than one-off scores.',
        },
        bullets: [
          {
            zh: '支持平台维护优先级判断',
            en: 'Supports maintenance prioritization',
          },
          {
            zh: '帮助识别高价值能力',
            en: 'Helps identify high-value capability',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '方法升级',
          en: 'Method Upgrade',
        },
        value: 'Agent 化评测',
        note: {
          zh: '从单一工具验证转向任务链路中的真实表现观察。',
          en: 'Shifted from isolated tool checks to observing real task-chain performance.',
        },
        source: {
          zh: '评测框架设计',
          en: 'Framework design',
        },
      },
      {
        label: {
          zh: '平台判断',
          en: 'Platform Judgment',
        },
        value: '更可参考',
        note: {
          zh: '让维护决策基于更强的使用语境，而不是表面成功率。',
          en: 'Made maintenance decisions rely on stronger usage context instead of surface-level success rates.',
        },
        source: {
          zh: '平台方法论目标',
          en: 'Platform methodology objective',
        },
      },
      {
        label: {
          zh: '长期价值',
          en: 'Long-Term Value',
        },
        value: '统一方法论',
        note: {
          zh: '把方案沉淀成可复用的评测结构。',
          en: 'Consolidated the work into a reusable evaluation structure.',
        },
        source: {
          zh: '方案沉淀结果',
          en: 'Method consolidation result',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责评测方向调研、方案抽象和产品框架设计。',
        en: 'I led direction research, abstraction of the approach, and product framing.',
      },
      {
        zh: '与平台和工程角色对齐可维护性与可解释性要求。',
        en: 'Worked with platform and engineering stakeholders to align on maintainability and interpretability.',
      },
      {
        zh: '把学术与行业方法转回平台决策语境，避免方案停留在概念层。',
        en: 'Translated academic and industry methods back into platform decision context so the work would not stay conceptual.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '评测框架设计',
          en: 'Evaluation Framework Design',
        },
        detail: {
          zh: '定义 Agent 载体、参考对象与结果判断逻辑',
          en: 'Defined agent carrier, reference objects, and result judgment logic',
        },
      },
      {
        label: {
          zh: '方法论说明',
          en: 'Methodology Narrative',
        },
        detail: {
          zh: '将调研与产品方案整合为统一表述',
          en: 'Unified research and product reasoning into one methodology narrative',
        },
      },
      {
        label: {
          zh: '平台判断标准',
          en: 'Platform Decision Standard',
        },
        detail: {
          zh: '帮助平台判断工具的持续维护价值',
          en: 'Helped the platform judge ongoing maintenance value',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '项目最关键的突破是把“测试”重新定义成“判断系统”。',
          en: 'The breakthrough was redefining “testing” into a judgment system.',
        },
      ],
      wouldChange: [
        {
          zh: '如果继续推进，会补更明确的任务分层和结果对齐口径。',
          en: 'If continued, I would add clearer task stratification and result-alignment criteria.',
        },
      ],
      nextStep: [
        {
          zh: '继续把方法论落到更细的任务集合和平台指标上。',
          en: 'Continue grounding the methodology in finer-grained task sets and platform metrics.',
        },
      ],
    },
  }),
  withCase('smart-recruitment', {
    seoTitle: {
      zh: '智能招聘全流程系统 | Ryder',
      en: 'Smart Recruitment System | Ryder',
    },
    seoDescription: {
      zh: '连接 Boss、飞书、OA 与智谱清言的跨平台 Multi-Agent 招聘系统案例。',
      en: 'A case study on a cross-platform multi-agent recruitment system connecting Boss, Feishu, OA, and Zhipu Qingyan.',
    },
    heroStatement: {
      zh: '这个系统的价值不在“自动回复更多消息”，而在把跨平台、跨角色、跨异常路径的招聘流程变成一个稳定产品。',
      en: 'The system’s value was not “replying faster.” It was turning a cross-platform, multi-role, exception-heavy recruitment process into a stable product.',
    },
    roleLabel: {
      zh: 'AI 产品经理 / Agent 流程设计',
      en: 'AI Product Manager / Agent Workflow Design',
    },
    status: {
      zh: '已落地',
      en: 'Shipped',
    },
    keyMetrics: [
      {
        label: {
          zh: '流程耗时',
          en: 'Process Time',
        },
        value: '3h → 20min',
        note: {
          zh: '将 HR 招聘处理时间大幅压缩',
          en: 'Reduced HR processing time dramatically',
        },
      },
      {
        label: {
          zh: '跨平台协同',
          en: 'Cross-Platform Flow',
        },
        value: '04',
        note: {
          zh: 'Boss、飞书、OA、智谱清言串成一条执行链',
          en: 'Boss, Feishu, OA, and Zhipu Qingyan connected into one chain',
        },
      },
      {
        label: {
          zh: '候选人体验',
          en: 'Candidate Experience',
        },
        value: '+12%',
        note: {
          zh: '满意度提升',
          en: 'Improved satisfaction',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: '智能招聘流程演示位',
        en: 'Recruitment Workflow Demo',
      },
      caption: {
        zh: '预留从职位触达、流程推进到异常回收的端到端演示。',
        en: 'Reserved for an end-to-end walkthrough from role outreach through process execution and exception recovery.',
      },
      duration: '02:36',
      posterLabel: {
        zh: 'Demo poster / recruitment workflow scene',
        en: 'Demo poster / recruitment workflow scene',
      },
    },
    audience: {
      zh: '企业 HR 团队与交付团队，尤其是流程长、系统多、协同节点复杂的招聘场景。',
      en: 'Enterprise HR and delivery teams operating in long, multi-system, coordination-heavy recruitment flows.',
    },
    context: {
      zh: '招聘流程横跨多个平台和角色，任何一步中断都会带来人工回补和候选人体验损失。',
      en: 'Recruitment flowed across multiple platforms and roles, and any break created manual recovery work and candidate experience loss.',
    },
    constraints: [
      {
        zh: '流程涉及多个系统，单个系统自动化无法解决全链路问题。',
        en: 'The process spanned multiple systems, so single-system automation could not solve the full chain.',
      },
      {
        zh: '异常路径非常多，不能只优化理想流程。',
        en: 'There were too many exception paths to optimize only the happy path.',
      },
      {
        zh: '系统必须同时保证执行稳定性和沟通体验。',
        en: 'The system had to preserve both execution stability and communication quality.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '流程抽象',
          en: 'Flow Abstraction',
        },
        objective: {
          zh: '先把复杂招聘流程抽成可编排、可观察、可回收的链路。',
          en: 'Abstract the complex recruitment flow into a chain that could be orchestrated, observed, and recovered.',
        },
        move: {
          zh: '把职位触达、沟通、审批、反馈等节点重新整理成统一任务流。',
          en: 'Reframed outreach, communication, approvals, and feedback into one task flow.',
        },
        decision: {
          zh: '不把它做成单点工具，而是做成完整流程产品。',
          en: 'Chose not to build a single-purpose tool and instead built a full process product.',
        },
      },
      {
        title: {
          zh: 'Agent 执行设计',
          en: 'Agent Execution Design',
        },
        objective: {
          zh: '让系统既能自动推进流程，又能在异常时自我回收。',
          en: 'Enable the system to move the process forward automatically and recover when exceptions happen.',
        },
        move: {
          zh: '将规则约束与 LLM 自主规划结合，构造稳定执行机制。',
          en: 'Combined rule constraints with LLM planning to create stable execution behavior.',
        },
        decision: {
          zh: '优先保证异常处理闭环，而不是只追求自动化覆盖率。',
          en: 'Prioritized exception handling loops over raw automation coverage.',
        },
      },
      {
        title: {
          zh: '落地与反馈',
          en: 'Delivery and Feedback',
        },
        objective: {
          zh: '把系统真正放进 HR 流程，而不是停留在 demo。',
          en: 'Put the system inside the real HR workflow instead of leaving it as a demo.',
        },
        move: {
          zh: '围绕处理效率、满意度和失败回收持续优化流程细节。',
          en: 'Refined the process around speed, satisfaction, and failure recovery.',
        },
        decision: {
          zh: '将产品价值定义为“稳定完成招聘动作”，而不是“生成内容”。',
          en: 'Defined product value as reliably completing recruitment actions rather than just generating content.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: '入口与触达',
          en: 'Entry and Outreach',
        },
        description: {
          zh: '围绕职位触达与候选人互动建立统一入口。',
          en: 'Created a unified entry layer for role outreach and candidate interaction.',
        },
        bullets: [
          {
            zh: '对接 Boss 等外部招聘入口',
            en: 'Connects with external recruitment entry points such as Boss',
          },
          {
            zh: '承接初始交互动作',
            en: 'Handles initial interaction steps',
          },
        ],
      },
      {
        title: {
          zh: '编排与异常控制',
          en: 'Orchestration and Exception Control',
        },
        description: {
          zh: '把流程推进与异常检测做成同一套执行核心。',
          en: 'Treats process execution and exception detection as one execution core.',
        },
        bullets: [
          {
            zh: '规则与 Agent 规划结合',
            en: 'Combines rules with agent planning',
          },
          {
            zh: '异常状态可回收可补救',
            en: 'Exception states are recoverable',
          },
        ],
      },
      {
        title: {
          zh: '协同与反馈',
          en: 'Coordination and Feedback',
        },
        description: {
          zh: '连通 OA、飞书等协作节点，形成闭环。',
          en: 'Connects OA, Feishu, and other coordination nodes into one loop.',
        },
        bullets: [
          {
            zh: '内部审批与沟通同步',
            en: 'Synchronizes internal approval and communication',
          },
          {
            zh: '反馈结果反哺流程策略',
            en: 'Feeds outcome signals back into process strategy',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '效率',
          en: 'Efficiency',
        },
        value: '3h → 20min',
        note: {
          zh: '招聘流程处理时间显著压缩。',
          en: 'Recruitment handling time was compressed significantly.',
        },
        source: {
          zh: '项目结果口径',
          en: 'Project outcome baseline',
        },
      },
      {
        label: {
          zh: '体验',
          en: 'Experience',
        },
        value: '+12%',
        note: {
          zh: '候选人满意度提升。',
          en: 'Candidate satisfaction improved.',
        },
        source: {
          zh: '交付反馈',
          en: 'Delivery feedback',
        },
      },
      {
        label: {
          zh: '系统价值',
          en: 'System Value',
        },
        value: '全流程',
        note: {
          zh: '把单点自动化升级成完整流程产品。',
          en: 'Turned isolated automation into a full process product.',
        },
        source: {
          zh: '产品定义与落地范围',
          en: 'Product definition and delivery scope',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责产品框架、Agent 流程抽象与异常机制设计。',
        en: 'I owned product framing, agent flow abstraction, and exception mechanism design.',
      },
      {
        zh: '与 HR、交付和技术角色一起校正流程边界与可用性。',
        en: 'Worked with HR, delivery, and technical stakeholders to tune process boundaries and usability.',
      },
      {
        zh: '把系统价值从“自动化一点点”拉到“稳定完成整个动作”。',
        en: 'Shifted the system’s value from “a bit of automation” to “reliably completing the whole action.”',
      },
    ],
    deliverables: [
      {
        label: {
          zh: '招聘流程产品框架',
          en: 'Recruitment Product Framework',
        },
        detail: {
          zh: '定义全链路流程与关键节点',
          en: 'Defined the full-chain flow and key checkpoints',
        },
      },
      {
        label: {
          zh: '异常处理策略',
          en: 'Exception Handling Strategy',
        },
        detail: {
          zh: '为失败路径补足回收与修复机制',
          en: 'Added recovery and repair mechanisms for failure paths',
        },
      },
      {
        label: {
          zh: '跨平台协同方案',
          en: 'Cross-Platform Coordination Plan',
        },
        detail: {
          zh: '连接 Boss、飞书、OA 与智谱清言',
          en: 'Connected Boss, Feishu, OA, and Zhipu Qingyan',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '最有效的动作是先抽象流程，再决定 Agent 如何接管。',
          en: 'The most effective move was abstracting the process first, then deciding how the agent should take over.',
        },
      ],
      wouldChange: [
        {
          zh: '如果继续做，会补更细粒度的流程可观测指标。',
          en: 'If extended, I would add more granular observability metrics for each process step.',
        },
      ],
      nextStep: [
        {
          zh: '继续强化异常分类和跨角色反馈闭环。',
          en: 'Continue strengthening exception classification and cross-role feedback loops.',
        },
      ],
    },
  }),
  withCase('chatbi', {
    seoTitle: {
      zh: 'ChatBI 自然语言查询系统 | Ryder',
      en: 'ChatBI Query System | Ryder',
    },
    seoDescription: {
      zh: '围绕防汛业务场景构建自然语言数据查询入口的 ChatBI 案例。',
      en: 'A case study on building a natural-language BI entry point for flood-control operations.',
    },
    heroStatement: {
      zh: '这个项目不是把 SQL 包进聊天框，而是把高频业务查询从结构化门槛里解放出来。',
      en: 'This project was not about wrapping SQL in a chat box. It was about freeing high-frequency operational queries from structured friction.',
    },
    roleLabel: {
      zh: 'AI 产品经理 / 场景设计与数据体系建设',
      en: 'AI Product Manager / Scenario and Data Design',
    },
    status: {
      zh: '已落地',
      en: 'Shipped',
    },
    keyMetrics: [
      {
        label: {
          zh: '训练样本',
          en: 'Training Samples',
        },
        value: '2000+',
        note: {
          zh: '覆盖多业务查询场景',
          en: 'Covers multiple business query scenarios',
        },
      },
      {
        label: {
          zh: '模型选择准确率',
          en: 'Model Selection Accuracy',
        },
        value: '100%',
        note: {
          zh: '信口选择达到稳定判断',
          en: 'Stable model-selection accuracy',
        },
      },
      {
        label: {
          zh: '参数提取准确率',
          en: 'Parameter Extraction Accuracy',
        },
        value: '94%',
        note: {
          zh: '自然语言到结构参数的关键指标',
          en: 'Key metric for translating natural language into structured parameters',
        },
      },
    ],
    demoVideo: {
      mode: 'placeholder',
      title: {
        zh: 'ChatBI 查询演示位',
        en: 'ChatBI Query Demo',
      },
      caption: {
        zh: '预留从自然语言输入到数据结果返回的查询演示，可替换为录屏或业务数据 mock。',
        en: 'Reserved for a walkthrough from natural-language input to returned data results. Can later be replaced by a recording or business-data mock.',
      },
      duration: '01:56',
      posterLabel: {
        zh: 'Demo poster / ChatBI scene',
        en: 'Demo poster / ChatBI scene',
      },
    },
    audience: {
      zh: '区县级防汛负责人等业务用户，他们需要快速读取气象与业务数据，但不具备复杂查询能力。',
      en: 'Operational users such as local flood-control leads who need rapid access to weather and business data without navigating complex query systems.',
    },
    context: {
      zh: '业务人员面对复杂数据时，查询路径长、参数多、解释成本高，导致高频场景下的信息获取效率很差。',
      en: 'Operational users faced long query paths, dense parameters, and high interpretation cost, which hurt efficiency in high-frequency scenarios.',
    },
    constraints: [
      {
        zh: '不能只让模型“会回答”，还要让它能抽出正确参数。',
        en: 'The model needed to do more than answer. It had to extract the right parameters.',
      },
      {
        zh: '高频业务场景要求结果稳定，不能过度依赖“提示词运气”。',
        en: 'High-frequency use required stable results rather than prompt luck.',
      },
      {
        zh: '产品设计、数据构造和场景覆盖必须一起推进。',
        en: 'Product design, data construction, and scenario coverage had to evolve together.',
      },
    ],
    productActions: [
      {
        title: {
          zh: '场景聚焦',
          en: 'Scenario Focus',
        },
        objective: {
          zh: '先识别哪些业务问题最值得从自然语言入口切入。',
          en: 'Identify which operational questions most deserved a natural-language entry point.',
        },
        move: {
          zh: '围绕高频查询动作重构产品入口与交互路径。',
          en: 'Reframed the product entry and interaction path around high-frequency query behavior.',
        },
        decision: {
          zh: '不追求大而全对话，而是锁定真实业务查询。',
          en: 'Chose not to build a general chat experience and focused on real operational queries.',
        },
      },
      {
        title: {
          zh: '数据体系建设',
          en: 'Data System Construction',
        },
        objective: {
          zh: '让系统不仅“懂话”，还“懂参数与业务口径”。',
          en: 'Make the system understand not just language, but also parameters and operational semantics.',
        },
        move: {
          zh: '构建多维 query 与 2000+ 训练样本，覆盖主要业务场景。',
          en: 'Built multi-dimensional query patterns and 2000+ training samples across the main scenarios.',
        },
        decision: {
          zh: '把数据集建设视为产品核心，而不是模型调优附属物。',
          en: 'Treated dataset construction as a product core rather than a side effect of model tuning.',
        },
      },
      {
        title: {
          zh: '稳定性验证',
          en: 'Stability Validation',
        },
        objective: {
          zh: '确保结果能在高频业务里可靠使用。',
          en: 'Ensure results were reliable enough for repeated operational use.',
        },
        move: {
          zh: '围绕模型选择、参数提取和业务覆盖验证关键指标。',
          en: 'Validated key metrics around model selection, parameter extraction, and business coverage.',
        },
        decision: {
          zh: '优先验证结果的稳定性和可解释性，而不是花哨对话体验。',
          en: 'Prioritized stability and explainability over flashy conversational behavior.',
        },
      },
    ],
    systemModules: [
      {
        title: {
          zh: 'Natural Query Entry',
          en: 'Natural Query Entry',
        },
        description: {
          zh: '把原本结构化表单入口改成更自然的业务语言入口。',
          en: 'Transforms the old structured-form entry into a more natural business-language entry point.',
        },
        bullets: [
          {
            zh: '减少参数填写负担',
            en: 'Reduces parameter-entry burden',
          },
          {
            zh: '保留业务语义表达',
            en: 'Preserves business-language intent',
          },
        ],
      },
      {
        title: {
          zh: 'Intent and Parameter Layer',
          en: 'Intent and Parameter Layer',
        },
        description: {
          zh: '负责把自然语言翻成可执行查询结构。',
          en: 'Responsible for translating natural language into executable query structure.',
        },
        bullets: [
          {
            zh: '模型选择判断',
            en: 'Model-selection judgment',
          },
          {
            zh: '关键参数抽取',
            en: 'Key parameter extraction',
          },
        ],
      },
      {
        title: {
          zh: 'Scenario Data Layer',
          en: 'Scenario Data Layer',
        },
        description: {
          zh: '用针对业务场景的数据体系支撑产品稳定度。',
          en: 'Uses scenario-shaped data construction to support product stability.',
        },
        bullets: [
          {
            zh: '多维 query 样本设计',
            en: 'Multi-dimensional query sample design',
          },
          {
            zh: '按业务场景覆盖数据口径',
            en: 'Covers data semantics by business scenario',
          },
        ],
      },
    ],
    evidence: [
      {
        label: {
          zh: '样本规模',
          en: 'Sample Volume',
        },
        value: '2000+',
        note: {
          zh: '建立覆盖多业务场景的数据集。',
          en: 'Built a dataset that covered multiple operational scenarios.',
        },
        source: {
          zh: '项目数据体系',
          en: 'Project data system',
        },
      },
      {
        label: {
          zh: '模型选择',
          en: 'Model Selection',
        },
        value: '100%',
        note: {
          zh: '模型选择判断达到稳定准确。',
          en: 'Model-selection decisions reached stable accuracy.',
        },
        source: {
          zh: '验证结果',
          en: 'Validation result',
        },
      },
      {
        label: {
          zh: '参数抽取',
          en: 'Parameter Extraction',
        },
        value: '94%',
        note: {
          zh: '自然语言转结构参数的关键能力达成目标。',
          en: 'The key ability of converting language into structured parameters met the target.',
        },
        source: {
          zh: '验证结果',
          en: 'Validation result',
        },
      },
    ],
    collaboration: [
      {
        zh: '我负责产品方案、场景设计和多维 query 体系建设。',
        en: 'I owned product design, scenario framing, and the multi-dimensional query system.',
      },
      {
        zh: '与技术和业务角色一起把“用户怎么问”转成“系统如何稳地答”。',
        en: 'Worked with technical and business stakeholders to translate “how users ask” into “how the system answers reliably.”',
      },
      {
        zh: '把调优工作拉回产品语境，用数据体系支撑稳定体验。',
        en: 'Pulled tuning work back into product context and used the dataset system to support a stable experience.',
      },
    ],
    deliverables: [
      {
        label: {
          zh: 'ChatBI 产品方案',
          en: 'ChatBI Product Design',
        },
        detail: {
          zh: '定义自然语言查询入口与业务场景结构',
          en: 'Defined the natural-language query entry and scenario structure',
        },
      },
      {
        label: {
          zh: '多维 Query 体系',
          en: 'Multi-dimensional Query System',
        },
        detail: {
          zh: '构建自然语言到结构参数的核心桥梁',
          en: 'Built the core bridge from natural language to structured parameters',
        },
      },
      {
        label: {
          zh: '训练数据集',
          en: 'Training Dataset',
        },
        detail: {
          zh: '建立 2000+ 样本覆盖业务高频场景',
          en: 'Built 2000+ samples covering high-frequency operational scenarios',
        },
      },
    ],
    retrospective: {
      worked: [
        {
          zh: '把产品设计和数据体系同时推进，是这个项目能真正稳定的关键。',
          en: 'Driving product design and data construction together was the key to stability.',
        },
      ],
      wouldChange: [
        {
          zh: '如果继续做，会补更强的错误解释和查询失败回退机制。',
          en: 'If extended, I would add stronger error explanation and query-fallback mechanisms.',
        },
      ],
      nextStep: [
        {
          zh: '继续扩展场景覆盖与结果解释层。',
          en: 'Continue expanding scenario coverage and the result-explanation layer.',
        },
      ],
    },
  }),
]
