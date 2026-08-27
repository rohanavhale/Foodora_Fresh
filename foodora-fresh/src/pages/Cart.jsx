import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CheckoutSummary from "../components/CheckoutSummary";
import Button from "../components/Button";

export default function Cart() {
    const { cart, changeQty, clearCart } = useCart(); const navigate = useNavigate();
    if (!cart.length)
        return
    <main className="container-x py-20 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-coral-50 text-coral-500"><ShoppingBag size={34} /></div>
        <h1 className="mt-5 text-2xl font-black">Your cart is waiting for something delicious.</h1>
        <p className="mt-2 text-gray-500">Add a dish and it will show up here.</p><Button className="mt-6" onClick={() => navigate("/restaurants")}>Explore restaurants</Button></main>;
    return<main className="container-x py-8"><h1 className="text-3xl font-black">Your cart</h1><div className="mt-7 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card">{cart.map(i => <div key={i.id} className="flex items-center gap-4 border-b py-4 last:border-0">
            <img src={i.image} alt="" className="h-20 w-20 rounded-xl object-cover" /><div className="min-w-0 flex-1"><h2 className="truncate font-bold">{i.name}</h2><p className="text-sm text-gray-500">₹{i.price} each</p>
                <div className="mt-2 inline-flex items-center gap-3 rounded-lg border px-2 py-1"><button onClick={() => changeQty(i.id, -1)}><Minus size={14} /></button><b className="text-sm">{i.qty}</b><button onClick={() => changeQty(i.id, 1)}>
                    <Plus size={14} /></button></div></div>
            <div className="text-right"><p className="font-bold">₹{i.price * i.qty}</p>
                <button onClick={() => changeQty(i.id, -i.qty)} className="mt-2 text-gray-400 hover:text-red-500" aria-label="Remove item">
                    <Trash2 size={17} /></button></div></div>)}<button onClick={clearCart} className="mt-4 text-sm font-semibold text-gray-500 hover:text-red-500">Clear cart</button></section>
        <CheckoutSummary /></div></main>
}