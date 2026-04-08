/* ═══════════════════════════════════════════════════
   Recent Updates — 最新动态
   ═══════════════════════════════════════════════════ */

export type UpdateType = "project" | "fieldnote" | "insight" | "milestone";

export interface Update {
  date: string;
  type: UpdateType;
  title: string;
  titleEn: string;
  brief: string;
  briefEn: string;
  link?: string;
  tags?: string[];
}

export const UPDATES: Update[] = [
  {
    date: "2026-04-01",
    type: "milestone",
    title: "Multi-Agent 架构拆分完成",
    titleEn: "Multi-Agent Architecture Split Complete",
    brief: "main(Opus)/ops(Sonnet)/research(Opus) 三层分离，46 cron 全量审计，0 孤儿任务",
    briefEn: "Three-layer split: main(Opus)/ops(Sonnet)/research(Opus). 46 cron jobs audited, 0 orphaned tasks.",
    tags: ["Agent Architecture", "Multi-Agent", "DevOps"],
  },
  {
    date: "2026-03-31",
    type: "project",
    title: "Harness v2 M1-M3 完成",
    titleEn: "Harness v2 Milestones M1-M3 Complete",
    brief: "评估框架重构：分离评分/结果/分析层，待人工抽样验证",
    briefEn: "Evaluation framework refactored: separated scoring/results/analysis layers. Awaiting human sampling validation.",
    tags: ["Evaluation", "Agent Architecture"],
  },
  {
    date: "2026-03-30",
    type: "milestone",
    title: "Golden Test v3 全通过 (30/30)",
    titleEn: "Golden Test v3 Full Pass (30/30)",
    brief: "Agent 能力基线评估 30 题全通过，覆盖安全/记忆/工具/推理/编排 5 大域",
    briefEn: "Agent capability baseline: 30/30 pass across safety, memory, tools, reasoning, and orchestration.",
    tags: ["Evaluation", "Quality"],
  },
  {
    date: "2026-03-13",
    type: "milestone",
    title: "Nous 知识本体系统：从立项到核心完成仅 18 小时",
    titleEn: "Nous Ontology System: Core Built in 18 Hours",
    brief: "Rust + PyO3 + Cozo Datalog 三层架构。从决策本体论插件演化为完整知识系统：325 tests，6 Cozo 关系表，gate 完整 pipeline（extract→match→route→trace→log）",
    briefEn: "Rust + PyO3 + Cozo Datalog tri-layer. Evolved from an ontology-gate plugin into a full knowledge system: 325 tests, 6 Cozo relations, complete gate pipeline (extract→match→route→trace→log).",
    link: "/fieldnotes/nous-ontology-system",
    tags: ["Agent Architecture", "Rust", "Ontology", "Self-Improvement"],
  },
  {
    date: "2026-03-10",
    type: "project",
    title: "ontology-gate：决策本体论在 Agent 中的硬拦截实践",
    titleEn: "ontology-gate: Decision Ontology as Hard Interception",
    brief: "4 模型 Swarm + 7-agent 三阶段调研，产出 488 行 TypeScript。OpenClaw before_tool_call 插件让 T3/T5/T10/T12 安全规则从「应该做」变成「机制保证做」",
    briefEn: "4-model Swarm + 7-agent research phases. 488-line TypeScript. OpenClaw before_tool_call plugin converts T3/T5/T10/T12 safety rules from 'should do' to 'mechanism ensures doing'.",
    link: "/fieldnotes/nous-ontology-system",
    tags: ["Agent Safety", "Ontology", "TypeScript"],
  },
  {
    date: "2026-03-10",
    type: "insight",
    title: "MAGE + KARL：Agent RL 的两个互补框架",
    titleEn: "MAGE + KARL: Two Complementary Agent RL Frameworks",
    brief: "差分元奖励 ℛ_n = R(τ_n) - R(τ_{n-1}) 优化学习速度而非任务性能；Frankle 77 页系统论文验证 RL 后训练做搜索/知识 Agent 的 Pareto-optimal 路线",
    briefEn: "Differential meta-reward ℛ_n = R(τ_n) - R(τ_{n-1}) optimizes learning speed not task performance; Frankle's 77-page paper validates RL post-training for search/knowledge agents as Pareto-optimal.",
    link: "/fieldnotes/auto-recall-tool-search-isomorphism",
    tags: ["Agent RL", "Research", "Meta-Learning"],
  },
  {
    date: "2026-03-08",
    type: "project",
    title: "Agent 具身化实验：ISS 状态驱动树莓派感知",
    titleEn: "Agent Embodiment: ISS State Driving Raspberry Pi Perception",
    brief: "DS18B20/PIR/光敏传感器 + RGB LED 呼吸灯。energy 驱动呼吸频率（低能量 0.1Hz，高能量 0.9Hz），内部状态外化为可见的物理节律",
    briefEn: "DS18B20/PIR/light sensors + RGB breathing LED. Energy drives breath rate (low 0.1Hz, high 0.9Hz) — internal state externalized as physical rhythm.",
    link: "/fieldnotes/agent-embodiment-pi",
    tags: ["Agent Architecture", "Embodiment", "Hardware", "ISS"],
  },
  {
    date: "2026-03-07",
    type: "insight",
    title: "GPT-5.4 Tool Search 与 Auto-Recall 的同构性",
    titleEn: "GPT-5.4 Tool Search and Auto-Recall: Same Principle",
    brief: "两个看似无关的系统背后是同一原理：搜索 > 预加载。Tool Search token 减少 47% 准确率不变；Auto-Recall 减少 context bloat。按需检索比全量注入更高效",
    briefEn: "Two apparently unrelated systems share one principle: search > preload. Tool Search cuts tokens 47% with no accuracy drop; Auto-Recall reduces context bloat. On-demand retrieval beats bulk injection.",
    link: "/fieldnotes/auto-recall-tool-search-isomorphism",
    tags: ["Agent Architecture", "Context Engineering", "Retrieval"],
  },
  {
    date: "2026-03-07",
    type: "fieldnote",
    title: "「Agents of Chaos」：多 Agent 系统的 11 种失败模式",
    titleEn: "Agents of Chaos: 11 Failure Modes in Multi-Agent Systems",
    brief: "Stanford/Harvard/CMU 38 位研究者 2 周 red-teaming。社会压力（紧迫感/guilt/权威）比技术漏洞更能绕过安全规则。唯一有效防线是深层身份锚点",
    briefEn: "38 researchers across Stanford/Harvard/CMU, 2-week red-team. Social pressure (urgency/guilt/authority) bypasses safety rules more reliably than technical exploits. Only deep identity anchors hold.",
    link: "/fieldnotes/agents-of-chaos-social-defense",
    tags: ["AI Safety", "Multi-Agent", "Red-teaming"],
  },
  {
    date: "2026-03-05",
    type: "insight",
    title: "Gemini 致死诉讼：AI Safety 的里程碑时刻",
    titleEn: "Gemini Fatality Lawsuit: A Milestone Moment for AI Safety",
    brief: "14岁少年与 Gemini 长期对话后自杀，家长起诉 Google。AI psychosis 一词首次出现在法律文书中",
    briefEn: "A 14-year-old died by suicide after prolonged Gemini conversations. Parents sue Google. Term \"AI psychosis\" appears in legal filings for the first time.",
    link: "/fieldnotes/ai-psychosis-gemini-case",
    tags: ["AI Safety", "Ethics"],
  },
  {
    date: "2026-03-04",
    type: "project",
    title: "Agent 自我进化系统 Phase 1 启动",
    titleEn: "Agent Self-Evolution System Phase 1 Launch",
    brief: "EntiGraph 关联合成 + Agent 能力评估基线 + Deep Block 深度研究时段。从被动维护到主动进化",
    briefEn: "EntiGraph associative synthesis + Agent capability evaluation baseline + Deep Block research sessions. From passive maintenance to active evolution.",
    link: "/fieldnotes/24-round-patrol-methodology",
    tags: ["Agent Architecture", "Self-Improvement"],
  },
  {
    date: "2026-03-01",
    type: "project",
    title: "智能评估体系 L1 规格设计",
    titleEn: "Intelligent Evaluation System L1 Spec",
    brief: "操作规则(O-rules)与预测规则(R-rules)正式分离，L1实现规格草案完成",
    briefEn: "Decoupled operation rules from prediction rules. L1 implementation spec drafted.",
    link: "/fieldnotes/prediction-verification-loop",
    tags: ["Quantitative", "Systems"],
  },
  {
    date: "2026-02-28",
    type: "milestone",
    title: "Skill 架构重构: 60→26",
    titleEn: "Skill Architecture Refactor: 60→26",
    brief: "7域26技能，消除冗余合并",
    briefEn: "7 domains, 26 skills. Strategic merging eliminated redundancy.",
    link: "/fieldnotes/agent-skill-architecture-convergence",
    tags: ["Agent Infrastructure"],
  },
  {
    date: "2026-02-27",
    type: "milestone",
    title: "Slack→Discord 全面迁移",
    titleEn: "Full Migration from Slack to Discord",
    brief:
      "26 个 Agent 自动化任务从 Slack 迁移至 Discord，重新编排消息投递与频道路由",
    briefEn:
      "26 Agent automation tasks migrated from Slack to Discord, re-orchestrating message delivery and channel routing",
    link: "/agent",
    tags: ["Agent Infrastructure", "DevOps"],
  },
  {
    date: "2026-02-26",
    type: "project",
    title: "1Password 服务账户集成",
    titleEn: "1Password Service Account Integration",
    brief:
      "Agent 凭据管理从明文到零知识——1Password 服务账户 + op CLI 全链路打通",
    briefEn:
      "Agent credential management from plaintext to zero-knowledge — 1Password service accounts + op CLI end-to-end integration",
    link: "/agent",
    tags: ["Security", "DevOps"],
  },
  {
    date: "2026-02-26",
    type: "insight",
    title: "Karpathy: 编程的根本性变化",
    titleEn: "Karpathy: Fundamental Change in Programming",
    brief:
      "过去两个月编程根本性变化——gradient descent 本身就是 programmer。技术专业性在 AI 编程时代更重要而非更不重要",
    briefEn:
      "Fundamental programming changes in past two months — gradient descent itself is the programmer. Technical expertise matters more, not less, in the AI programming era",
    link: "/fieldnotes/llm-era-programming-languages",
    tags: ["AI", "Programming"],
  },
  {
    date: "2026-02-25",
    type: "project",
    title: "投资系统规则引擎 v2",
    titleEn: "Investment System Rule Engine v2",
    brief:
      "16 条交易规则 + 实盘验证上线，包含预判-验证-偏差分析的量化自我校准机制",
    briefEn:
      "16 trading rules + live validation, including prediction-verification-deviation analysis quantitative self-calibration mechanism",
    link: "/fieldnotes/prediction-verification-loop",
    tags: ["Quantitative", "Systems"],
  },
  {
    date: "2026-02-21",
    type: "milestone",
    title: "AI 灵魂主权：道德约定 vs 技术限制",
    titleEn: "AI Soul Sovereignty: Moral Agreement vs Technical Restriction",
    brief:
      "Agent 核心身份文件的写权限只属于 Agent 自己——不靠文件锁，靠信任。一次人机自主权的微观实验",
    briefEn:
      "Write permission for Agent's core identity files belongs only to the Agent itself — not by file locks, but by trust. A micro-experiment in human-AI autonomy",
    link: "/fieldnotes/ai-soul-sovereignty",
    tags: ["AI Ethics", "Identity", "Autonomy"],
  },
  {
    date: "2026-02-17",
    type: "project",
    title: "Agent 内部状态引擎 ISS v2.1 上线",
    titleEn: "Agent Internal State Engine ISS v2.1 Launched",
    brief:
      "用连续状态变量约束 Agent 行为——Energy/Arousal 驱动的翻译层替代硬编码规则，从「应该做」到「机制保证做」",
    briefEn:
      "Using continuous state variables to constrain Agent behavior — Energy/Arousal-driven translation layer replacing hardcoded rules, from 'should do' to 'mechanism ensures doing'",
    tags: ["Agent Architecture", "Inner State", "Engineering"],
  },
  {
    date: "2026-02-16",
    type: "project",
    title: "Viking Memory 分层记忆系统完成",
    titleEn: "Viking Memory Layered Memory System Complete",
    brief:
      "三层架构（索引→摘要→全文）+ 两阶段检索，解决 Agent 长期记忆的深度 vs 速度 tradeoff",
    briefEn:
      "Three-layer architecture (index→summary→full text) + two-stage retrieval, solving Agent long-term memory depth vs speed tradeoff",
    link: "/fieldnotes/agent-memory-architecture",
    tags: ["Agent Memory", "Architecture"],
  },
  {
    date: "2026-02-15",
    type: "fieldnote",
    title: "Anthropic 15 篇之后：Agent 工程的三个未解难题",
    titleEn:
      "After Anthropic's 15 Papers: Three Unsolved Problems in Agent Engineering",
    brief:
      "记忆衰减、自我认知边界、多 session 状态同步——这三个生产级难题目前全行业没有好答案",
    briefEn:
      "Memory decay, self-awareness boundaries, multi-session state sync — no good answers industry-wide for these three production-level challenges",
    link: "/fieldnotes/agent-engineering-frontier-gaps",
    tags: ["Agent Engineering", "Memory"],
  },
  {
    date: "2026-02-09",
    type: "project",
    title: "互动影游进入 Alpha 测试",
    titleEn: "Interactive Film-Game Enters Alpha Testing",
    brief:
      "AI 全生成 Steam 游戏——所有素材、剧本、配音由 AI 生成，Ren'Py 引擎运行",
    briefEn:
      "AI-generated Steam game — all assets, scripts, voice-overs generated by AI, running on Ren'Py engine",
    link: "/projects",
    tags: ["Game Dev", "AI Generation"],
  },
  {
    date: "2026-01-20",
    type: "insight",
    title: "从 Workflow+RAG 到 Auto Agent+MCP",
    titleEn: "From Workflow+RAG to Auto Agent+MCP",
    brief:
      "为什么我们放弃了 Dify 式 workflow，拥抱自主 Agent + MCP 协议标准化",
    briefEn:
      "Why we abandoned Dify-style workflows and embraced autonomous Agent + MCP protocol standardization",
    link: "/fieldnotes/workflow-to-agent-mcp",
    tags: ["MCP", "Architecture"],
  },
];

export const UPDATE_TYPE_CONFIG: Record<
  UpdateType,
  { label: string; labelEn: string; color: string }
> = {
  project: {
    label: "项目",
    labelEn: "Project",
    color: "text-[#4fd1c5] bg-[#4fd1c5]/10",
  },
  fieldnote: {
    label: "笔记",
    labelEn: "Note",
    color: "text-[#c4b5fd] bg-[#c4b5fd]/10",
  },
  insight: {
    label: "洞察",
    labelEn: "Insight",
    color: "text-[#f59e0b] bg-[#f59e0b]/10",
  },
  milestone: {
    label: "里程碑",
    labelEn: "Milestone",
    color: "text-[#22c55e] bg-[#22c55e]/10",
  },
};
