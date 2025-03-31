import React from "react";
import { getInitials } from "../../utils/helper.js";

export const ProfileInfo = ({ onLogout }) => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold">
                    {getInitials("Joao Borges")}
                </div>

                <div>
                    <p className="text-sm font-medium text-slate-700 underline">
                        Borges
                    </p>
                    <button className="text-red-500 font-medium" onClick={onLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};
