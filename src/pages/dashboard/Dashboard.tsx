import StatCard from "../../components/ui/StatsCard";
import InfectedAgentsTable from "./components/InfectedAgentsTable";
import SystemLogsCard from "./components/SystemLogsCard";


export default function Dashboard() {
  const stats = [
    { title: "Active Agents", value: 3 },
    { title: "Online Agents", value: 3 },
    { title: "OS Types", value: 2 },
  ];

  const rows = [
    {
      id: 1,
      AgentID: "57168034-5be5-482a-a786-cdad145e7b1a",
      IP: "192.168.56.10",
      OS: "Linux X86_64",
      Status: "Online",
    },
    {
      id: 2,
      AgentID: "57168034-5be5-482a-a786-cdad145e7b1a",
      IP: "192.168.56.10",
      OS: "Linux X86_64",
      Status: "Online",
    },
    {
      id: 3,
      AgentID: "57168034-5be5-482a-a786-cdad145e7b1a",
      IP: "192.168.56.10",
      OS: "Linux X86_64",
      Status: "Online",
    },
    {
      id: 4,
      AgentID: "57168034-5be5-482a-a786-cdad145e7b1a",
      IP: "192.168.56.10",
      OS: "Linux X86_64",
      Status: "Online",
    },
    {
      id: 5,
      AgentID: "57168034-5be5-482a-a786-cdad145e7b1a",
      IP: "192.168.56.10",
      OS: "Linux X86_64",
      Status: "Online",
    },
  ];

  const logs = [
    "[14:20:01] Admin Login Success",
    "[14:21:05] Agent 57168034 connected",
    "[14:22:10] Payload sent to Agent 57168034",
  ];

  return (
    <div className="flex flex-col px-4 sm:px-8 lg:px-14 py-6 lg:py-10">
      <div className="w-full border-b border-green">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green pb-5 lg:pb-7 flex items-center">
          Fairuz ganteng
          <span className="inline-block w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green ml-2 animate-pulse" />
        </h1>
      </div>
      {/* Stats Card */}
      <div className="mt-6 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {stats.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="mt-6 lg:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
        <InfectedAgentsTable rows={rows} />
        <SystemLogsCard logs={logs} />
      </div>
    </div>
  );
}
