type SystemLogsCardProps = {
  logs: string[];
};

export default function SystemLogsCard({ logs }: SystemLogsCardProps) {
  return (
    <div className="col-span-1 border-green bg-green/8 rounded-lg border px-4 py-4 text-green sm:px-7 sm:py-6">
      <div className="text-lg font-normal sm:text-xl">System Logs</div>
      <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
        {logs.map((log, index) => (
          <div className="border-green/60 border-b pb-2 text-sm sm:pb-3 sm:text-base" key={`${log}-${index}`}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
