import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../input/passwordInput";
import { ValidadeEmail } from "../../../utils/helper";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleLogin(e) {
        e.preventDefault(); // Corrigido aqui!
        if (!ValidadeEmail(email)) {
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

            <div className="flex items-center justify-cente mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}> {/* Formulário agora envolve os inputs */}
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
