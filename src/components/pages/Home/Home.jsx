import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import NoteCard from "../../Cards/notecards";
import { MdAdd } from "react-icons/md";
import AddEditNotesCards from "./AddEditNotesCards";
import Modal from "react-modal";

const Home = () => {
    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null
    });

    const handleOpenModal = () => {
        setOpenAddEditModal({ ...openAddEditModal, isShown: true });
    };

    const handleCloseModal = () => {
        setOpenAddEditModal({ ...openAddEditModal, isShown: false });
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <NoteCard
                        title="Notes of Db lesson"
                        date="3rd August 2024"
                        content="SQL is a Relational database..."
                        tags="#School"
                        onEdit={() => {}}
                        onDelete={() => {}}
                        isPinned={true}
                        onPinNote={() => {}}
                    />

                    <NoteCard
                        title="Notes of Db lesson"
                        date="3rd August 2024"
                        content="SQL is a Relational database..."
                        tags="#School"
                        onEdit={() => {}}
                        onDelete={() => {}}
                        isPinned={true}
                        onPinNote={() => {}}
                    />

                    <NoteCard
                        title="Notes of Db lesson"
                        date="3rd August 2024"
                        content="SQL is a Relational database..."
                        tags="#School"
                        onEdit={() => {}}
                        onDelete={() => {}}
                        isPinned={true}
                        onPinNote={() => {}}
                    />
                </div>
            </div>

            <button 
                className="cursor-pointer w-16 h-16 flex items-center justify-center hover:outline-1 rounded-2xl bg-blue-400 hover:bg-blue-500 absolute right-10 bottom-10" 
                onClick={handleOpenModal}
            >
                <MdAdd className="text-[32px] text-white" />
            </button>

            <Modal
                className="w-[40%] max-h3/4 bg-white rounded-md mx-auto mt-14 p-5"
                isOpen={openAddEditModal.isShown}
                onRequestClose={handleCloseModal}
                
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)"
                    }
                }}
            >
                <AddEditNotesCards
                    noteData={openAddEditModal.data}
                    type={openAddEditModal.type}
                     onclose={{isShown:false,type:"add",data:null}}
               />
            </Modal>
        </>
    );
};

export default Home;
