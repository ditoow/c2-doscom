import { useState } from "react";
import CommandExecutionTab from "./components/CommandExecutionTab";
import ReverseShellTab from "./components/ReverseShellTab";
import FileManagerTab from "./components/FileManagerTab";
import AgentInformation from "./components/AgentInformation";

type Tab = "command" | "reverse-shell" | "file-manager";

const tabs: { key: Tab; label: string; icon: string }[] = [
  { key: "command", label: "Command Execution", icon: ">_" },
  { key: "reverse-shell", label: "Reverse Shell", icon: ">_" },
  { key: "file-manager", label: "File Manager", icon: "📁" },
];

export default function InfectedAgents() {
  const [activeTab, setActiveTab] = useState<Tab>("command");

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col pl-14 py-10">
        <div className="w-full border-b border-green">
          <h1 className="text-4xl font-semibold text-green pb-7">
            Infected Agents <span className="inline-block w-3 h-3 rounded-full bg-green ml-2 animate-pulse" />
          </h1>
        </div>
      </div>

      <div className="flex gap-8 px-14 pb-10">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-green/30">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors cursor-pointer",
                  activeTab === tab.key
                    ? "text-green border-b-2 border-green"
                    : "text-gray-500 hover:text-green/70",
                ].join(" ")}
              >
                <span className="opacity-70">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "command" && <CommandExecutionTab />}
          {activeTab === "reverse-shell" && <ReverseShellTab />}
          {activeTab === "file-manager" && <FileManagerTab />}
        </div>

        {/* Agent Information Sidebar */}
        <AgentInformation />
      </div>
    </div>
  );
}
