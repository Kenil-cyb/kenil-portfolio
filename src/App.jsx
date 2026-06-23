import { useState, useEffect } from "react";
import { 
  Shield, Terminal, Cpu, FileText, Download, 
  MapPin, ChevronDown, CheckCircle, Mail 
} from "lucide-react";
import NetworkBackground from "./components/NetworkBackground";
import BootSequence from "./components/BootSequence";
import InteractiveTerminal from "./components/InteractiveTerminal";
import CyberDashboard from "./components/CyberDashboard";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [clientIp, setClientIp] = useState("127.0.0.1");

  // Mock client IP address generation on mount
  useEffect(() => {
    setClientIp(
      `${Math.floor(Math.random() * 255) + 1}.${Math.floor(
        Math.random() * 255
      )}.${Math.floor(Math.random() * 255)}.${Math.floor(
        Math.random() * 255
      )}`
    );
  }, []);

  const handleActionClick = (targetTab, elementId) => {
    setActiveTab(targetTab);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const downloadTextCV = () => {
    // Generate text content for a clean, hacker-themed terminal CV download
    const cvText = `
========================================================================
             SECURE RECONNAISSANCE REPORT // RESUME FILE
                  KENIL BHARATBHAI BALDANIYA
========================================================================

DEGREE:
Bachelor of Technology (B.Tech) - Computer Science & Engineering
Parul Institute of Technology, Parul University
Current Academic Status: 2nd Year Student (4th Semester)
Location: Surat, Gujarat, India
Email: kenilbaldaniya123@gmail.com
GitHub: https://github.com/kenilbaldaniya
LinkedIn: https://linkedin.com/in/kenilbaldaniya

========================================================================
PROFESSIONAL HEADLINE & INTERESTS
========================================================================
- Cybersecurity Enthusiast
- Security Research Learner
- Full Stack Developer
- AI Explorer

Areas of Interest: Ethical Hacking, Network Security, Cloud Security,
Digital Forensics, Linux Systems, Machine Learning.

========================================================================
TECHNICAL SYSTEM PROFILE (SKILLS)
========================================================================
[+] Programming Languages:
    - Python (Advanced), C, C++, Java, JavaScript, HTML, CSS

[+] Cybersecurity & Defense:
    - Linux Administration, Kali Linux, Networking Fundamentals, TCP/IP,
      DNS, HTTP/HTTPS, OSINT, Threat Intel, Vulnerability Assessments,
      Ethical Hacking Fundamentals, Cyber Threat Analysis

[+] Web & Full Stack Engineering:
    - React.js, Tailwind CSS, Responsive UI Design, Node.js, Express.js,
      REST APIs, Firebase (Firestore, Auth, Hosting), PostgreSQL (Basic)

[+] Artificial Intelligence:
    - Gemini API, OpenAI API, Hugging Face, Prompt Engineering,
      Machine Learning Fundamentals

[+] Development & Operations:
    - Git, GitHub, VS Code, Cursor AI, Firebase Studio

========================================================================
FEATURED EXPEDITIONS (PROJECTS)
========================================================================
[1] PortGenie (AI Portfolio & Document Generator)
    - Tech: React, Node.js, Express, Firebase, Tailwind CSS, Gemini API
    - Specs: Generates resumes, cover letters, and professional portfolios,
             syncs records in real-time, features PDF export modules.

[2] Cybersecurity Threat Awareness Chatbot
    - Tech: React, Gemini API, custom security models, Tailwind CSS
    - Specs: Conversational UI to train users on phishing, online hygiene,
             and social engineering vulnerabilities.

[3] HealthMate AI
    - Tech: React, SpeechRecognition API, Node.js, OpenAI API
    - Specs: Multilingual voice companion parsing health indicators and
             alerting users during medical emergency signals.

========================================================================
EXPERIENCE & CLEARANCES
========================================================================
- Machine Learning Intern:
  * Analyzed predictive modeling concepts.
  * Formulated AI workflow algorithms.
  * Researched data pre-processing and parsing workflows.

- NASA Space Program Participant (IACS):
  * Conducted technical research logs under space program directives.

- JEE Main & Advanced Qualified:
  * Qualified JEE Main and competed in JEE Advanced.

- Academic Class Representative (CR):
  * Leads peer communications with university authorities.

========================================================================
SOFT SKILLS & BEHAVIORAL LOGS
========================================================================
- Leadership & Teamwork coordination
- Critical & Analytical Problem Solving
- Adaptable under shift variables
- Time Allocation audits

[END OF SECURE REPORT]
    `;

    const blob = new Blob([cvText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Kenil_Baldaniya_Secure_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="min-h-screen bg-cyber-bg text-slate-200 relative font-sans scanlines overflow-y-auto cyber-grid">
      <div className="scanline-bar" />
      <NetworkBackground />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#03070c]/85 backdrop-blur-md border-b border-emerald-950/60 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyber-green animate-pulse" />
            <span className="font-cyber font-bold tracking-widest text-slate-100 text-sm sm:text-base">
              KENIL.SEC // <span className="text-cyber-green text-xs font-mono">PORTFOLIO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              <span>IP: <span className="text-cyber-green font-bold">{clientIp}</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>ACCESS: <span className="text-cyan-400 font-bold">GRANTED</span></span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleActionClick("contact", "dashboard")}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent text-cyber-green border border-cyber-border hover:border-cyber-green hover:shadow-cyber-glow text-xs font-mono rounded transition-all duration-300"
            >
              Comms Link
            </button>
            <button
              onClick={downloadTextCV}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500 text-black border border-emerald-300 hover:bg-black hover:text-cyber-green hover:border-cyber-green hover:shadow-cyber-glow-strong text-xs font-mono rounded font-bold transition-all duration-300 flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-20 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-8 py-4 sm:py-10 max-w-4xl mx-auto select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050b12] border border-emerald-950/80 font-mono text-[10px] sm:text-xs text-cyber-cyan tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-cyber-cyan animate-spin" />
            SECURE PORTFOLIO SHELL // PARUL UNIVERSITY
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cyber tracking-tight text-slate-100 uppercase leading-none">
              Building Secure Digital Solutions Through{" "}
              <span className="text-cyber-green text-shadow-[0_0_12px_rgba(0,255,102,0.4)]">Cybersecurity</span>,{" "}
              <span className="text-cyber-cyan text-shadow-[0_0_12px_rgba(0,240,255,0.4)]">AI</span>, and{" "}
              <span className="text-slate-100">Development</span>
            </h1>
            
            <p className="text-sm sm:text-lg text-slate-400 font-mono max-w-2xl mx-auto leading-relaxed">
              Computer Science Engineering student passionate about Ethical Hacking, Network Security, 
              Linux Systems, Threat Analysis, Vulnerability Assessments, and Full Stack Software Engineering.
            </p>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-mono text-xs">
            <button
              onClick={() => handleActionClick("overview", "dashboard")}
              className="px-5 py-3 bg-[#050b12] hover:bg-emerald-500 hover:text-black border border-emerald-950 hover:border-emerald-300 text-slate-300 font-bold transition-all duration-300 rounded shadow-md hover:shadow-cyber-glow-strong"
            >
              View System Profile
            </button>
            <button
              onClick={() => handleActionClick("projects", "dashboard")}
              className="px-5 py-3 bg-[#050b12] hover:bg-cyan-500 hover:text-black border border-emerald-950 hover:border-cyan-400 text-slate-300 font-bold transition-all duration-300 rounded shadow-md hover:shadow-cyan-glow"
            >
              Inspect Exploits (Projects)
            </button>
            <button
              onClick={() => handleActionClick("contact", "dashboard")}
              className="px-5 py-3 bg-[#050b12] hover:bg-rose-500 hover:text-black border border-emerald-950 hover:border-rose-400 text-slate-300 font-bold transition-all duration-300 rounded shadow-md hover:shadow-cyber-red-glow"
            >
              Establish Tunnel (Contact)
            </button>
          </div>

          {/* Indicator widget */}
          <div className="flex justify-center pt-6">
            <div 
              onClick={() => handleActionClick("overview", "terminal")}
              className="cursor-pointer flex flex-col items-center gap-1 text-[10px] text-slate-500 font-mono animate-bounce"
            >
              <span>ACCESS CLI INTERFACE</span>
              <ChevronDown className="w-4 h-4 text-cyber-green" />
            </div>
          </div>
        </section>

        {/* INTERACTIVE TERMINAL SECTION */}
        <section id="terminal" className="space-y-4 max-w-4xl mx-auto pt-6">
          <div className="flex justify-between items-center px-1 font-mono text-[10px] sm:text-xs text-slate-500 select-none">
            <span className="flex items-center gap-1 uppercase">
              <Terminal className="w-3.5 h-3.5 text-cyber-green" />
              INTELLIGENT SHELL CONSOLE [interactive]
            </span>
            <span>SECURE LINK: PORT_8080/SSH</span>
          </div>
          <InteractiveTerminal />
        </section>

        {/* CENTRAL SECURITY OPERATIONS DASHBOARD */}
        <section id="dashboard" className="pt-8">
          <CyberDashboard activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

      </main>

      {/* Global Footer */}
      <footer className="border-t border-emerald-950/60 bg-[#020508]/90 py-8 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyber-green animate-pulse" />
            <span>© 2026 Kenil Baldaniya. System Status: <span className="text-cyber-green font-bold">SECURED</span></span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/kenilbaldaniya" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyber-green transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/kenilbaldaniya" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cyber-green transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:kenilbaldaniya123@gmail.com" 
              className="hover:text-cyber-green transition-colors duration-200"
            >
              Email Secure
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
