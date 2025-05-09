import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../input/passwordInput";
import { validateEmail } from "../../../utils/helper.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleLogin(e) {
        e.preventDefault(); // Corrigido aqui!
        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        if (!password) {
            setError("Please enter the password");
            return;
        }
        setError("")
    }

    return (
         <>
                    <Navbar />
        
                    <div className="flex items-center justify-center mt-28"> {/* Corrigido justify-cente -> justify-center */}
                        <div className="w-96 border rounded bg-white px-7 py-10">
                            <form onSubmit={handleLogin}> {/* Certifique-se de que handleLogin está definido */}
                                <h4 className="text-2xl mb-2">Login</h4>
        
                        <input 
                            type="text" placeholder="Email" className="input-box" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                        <button type="submit" className="btn-primary">
                            Login
                        </button>        
                        <p className="text-sm text-center mt-4">
                            Not registered yet? {""}
                                    <Link to='/signup' className="font-medium text-blue-900 underline">
                                Create an Account
                            </Link>
                        </p>            
                    </form> {/* Fechamento correto do formulário */}
                </div>      
            </div>
        </>
    );
};

export default Login;
