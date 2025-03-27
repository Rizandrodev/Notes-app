import React from "react";
import Navbar from "../../Navbar/navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../input/password";

const Login=()=>{
    return(
        <>
            <Navbar/>

            <div className="flex items-center justify-cente mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={()=>{}}></form>
                    <h4 className="text-2xl mb-2">Login</h4>
                    <input type="text" placeholder="Email" className="input-box" />
                    <PasswordInput/>
                    <button type="submit" className="btn-primary">
                        Login
                    </button>        
                    <p className="text-sm text-center mt-4">
                        Not registred yet? {""}
                        <Link to='/signup' className="font-medium text-blue-900 underline">
                        Create an Account
                        </Link>
                    </p>            

                </div>
            </div>
        </>
    )
}

export default Login