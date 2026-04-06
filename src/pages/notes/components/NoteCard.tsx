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
        <div className={`border p-6 flex flex-col justify-between hover:bg-green/5 transition-all group ${isActive ? 'bg-green/10 border-green' : 'border-green/50'}`}>
            <div>
                <h3 className="text-xl font-bold mb-1 uppercase text-green">{title}</h3>
                <p className="text-sm text-green/60 mb-3">{date}</p>
                <p className="text-green/80 line-clamp-3">{content}</p>
            </div>

            <div className="flex gap-4 mt-6 border-t border-green/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={onEdit} className="text-sm text-blue-400 hover:underline">
                    EDIT_DATA
                </button>
                <button onClick={onDelete} className="text-sm text-red-500 hover:underline">
                    TERMINATE
                </button>
            </div>
        </div>
    );
}