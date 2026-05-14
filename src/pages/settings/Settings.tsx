import { Sun, Moon } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex flex-col px-14 py-10 w-full h-[calc(100vh-1px)] overflow-y-auto custom-scrollbar">
      {/* HEADER */}
      <div className="flex justify-between w-full border-b border-green mb-9">
        <h1 className="text-4xl font-semibold text-green pb-7">
          Settings
          <span className="inline-block w-3 h-3 rounded-full bg-green ml-2 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
        </h1>
      </div>

      <div className="border border-green/30 rounded-[10px] p-10 bg-black flex flex-col gap-10">
        
        {/* APPEARANCE SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-green mb-2 tracking-wide">Appearance</h2>
          <p className="text-green/70 mb-6">Customize the interface theme to match your preference</p>

          <div className="flex gap-6">
            <button className="flex-1 border border-green/30 rounded-[10px] p-6 flex items-center gap-5 hover:bg-green/5 transition-colors text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green/30 bg-green/5 text-green">
                <Sun size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green">Light Mode</span>
                <span className="text-sm text-green/70">Clean tech aesthetic</span>
              </div>
            </button>

            <button className="flex-1 border border-green/30 rounded-[10px] p-6 flex items-center gap-5 hover:bg-green/5 transition-colors text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green/30 bg-green/5 text-green">
                <Moon size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green">Dark Mode</span>
                <span className="text-sm text-green/70">Cyberpunk hacker theme</span>
              </div>
            </button>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="border border-green/30 rounded-[10px] p-8 bg-green/5">
          <h2 className="text-3xl font-bold text-green mb-6 tracking-wide">About</h2>
          
          <div className="flex flex-col gap-5">
            <p className="text-green">Framework Version</p>
            <p className="text-green">Build</p>
            <p className="text-green">Status</p>
          </div>
        </div>

      </div>
    </div>
  );
}
