import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { restaurants } from "../data/mockData";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

export default function Restaurants() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") || "";
  const cuisine = params.get("cuisine") || "";
  const [q, setQ] = useState(initial);
  const [veg, setVeg] = useState(false);
  const [sort, setSort] = useState("rating");
  const filtered = useMemo(() => {
    let list = restaurants.filter(r =>
      (!veg || r.veg) && (!cuisine || r.cuisine.some(c => c.toLowerCase().includes(cuisine.toLowerCase())))
      && (q === "" || `${r.name} ${r.cuisine.join(" ")} ${r.offer}`.toLowerCase().includes(q.toLowerCase())));
    return [...list].sort((a, b) => sort === "rating" ? b.rating - a.rating : sort === "time" ? a.time - b.time : a.price - b.price);
  }, [q, veg, sort, cuisine]);

  return<main className="container-x py-8">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-bold text-coral-500">EXPLORE</p>
        <h1 className="text-3xl font-black sm:text-4xl">Find your next favorite.</h1>
        <p className="mt-1 text-gray-500">{filtered.length} restaurants ready to order</p></div>
      <div className="flex w-full max-w-2xl gap-2">
        <SearchBar value={q} onChange={setQ} />
        <Button onClick={() => setParams(q ? { q } : {})}>Search</Button>
      </div>
    </div>
    <div className="hide-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2">
      <button onClick={() => setVeg(!veg)}
        className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold ${veg ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-gray-200 bg-white"}`}> Vegetarian</button>
      {["Pizza", "Indian", "Asian", "Burgers", "Desserts", "Healthy"].map(c =>
        <button key={c} onClick={() => setParams({ cuisine: c })}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold ${cuisine === c ? "border-coral-300 bg-coral-50 text-coral-700" : "border-gray-200 bg-white"}`}>{c}</button>)}
      {cuisine && <button onClick={() => setParams({})} className="flex shrink-0 items-center gap-1 rounded-full bg-gray-100 px-3 py-2 text-sm">
        <X size={14} /> Clear</button>}
    </div>
    <div className="mt-5 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <SlidersHorizontal size={17} /> Sort by</div>
      <select value={sort} onChange={e => setSort(e.target.value)} className="rounded-xl bg-gray-50 px-3 py-2 text-sm font-semibold outline-none">
        <option value="rating">Rating</option><option value="time">Delivery time</option>
        <option value="price">Price: low to high</option>
      </select>
    </div>
    {filtered.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(r =>
      <RestaurantCard key={r.id} restaurant={r} />)}</div> : <div className="py-20 text-center">
      <div className="text-5xl">🍽️</div><h2 className="mt-4 text-xl font-black">No matches yet</h2>
      <p className="mt-1 text-gray-500">Try a different cuisine, restaurant, or filter.</p>
    </div>}
  </main>
}