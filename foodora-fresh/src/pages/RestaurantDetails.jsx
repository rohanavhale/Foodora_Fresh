import { useMemo, useState } from "react";
import { Clock3, MapPin, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { restaurants, menuItems } from "../data/mockData";
import FoodCard from "../components/FoodCard";
import RatingBadge from "../components/RatingBadge";

export default function RestaurantDetails() {
    const { id } = useParams(); const r = restaurants.find(x => x.id === id) || restaurants[0];
    const items = useMemo(() => menuItems.filter(x => x.restaurantId === r.id), [r.id]);
    const cats = [...new Set(items.map(x => x.category))]; const [active, setActive] = useState(cats[0]);
    return <main>
        <div className="container-x py-6">
            <div className="overflow-hidden rounded-3xl">
                <img src={r.image} alt={r.name} className="h-56 w-full object-cover sm:h-72 lg:h-80" /></div>
            <div className="py-6"><div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-black">{r.name}</h1>
                <RatingBadge rating={r.rating} /></div><p className="mt-2 text-gray-500">{r.cuisine.join(" • ")} • ₹{r.price} for two</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Clock3 size={16} />{r.time} min</span>
                    <span className="flex items-center gap-1"><MapPin size={16} />{r.address}</span>
                    <span className="flex items-center gap-1"><Star size={16} className="text-amber-500" />{r.offer}</span>
                </div>
            </div>
            <div className="sticky top-16 z-30 -mx-4 overflow-x-auto border-y border-gray-100 bg-white/95 px-4 py-3 backdrop-blur">
                <div className="flex gap-2">{cats.map(c =>
                    <button key={c} onClick={() => setActive(c)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${active === c ? "bg-coral-500 text-white" : "bg-gray-100 text-gray-600"}`}>{c[0].toUpperCase() + c.slice(1)}</button>)}</div></div>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_320px]">
                <section>{items.filter(x => x.category === active).map(i =>
                    <FoodCard key={i.id} item={i} />)}</section>
                <aside className="hidden lg:block">
                    <div className="sticky top-28 rounded-2xl border border-gray-100 p-5 shadow-card">
                        <h2 className="font-bold">Restaurant info</h2>
                        <div className="mt-4 space-y-3 text-sm text-gray-500"><p>Open today • 11:00 AM – 11:30 PM</p>
                            <p>Delivery is fastest when you order within the service area.</p><p>Vegetarian options are marked with a green icon.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>
}