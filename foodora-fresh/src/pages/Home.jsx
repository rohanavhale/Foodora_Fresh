import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories, restaurants } from "../data/mockData";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [location, setLocation] = useState("Hinjawadi"); const [search, setSearch] = useState(""); const navigate = useNavigate();
  const popular = restaurants.slice(0, 6);
  const searchGo = () => navigate(`/restaurants?q=${encodeURIComponent(search)}`);
  return <main>
    <section className="hero-pattern overflow-hidden bg-cream">
      <div className="container-x grid min-h-[520px] items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-coral-600 shadow-sm"><Sparkles size={14} /> Fresh picks, delivered happy</span>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">Your next great meal is <span className="text-coral-500">closer than you think.</span></h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">Discover local favorites, hidden gems, and everyday comfort food — all in a few taps.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><LocationSelector location={location} setLocation={setLocation} /><SearchBar value={search} onChange={setSearch} /><Button onClick={searchGo}>Search</Button></div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-500"><span className="rounded-full bg-white px-3 py-1.5">⚡ Fast delivery</span><span className="rounded-full bg-white px-3 py-1.5"> Veg-friendly</span>
            <span className="rounded-full bg-white px-3 py-1.5">💳 Easy checkout</span></div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -left-8 top-16 h-52 w-52 rounded-full bg-coral-100 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-[36px] shadow-soft">
            <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85" alt="A colorful spread of prepared food" className="h-[440px] w-full object-cover" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur"><div className="text-xs text-gray-500">Today’s little win</div><div className="mt-1 font-bold">A table full of favorites.</div></div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-x py-12"><div className="flex items-end justify-between">
      <div><p className="text-sm font-bold text-coral-500">BROWSE</p>
        <h2 className="mt-1 text-2xl font-black">What are you craving?</h2></div>
      <Link className="hidden items-center gap-1 text-sm font-bold text-coral-600 sm:flex" to="/restaurants">See all <ArrowRight size={16} /></Link></div>
      <div className="hide-scrollbar mt-6 flex gap-4 overflow-x-auto pb-2">{categories.map(c => <CategoryCard key={c.id} category={c} />)}</div>
    </section>
    <section className="bg-gray-50/70 py-12"><div className="container-x"><div className="flex items-end justify-between"><div>
      <p className="text-sm font-bold text-coral-500">LOCAL FAVORITES</p><h2 className="mt-1 text-2xl font-black">Popular restaurants</h2></div>
      <Link className="hidden items-center gap-1 text-sm font-bold text-coral-600 sm:flex" to="/restaurants">Explore all <ArrowRight size={16} /></Link></div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{popular.map(r => <RestaurantCard key={r.id} restaurant={r} />)}</div>
    </div></section>
    <section className="container-x py-14"><div className="rounded-3xl bg-ink p-7 text-white sm:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-sm font-bold text-coral-300">THIS WEEK</p><h2 className="mt-2 text-3xl font-black">More flavor, less waiting.</h2>
        <p className="mt-2 max-w-xl text-gray-300">Get special offers from selected local spots and make your next order a little more exciting.</p></div>
        <Button onClick={() => navigate("/restaurants")} className="w-fit">Browse offers</Button></div></div></section>
    <section className="container-x py-4"><h2 className="text-2xl font-black">Top restaurants near you</h2><p className="mt-1 text-gray-500">Highly rated picks around {location}.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{restaurants.slice(6, 12).map(r => <RestaurantCard key={r.id} restaurant={r} />)}</div></section>
  </main>
}