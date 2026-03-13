export default function AgentInformation() {
  const info = [
    { label: "Status", value: "Online", valueClass: "text-green" },
    { label: "Client ID", value: "57180034-5be5-482a-a786-cdadd45e7blo" },
    { label: "Hostname", value: "Invisibil3" },
    { label: "Username", value: "x0r" },
    { label: "OS", value: "Linux x86_64" },
    { label: "IP", value: "192.168.56.10" },
    { label: "Country", value: "United States" },
    { label: "CPU", value: "Intel Core i7" },
    { label: "CPU Frequency", value: "400Mhz" },
    { label: "CPU Cores", value: "8" },
    { label: "Memory", value: "15GB" },
    { label: "Disk Space", value: "1TB" },
    { label: "Available Disk", value: "800GB" },
    { label: "Connected at", value: "2024-01-01 12:00:00" },
    { label: "Last Seen", value: "2024-01-01 12:05:00" },
  ];

  return (
    <div className="w-80 shrink-0 border border-green/40 rounded-lg p-6 bg-black/40 h-fit">
      <h2 className="text-xl font-semibold text-green mb-6">Agent Information</h2>
      <div className="space-y-2.5 text-sm">
        {info.map((item) => (
          <p key={item.label}>
            <span className="text-green">{item.label}:</span>{" "}
            <span className={item.valueClass ?? "text-gray-400"}>{item.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
