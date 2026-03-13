"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────── Command Definitions ─────────────────── */

interface OutputLine {
  text: string;
  color?: string;
}

const NEOFETCH_ART = `
\x1b[cyan]       ████████████       \x1b[reset]  \x1b[bold]Dario\x1b[reset] @ portfolio
\x1b[cyan]     ██            ██     \x1b[reset]  ─────────────────────
\x1b[cyan]   ██    ██    ██    ██   \x1b[reset]  \x1b[bold]职位\x1b[reset]:  AI 技术总监 @ 蓝色光标
\x1b[cyan]  ██   ████   ████   ██  \x1b[reset]  \x1b[bold]经验\x1b[reset]:  8 年（NLP → 因果推断 → Agent）
\x1b[cyan]  ██                 ██  \x1b[reset]  \x1b[bold]教育\x1b[reset]:  同济大学 · 数学与应用数学
\x1b[cyan]  ██   ▄▄▄▄▄▄▄▄▄   ██  \x1b[reset]  \x1b[bold]语言\x1b[reset]:  中文 / English / Deutsch B2
\x1b[cyan]   ██  ▀▀▀▀▀▀▀▀▀  ██   \x1b[reset]  \x1b[bold]性格\x1b[reset]:  INTJ
\x1b[cyan]     ██            ██     \x1b[reset]  \x1b[bold]爱好\x1b[reset]:  猫 · 化债
\x1b[cyan]       ████████████       \x1b[reset]  
                                 \x1b[bold]技能栈\x1b[reset]:
  \x1b[green]█████████████████\x1b[reset] Agent 系统 (95%)   \x1b[green]████████████████\x1b[reset] 因果推断 (90%)
  \x1b[blue]███████████████\x1b[reset] 全栈开发 (85%)      \x1b[purple]██████████████\x1b[reset] 团队管理 (80%)
  \x1b[yellow]█████████████\x1b[reset] 量化交易 (75%)      \x1b[cyan]████████████\x1b[reset] 游戏开发 (70%)
                                 
  \x1b[bold]系统状态\x1b[reset]:  ☕ 咖啡驱动 · 🐱 猫监督运行 · 🟢 OpenClaw 在线
`;

