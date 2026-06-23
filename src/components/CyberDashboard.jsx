import { useState } from "react";
import { 
  Shield, Code, Terminal, Layers, Award, Mail, 
  Settings, User, Radio, Cpu, Network, FileText, Download 
} from "lucide-react";
import { 
  OverviewTab, SkillsTab, ProjectsTab, 
  RoadmapTab, AchievementsTab, ContactTab 
} from "./DashboardTabs";

export default function CyberDashboard({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "overview", name: "System Diagnostic", icon: User, component: OverviewTab },
    { id: "skills", name: "Firewall / Skills", icon: Shield, component: SkillsTab },
    { id: "projects", name: "Infiltrations / Projects", icon: Code, component: ProjectsTab },
    { id: "roadmap", name: "Roadmap / Learning", icon: Network, component: RoadmapTab },
    { id: "achievements", name: "Clearance / Logs", icon: Award, component: AchievementsTab },
    { id: "contact", name: "Secure Socket / Comms", icon: Mail, component: ContactTab }
  ];

  const activeTabConfig = tabs.find((t) => t.id === activeTab) || tabs[0];
  const ActiveComponent = activeTabConfig.component;

  return (
    <section id="dashboard" className="w-full relative z-10 space-y-6">
      {/* Tab Navigation header for SOC Dashboard */}
      <div className="bg-cyber-card border border-cyber-border/40 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 relative" />
          </div>
          <div>
            <h2 className="font-cyber text-slate-100 uppercase tracking-widest text-sm flex items-center gap-1.5">
              <span>Security Operations Center</span>
              <span className="text-cyber-green text-xs font-mono font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/60">
                SOC-MAIN-V4.0
              </span>
            </h2>
            <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
              SECTOR SECURITY CLASSIFICATION: ENCRYPTED // BALDANIYA
            </span>
          </div>
        </div>

        {/* Diagnostic widgets */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyber-green animate-pulse" />
            <span>LINK: <span className="text-cyber-green font-bold">SECURE</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>NODES: <span className="text-cyber-cyan font-bold">11 ACTIVE</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5 text-slate-500 animate-spin" />
            <span>CORE: <span className="text-slate-300">ONLINE</span></span>
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar + Pane View */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 flex flex-col gap-2 bg-cyber-card border border-cyber-border/40 p-3 rounded-lg corner-border">
          <span className="text-[10px] font-cyber text-slate-500 block px-2.5 py-1 uppercase tracking-widest border-b border-emerald-950/60 mb-2">
            OPERATING MODULES
          </span>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded text-left font-mono text-xs transition-all duration-300 ${
                  isActive 
                    ? "bg-emerald-500 text-black font-bold shadow-[0_0_12px_rgba(0,255,102,0.35)] border border-emerald-300" 
                    : "text-slate-300 hover:bg-[#050b12] border border-transparent hover:border-emerald-950/60 hover:text-cyber-green"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-black" : "text-emerald-500"}`} />
                  <span>{tab.name}</span>
                </div>
                <span className={`text-[10px] font-bold ${isActive ? "text-emerald-950" : "text-slate-600"}`}>
                  {isActive ? "[RUNNING]" : "[STBY]"}
                </span>
              </button>
            );
          })}

          <div className="mt-4 pt-4 border-t border-emerald-950/60 text-[10px] font-mono text-slate-500 space-y-2 px-2">
            <div className="flex justify-between">
              <span>LOCAL PORT:</span>
              <span className="text-cyber-green font-bold">4433/TCP</span>
            </div>
            <div className="flex justify-between">
              <span>AGENT THREAT:</span>
              <span className="text-cyber-cyan font-bold">LOW</span>
            </div>
            <div className="flex justify-between">
              <span>DB INTEGRITY:</span>
              <span className="text-cyber-green">100% OK</span>
            </div>
          </div>
        </div>

        {/* Main Tab Panel Display */}
        <div className="lg:col-span-3 min-h-[450px]">
          {/* Active Tab Header */}
          <div className="bg-[#050b12] border-t border-x border-cyber-border/40 p-4 rounded-t-lg flex justify-between items-center font-mono">
            <span className="text-xs text-cyber-green flex items-center gap-1.5 uppercase tracking-wider font-cyber">
              <Terminal className="w-4 h-4" />
              SYSTEM MODULE STATUS // {activeTabConfig.name}
            </span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[10px] text-slate-500">DECRYPTED_LOG</span>
            </div>
          </div>

          {/* Active View Container */}
          <div className="bg-[#020509]/80 border-b border-x border-cyber-border/40 p-6 rounded-b-lg shadow-inner min-h-[400px]">
            <ActiveComponent />
          </div>
        </div>

      </div>
    </section>
  );
}
