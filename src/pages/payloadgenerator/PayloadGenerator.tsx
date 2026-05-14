import { useState, useEffect } from "react";
import { Download, CheckCircle, ChevronUp, ChevronDown } from "lucide-react";

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
        <div className="h-full w-full p-2">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-2xl font-bold text-green">Payload Generator</h1>
                <div className="h-3 w-3 rounded-full bg-green shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            </div>

            <div className="border border-green/30 rounded-xl p-8 max-w-4xl bg-black">
                <div className="space-y-6">
                    <div>
                        <label className="block text-green text-sm mb-2">Server IP / Domain</label>
                        <input
                            type="text"
                            defaultValue="192.168.56.1"
                            className="w-full bg-black border border-green/50 rounded-lg p-3 text-green outline-none focus:border-green transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-green text-sm mb-2">Port</label>
                        <div className="relative">
                            <input
                                type="number"
                                 value={port}
                                onChange={(e) => setPort(parseInt(e.target.value) || 0)}
                                className="w-full bg-black border border-green/50 rounded-lg p-3 text-green outline-none focus:border-green transition-all appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none m-0"
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
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-[#10b981]" />
                            <span className="text-green text-sm">Enable Strict Mode</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-[#10b981]" />
                            <span className="text-green text-sm">Enable Advanced Logging</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-[#10b981]" />
                            <span className="text-green text-sm">Enable Fallback Mode ( Only work when Advanced Logging or Strict Mode is enabled )</span>
                        </label>

                        <div className="pt-6 mt-6">
                            <button 
                                onClick={handleSave}
                                disabled={status === "processing"}
                                className={`w-full bg-black border border-green/50 text-green py-3 rounded-lg flex items-center justify-center gap-2 transition-all font-semibold ${status === "processing" ? "opacity-50 cursor-not-allowed" : "hover:bg-green hover:text-black"}`}
                            >
                                <Download size={20} />
                                Save & Apply
                            </button>

                            {status === "processing" && (
                                <div className="mt-4 w-full bg-black border border-orange-500 rounded-lg p-6 flex justify-center items-center">
                                    <p className="text-orange-500 text-sm font-medium">Applying configuration in the background... Please wait ( this takes time ).</p>
                                </div>
                            )}

                            {status === "success" && (
                                <div className="mt-4 w-full bg-black border border-green rounded-lg p-6 flex justify-center items-center gap-3">
                                    <CheckCircle className="text-green" size={20} />
                                    <p className="text-green text-sm font-medium">Berhasil di proses</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
