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
    <div className="col-span-1 lg:col-span-2 rounded-lg border border-green bg-green/8 px-4 sm:px-7 py-4 sm:py-6 text-green">
      <div className="text-lg sm:text-xl font-normal">Infected Agents</div>
      <div className="rounded-lg py-4 sm:py-6 overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b">
              <th className="pb-3 sm:pb-5 pr-6 text-start">Agent ID</th>
              <th className="pb-3 sm:pb-5 pr-6 text-start">IP Address</th>
              <th className="pb-3 sm:pb-5 pr-6 text-start">OS</th>
              <th className="pb-3 sm:pb-5 pr-6 text-start">Status</th>
              <th className="pb-3 sm:pb-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 3).map((row) => (
              <tr className="border-b last:border-b-0" key={row.id}>
                <td className="py-3 sm:py-5 pr-6 text-xs font-normal">{row.AgentID}</td>
                <td className="py-3 sm:py-5 pr-6 text-sm sm:text-base font-normal">{row.IP}</td>
                <td className="py-3 sm:py-5 pr-6 text-sm sm:text-base font-normal">{row.OS}</td>
                <td className="py-3 sm:py-5 pr-6 text-sm sm:text-base font-normal">{row.Status}</td>
                <td className="py-3 sm:py-5 text-center font-normal">
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
