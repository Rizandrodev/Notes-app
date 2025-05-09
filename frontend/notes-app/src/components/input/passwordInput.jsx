import React, { useState } from "react";
import {FaRegEye,FaRegEyeSlash } from "react-icons/fa6"
const PasswordInput=({value,onChange,placeholder})=>{ 
    const [ishowPassword,setisShowPassword]=useState(false)

    const togleShowPassword=()=>{
        setisShowPassword(!ishowPassword)
    }
    return(
        <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded-md mb-3">
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder || "password"}
                type={ishowPassword ? "text":"password"}
                className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
             />

                { ishowPassword?(<FaRegEye
                    size={22}
                    className="text-blue-700 cursor-pointer"
                    onClick={()=>togleShowPassword()}
                />):(<FaRegEyeSlash
                    size={22}
                    className="text-blue-700 cursor-pointer"
                    onClick={()=>togleShowPassword()}
                />)}
        </div>
    )
}

export default PasswordInput