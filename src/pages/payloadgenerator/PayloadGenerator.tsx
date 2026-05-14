import { useState, useEffect } from "react";
import { Download, Check, ChevronUp, ChevronDown } from "lucide-react";

export default function PayloadGenerator() {
    const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
    const [port, setPort] = useState(8080);

    useEffect(() => {
        if (status === "processing") {
            const timer = setTimeout(() => {
                setStatus("success");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSave = () => {
        setStatus("processing");
    };

    return (
        <div className="flex flex-col px-14 py-10 w-full min-h-screen">
            {/* HEADER */}
            <div className="flex justify-between w-full border-b border-green mb-9">
                <h1 className="text-4xl font-semibold text-green pb-7">
                    Payload Generator
                    <span className="inline-block w-3 h-3 rounded-full bg-green ml-2 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                </h1>
            </div>

            <div className="border border-green/30 rounded-[10px] p-8 max-w-full bg-black">
                <div className="space-y-6">
                    <div>
                        <label className="block text-green text-sm mb-2">Target OS</label>
                        <div className="relative">
                            <select className="w-full bg-black border border-green/50 rounded-lg p-3 text-white outline-none focus:border-green transition-all appearance-none cursor-pointer">
                                <option value="windows">Windows</option>
                                <option value="linux">Linux</option>
                                <option value="macos">macOS</option>
                                <option value="android">Android</option>
                            </select>
                            <div className="absolute right-4 top-0 bottom-0 flex items-center justify-center pointer-events-none">
                                <ChevronDown size={16} className="text-green" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-green text-sm mb-2">Server IP / Domain</label>
                        <input
                            type="text"
                            defaultValue="192.168.56.1"
                            className="w-full bg-black border border-green/50 rounded-lg p-3 text-white outline-none focus:border-green transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-green text-sm mb-2">Port</label>
                        <div className="relative">
                            <input
                                type="number"
                                 value={port}
                                onChange={(e) => setPort(parseInt(e.target.value) || 0)}
                                className="w-full bg-black border border-green/50 rounded-lg p-3 text-white outline-none focus:border-green transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0"
                            />
                            <div className="absolute right-4 top-0 bottom-0 flex flex-col items-center justify-center gap-[3px]">
                                <button type="button" onClick={() => setPort(p => p + 1)} className="text-white hover:text-green transition-colors focus:outline-none flex justify-center">
                                    <svg width="8" height="4" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L6 1L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                                <button type="button" onClick={() => setPort(p => Math.max(0, p - 1))} className="text-white hover:text-green transition-colors focus:outline-none flex justify-center">
                                    <svg width="8" height="4" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#050A07] border border-green/20 rounded-lg p-6 space-y-4 mt-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" className="peer appearance-none w-4 h-4 border border-green/50 rounded-sm bg-transparent checked:bg-[#002b11] checked:border-green transition-all cursor-pointer" />
                                <Check size={12} className="absolute text-green opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                            </div>
                            <span className="text-green text-sm">Enable Anti-Debugging</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" className="peer appearance-none w-4 h-4 border border-green/50 rounded-sm bg-transparent checked:bg-[#002b11] checked:border-green transition-all cursor-pointer" />
                                <Check size={12} className="absolute text-green opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                            </div>
                            <span className="text-green text-sm">Enable Anti-VM / Sandbox Evasion</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" className="peer appearance-none w-4 h-4 border border-green/50 rounded-sm bg-transparent checked:bg-[#002b11] checked:border-green transition-all cursor-pointer" />
                                <Check size={12} className="absolute text-green opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                            </div>
                            <span className="text-green text-sm">Enable Suicide Mode ( Only work when Anti - VM / Sandbox is enabled or Anti - Debugging is enabled )</span>
                        </label>

                        <div className="pt-6 mt-6">
                            <button 
                                onClick={handleSave}
                                disabled={status === "processing"}
                                className={`w-full bg-black border border-green/50 text-green py-3 rounded-lg flex items-center justify-center gap-2 transition-all font-semibold ${status === "processing" ? "opacity-50 cursor-not-allowed" : "hover:bg-green hover:text-black"}`}
                            >
                                <Download size={20} />
                                Compile & Download
                            </button>

                            {status === "processing" && (
                                <div className="mt-4 w-full bg-black border border-orange-500 rounded-lg p-6 flex justify-center items-center">
                                    <p className="text-orange-500 text-sm font-medium">Compiling payload int the background... Please wait ( this takes time ).</p>
                                </div>
                            )}

                            {status === "success" && (
                                <div className="mt-4 w-full bg-black border border-green rounded-lg p-6 flex justify-center items-center gap-3">
                                    <Check className="text-green" size={20} strokeWidth={3} />
                                    <p className="text-green text-sm font-medium">Generation complete! Download started.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
