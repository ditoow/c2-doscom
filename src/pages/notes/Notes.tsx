import { useState } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

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
      // Jika edit, kita bisa pilih mau update jamnya atau biarkan jam lama
      setNotes(notes.map(n => n.id === editingNote.id ? { ...n, title, content } : n));
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title,
        content,
        // MENGGUNAKAN FORMAT: "6 Apr 2026, 21:23"
        date: new Date().toLocaleString('id-ID', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }).replace('.', ':') // Mengganti titik menjadi titik dua untuk jam
      };
      setNotes([newNote, ...notes]);
    }
    setEditingNote(null);
  };

  return (
    <div className="flex flex-col px-14 py-10 w-full min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between w-full border-b border-green mb-9">

        <h1 className="text-4xl font-semibold text-green pb-7">
          Notes
          <span className="inline-block w-3 h-3 rounded-full bg-green ml-2 animate-pulse"></span>
        </h1>
        {/*<Dialog>
          <form>
            /*<DialogTrigger asChild>
              <Button variant="outline">Add Note</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-1" className="text-sm font-medium">Name</label>
                  <input id="name-1" name="name" defaultValue="Pedro Duarte" className="border p-2 rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="username-1" className="text-sm font-medium">Username</label>
                  <input id="username-1" name="username" defaultValue="@peduarte" className="border p-2 rounded-md" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>*/}
      </div>

      {/* MAIN LAYOUT (Dua Kolom) */}
      <div className="flex gap-10 h-full">

        {/* KOLOM KIRI: HISTORY NOTE */}
        <div className="bg-green/5 rounded-lg w-1/3 flex flex-col p-5 border border-green/20  ">

          <ScrollArea className="h-[600px] w-full rounded-md pr-4">
  <div className="space-y-4">
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
</ScrollArea>
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