import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {  // Added event parameter
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {  // Fixed function name and added parentheses to call addNewTag
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div>
            {tags?.length > 0 && (
                tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="flex items-center flex-wrap mt-2 mr-2 inline-block bg-blue-100 px-2 py-1 rounded"
                    >
                        #{tag}  {/* Removed "School" prefix and fixed display */}
                        <button 
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 text-red-500 hover:text-red-700"
                        >
                            <MdClose />
                        </button>
                    </span>
                ))
            )}
            <div className="flex items-center gap-4 mt-3">
                <input
                    type="text"
                    placeholder="Add Tags"
                    className="bg-transparent border px-3 py-2 rounded outline-none cursor-pointer"
                    value={inputValue}  // Added value prop
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />

                <button 
                    className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
                    onClick={addNewTag}  // Added onClick handler
                >
                    <MdAdd className="text-2xl text-blue-700 hover:text-white" />
                </button>
            </div>
        </div>
    );
};

export default TagInput;