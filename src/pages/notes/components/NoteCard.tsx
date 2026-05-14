import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, Trash2 } from "lucide-react";

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

                    <div className="flex gap-4 mt-6 border-t border-green/20 pt-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit();
                            }}
                            className="text-[#1c739e] hover:text-blue-400 transition-colors"
                        >
                            <Edit size={22} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete();
                            }}
                            className="text-[#fc4e4e] hover:text-red-400 transition-colors"
                        >
                            <Trash2 size={22} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </DialogTrigger>
//card pop up
            <DialogContent className="bg-zinc-950 border-green/50 border-green shadow-[0_0_20px_rgba(16,185,129,0.2)] w-fit max-w-[95vw] min-w-[300px] sm:max-w-[70vw] sm:min-w-[800px]">
    
                <DialogHeader>
                    <DialogTitle className="text-green text-xl">{title}</DialogTitle>
                    <DialogDescription>{date}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="mt-4 max-h-[60vh] w-full pr-4">
                <div className=" text-green whitespace-pre-wrap mt-4 leading-relaxed">
                    {content}
                </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}