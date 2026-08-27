import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
export default function Login() {
    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const submit = e => {
        e.preventDefault();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Enter a valid email address.");
            return
        } if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return
        } localStorage.setItem("foodora-user", JSON.stringify({ email }));
        navigate("/orders");
    };
    return<main className="container-x grid min-h-[70vh] place-items-center py-12">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-7 shadow-soft">
            <div className="text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-coral-500 font-black text-white">F</div>
                <h1 className="mt-5 text-2xl font-black">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
                <p className="mt-1 text-sm text-gray-500">Save favorites and track every order.</p></div>{error && <div className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>}
            <form onSubmit={submit} className="mt-6 space-y-3"><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-xl border border-gray-200 p-3.5 outline-none focus:border-coral-400" />
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-gray-200 p-3.5 outline-none focus:border-coral-400" />
                <Button className="w-full">{mode === "login" ? "Sign in" : "Sign up"}</Button></form>
            <button className="mt-3 w-full rounded-xl border border-gray-200 py-3 font-semibold hover:bg-gray-50">Continue with Google</button>
            <p className="mt-5 text-center text-sm text-gray-500">{mode === "login" ? "New here?" : "Already have an account?"}
                <button onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError("") }} className="font-bold text-coral-600">{mode === "login" ? "Create one" : "Sign in"}</button></p>
            <Link to="/" className="mt-4 block text-center text-xs text-gray-400">Back to home</Link></div></main>
}