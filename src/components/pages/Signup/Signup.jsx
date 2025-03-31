import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importando corretamente o Link
import Navbar from "../../Navbar/navbar";
import PasswordInput from "../../input/passwordInput"; // Certifique-se de que esse componente está correto
import { validateEmail } from "../../../utils/helper";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        if(!name){
            setError("Please enter your name ")
            return
        }
        if(!validateEmail(email)){
            setError("Pleasse a valid email adrees")
        }
        if(!password){
            setError("Pleasse enter your password")
        }
        setError('')

        //SignUp api Call
    };

    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-2">Sign Up</h4>

                        {/* Campo Name corrigido */}
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="input-box" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* Campo Email corrigido */}
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input-box" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Componente PasswordInput */}
                        <PasswordInput 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Exibição de erro se houver */}
                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <button type="submit" className="btn-primary">
                            Create an Account
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-blue-900 underline">
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