function processCommand(
  cmd: string,
  history: string[]
): { output: OutputLine[]; shouldClear?: boolean; shouldClose?: boolean } {
  const trimmed = cmd.trim();
  const lower = trimmed.toLowerCase();
  const parts = lower.split(/\s+/);
  const firstWord = parts[0] || "";

  // Special commands
  if (lower === "clear") {
    return { output: [], shouldClear: true };
  }
  if (lower === "exit" || lower === "quit") {
    return { output: [{ text: "再见！👋" }], shouldClose: true };
  }

  // Main commands
  switch (firstWord) {
    case "whoami":
      return {
        output: [
          {
            text: "Dario / AI 技术总监 / INTJ / 铲屎官 / 德语B2 / 化债人",
            color: "#4fd1c5",
          },
        ],
      };

    case "help":
      return {
        output: [
          { text: "可用命令:", color: "#ccd6f6" },
          { text: "" },
          { text: "  whoami          我是谁", color: "#4fd1c5" },
          { text: "  ls              列出站点目录", color: "#4fd1c5" },
          { text: "  ls projects     列出项目", color: "#4fd1c5" },
          { text: "  cat about       关于我", color: "#4fd1c5" },
          { text: "  cd lab          进入实验室", color: "#4fd1c5" },
          { text: "  neofetch        系统信息", color: "#4fd1c5" },
          { text: "  history         命令历史", color: "#4fd1c5" },
          { text: "  date            当前时间", color: "#4fd1c5" },
          { text: "  ping            连通测试", color: "#4fd1c5" },
          { text: "  echo <text>     回显文字", color: "#4fd1c5" },
          { text: "  clear           清屏", color: "#4fd1c5" },
          { text: "  exit            关闭终端", color: "#4fd1c5" },
          { text: "" },
          { text: "  提示: 试试 sudo rm -rf / 😏", color: "#8892b0" },
        ],
      };

    case "ls":
      if (parts[1] === "projects") {
        return {
          output: [
            {
              text: "🎯 内容宇宙 AI 平台       🎯 企业级视频 Agent 系统",
              color: "#4fd1c5",
            },
            {
              text: "🎯 数据策略大脑 ChatBI     🚀 雀巢 KOS 小红书 AIGC",
              color: "#4fd1c5",
            },
            {
              text: "🚀 太保数智化改造          🔧 Video Highlight Extractor",
              color: "#3b82f6",
            },
            {
              text: "🔧 剪映自动化              🔧 金融知识图谱 & 智能选股",
              color: "#3b82f6",
            },
            {
              text: "🔧 因果 AI 量化策略        🔧 创业者画像归因模型",
              color: "#3b82f6",
            },
            {
              text: "🏗️ Claude Code Proxy       🏗️ TeamAssist 协作服务",
              color: "#8b5cf6",
            },
            {
              text: "🎮 OpenClaw AI Workflow    🎮 A股智能看板",
              color: "#22c55e",
            },
          ],
        };
      }
      return {
        output: [
          {
            text: "about/  experience/  projects/  lab/  writing/  agent/  contact/",
            color: "#4fd1c5",
          },
        ],
      };

    case "cat":
      if (parts[1] === "about") {
        return {
          output: [
            { text: "" },
            {
              text: "8 年算法经验，从金融 NLP 到 AI Agent 系统。",
              color: "#ccd6f6",
            },
            { text: "" },
            {
              text: "同花顺 3 年：金融知识图谱 + 因果推断量化策略",
            },
            {
              text: "奇绩创坛 1 年：因果算法做创投数据驱动尽调",
            },
            {
              text: "蓝色光标 2 年：AI 中台 Smart Canvas（1600+ 用户）",
            },
            { text: "" },
            {
              text: "核心能力：把 AI 技术变成能跑的产品 🚀",
              color: "#4fd1c5",
            },
            {
              text: "当前方向：主动式 Agent 系统 + Context Learning",
              color: "#4fd1c5",
            },
            { text: "" },
          ],
        };
      }
      if (parts[1]) {
        return {
          output: [
            { text: `cat: ${parts[1]}: 没找到这个文件`, color: "#f87171" },
          ],
        };
      }
      return {
        output: [{ text: "用法: cat <filename>", color: "#f59e0b" }],
      };

    case "cd":
      if (parts[1] === "lab") {
        return {
          output: [
            { text: "进入实验室...", color: "#22c55e" },
            { text: "" },
            { text: "📁 KOX AgentCore        — AWS 云原生多 Agent 视频生产系统", color: "#4fd1c5" },
            { text: "📁 互动影游              — AI 全生成 Steam 游戏", color: "#4fd1c5" },
            { text: "📁 百年孤独RPG           — 文学 IP × 像素游戏 × 全 AI 开发团队", color: "#4fd1c5" },
            { text: "📁 投资研究系统           — 盘前预判→盘中验证→偏差分析闭环", color: "#4fd1c5" },
          ],
        };
      }
      if (parts[1]) {
        return {
          output: [
            { text: `cd: ${parts[1]}: 不是一个目录`, color: "#f87171" },
          ],
        };
      }
      return { output: [{ text: "~" }] };

    case "echo":
      return {
        output: [{ text: trimmed.slice(5) || "" }],
      };

    case "date": {
      const now = new Date();
      return {
        output: [
          {
            text: now.toLocaleString("zh-CN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZone: "Asia/Shanghai",
            }),
            color: "#4fd1c5",
          },
        ],
      };
    }

    case "ping":
      return { output: [{ text: "pong! 🏓", color: "#4fd1c5" }] };

    case "history":
      return {
        output: history.map((h, i) => ({
          text: `  ${String(i + 1).padStart(3)}  ${h}`,
        })),
      };

    case "neofetch":
      return {
        output: NEOFETCH_ART.split("\n").map((line) => ({
          text: line,
          color: "raw", // special marker for raw colored output
        })),
      };

    case "sudo":
      if (lower.includes("rm")) {
        return {
          output: [
            {
              text: "nice try 😏 权限不足，请联系系统管理员（就是我）",
              color: "#f87171",
            },
          ],
        };
      }
      return {
        output: [
          {
            text: "sudo: 你不在 sudoers 文件中。此事已被记录。",
            color: "#f87171",
          },
        ],
      };

    case "pwd":
      return {
        output: [{ text: "/home/dario/portfolio", color: "#4fd1c5" }],
      };

    case "":
      return { output: [] };

    default:
      return {
        output: [
          {
            text: `zsh: command not found: ${firstWord}`,
            color: "#f87171",
          },
          { text: "输入 help 查看可用命令", color: "#8892b0" },
        ],
      };
  }
}

