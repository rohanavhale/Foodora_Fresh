import { useState } from "react";
import { CheckCircle2, CreditCard, MapPin, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import CheckoutSummary from "../components/CheckoutSummary";

export default function Checkout() {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [done, setDone] = useState(false);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [payment, setPayment] = useState("upi");
    const [error, setError] = useState("");
    const place = () => { if (!cart.length) { navigate("/cart"); return } if (!address.trim() || !/^[6-9]\d{9}$/.test(phone)) { setError("Please enter a delivery address and a valid 10-digit mobile number."); return } setDone(true); clearCart(); };

    if (done) return <main className="container-x py-24 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={42} /></div>
        <h1 className="mt-5 text-3xl font-black">Order confirmed!</h1>
        <p className="mt-2 text-gray-500">Your order is on its way to the kitchen. Total paid: ₹{total}</p>
        <Button className="mt-7" onClick={() => navigate("/orders")}>Track order</Button></main>;
    return
    <main className="container-x py-8"><h1 className="text-3xl font-black">Checkout</h1>{error && <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-600">{error}</div>}
        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="space-y-5"><div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
                <h2 className="flex items-center gap-2 font-bold"><MapPin size={18} className="text-coral-500" /> Delivery address</h2>
                <textarea value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Flat, building, street, landmark" rows="3"
                    className="mt-4 w-full resize-none rounded-xl border border-gray-200 p-3 outline-none focus:border-coral-400" />
                <input value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="10-digit mobile number" className="mt-3 w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-coral-400" /></div>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card"><h2 className="font-bold">Payment method</h2><div className="mt-4 grid gap-3 sm:grid-cols-3">{[["upi", "UPI", Smartphone], ["card", "Card", CreditCard], ["cod", "Cash on delivery", MapPin]].map(([v, label, Icon]) =>
                    <button key={v} onClick={() => setPayment(v)} className={`rounded-xl border p-4 text-left ${payment === v ? "border-coral-400 bg-coral-50" : "border-gray-200"}`}><Icon size={19} />
                        <div className="mt-2 text-sm font-bold">{label}</div></button>)}</div></div>
            </section><CheckoutSummary checkout /></div></main>
}