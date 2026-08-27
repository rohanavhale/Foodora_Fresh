import { Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
export default function FoodCard({ item }) {
    const { cart, addItem, changeQty } = useCart();
    const qty = cart.find(x => x.id === item.id)?.qty || 0;
    return <article className="flex gap-4 border-b border-gray-100 py-5 last:border-0">
        <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-sm border-2 ${item.veg ? "border-emerald-600" : "border-red-500"}`}></span>
                <h3 className="font-bold">{item.name}</h3>
            </div>
            <p className="mt-1 font-semibold">₹{item.price}</p>
            <p className="mt-1 max-w-xl text-sm leading-5 text-gray-500">{item.description}</p>
        </div>
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-36">
            <img src={item.image} alt={item.name} loading="lazy"
                className="h-full w-full object-cover" />
            {qty === 0 ? <button onClick={() => addItem(item)}
                className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-coral-600 shadow">ADD <Plus size={14} /></button> :
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-lg bg-white px-2 py-1.5 shadow">
                    <button onClick={() => changeQty(item.id, -1)}><Minus size={15} /></button><b className="text-sm">{qty}</b><button onClick={() => changeQty(item.id, 1)}>
                        <Plus size={15} /></button>
                </div>}
        </div>
    </article>
}