/* ─────────────────── Colored Line Renderer ─────────────────── */

function RenderLine({ line }: { line: OutputLine }) {
  if (line.color === "raw") {
    // Parse pseudo-ANSI codes for neofetch
    const parts: { text: string; color?: string; bold?: boolean }[] = [];
    let remaining = line.text;
    const colorMap: Record<string, string> = {
      cyan: "#4fd1c5",
      green: "#22c55e",
      blue: "#3b82f6",
      purple: "#8b5cf6",
      yellow: "#f59e0b",
      red: "#f87171",
      reset: "",
    };

    while (remaining.length > 0) {
      const match = remaining.match(/\x1b\[(bold|cyan|green|blue|purple|yellow|red|reset)\]/);
      if (!match || match.index === undefined) {
        parts.push({ text: remaining });
        break;
      }
      if (match.index > 0) {
        parts.push({ text: remaining.slice(0, match.index) });
      }
      const code = match[1];
      remaining = remaining.slice(match.index + match[0].length);

      // Find next code or end
      const nextMatch = remaining.match(/\x1b\[(bold|cyan|green|blue|purple|yellow|red|reset)\]/);
      const textEnd = nextMatch?.index ?? remaining.length;
      const segment = remaining.slice(0, textEnd);
      if (segment) {
        parts.push({
          text: segment,
          color: code === "bold" ? "#ccd6f6" : colorMap[code],
          bold: code === "bold",
        });
      }
      remaining = remaining.slice(textEnd);
    }

    return (
      <div className="whitespace-pre leading-[1.4]">
        {parts.map((p, i) => (
          <span
            key={i}
            style={{ color: p.color || undefined }}
            className={p.bold ? "font-bold" : ""}
          >
            {p.text}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="whitespace-pre-wrap leading-[1.6]" style={{ color: line.color || "#8892b0" }}>
      {line.text}
    </div>
  );
}

/* ─────────────────── Typewriter Effect ─────────────────── */

function TypewriterOutput({
  lines,
  onComplete,
}: {
  lines: OutputLine[];
  onComplete: () => void;
}) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const totalChars = lines.reduce((acc, l) => acc + l.text.length + 1, 0);

  useEffect(() => {
    if (displayedChars >= totalChars) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => {
      // Speed up for neofetch (lots of ASCII art)
      const isNeofetch = lines.some((l) => l.color === "raw");
      const increment = isNeofetch ? 8 : 2;
      setDisplayedChars((prev) => Math.min(prev + increment, totalChars));
    }, 15);
    return () => clearTimeout(timer);
  }, [displayedChars, totalChars, onComplete, lines]);

  // Calculate which lines and chars to show
  let charsLeft = displayedChars;
  const visibleLines: { line: OutputLine; visibleText: string }[] = [];

  for (const line of lines) {
    if (charsLeft <= 0) break;
    const lineLen = line.text.length + 1; // +1 for newline
    if (charsLeft >= lineLen) {
      visibleLines.push({ line, visibleText: line.text });
      charsLeft -= lineLen;
    } else {
      visibleLines.push({ line, visibleText: line.text.slice(0, charsLeft) });
      charsLeft = 0;
    }
  }

  return (
    <>
      {visibleLines.map((vl, i) => (
        <RenderLine key={i} line={{ ...vl.line, text: vl.visibleText }} />
      ))}
    </>
  );
}

/* ─────────────────── Terminal Component ─────────────────── */

interface HistoryEntry {
  command: string;
  output: OutputLine[];
}

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Welcome message
  const welcomeLines: OutputLine[] = [
    { text: "欢迎来到 Dario 的终端 🖥️", color: "#4fd1c5" },
    { text: "输入 help 查看可用命令", color: "#8892b0" },
    { text: "" },
  ];

  // Toggle terminal
  const toggleTerminal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea (except our terminal input)
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        // Allow if it's our terminal input
        if (!target.dataset.terminalInput) return;
      }

      if (e.key === "`" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleTerminal]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries, isTyping]);

  // Handle command submit
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (isTyping) return;

      const cmd = input.trim();
      if (!cmd) {
        setEntries((prev) => [...prev, { command: "", output: [] }]);
        setInput("");
        return;
      }

      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);

      const result = processCommand(cmd, [...commandHistory, cmd]);

      if (result.shouldClear) {
        setEntries([]);
        setInput("");
        return;
      }

      if (result.shouldClose) {
        setEntries((prev) => [...prev, { command: cmd, output: result.output }]);
        setInput("");
        setTimeout(() => setIsOpen(false), 600);
        return;
      }

      setIsTyping(true);
      setEntries((prev) => [...prev, { command: cmd, output: result.output }]);
      setInput("");
    },
    [input, isTyping, commandHistory]
  );

  // Arrow key history navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length === 0) return;
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex === -1) return;
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    },
    [commandHistory, historyIndex]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl h-[80vh] flex flex-col rounded-lg border border-[#30363d] bg-[#0d1117] shadow-2xl overflow-hidden"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-3 w-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"
                />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 font-mono text-xs text-[#8b949e]">
                dario@portfolio ~ %
              </span>
              <span className="ml-auto font-mono text-[10px] text-[#8b949e]/50">
                按 ESC 或 ` 关闭
              </span>
            </div>

            {/* Terminal Content */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-[family-name:var(--font-jetbrains-mono)] text-sm"
            >
              {/* Welcome */}
              {welcomeLines.map((line, i) => (
                <RenderLine key={`welcome-${i}`} line={line} />
              ))}

              {/* History entries */}
              {entries.map((entry, i) => (
                <div key={i}>
                  {/* Command prompt line */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#22c55e] select-none">$</span>
                    <span className="text-[#ccd6f6]">{entry.command}</span>
                  </div>

                  {/* Output with typewriter effect for the latest entry */}
                  {entry.output.length > 0 && (
                    <div className="mt-1 ml-4">
                      {i === entries.length - 1 && isTyping ? (
                        <TypewriterOutput
                          lines={entry.output}
                          onComplete={() => setIsTyping(false)}
                        />
                      ) : (
                        entry.output.map((line, j) => (
                          <RenderLine key={j} line={line} />
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Input line */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
                <span className="text-[#22c55e] select-none">$</span>
                <input
                  ref={inputRef}
                  data-terminal-input="true"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-[#ccd6f6] outline-none caret-[#4fd1c5] placeholder-[#8892b0]/30"
                  placeholder={isTyping ? "" : "输入命令..."}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
                {/* Blinking cursor indicator when not focused */}
                {!isTyping && (
                  <span className="animate-pulse text-[#4fd1c5] select-none">▊</span>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
