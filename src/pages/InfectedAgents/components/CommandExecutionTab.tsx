const commonCommands = ["Whoami", "pwd", "ls -la", "ps aux", "netstat", "uname -a"];

export default function CommandExecutionTab() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* Common Commands */}
      <div className="border border-green/40 rounded-lg p-4 sm:p-6 bg-black/40">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Common Commands</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3">
          {commonCommands.map((cmd) => (
            <button
              key={cmd}
              className="border border-green/50 rounded px-4 py-2 text-white text-sm hover:bg-green/10 transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Execute Command */}
      <div className="border border-green/40 rounded-lg p-4 sm:p-6 bg-black/40">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Execute Command</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center border border-green/50 rounded px-3 sm:px-4 py-2 sm:py-3 bg-transparent">
            <span className="text-green mr-2 font-bold">$</span>
            <input
              type="text"
              placeholder="Enter command to execute..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm sm:text-base w-full"
            />
          </div>
          <button className="border border-green/50 rounded px-6 py-2 sm:py-3 text-green font-semibold hover:bg-green/10 transition-colors cursor-pointer whitespace-nowrap">
            Execute
          </button>
        </div>
      </div>

      {/* Execution Results */}
      <div className="border border-green/40 rounded-lg p-4 sm:p-6 bg-black/40">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Execution Results</h2>
          <button className="border border-green/50 rounded px-3 py-1.5 text-green text-xs sm:text-sm font-semibold hover:bg-green/10 transition-colors cursor-pointer">
            Refresh
          </button>
        </div>
        <div className="border border-green/30 rounded p-4 bg-[#0a0f0a]">
          <div className="flex justify-between items-center mb-1">
            <span className="bg-green/15 text-green text-sm font-semibold px-3 py-1 rounded">
              Whoami
            </span>
            <span className="flex items-center gap-2 text-green text-sm">
              <span className="bg-green/20 rounded-full px-2 py-0.5 flex items-center gap-1">
                ✓ <span className="text-green">0</span>
              </span>
            </span>
          </div>
          <p className="text-gray-500 text-xs mb-3 mt-1 ml-1">2026-03-04 13:48:12</p>
          <div className="text-yellow-500 text-sm mb-1 font-medium">[+] OUTPUT</div>
          <div className="border border-green/20 rounded p-3 bg-[#060d06] mt-1">
            <p className="text-white text-sm font-mono">Xor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
