import React, { useState } from 'react'
import { signin } from '../../api/admin/auth';

function AdminLogin({ setToken }) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");
        const [error, setError] = useState("");

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        }
        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        }

        const handleLogin = async (e) => {
            e.preventDefault();

            try {
                const response = await signin(email, password);
                const accessToken = response.data;
                localStorage.setItem("accessToken", accessToken);
                setToken(accessToken);
                setMessage("Sign-in successful!");
                setError("");
            } catch (err) {
                setError(err.message || "Invalid email or password. Please try again.");
                setMessage("");
            }
        }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <form className="max-w-[400px] w-full bg-[#1A1A1A] text-white p-6 rounded-lg" onSubmit={handleLogin}>
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <input
                    className="w-full p-2 mb-2 bg-transparent border border-gray-500 rounded"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    />
                    <input
                    className="w-full p-2 mb-4 bg-transparent border border-gray-500 rounded"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    {message && <p style={{ color: "green" }}>{message}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type='submit' className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                    Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin