import React, { useState } from "react";
import TagInput from "../../input/tagInput";
import { MdClose } from "react-icons/md";

const AddEditNotesCards = ({ noteData,type,onclose }) => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState(""); // Corrigido o estado de content

    const [error,setError]=useState(null)
    
    const addNewNote=async ()=>{}
    const EditNote=async()=>{}
    
    const handleAddNote=()=>{
        if (!title || !content) {
            setError(`Please enter the ${!title ? "title" : "content"}`);
            return;
        }
        if(type === 'edit'){
            EditNote()
        }else{
            AddNote()
        }
            setError("")
    }
    return (
        <div className="relative">
            {/* Botão de fechar */}
            <button 
                className="absolute top-2 right-2 text-xl text-slate-400 hover:text-slate-600" 
                onClick={onclose} 
            >
                <MdClose />
            </button>

            <div className="flex flex-col gap-2">
                <label className="input-label">
                    <input
                        className="text-2xl text-slate-950 outline-none"
                        placeholder="go to Gym at 6Pm"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </label>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">CONTENT</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                    placeholder="Content"
                    rows={12}
                    value={content} // Corrigido para usar o estado de content
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="input-label">TAGS</label>
                <TagInput setTags={setTags} tags={tags} />
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button className="btn-primary font-medium mt-5 p-3" onClick={() => handleAddNote()}>
                ADD
            </button>
        </div>
    );
};

export default AddEditNotesCards;
