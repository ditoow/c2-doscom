import { useState, useEffect } from "react";

type ShellStatus = "idle" | "connecting" | "connected";

const terminalOutputLines = [
  "bin", "lib", "usr",
  "cdrom", "lib64", "var",
  "dev", "lost+found",
  "etc", "media",
  "home", "mnt",
  "opt", "proc",
  "root", "run",
  "sbin", "snap",
  "srv", "sys",
  "tmp",
];

function TerminalLoading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-yellow-500">
      Establishing connection{dots}
    </p>
  );
}

export default function ReverseShellTab() {
  const [status, setStatus] = useState<ShellStatus>("idle");

  const handleActivate = () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("connected");
    }, 2500);
  };

  const connectionLabel =
    status === "idle"
      ? "Waiting to receive..."
      : status === "connecting"
        ? "Request sent, waiting for connection"
        : "Connected";

  const connectionDotColor =
    status === "connected" ? "bg-green" : status === "connecting" ? "bg-yellow-500" : "bg-red-500";

  const sessionId =
    status === "idle"
      ? "N/A"
      : status === "connecting"
        ? "Waiting for connection"
        : "a0fe381b5c51-4f1b-89ca-3970d53b82";

  return (
    <div className="flex flex-col gap-6">
      <div className="border border-green/40 rounded-lg p-6 bg-black/40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Reverse Shell Console</h2>
          {status === "idle" && (
            <button
              onClick={handleActivate}
              className="border border-green/50 rounded px-4 py-2 text-green text-sm font-semibold hover:bg-green/10 transition-colors cursor-pointer"
            >
              Activate Reverse Shell
            </button>
          )}
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Connection Status */}
          <div className="border border-green/30 rounded-lg p-4 bg-[#0a0f0a]">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
              <span className="text-green">⚡</span> Connection Status
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${connectionDotColor}`} />
              <span className="text-white text-sm">{connectionLabel}</span>
            </div>
          </div>

          {/* Session ID */}
          <div className="border border-green/30 rounded-lg p-4 bg-[#0a0f0a]">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
              <span className="text-red-500">■</span> Session ID
            </div>
            <p className="text-white text-sm truncate">{sessionId}</p>
          </div>

          {/* Listening Port */}
          <div className="border border-green/30 rounded-lg p-4 bg-[#0a0f0a]">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
              <span className="text-green">⚡</span> Listening Port
            </div>
            <p className="text-white text-sm">3039</p>
          </div>
        </div>

        {/* Terminal */}
        <div className="border border-green/30 rounded-lg overflow-hidden bg-[#0a0f0a]">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-green/20 bg-[#111811]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green" />
              <span className="text-gray-400 text-sm ml-2">Terminal</span>
            </div>
            <span
              className={`text-sm font-medium ${
                status === "connected"
                  ? "text-green"
                  : status === "connecting"
                    ? "text-yellow-500"
                    : "text-red-500"
              }`}
            >
              {status === "connected"
                ? "● Connected"
                : status === "connecting"
                  ? "● Connecting..."
                  : "● Not connected"}
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 min-h-[240px] font-mono text-sm">
            {status === "connected" ? (
              <div className="text-green leading-relaxed">
                {terminalOutputLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ) : status === "connecting" ? (
              <TerminalLoading />
            ) : (
              <p className="text-gray-600 italic">Waiting for connection...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
