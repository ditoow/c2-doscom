import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

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
    const [showError, setShowError] = useState(false);

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
        <div className="bg-[#0D1117] border border-green/30 p-8 rounded-[10px] flex flex-col h-full">
            <Dialog open={showError} onOpenChange={setShowError}>
                <DialogContent className="border-green/50">
                    <DialogHeader>
                        <DialogTitle className="text-red-500 text-xl">Gagal Menyimpan</DialogTitle>
                        <DialogDescription className="text-black/80 mt-2">
                            Judul harus diisi sebelum menyimpan note.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => setShowError(false)}
                            className="bg-green text-black px-6 py-2 rounded-lg font-bold hover:bg-green/80 transition-all"
                        >
                            OK
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
            <h2 className="text-2xl font-bold text-green mb-8 uppercase tracking-widest">
                {isEditing ? "Update Note" : "Create New Note"}
            </h2>

            <div className="space-y-6 flex-1 flex flex-col">

                <div className="flex flex-col">
                    <label className="text-[10px] text-green/50 uppercase mb-1 tracking-tighter font-mono"></label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Type title here..."
                        className="bg-black border rounded-lg border-green/50 p-3 text-white outline-none focus:border-green transition-all"
                    />
                </div>

                
                <div className="flex flex-col flex-1">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Initialize content body..."
                        className="flex-1 bg-black border border-green/50 rounded-lg p-4 text-white outline-none focus:border-green resize-none min-h-[300px] custom-scrollbar"
                    />
                </div>


                <div className="flex justify-end gap-4 pt-6 mt-auto">

                    <button
                        type="button"
                        onClick={handleClear}
                        className="rounded-xl border border-green text-green py-3 px-8 font-bold hover:bg-green/10 transition-all uppercase text-sm tracking-wider"
                    >
                        Clear
                    </button>


                    <button
                        type="button"
                        onClick={() => {
                            if (!title.trim()) {
                                setShowError(true);
                            } else {
                                onSave(title, content);
                                setTitle("");
                                setContent("");
                            }
                        }}
                        className="rounded-xl bg-green text-black py-3 px-12 font-bold hover:bg-green/80 transition-all uppercase text-sm tracking-wider"
                    >
                        {isEditing ? "Update" : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
}