import React from "react";

const AddEditNotesCards=()=>{

    return(
        <>
        <div className="flex flex-col gap-2">
            <label className="input-label">
                <input
                    className="text-2xl text-slate-950 outline-none"
                    placeholder="go to Gym at 6Pm"
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
            />
        </div>

        <div className="mt-3">
            <label className="inpu-label">TAGS</label>
        </div>

        <button className="btn-primary font-medium mt-5 p-3" onClick={()=>{}}>
            ADD
        </button>
        </>
        

    )
}

export default AddEditNotesCards