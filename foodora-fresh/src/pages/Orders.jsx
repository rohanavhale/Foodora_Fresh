import { Check, Clock3, PackageCheck, Truck } from "lucide-react";
import { ordersSeed } from "../data/mockData";
import RatingBadge from "../components/RatingBadge";

const icons = [Check, PackageCheck, Truck];

export default function Orders() {
    const current = ordersSeed[0], previous = ordersSeed.slice(1);
    return <main className="container-x py-8">
        <h1 className="text-3xl font-black">Your orders</h1>
        <section className="mt-7 rounded-3xl border border-gray-100 bg-white p-5 shadow-card sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div><p className="text-xs font-bold uppercase tracking-wider text-coral-500">Live order</p>
                    <h2 className="mt-1 text-xl font-black">{current.restaurant}</h2>
                    <p className="mt-1 text-sm text-gray-500">{current.id} • {current.date}</p></div>
                <RatingBadge rating="4.7" /></div><div className="mt-8 grid grid-cols-3 gap-2">{["Confirmed", "Preparing", "On the way"].map((s, i) => {
                    const I = icons[i]; return <div key={s} className="text-center">
                        <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-coral-50 text-coral-500"><I size={19} /></div>
                        <p className="mt-2 text-xs font-semibold">{s}</p></div>
                })}</div>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-gray-100"><div className="h-full w-4/5 rounded-full bg-coral-500"></div></div>
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500"><Clock3 size={16} /> Estimated arrival: 18–25 min</div></section>
        <h2 className="mt-10 text-xl font-black">Previous orders</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">{previous.map(o => <article key={o.id}
            className="rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex justify-between gap-3"><div><h3 className="font-bold">{o.restaurant}</h3><p className="mt-1 text-xs text-gray-500">{o.id} • {o.date}</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">{o.status}</span></div><p className="mt-4 text-sm text-gray-600">{o.items.join(" • ")}</p>
            <p className="mt-3 font-bold">₹{o.total}</p></article>)}</div></main>
}