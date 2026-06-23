import { useState, useEffect } from "react";
import { Terminal, Shield, Cpu, LockOpen } from "lucide-react";

const BOOT_LOGS = [
  { text: "INITIALIZING SECURITY PROTOCOLS...", delay: 200, icon: Shield },
  { text: "ESTABLISHING ENCRYPTED CONNECTION...", delay: 600, icon: Terminal },
  { text: "SECURE SOCKET LAYER: CONNECTED TO PORT 443...", delay: 1000, icon: Terminal },
  { text: "SCANNING CLIENT HOST FOR CREDENTIALS...", delay: 1400, icon: Cpu },
  { text: "DETECTION: PROXIMATE LOCATION DETECTED: SURAT, GUJARAT, INDIA...", delay: 1900, icon: Terminal },
  { text: "DECRYPTING DATABASE FOR 'KENIL BHARATBHAI BALDANIYA'...", delay: 2400, icon: Terminal },
  { text: "BYPASSING FIREWALL DEFENSES [■■■■■■■■■■] 100%", delay: 3000, icon: Shield },
  { text: "DIAGNOSTIC STATUS: ALL DECAPSULATED NODES OPERATIONAL...", delay: 3400, icon: Cpu },
  { text: "CREATING SECURE HANDSHAKE INTERFACE...", delay: 3800, icon: Terminal },
  { text: "ACCESS LEVEL: SECURITY ENGINEER LEVEL II...", delay: 4200, icon: Shield },
  { text: "READY TO INITIALIZE MAIN TERMINAL DASHBOARD.", delay: 4600, icon: LockOpen },
];

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sequence loader
    BOOT_LOGS.forEach((item, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, item]);
        if (index === BOOT_LOGS.length - 1) {
          setShowButton(true);
        }
      }, item.delay);
    });

    // Loading progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 150);

    // Press Enter to complete if button is active
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && showButton) {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showButton, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#03060a] z-50 flex flex-col justify-between p-6 sm:p-12 font-mono text-emerald-400 select-none scanlines">
      {/* Top Banner */}
      <div className="flex justify-between items-center border-b border-emerald-950 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-emerald-600">Secure Node [Baldaniya-Core]</span>
        </div>
        <div className="text-xs text-emerald-600">SYS_V: 4.0.0-PROD</div>
      </div>

      {/* Terminal Screen content */}
      <div className="flex-1 my-6 overflow-y-auto max-w-4xl mx-auto w-full flex flex-col justify-start gap-2.5">
        <div className="text-xs text-emerald-600 mb-4 font-sans">
          ========================================================================<br />
          WARNING: UNAUTHORIZED USE OF THIS TERMINAL IS STRICTLY MONITOR-LOGGED.<br />
          DECRYPTING ENCRYPTED PROFILE: KENIL B. BALDANIYA [B.TECH CSE student]<br />
          ========================================================================
        </div>

        {/* Dynamic Booting Logs */}
        <div className="flex flex-col gap-2 flex-1">
          {logs.map((log, index) => {
            const Icon = log.icon;
            return (
              <div key={index} className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
                <span className="text-emerald-600 shrink-0 font-sans">{`>`}</span>
                {Icon && <Icon className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />}
                <span className="tracking-wide">{log.text}</span>
              </div>
            );
          })}
          {!showButton && (
            <div className="flex items-center gap-2 text-sm sm:text-base text-emerald-600 mt-2">
              <span className="shrink-0 font-sans">{`>`}</span>
              <span className="cursor-blink">CONNECTING</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-emerald-950/40 border border-emerald-900/50 p-1.5 rounded mt-auto">
          <div className="flex justify-between text-xs text-emerald-600 mb-1">
            <span>BYPASSING SECURITY FIREWALL</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          <div className="w-full bg-emerald-950 h-3 rounded overflow-hidden">
            <div
              className="bg-emerald-500 h-full shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-all duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer Interface */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-emerald-950 pt-4 max-w-4xl mx-auto w-full">
        <div className="text-xs text-emerald-700 text-center sm:text-left">
          [PRESS ENTER OR CLICK THE DECRYPT BUTTON TO ACCESS TERMINAL PORTFOLIO]
        </div>

        {showButton ? (
          <button
            onClick={onComplete}
            className="px-6 py-2.5 bg-emerald-500 text-black font-bold uppercase tracking-wider rounded border border-emerald-300 hover:bg-black hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(0,255,102,0.6)] hover:border-emerald-500 transition-all duration-300 transform active:scale-95 animate-bounce"
          >
            Decrypt & Enter System
          </button>
        ) : (
          <button
            disabled
            className="px-6 py-2.5 bg-emerald-950/50 text-emerald-700 font-bold uppercase tracking-wider rounded border border-emerald-950 cursor-not-allowed"
          >
            Analyzing...
          </button>
        )}
      </div>
    </div>
  );
}
