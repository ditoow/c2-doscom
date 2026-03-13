import { useState } from "react";

type FileEntry = {
  name: string;
  isDir: boolean;
  size: string;
  modified: string;
};

const dummyFiles: FileEntry[] = [
  { name: "csac - dinus", isDir: true, size: "-", modified: "11/19/1025, 09:05 PM" },
  { name: "csac - dinus", isDir: true, size: "-", modified: "11/19/1025, 09:05 PM" },
  { name: "csac - dinus", isDir: true, size: "-", modified: "11/19/1025, 09:05 PM" },
  { name: "csac - dinus", isDir: true, size: "-", modified: "11/19/1025, 09:05 PM" },
  { name: "csac - dinus", isDir: true, size: "-", modified: "11/19/1025, 09:05 PM" },
];

export default function FileManagerTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedFiles, setCheckedFiles] = useState<Set<number>>(new Set());
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const breadcrumb = ["home", "x0r", "Documents"];

  const filteredFiles = dummyFiles.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCheck = (i: number) => {
    setCheckedFiles((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleAll = () => {
    if (checkedFiles.size === filteredFiles.length) {
      setCheckedFiles(new Set());
    } else {
      setCheckedFiles(new Set(filteredFiles.map((_, i) => i)));
    }
  };

  return (
    <div className="border border-green/40 rounded-lg bg-[#0a0f0a] overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-green/20 bg-[#0d120d]">
        {/* Search */}
        <div className="flex items-center border border-green/30 rounded px-3 py-2 bg-[#080d08] w-72">
          <svg className="w-4 h-4 text-gray-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white text-sm outline-none w-full placeholder-gray-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 border border-green/30 rounded px-4 py-2 text-green text-sm hover:bg-green/10 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Create Directory
          </button>
          <label className="flex items-center gap-2 border border-green/30 rounded px-4 py-2 text-green text-sm hover:bg-green/10 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload
            <input type="file" className="hidden" />
          </label>
          <button className="flex items-center gap-2 bg-green text-black rounded px-4 py-2 text-sm font-bold hover:bg-green/85 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New file
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 py-2.5 border-b border-green/15 text-sm">
        {breadcrumb.map((segment, i) => (
          <span key={i}>
            <button className="text-green hover:underline cursor-pointer">{segment}</button>
            {i < breadcrumb.length - 1 && <span className="text-gray-600 mx-1.5">&gt;</span>}
          </span>
        ))}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[40px_1fr_120px_200px_40px] items-center px-4 py-2.5 border-b border-green/20 text-gray-500 text-xs uppercase tracking-wider bg-[#0d120d]">
        <div className="flex justify-center">
          <input
            type="checkbox"
            checked={checkedFiles.size === filteredFiles.length && filteredFiles.length > 0}
            onChange={toggleAll}
            className="w-4 h-4 accent-green cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green transition-colors">
          name <span className="text-green">↓</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green transition-colors">
          size <span className="text-green">↓</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green transition-colors">
          date <span className="text-green">↓</span>
        </div>
        <div />
      </div>

      {/* File Rows */}
      <div>
        {filteredFiles.map((file, i) => (
          <div
            key={i}
            className={[
              "grid grid-cols-[40px_1fr_120px_200px_40px] items-center px-4 py-3 border-b border-green/10 text-sm transition-colors hover:bg-green/5 group",
              i % 2 === 0 ? "bg-[#0a0f0a]" : "bg-[#0d120d]",
            ].join(" ")}
          >
            {/* Checkbox */}
            <div className="flex justify-center">
              <input
                type="checkbox"
                checked={checkedFiles.has(i)}
                onChange={() => toggleCheck(i)}
                className="w-4 h-4 accent-green cursor-pointer"
              />
            </div>

            {/* Name + Icon */}
            <div className="flex items-center gap-3 cursor-pointer">
              {file.isDir ? (
                <svg className="w-5 h-5 text-green shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )}
              <span className={file.isDir ? "text-green hover:underline" : "text-gray-300 hover:underline"}>
                {file.name}
              </span>
            </div>

            {/* Size */}
            <div className="text-gray-400">{file.size || ""}</div>

            {/* Date */}
            <div className="text-gray-400">{file.modified}</div>

            {/* Actions (three-dot menu) */}
            <div className="relative flex justify-center">
              <button
                onClick={() => setOpenMenuIndex(openMenuIndex === i ? null : i)}
                className="text-gray-500 hover:text-green p-1 rounded transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                </svg>
              </button>

              {openMenuIndex === i && (
                <div className="absolute right-0 top-8 z-50 w-40 border border-green/30 rounded-lg bg-[#111811] shadow-lg shadow-black/50 py-1">
                  {file.isDir ? (
                    <>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Open</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Rename</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Compress</button>
                      <div className="border-t border-green/15 my-1" />
                      <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer">Delete</button>
                    </>
                  ) : (
                    <>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Edit</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Download</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Rename</button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-green/10 hover:text-green transition-colors cursor-pointer">Compress</button>
                      <div className="border-t border-green/15 my-1" />
                      <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer">Delete</button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
