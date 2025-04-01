import React from "react" 
import Navbar from "../../Navbar/navbar"
import NoteCard from "../../Cards/notecards"
import { MdAdd } from "react-icons/md"

const Home=()=>{
    return(
        <>
        <Navbar/>
        <div className="containenr mx-auto">
            <div className="grid grid-cols-3 gap-4 mt-8">
                <NoteCard
                    title={"Notes of Db lesson"}
                    data={"3rd August 2024"}
                    content={"Sql is a Relacional database..."}
                    tags={"#School"}
                    onEditon={()=>{}}
                    onDelete={()=>{}}
                    isPinned={true}
                    onPinNote={()=>{}}
            />

            <NoteCard
                    title={"Notes of Db lesson"}
                    data={"3rd August 2024"}
                    content={"Sql is a Relacional database..."}
                    tags={"#School"}
                    onEditon={()=>{}}
                    onDelete={()=>{}}
                    isPinned={true}
                    onPinNote={()=>{}}
            />
             <NoteCard
                    title={"Notes of Db lesson"}
                    data={"3rd August 2024"}
                    content={"Sql is a Relacional database..."}
                    tags={"#School"}
                    onEditon={()=>{}}
                    onDelete={()=>{}}
                    isPinned={true}
                    onPinNote={()=>{}}
            />
          </div>
        </div>
            <button className=" cursor-pointer w-16 h-16 flex items-center justify-center hover:outline-1 rounded-2xl bg-blue-400 hover:bg-blue-400 absolute right-10 bottom-10" onClick={()=>{}}>
                <MdAdd className="text-[32px] text-white"/>
            </button>
        </>
    )
}


export default Home