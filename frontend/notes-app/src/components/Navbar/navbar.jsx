import React, { useState } from "react";
import { ProfileInfo } from "../Cards/profileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/searchbar";

const Navbar = () => {
    const navigate = useNavigate();  // Certifique-se de que está dentro do componente
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        console.log("Pesquisando:", searchQuery);
    };

    const onClearSearch = () => {
        setSearchQuery("");
    };

    const onLogout = () => {
        navigate("/login");
    };

    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-black py-2">Notes</h2>
            <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo onLogout={onLogout} />
        </div>
    );
};

export default Navbar;
