import type { CapabilityTag, LocalizedText, ProfileIdentity, ProofStat } from '../../types/content'
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
    value: '10',
    label: {
      zh: 'Agent / AI 产品实践',
      en: 'Agent / AI Products',
    },
    note: {
      zh: '主页展示 4 个职业案例 + 6 个平台项目',
      en: 'Homepage now shows 4 career cases plus 6 platform projects',
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
    value: '268',
    label: {
      zh: '多媒体信源接入',
      en: 'Signal Sources Integrated',
    },
    note: {
      zh: '总信源 268 / 启用 191（代码库存口径）',
      en: '268 total sources / 191 enabled from live code inventories',
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

