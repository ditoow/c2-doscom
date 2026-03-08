import StatCard from "../../components/ui/StatsCard";
import InfectedAgentsTable from "../../features/dashboard/components/InfectedAgentsTable";
import SystemLogsCard from "../../features/dashboard/components/SystemLogsCard";


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
    <div className="flex flex-col px-14 py-10 ">
      <div className="w-full border-b border-green">
        <h1 className="text-4xl font-semibold text-green pb-7 ">
          Dashboard Overview
        </h1>
      </div>
      {/* Stats Card */}
      <div className="mt-9 grid grid-cols-3 gap-5">
        {stats.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5">
        <InfectedAgentsTable rows={rows} />
        <SystemLogsCard logs={logs} />
      </div>
    </div>
  );
}
