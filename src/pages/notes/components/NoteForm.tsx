import { useState, useEffect } from "react";

type NoteFormProps = {
    onSave: (title: string, content: string) => void;
    onCancel: () => void;
    initialTitle?: string;
    initialContent?: string;
    isEditing: boolean;
};

export default function NoteForm({
    onSave,
    onCancel,
    initialTitle = "",
    initialContent = "",
    isEditing
}: NoteFormProps) {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    // Sync data ketika user memilih note lain dari history untuk di-edit
    useEffect(() => {
        setTitle(initialTitle);
        setContent(initialContent);
    }, [initialTitle, initialContent]);

    // Fungsi untuk membersihkan semua inputan
    const handleClear = () => {
        setTitle("");
        setContent("");
        // Jika sedang dalam mode edit, klik clear juga akan membatalkan status edit di parent
        if (isEditing) {
            onCancel();
        }
    };

    return (
        <div className=" border-green/30 p-8 rounded flex flex-col h-full">
            <h2 className="text-2xl font-bold text-green mb-8 uppercase tracking-widest">
                {isEditing ? "> Update Note" : "Create New Note"}
            </h2>

            <div className="space-y-6 flex-1 flex flex-col">

                <div className="flex flex-col">
                    <label className="text-[10px] text-green/50 uppercase mb-1 tracking-tighter font-mono"></label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Type title here..."
                        className="bg-black border rounded-lg border-green/50 p-2 text-green outline-none focus:border-green transition-all font-mono"
                    />
                </div>


                <div className="flex flex-col flex-1">
                    <label className="text-[10px] text-green/50 uppercase mb-1 tracking-tighter font-mono"></label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Initialize content body..."
                        className="flex-1 bg-black/40 border border-green/50 rounded-lg p-4 text-green outline-none focus:border-green resize-none min-h-[300px] font-mono custom-scrollbar"
                    />
                </div>


                <div className="flex pl-120 gap-4 pt-6">

                    <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-xl flex-2 border border-green text-green py-3 font-bold hover:bg-green/10 transition-all uppercase text-sm tracking-wider"
                    >
                        Clear
                    </button>


                    <button
                        type="button"
                        onClick={() => onSave(title, content)}
                        className="rounded-xl flex-1 bg-green text-black py-3 font-bold hover:bg-green/80 transition-all uppercase text-sm tracking-wider"
                    >
                        {isEditing ? "Update Note" : "Save Note"}
                    </button>
                </div>
            </div>
        </div>
    );
}