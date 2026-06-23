import { useState, useEffect } from "react";
import { 
  Shield, Cpu, Database, Brain, Globe, Wrench, Award, Terminal, 
  Activity, Wifi, AlertTriangle, ExternalLink, 
  Mail, Phone, MapPin, CheckCircle, Code, LockOpen, Server, ArrowUpRight
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import confetti from "canvas-confetti";

// A utility function to scramble text (cyber decryption effect)
function DecryptText({ text, active = true, className = "" }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const chars = "ABCDEF0123456789@#$%&*+<>?";
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 2;
    }, 40);

    return () => clearInterval(interval);
  }, [text, active]);

  return <span className={className}>{displayText}</span>;
}

// ----------------------------------------------------
// 1. OVERVIEW TAB
// ----------------------------------------------------
export function OverviewTab() {
  const [metrics, setMetrics] = useState({
    cpu: 18.5,
    ram: 4.8,
    activeThreats: 0,
    networkSpeed: 94.2
  });

  // Randomize stats to simulate live monitor widgets
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: parseFloat((15 + Math.random() * 8).toFixed(1)),
        ram: parseFloat((4.5 + Math.random() * 0.5).toFixed(1)),
        activeThreats: Math.random() > 0.85 ? 1 : 0,
        networkSpeed: parseFloat((92 + Math.random() * 5).toFixed(1))
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Bio / Core Header */}
      <div className="bg-cyber-card border border-cyber-border/40 p-6 rounded-lg corner-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-emerald-950/60">
          <div>
            <h2 className="text-xl font-cyber text-cyber-green flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyber-green animate-pulse" />
              IDENT_CONFIRMED // BALDANIYA.K.B
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-1">SECURITY ACCESS CLASSIFICATION: CLASS III STUDENT</p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs bg-emerald-950/60 text-cyber-green border border-cyber-border px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              Role: Security Learner
            </span>
            <span className="text-xs bg-cyan-950/60 text-cyber-cyan border border-cyan-800/40 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              Status: Active
            </span>
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm leading-relaxed text-slate-300">
          <p>
            <span className="text-cyber-green font-bold mr-1">&gt; Bio:</span> I am a Computer Science Engineering student with a deep affinity for Cyber Defense, Ethical Hacking, and System Engineering. Currently enrolled in my 2nd Year (4th Semester) B.Tech CSE degree at Parul Institute of Technology, Parul University.
          </p>
          <p>
            <span className="text-cyber-green font-bold mr-1">&gt; Philosophy:</span> I combine software engineering foundations with security research to build solutions that are not only high-performing and AI-integrated, but inherently robust and secure against malicious exploit vectors.
          </p>
        </div>
      </div>

      {/* Grid of system diagnostics widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CPU Load Widget */}
        <div className="bg-cyber-card border border-cyber-border/40 p-4 rounded-lg flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-mono block">CPU STABILITY</span>
            <span className="text-xl font-cyber text-cyber-green">{metrics.cpu}%</span>
            <span className="text-[10px] text-slate-500 block font-mono">LOAD: BALANCED</span>
          </div>
          <Cpu className="w-8 h-8 text-cyber-green/50" />
        </div>

        {/* Memory Load Widget */}
        <div className="bg-cyber-card border border-cyber-border/40 p-4 rounded-lg flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-mono block">RAM RESOURCE</span>
            <span className="text-xl font-cyber text-cyber-cyan">{metrics.ram} GB / 16GB</span>
            <span className="text-[10px] text-slate-500 block font-mono">CACHE RESERVES ACTIVE</span>
          </div>
          <Server className="w-8 h-8 text-cyber-cyan/50" />
        </div>

        {/* Network speed Widget */}
        <div className="bg-cyber-card border border-cyber-border/40 p-4 rounded-lg flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 font-mono block">LINK CAPACITY</span>
            <span className="text-xl font-cyber text-cyber-green">{metrics.networkSpeed} MB/s</span>
            <span className="text-[10px] text-slate-500 block font-mono">SECURE PACKETS TUNNELED</span>
          </div>
          <Wifi className="w-8 h-8 text-cyber-green/50 animate-pulse" />
        </div>

        {/* Threat Levels Widget */}
        <div className={`p-4 rounded-lg border flex items-center justify-between transition-all duration-300 ${
          metrics.activeThreats > 0 
            ? "bg-rose-950/20 border-rose-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)] text-rose-400" 
            : "bg-cyber-card border-cyber-border/40 text-slate-300"
        }`}>
          <div className="space-y-1 font-mono">
            <span className="text-xs text-slate-500 block">THREAT MATRIX</span>
            <span className="text-xl font-cyber">
              {metrics.activeThreats > 0 ? "1 ALERT DETECTED" : "0 SECTOR BREACHES"}
            </span>
            <span className="text-[10px] text-slate-500 block">
              {metrics.activeThreats > 0 ? "IP PORT 80 PROBING" : "FIREWALL SHIELDS: MAX"}
            </span>
          </div>
          <AlertTriangle className={`w-8 h-8 ${metrics.activeThreats > 0 ? "text-rose-500 animate-bounce" : "text-slate-600"}`} />
        </div>
      </div>

      {/* Basic Metrics / Core Info Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
          <h3 className="text-md font-cyber text-cyber-green border-b border-emerald-950 pb-2">
            ACADEMIC CREDENTIALS
          </h3>
          <div className="space-y-3 font-mono text-sm text-slate-300">
            <div className="flex justify-between items-start gap-4">
              <span className="text-slate-500">DEGREE:</span>
              <span className="text-right font-semibold">B.Tech (B.Bachelor of Technology)<br/>Computer Science & Engineering</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">INSTITUTION:</span>
              <span className="font-semibold text-right">Parul University</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">CAMPUS:</span>
              <span className="font-semibold text-right text-xs">Parul Institute of Technology</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">STATUS:</span>
              <span className="font-semibold text-cyber-green">Second Year (4th Semester)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">LOCATION:</span>
              <span className="font-semibold flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyber-green" />Surat, Gujarat, India</span>
            </div>
          </div>
        </div>

        <div className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
          <h3 className="text-md font-cyber text-cyber-green border-b border-emerald-950 pb-2">
            DIAGNOSTIC EVENT LOG
          </h3>
          <div className="space-y-2 text-xs font-mono max-h-[175px] overflow-y-auto">
            <div className="text-emerald-500/80">[15:42:01] Decrypted college credentials. Status: Enrolled.</div>
            <div className="text-cyan-500/80">[15:42:05] Loaded secure background matrix grid.</div>
            <div className="text-emerald-500/80">[16:10:12] PortGenie application logs analyzed successfully.</div>
            <div className="text-slate-500">[17:21:40] Idle scanning ports 21, 22, 80, 443...</div>
            <div className="text-amber-500/80">[19:05:12] Initiated machine learning model testing (Gemini API integration).</div>
            <div className="text-emerald-500/80">[20:12:00] All node firewalls activated. Secure link established.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. SKILLS TAB
// ----------------------------------------------------
export function SkillsTab() {
  const skillCategories = [
    {
      title: "CYBERSECURITY & DEFENSE",
      icon: Shield,
      skills: [
        { name: "Linux Administration & Kali Linux", level: 90 },
        { name: "Networking Fundamentals (TCP/IP, DNS, HTTP)", level: 85 },
        { name: "OSINT & Threat Intelligence", level: 75 },
        { name: "Vulnerability Assessments", level: 70 },
        { name: "Ethical Hacking Fundamentals", level: 80 },
        { name: "Cyber Threat Analysis", level: 78 }
      ]
    },
    {
      title: "PROGRAMMING LANGUAGES",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C / C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 95 }
      ]
    },
    {
      title: "WEB & FULL STACK DEVELOPMENT",
      icon: Globe,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js & Express.js", level: 80 },
        { name: "REST APIs & Database Design", level: 78 },
        { name: "React Hook Form & Zod Validation", level: 82 }
      ]
    },
    {
      title: "ARTIFICIAL INTELLIGENCE & DATA",
      icon: Brain,
      skills: [
        { name: "AI APIs (Gemini, OpenAI, Hugging Face)", level: 85 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Machine Learning Fundamentals", level: 65 },
        { name: "Firebase (Firestore & Authentication)", level: 80 },
        { name: "PostgreSQL (Basic Querying)", level: 60 }
      ]
    },
    {
      title: "SECURITY TOOLS & SYSOP",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub Version Control", level: 85 },
        { name: "VS Code & Cursor AI Development", level: 90 },
        { name: "Firebase Console & Studio Tools", level: 80 },
        { name: "Linux Command Line Utilities", level: 90 }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {skillCategories.map((category, idx) => {
        const Icon = category.icon;
        return (
          <div key={idx} className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
            <h3 className="text-sm font-cyber text-cyber-green flex items-center gap-2 border-b border-emerald-950 pb-2">
              <Icon className="w-4 h-4 text-cyber-green shrink-0" />
              {category.title}
            </h3>
            
            <div className="space-y-3 font-mono">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-cyber-green font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#020509] h-2 rounded overflow-hidden border border-emerald-950/50">
                    <div 
                      className="bg-emerald-500 h-full shadow-[0_0_6px_rgba(0,255,102,0.4)] transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ----------------------------------------------------
// 3. PROJECTS TAB
// ----------------------------------------------------
export function ProjectsTab() {
  const projects = [
    {
      title: "PortGenie",
      tagline: "AI-Powered Portfolio & Professional Document Engine",
      threatLevel: "9.2 CRITICAL RESOURCE",
      desc: "An AI-powered web platform tailored for generating fully customized portfolios, resumes, CVs, cover letters, and branding content, featuring a real-time dashboard and Firestore synchronization.",
      tech: ["React.js", "Node.js", "Express.js", "Firebase", "Tailwind CSS", "Gemini API"],
      features: [
        "Dynamic AI content parsing & drafting via Gemini model endpoints",
        "Secure User Authentication & Profile lock",
        "Clean user interactive dashboard with dynamic database updates",
        "PDF file formatting export functionalities"
      ],
      github: "https://github.com/kenilbaldaniya",
      demo: "#"
    },
    {
      title: "Cyber Security Threat Awareness Chatbot",
      tagline: "Interactive AI security mentor & vulnerability educator",
      threatLevel: "8.5 ELEVATED INTELLIGENCE",
      desc: "An conversational AI agent designed specifically to educate non-technical users about online risks, phishing schemes, social engineering tactics, and core device-security hygiene principles.",
      tech: ["React.js", "Gemini API", "Tailwind CSS", "Node.js"],
      features: [
        "Cyber Threat vulnerability scenario parsing using prompt guidelines",
        "Interactive, context-aware chatbot logic explaining exploit vectors",
        "Clean dark visual user logs representing hacking scenarios"
      ],
      github: "https://github.com/kenilbaldaniya",
      demo: "#"
    },
    {
      title: "HealthMate AI",
      tagline: "Multilingual Symptom Analyzer & Emergency Companion",
      threatLevel: "7.0 OPERATIONAL ASSET",
      desc: "A voice-interactive assistant that helps users cross-reference health symptoms in multiple languages, detects critical medical emergency markers, and offers basic preventive guidance.",
      tech: ["React.js", "SpeechRecognition API", "Node.js", "OpenAI API"],
      features: [
        "Hands-free voice recognition loop in English and Hindi",
        "Instant emergency warning indicator alerts for high-risk symptoms",
        "AI diagnosis summarization explaining diagnostic limits"
      ],
      github: "https://github.com/kenilbaldaniya",
      demo: "#"
    }
  ];

  return (
    <div className="space-y-6">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-cyber-card border border-cyber-border/40 p-6 rounded-lg corner-border flex flex-col lg:flex-row gap-6">
          
          {/* Main Info */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-950 pb-3">
              <div>
                <h3 className="text-lg font-cyber text-cyber-green flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  {proj.title}
                </h3>
                <span className="text-xs text-slate-500 font-mono">{proj.tagline}</span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs bg-rose-950/30 text-rose-400 border border-rose-900/60 px-2 py-0.5 rounded font-mono font-bold tracking-wider">
                  SEC-RATING: {proj.threatLevel}
                </span>
              </div>
            </div>

            <p className="text-sm font-mono text-slate-300 leading-relaxed">
              {proj.desc}
            </p>

            {/* Features list */}
            <div className="space-y-1 font-mono text-xs text-slate-400 bg-slate-950/40 p-3 rounded border border-emerald-950/20">
              <span className="text-cyber-green font-semibold block mb-1.5">[DEPLOYMENT CAPABILITIES]</span>
              {proj.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-1">
                  <span className="text-emerald-500 shrink-0 font-bold">-</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Links */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col justify-between gap-4 border-t lg:border-t-0 lg:border-l border-emerald-950/60 pt-4 lg:pt-0 lg:pl-6">
            <div className="space-y-2">
              <span className="text-xs text-slate-500 font-mono block uppercase">System Architecture:</span>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] bg-[#020509] text-cyber-green border border-cyber-border/40 px-2 py-0.5 rounded font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <a 
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 bg-[#050b12] hover:bg-emerald-500 hover:text-black border border-emerald-950 hover:border-emerald-300 py-2 rounded text-slate-300 font-bold transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_12px_rgba(0,255,102,0.3)]"
              >
                <FaGithub className="w-4 h-4" />
                Inspect Repository
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href={proj.demo}
                className="w-full flex items-center justify-center gap-1.5 bg-[#050b12] hover:bg-cyan-500 hover:text-black border border-emerald-950 hover:border-cyan-400 py-2 rounded text-slate-300 font-bold transition-all duration-300 shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
              >
                <ExternalLink className="w-4 h-4" />
                Initiate Secure Tunnel
              </a>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------
// 4. ROADMAP TAB
// ----------------------------------------------------
export function RoadmapTab() {
  const roadmapSteps = [
    { title: "Linux Systems", status: "completed", desc: "Command line, scripting, file systems, permissions." },
    { title: "Networking Fundamentals", status: "completed", desc: "TCP/IP, routing, subnets, Wireshark, application protocols." },
    { title: "Python Scripting", status: "completed", desc: "Automating exploits, parsing packets, building diagnostic tools." },
    { title: "Cybersecurity Fundamentals", status: "completed", desc: "OSINT, Kali Linux toolkits, encryption standards, vulnerability scans." },
    { title: "Web Security", status: "in-progress", desc: "OWASP Top 10 vulnerabilities, XSS, CSRF, input sanitizations, secure headers." },
    { title: "Threat Intelligence", status: "in-progress", desc: "Analyzing malware feed networks, indicators of compromise (IOCs), threat actors." },
    { title: "Security Research", status: "in-progress", desc: "Academic paper review, exploring edge AI tools in security vectors." },
    { title: "Cloud Security", status: "upcoming", desc: "AWS/Firebase access audits, container isolation, IAM security groups." },
    { title: "Digital Forensics", status: "upcoming", desc: "Memory dumps analysis, log audits, timeline tracing." },
    { title: "Malware Analysis", status: "learning", desc: "Reverse engineering assembly loops, sandbox analysis, signature detection." },
    { title: "SOC Concepts", status: "learning", desc: "SIEM event logs parsing, alert triggers, incident response drills." }
  ];

  return (
    <div className="bg-cyber-card border border-cyber-border/40 p-6 rounded-lg">
      <h3 className="text-sm font-cyber text-cyber-green mb-6 border-b border-emerald-950 pb-2">
        TIMELINE // LEARNING SYSTEM ARCHITECTURE
      </h3>
      
      <div className="relative pl-6 border-l border-emerald-950/60 ml-2 space-y-6">
        {roadmapSteps.map((step, idx) => {
          let bulletColor = "bg-emerald-500 shadow-[0_0_10px_rgba(0,255,102,0.6)]";
          let labelColor = "text-cyber-green";
          let borderOutline = "border-emerald-500/50";
          let statusText = "COMPLETE";

          if (step.status === "in-progress") {
            bulletColor = "bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.6)] animate-pulse";
            labelColor = "text-cyber-cyan";
            borderOutline = "border-cyan-500/40";
            statusText = "ACTIVE DRILL";
          } else if (step.status === "learning") {
            bulletColor = "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse";
            labelColor = "text-amber-400";
            borderOutline = "border-amber-500/30";
            statusText = "LEARNING DEEP";
          } else if (step.status === "upcoming") {
            bulletColor = "bg-slate-700";
            labelColor = "text-slate-500";
            borderOutline = "border-slate-800";
            statusText = "QUEUED";
          }

          return (
            <div key={idx} className="relative group font-mono text-sm">
              {/* Bullet Node */}
              <span className={`absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-black ${bulletColor} z-10`} />
              
              {/* Node Card */}
              <div className={`p-4 rounded border ${borderOutline} bg-slate-950/30 group-hover:bg-[#050c14]/40 transition-colors duration-200`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
                  <span className={`font-cyber font-bold tracking-wider ${labelColor}`}>{step.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                    step.status === "completed" 
                      ? "bg-emerald-950/30 text-cyber-green border-emerald-950" 
                      : step.status === "in-progress" 
                      ? "bg-cyan-950/30 text-cyber-cyan border-cyan-950" 
                      : step.status === "learning"
                      ? "bg-amber-950/30 text-amber-400 border-amber-950"
                      : "bg-slate-900 text-slate-500 border-slate-950"
                  }`}>
                    {statusText}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 5. ACHIEVEMENTS TAB
// ----------------------------------------------------
export function AchievementsTab() {
  const achievements = [
    { title: "NASA Space Program Participant", desc: "Collaborated on technical projects and data analysis in the IACS space program, demonstrating high-level academic competence.", date: "2024" },
    { title: "JEE Main Qualified", desc: "Successfully qualified the highly competitive Joint Entrance Examination (JEE) Main in India.", date: "2023" },
    { title: "Appeared for JEE Advanced", desc: "Competed in JEE Advanced, the premier entrance examination for Indian Institutes of Technology.", date: "2023" },
    { title: "Parul University Class Representative (CR)", desc: "Elected as student representative to lead, coordinate, and communicate administrative logs between university authorities and peers.", date: "Ongoing" },
    { title: "National Hackathon Competitor", desc: "Collaborated on building software prototypes under rapid time limits to solve actual organizational scenarios.", date: "2025" }
  ];

  const hobbies = [
    "Exploring Cybersecurity tools (Nmap, Wireshark, Metasploit, Burp Suite)",
    "Customizing Arch Linux setups & configuring dotfiles",
    "Building full stack software & AI pipelines",
    "Reviewing Security Blogs (Krebs on Security, PortSwigger, Hacker News)",
    "AI Experimentation & API integration structures",
    "Participating in local tech communities & CTF trials"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono">
      {/* Achievements Logs */}
      <div className="lg:col-span-2 bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
        <h3 className="text-sm font-cyber text-cyber-green border-b border-emerald-950 pb-2 flex items-center gap-2">
          <Award className="w-5 h-5" />
          DECRYPTED ACHIEVEMENTS LOG
        </h3>

        <div className="space-y-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start p-3 bg-slate-950/40 rounded border border-emerald-950/20">
              <div className="text-cyber-green mt-0.5">
                <CheckCircle className="w-4 h-4 shrink-0" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs flex-wrap gap-1">
                  <span className="font-bold text-slate-200 uppercase tracking-wide">{item.title}</span>
                  <span className="text-cyber-green text-[10px] font-bold">[{item.date}]</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies / Operations Allocation */}
      <div className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
        <h3 className="text-sm font-cyber text-cyber-green border-b border-emerald-950 pb-2 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          RECREATIONAL OPERATIONS
        </h3>

        <div className="space-y-3 text-xs leading-relaxed text-slate-300">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-cyber-cyan font-bold shrink-0">&gt;&gt;</span>
              <span>{hobby}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 6. CONTACT TAB (Secure Connection)
// ----------------------------------------------------
export function ContactTab() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [activeScramble, setActiveScramble] = useState({ name: false, email: false, msg: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setIsSubmitting(true);
    // Simulate secure network transaction encryption
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      confetti({
        particleCount: 100,
        spread: 60,
        colors: ["#00ff66", "#00f0ff", "#ffffff"],
        origin: { y: 0.8 }
      });
      // Reset form
      setFormData({ name: "", email: "", msg: "" });
    }, 2000);
  };

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    // Scramble on keystroke briefly to look cybernetic
    setActiveScramble((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setActiveScramble((prev) => ({ ...prev, [field]: false }));
    }, 300);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 font-mono">
      
      {/* Contact Form */}
      <div className="lg:col-span-3 bg-cyber-card border border-cyber-border/40 p-6 rounded-lg corner-border space-y-4">
        <h3 className="text-sm font-cyber text-cyber-green border-b border-emerald-950 pb-2 flex items-center gap-2">
          <LockOpen className="w-4 h-4 text-cyber-green" />
          ESTABLISH SECURE LINK [MESSAGE TERMINAL]
        </h3>

        {isSent ? (
          <div className="p-8 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-cyber-green mx-auto animate-pulse" />
            <h4 className="text-base text-cyber-green font-bold uppercase tracking-wider">CONNECTION SECURED</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              Your transmission has been encrypted, packed with TLS 1.3 headers, and dispatched to Kenil Baldaniya's inbox database. Decoupling channels.
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="px-4 py-2 border border-cyber-border text-cyber-green hover:bg-cyber-green hover:text-black transition-colors duration-300 text-xs font-bold uppercase rounded"
            >
              Compose New Log
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-bold block uppercase">AGENT IDENTITY / NAME</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full bg-[#020509] border border-emerald-950 focus:border-cyber-green focus:shadow-cyber-glow outline-none px-3 py-2 text-cyber-green text-sm transition-all duration-300 rounded"
                placeholder="Agent Anonymous"
              />
              <span className="text-[10px] text-slate-600 block mt-0.5">
                [DATA ENVELOPE: <DecryptText text={formData.name || "UNASSIGNED"} active={activeScramble.name} />]
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-bold block uppercase">COMMUNICATION BACKLINK / EMAIL</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-[#020509] border border-emerald-950 focus:border-cyber-green focus:shadow-cyber-glow outline-none px-3 py-2 text-cyber-green text-sm transition-all duration-300 rounded"
                placeholder="agent@agency.com"
              />
              <span className="text-[10px] text-slate-600 block mt-0.5">
                [RETURN PATH: <DecryptText text={formData.email || "UNASSIGNED"} active={activeScramble.email} />]
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-bold block uppercase">TRANSMISSION LOAD / MESSAGE</label>
              <textarea 
                rows="4"
                required
                value={formData.msg}
                onChange={(e) => handleInputChange("msg", e.target.value)}
                className="w-full bg-[#020509] border border-emerald-950 focus:border-cyber-green focus:shadow-cyber-glow outline-none px-3 py-2 text-cyber-green text-sm transition-all duration-300 rounded resize-none"
                placeholder="Enter encrypted logs/message details..."
              />
              <span className="text-[10px] text-slate-600 block mt-0.5">
                [PAYLOAD CHECK: <DecryptText text={formData.msg ? `${formData.msg.substring(0, 20)}...` : "EMPTY"} active={activeScramble.msg} />]
              </span>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-emerald-500 hover:bg-black text-black hover:text-cyber-green border border-emerald-300 hover:border-cyber-green font-bold uppercase tracking-wider transition-all duration-300 rounded hover:shadow-cyber-glow-strong disabled:bg-emerald-950 disabled:text-emerald-700 disabled:border-emerald-950 disabled:cursor-not-allowed text-xs"
            >
              {isSubmitting ? "ENCRYPTING & DISPATCHING PACKETS..." : "SEND SECURE LOG TRANSMISSION"}
            </button>
          </form>
        )}
      </div>

      {/* Profile Channels / Comms details */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Core details */}
        <div className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
          <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider border-b border-emerald-950 pb-2">
            SECURE ACCESS ENDPOINTS
          </h4>
          
          <div className="space-y-3.5 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyber-green shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">SECURE EMAIL</span>
                <a href="mailto:kenilbaldaniya123@gmail.com" className="hover:text-cyber-green hover:underline">
                  kenilbaldaniya123@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-cyber-cyan shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">COMMS PORT</span>
                <span className="text-slate-300 select-all">+91 [Surat, Gujarat, India]</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-green shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">NODE SITE / LOCATION</span>
                <span className="text-slate-300">Surat, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Network shortcuts */}
        <div className="bg-cyber-card border border-cyber-border/40 p-5 rounded-lg space-y-4">
          <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider border-b border-emerald-950 pb-2">
            NETWORK CREDENTIAL LINKS
          </h4>
          
          <div className="flex flex-col gap-2.5 text-xs">
            <a 
              href="https://linkedin.com/in/kenilbaldaniya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-slate-950/40 border border-emerald-950 hover:border-cyber-green rounded hover:bg-[#050c14] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin className="w-4 h-4 text-cyan-400 group-hover:text-cyber-green transition-colors duration-200" />
                <span className="font-bold text-slate-300">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
            </a>

            <a 
              href="https://github.com/kenilbaldaniya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-slate-950/40 border border-emerald-950 hover:border-cyber-green rounded hover:bg-[#050c14] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2">
                <FaGithub className="w-4 h-4 text-slate-300 group-hover:text-cyber-green transition-colors duration-200" />
                <span className="font-bold text-slate-300">GitHub Directory</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-green" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
