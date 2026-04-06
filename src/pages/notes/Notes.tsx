import { useState } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleSave = (title: string, content: string) => {
    if (editingNote) {
      setNotes(notes.map(n => n.id === editingNote.id ? { ...n, title, content } : n));
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toLocaleDateString()
      };
      setNotes([newNote, ...notes]); // Catatan baru di paling atas
    }
    setEditingNote(null);
  };

  return (
    <div className="flex flex-col px-14 py-10 w-full min-h-screen">
      {/* HEADER */}
      <div className="w-full border-b border-green mb-9">
        <h1 className="text-4xl font-semibold text-green pb-7">
          Notes
          <span className="inline-block w-3 h-3 rounded-full bg-green ml-2 animate-pulse"></span>
        </h1>
      </div>

      {/* MAIN LAYOUT (Dua Kolom) */}
      <div className="flex gap-10 h-full">

        {/* KOLOM KIRI: HISTORY NOTE */}
        <div className="w-1/3 flex flex-col border-r border-green/20 pr-10">
          <h2 className="text-xl font-bold text-green mb-6 uppercase tracking-widest">

          </h2>

          <div className="space-y-4 overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
            {notes.length === 0 ? (
              <p className="text-green/30 italic">No notes yet...</p>
            ) : (
              notes.map(note => (
                <NoteCard
                  key={note.id}
                  title={note.title}
                  content={note.content}
                  date={note.date}
                  isActive={editingNote?.id === note.id}
                  onDelete={() => setNotes(notes.filter(n => n.id !== note.id))}
                  onEdit={() => setEditingNote(note)}
                />
              ))
            )}
          </div>
        </div>

        {/* KOLOM KANAN: CREATE/EDIT FORM */}
        <div className="flex-1">
          <NoteForm
            onSave={handleSave}
            onCancel={() => setEditingNote(null)}
            isEditing={!!editingNote}
            initialTitle={editingNote?.title}
            initialContent={editingNote?.content}
          />
        </div>

      </div>
    </div>
  );
}