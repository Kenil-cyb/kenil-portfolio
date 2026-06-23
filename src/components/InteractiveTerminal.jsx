import { useState, useRef, useEffect } from "react";
import { Terminal, ShieldAlert, Cpu, CheckCircle } from "lucide-react";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { text: "System Decryptor Port v4.0.0 Online.", type: "system" },
    { text: "Welcome guest. Type 'help' to see list of security commands.", type: "info" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus terminal input when clicking the console
  const handleConsoleClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cleanInput = inputValue.trim().toLowerCase();
      const outputHistory = [...history, { text: `guest@kenil-sec:~$ ${inputValue}`, type: "input" }];

      if (!cleanInput) {
        setHistory(outputHistory);
        setInputValue("");
        return;
      }

      let response = [];
      
      switch (cleanInput) {
        case "help":
          response = [
            { text: "Available security protocols / commands:", type: "info" },
            { text: "  about         - Display student overview & objectives", type: "text" },
            { text: "  skills        - List technical stack & cyber expertise", type: "text" },
            { text: "  projects      - Show deployed security & development tools", type: "text" },
            { text: "  roadmap       - Display ongoing cybersecurity learning path", type: "text" },
            { text: "  achievements  - View special credentials & certifications", type: "text" },
            { text: "  contact       - Get secure channels to reach Kenil", type: "text" },
            { text: "  system        - View real-time simulated server diagnostic stats", type: "text" },
            { text: "  hack          - Execute bypass routine (matrix simulation)", type: "text" },
            { text: "  clear         - Wipe logs from screen", type: "text" }
          ];
          break;

        case "about":
          response = [
            { text: "PROFILE DECRYPTED:", type: "success" },
            { text: "Name: Kenil Bharatbhai Baldaniya", type: "text" },
            { text: "Degree: B.Tech in Computer Science & Engineering", type: "text" },
            { text: "Institution: Parul Institute of Technology, Parul University", type: "text" },
            { text: "Academic Status: 2nd Year (4th Semester)", type: "text" },
            { text: "Location: Surat, Gujarat, India", type: "text" },
            { text: "Bio: Passionate CSE student focused on Ethical Hacking, Security Research, Full Stack Web Engineering, and AI application design.", type: "text" }
          ];
          break;

        case "skills":
          response = [
            { text: "TECHNICAL INVENTORY DETECTED:", type: "success" },
            { text: "  Languages  : Python, C, C++, Java, JavaScript, HTML, CSS", type: "text" },
            { text: "  Cybersec   : Linux Admin, Kali Linux, Networking, TCP/IP, OSINT, Threat Intel, Vulnerability Assessments, Security Awareness", type: "text" },
            { text: "  Web Dev    : React.js, Tailwind CSS, Responsive UX design, Zod, React Hook Form", type: "text" },
            { text: "  Backend    : Node.js, Express.js, REST APIs, Firebase Firestore/Auth, PostgreSQL", type: "text" },
            { text: "  AI Tools   : Gemini API, OpenAI API, Hugging Face, Prompt Engineering, ML Basics", type: "text" }
          ];
          break;

        case "projects":
          response = [
            { text: "FEATURED EXPEDITIONS / REPOSITORIES:", type: "success" },
            { text: "  1. PortGenie (AI Portfolio & Document Generator)", type: "info" },
            { text: "     Tech: React, Node, Express, Tailwind, Firebase, Gemini API", type: "text" },
            { text: "  2. Cyber Threat Awareness Chatbot", type: "info" },
            { text: "     Tech: React, Gemini API, custom security models", type: "text" },
            { text: "  3. HealthMate AI (Multilingual Medical Voice Companion)", type: "info" },
            { text: "     Tech: SpeechRecognition, React, Node.js", type: "text" }
          ];
          break;

        case "roadmap":
          response = [
            { text: "CYBER SECURITY DEVELOPMENT PATH:", type: "info" },
            { text: "  [Phase 1] Linux & Networking Basics - [COMPLETE]", type: "success" },
            { text: "  [Phase 2] Security Fundamentals & Python Scripting - [COMPLETE]", type: "success" },
            { text: "  [Phase 3] Threat Intelligence & Web Exploitation - [ACTIVE]", type: "success" },
            { text: "  [Phase 4] Cloud Security & Digital Forensics - [PENDING]", type: "text" },
            { text: "  [Phase 5] Malware Analysis & SOC Concepts - [LEARNING]", type: "info" }
          ];
          break;

        case "achievements":
          response = [
            { text: "DECRYPTED TROPHIES:", type: "success" },
            { text: "  - NASA Space Program Participant (IACS)", type: "text" },
            { text: "  - JEE Main Qualified & Appeared for JEE Advanced", type: "text" },
            { text: "  - Parul University Class Representative (CR)", type: "text" },
            { text: "  - National Hackathon Participant", type: "text" }
          ];
          break;

        case "contact":
          response = [
            { text: "SECURE COMMS DETAILS:", type: "success" },
            { text: "  Email    : kenilbaldaniya123@gmail.com", type: "text" },
            { text: "  LinkedIn : linkedin.com/in/kenilbaldaniya (Interactive)", type: "text" },
            { text: "  GitHub   : github.com/kenilbaldaniya (Open Source)", type: "text" },
            { text: "  Location : Surat, Gujarat, India", type: "text" }
          ];
          break;

        case "system":
          response = [
            { text: "LOCAL HOST DIAGNOSTICS:", type: "info" },
            { text: `  Client IP : ${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, type: "text" },
            { text: `  Host OS   : Antigravity Node (Simulated UNIX)`, type: "text" },
            { text: `  Secure Handshake: Active via SSL/TLS`, type: "text" },
            { text: `  Core Load : 12.8% [CPU-4 Cores]`, type: "text" },
            { text: `  RAM Usage : 4.2 GB / 16.0 GB`, type: "text" },
            { text: "  Defensive Agent Status: Shields Active", type: "success" }
          ];
          break;

        case "hack":
          response = [
            { text: "INITIALIZING PENETRATION BYPASS PROTOCOL...", type: "warn" },
            { text: "WARNING: ACCESSING MAINFRAME ENCRYPTED SHARED BUFFER...", type: "warn" },
            { text: "01001000 01000001 01000011 01001011 01000101 01000100", type: "warn" },
            { text: "BYPASS SUCCESS: PORT 8080 EXPLOITED. FIREWALL OVERRIDDEN.", type: "success" },
            { text: "WELCOME TO THE DEEPEST LAYER. PROCEED SAFELY.", type: "success" }
          ];
          break;

        case "clear":
          setHistory([]);
          setInputValue("");
          return;

        default:
          response = [
            { text: `Command not recognized: '${cleanInput}'. Type 'help' for a full list of system overrides.`, type: "error" }
          ];
      }

      setHistory([...outputHistory, ...response]);
      setInputValue("");
    }
  };

  return (
    <div 
      onClick={handleConsoleClick}
      className="w-full bg-[#020509]/90 border border-emerald-950/60 rounded-lg shadow-[0_0_20px_rgba(0,255,102,0.05)] overflow-hidden cursor-text flex flex-col font-mono min-h-[350px] max-h-[500px] corner-border select-text"
    >
      {/* Terminal Title Bar */}
      <div className="bg-[#050b12] border-b border-emerald-950/80 px-4 py-2 flex justify-between items-center select-none">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-cyber uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" />
          <span>zsh - guest@kenil-sec:~</span>
        </div>
        <div className="w-12 text-right">
          <span className="text-[10px] bg-emerald-950/50 text-emerald-500 px-1.5 py-0.5 rounded border border-emerald-900/60 uppercase">
            Active
          </span>
        </div>
      </div>

      {/* Terminal Outputs */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm text-emerald-400 select-text terminal-flicker">
        {history.map((log, index) => {
          let colorClass = "text-emerald-400/90";
          let icon = null;

          if (log.type === "input") {
            colorClass = "text-emerald-300 font-bold";
          } else if (log.type === "success") {
            colorClass = "text-emerald-400 font-bold flex items-center gap-1";
            icon = <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />;
          } else if (log.type === "error") {
            colorClass = "text-rose-400 font-semibold flex items-center gap-1";
            icon = <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
          } else if (log.type === "warn") {
            colorClass = "text-amber-400 font-bold animate-pulse";
          } else if (log.type === "info") {
            colorClass = "text-cyan-400 font-semibold";
          } else if (log.type === "system") {
            colorClass = "text-slate-400 text-xs";
          }

          return (
            <div key={index} className={`${colorClass} leading-relaxed whitespace-pre-wrap`}>
              {icon}
              {log.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className="p-4 bg-[#010306] border-t border-emerald-950/40 flex items-center gap-2 select-none">
        <span className="text-emerald-500 font-bold shrink-0">guest@kenil-sec:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent border-none outline-none text-emerald-300 font-bold focus:ring-0 placeholder:text-emerald-900 caret-emerald-400 text-sm"
          placeholder="type a command, e.g., 'help'..."
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
