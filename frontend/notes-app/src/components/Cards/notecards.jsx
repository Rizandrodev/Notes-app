import React from "react";
import { MdOutlinePushPin,MdCreate,MdDelete} from "react-icons/md"; // Corrigido nome do ícone

const NoteCard = ({ title, data, content, tags, isPinned, onEditon, onPinNote, onDelete }) => {
    return (
        <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-sm text-slate-300">{data}</span>
                </div>
                <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-blue-400':'text-slate-300'}`} onClick={onPinNote} />
            </div>
            <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 40)}</p>
            <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-slate-500">{tags}</div>

            <div className="flex items-center gap-2">
                <MdCreate 
                   className="icon-btn hover:text-green-500"
                   onClick={onEditon}
                />

                <MdDelete 
                   className="icon-btn hover:text-red-500"
                   onClick={onDelete}
                />
            </div>
        </div>
        </div>
    );
};

export default NoteCard;
