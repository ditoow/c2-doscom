type FileEntry = {
  name: string;
  type: string;
  size: string;
  permissions: string;
  owner: string;
  modified: string;
};

export default function FileManagerTab() {
  const dummyFiles: FileEntry[] = [
    {
      name: "csac - dinus",
      type: "Dir",
      size: "-",
      permissions: "drwxr-xr-x",
      owner: "x0r : x0r",
      modified: "11/19/1025,\n09:05 PM",
    },
    {
      name: "csac - dinus",
      type: "Dir",
      size: "-",
      permissions: "drwxr-xr-x",
      owner: "x0r : x0r",
      modified: "11/19/1025,\n09:05 PM",
    },
    {
      name: "csac - dinus",
      type: "Dir",
      size: "-",
      permissions: "drwxr-xr-x",
      owner: "x0r : x0r",
      modified: "11/19/1025,\n09:05 PM",
    },
    {
      name: "csac - dinus",
      type: "Dir",
      size: "-",
      permissions: "drwxr-xr-x",
      owner: "x0r : x0r",
      modified: "11/19/1025,\n09:05 PM",
    },
    {
      name: "csac - dinus",
      type: "Dir",
      size: "-",
      permissions: "drwxr-xr-x",
      owner: "x0r : x0r",
      modified: "11/19/1025,\n09:05 PM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Path Input Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          type="text"
          className="flex-1 rounded-md border border-green/30 bg-[#161a1d]/50 px-4 py-2.5 text-gray-300 outline-none focus:border-green transition-colors"
          placeholder="/home/x0r/Documents/BTIK"
          defaultValue="/home/x0r/Documents/BTIK"
        />
        <div className="flex gap-3 sm:gap-4">
          <button className="flex-1 rounded-md border border-green/30 bg-transparent px-6 py-2.5 text-white hover:bg-green/10 transition-colors">
            Browse
          </button>
          <button className="flex-1 rounded-md border border-green/30 bg-transparent px-6 py-2.5 text-white hover:bg-green/10 transition-colors whitespace-nowrap">
            Go to Parent
          </button>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="rounded-md border border-green/30 p-4 sm:p-6 bg-[#0B0F0B]">
        <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-white">File Upload</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <label className="cursor-pointer rounded-md border border-green/30 bg-[#111811] px-6 py-2 text-white hover:bg-green/10 transition-colors whitespace-nowrap">
              Choose File
              <input type="file" className="hidden" />
            </label>
            <span className="text-gray-400 text-sm sm:text-base">No file selected</span>
          </div>
          <div className="flex-1 hidden sm:block" />
          <button className="w-full sm:w-auto rounded-md bg-green px-8 py-2 font-semibold text-[#0B0F0B] hover:bg-green/90 transition-colors">
            Upload
          </button>
        </div>
      </div>

      {/* Directory Contents Section */}
      <div className="rounded-md border border-green/30 p-4 sm:p-6 bg-[#0B0F0B]">
        <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-white">Directory Contents</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-green/30">
                <th className="pb-4 pr-6 font-medium text-white">Name</th>
                <th className="pb-4 pr-6 font-medium text-white">Type</th>
                <th className="pb-4 pr-6 font-medium text-white">Size</th>
                <th className="pb-4 pr-6 font-medium text-white">Permissions</th>
                <th className="pb-4 pr-6 font-medium text-white">Owner</th>
                <th className="pb-4 pr-6 font-medium text-white">Modified</th>
                <th className="pb-4 font-medium text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyFiles.map((file, i) => (
                <tr key={i} className="border-b border-green/30 last:border-0 hover:bg-green/5 transition-colors">
                  <td className="py-4 pr-6 text-green">{file.name}</td>
                  <td className="py-4 pr-6 text-green">{file.type}</td>
                  <td className="py-4 pr-6 text-green">{file.size}</td>
                  <td className="py-4 pr-6 text-green">{file.permissions}</td>
                  <td className="py-4 pr-6 text-green">{file.owner}</td>
                  <td className="py-4 pr-6 text-green whitespace-pre-line leading-relaxed">
                    {file.modified}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-3">
                      <button className="rounded border border-green px-4 py-1 text-xs text-green hover:bg-green/10 transition-colors">
                        Open
                      </button>
                      <button className="rounded border border-red-600 px-4 py-1 text-xs text-red-600 hover:bg-red-600/10 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
