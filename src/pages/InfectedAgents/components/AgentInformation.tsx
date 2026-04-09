export default function AgentInformation() {
  return (
    <div className="w-full lg:w-[340px] shrink-0 space-y-4 h-fit">
      {/* IDENTITY SECTION */}
      <div className="rounded-xl border border-green/30 bg-[#0A0F0A] p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-bold text-green tracking-widest uppercase">IDENTITY</h3>
          <span className="rounded bg-green px-2 py-0.5 text-[10px] font-bold text-black uppercase">
            ONLINE
          </span>
        </div>

        <div className="space-y-4 font-mono">
          <div>
            <div className="mb-1 text-[10px] text-gray-500">IP ADDRESS</div>
            <div className="text-sm font-semibold text-green">182.8.193.160</div>
          </div>
          <div>
            <div className="mb-1 text-[10px] text-gray-500">HOSTNAME / USER</div>
            <div className="text-sm text-gray-200">
              DESKTOP-RCQH20S <span className="text-green">\</span> ROG
            </div>
          </div>
          <div>
            <div className="mb-1 text-[10px] text-gray-500">TARGET ID HASH</div>
            <div className="text-xs text-gray-400 break-all">
              5658c60c-0af0-4cb1-bed3-12dd73de5766
            </div>
          </div>
        </div>
      </div>

      {/* GEOSPATIAL UPLINK SECTION */}
      <div className="rounded-xl border border-green/30 bg-[#0A0F0A] p-5">
        <h3 className="mb-4 text-sm font-bold text-green tracking-widest uppercase">
          GEOSPATIAL UPLINK
        </h3>
        
        {/* Map placeholder */}
        <div className="relative mb-4 h-36 w-full overflow-hidden border border-green/20 bg-[#131713] flex items-center justify-center">
          <div className="text-xs text-green/20 font-mono tracking-widest">MAP SENSOR ONLINE</div>
          {/* Glowing dot representing location */}
          <div className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green shadow-[0_0_12px_3px_rgba(0,255,0,0.6)] animate-pulse" />
        </div>

        <div className="flex flex-col gap-1.5 font-mono text-[11px] text-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-500">LOC:</span>
            <span>Semarang, Indonesia</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ISP:</span>
            <span>PT. Telekomunikasi Selular</span>
          </div>
        </div>
      </div>

      {/* ENVIRONMENT SPECS SECTION */}
      <div className="rounded-xl border border-green/30 bg-[#0A0F0A] p-5">
        <h3 className="mb-4 text-sm font-bold text-green tracking-widest uppercase">
          ENVIRONMENT SPECS
        </h3>
        
        <div className="space-y-3">
          {/* OS Box */}
          <div className="rounded border border-green/20 bg-[#0F140F] p-3 font-mono">
            <div className="mb-1 text-[10px] text-gray-500">OPERATING SYSTEM</div>
            <div className="text-xs text-green">windows</div>
          </div>

          {/* Processor Box */}
          <div className="rounded border border-green/20 bg-[#0F140F] p-3 font-mono">
            <div className="mb-1 text-[10px] text-gray-500">PROCESSOR</div>
            <div className="text-[11px] text-gray-300 leading-relaxed">
              Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz<br />
              8 Cores @ 2808 MHz
            </div>
          </div>

          {/* Disk & Memory Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded border border-green/20 bg-[#0F140F] p-3 font-mono flex flex-col justify-between">
              <div>
                <div className="mb-1 text-[10px] text-gray-500">DISK SPACE</div>
                <div className="mb-3 text-[11px] font-semibold text-gray-300">
                  245418442752.0 GB
                </div>
              </div>
              <div>
                <div className="mb-1.5 text-[9px] text-gray-500">USED</div>
                <div className="h-1 w-full rounded-full bg-green/10">
                  <div className="h-full w-1/4 rounded-full bg-green" />
                </div>
              </div>
            </div>

            <div className="rounded border border-green/20 bg-[#0F140F] p-3 font-mono flex flex-col justify-between">
              <div>
                <div className="mb-1 text-[10px] text-gray-500">MEMORY (RAM)</div>
                <div className="mb-3 text-[11px] font-semibold text-gray-300">13 GB</div>
              </div>
              <div className="mt-auto">
                <div className="mb-1.5 text-[9px] text-gray-500 opacity-0 hidden">USED</div> {/* Spacing spacer */}
                <div className="h-1 w-full rounded-full bg-green/10">
                  <div className="h-full w-[10%] rounded-full bg-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
