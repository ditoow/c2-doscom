import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type NoteCardProps = {
    title: string;
    content: string;
    date: string;
    isActive: boolean;
    onDelete: () => void;
    onEdit: () => void;
};

export default function NoteCard({ title, content, date, isActive, onDelete, onEdit }: NoteCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={`cursor-pointer border p-6 flex flex-col justify-between rounded-lg  hover:bg-green/5 transition-all group ${isActive ? 'bg-green/10 border-green' : 'border-green/50'}`}>
                    <div>
                        <h3 className="text-xl font-bold mb-1 uppercase text-green">{title}</h3>
                        <p className="text-sm text-green/60 mb-3">{date}</p>
                        <p className="text-green/80 line-clamp-3">{content}</p>
                    </div>

                    <div className="flex gap-4 mt-6 border-t border-green/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit();
                            }}
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Edit Note
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete();
                            }}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="bg-zinc-950 border-green/50 border-green shadow-[0_0_20px_rgba(16,185,129,0.2)]">
    
                <DialogHeader>
                    <DialogTitle className="text-green text-xl">{title}</DialogTitle>
                    <DialogDescription>{date}</DialogDescription>
                </DialogHeader>
                <div className=" text-green whitespace-pre-wrap mt-4 max-h-[600vh] overflow-y-auto">
                    {content}
                </div>
            </DialogContent>
        </Dialog>
    );
}