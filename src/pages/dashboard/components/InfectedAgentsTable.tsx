type AgentRow = {
  id: number;
  AgentID: string;
  IP: string;
  OS: string;
  Status: string;
};

type InfectedAgentsTableProps = {
  rows: AgentRow[];
};

export default function InfectedAgentsTable({ rows }: InfectedAgentsTableProps) {
  return (
    <div className="col-span-2 rounded-lg border border-green bg-green/8 px-7 py-6 text-green">
      <div className="text-xl font-normal">Infected Agents</div>
      <div className="rounded-lg  py-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="pb-5 text-start">Agent ID</th>
              <th className="pb-5 text-start">IP Address</th>
              <th className="pb-5 text-start">OS</th>
              <th className="pb-5 text-start">Status</th>
              <th className="pb-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 3).map((row) => (
              <tr className="border-b last:border-b-0" key={row.id}>
                <td className="py-5 text-xs font-normal">{row.AgentID}</td>
                <td className="text-base font-normal">{row.IP}</td>
                <td className="text-base font-normal">{row.OS}</td>
                <td className="text-base font-normal">{row.Status}</td>
                <td className="text-center font-normal">
                  <button className="rounded-lg border border-green bg-[#282D35] px-4 py-1 text-sm transition-colors duration-300 hover:bg-green hover:text-[#282D35]">
                    Interact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
