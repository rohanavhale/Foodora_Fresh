import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";

export default function Navbar() {
  const [open,setOpen]=useState(false);
  const {count}=useCart();
  const navigate=useNavigate();
  const link=({isActive})=>`text-sm font-semibold transition ${isActive?"text-coral-600":"text-gray-600 hover:text-ink"}`;

  return<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
    <div className="container-x flex h-16 items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2 font-black tracking-tight">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral-500 text-lg text-white">F</span>
        <span className="text-xl">Foodora<span className="text-coral-500">Fresh</span></span>
      </Link>
      <div className="hidden items-center gap-7 md:flex">
        <NavLink to="/restaurants" className={link}>Explore</NavLink>
        <NavLink to="/orders" className={link}>Orders</NavLink>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <button onClick={()=>navigate("/login")} className="rounded-xl p-2.5 text-gray-600 hover:bg-gray-50" aria-label="Account"><UserRound size={20}/></button>
        <button onClick={()=>navigate("/cart")} className="relative rounded-xl p-2.5 text-gray-600 hover:bg-gray-50" aria-label="Cart">
          <ShoppingBag size={21}/>{count>0 && 
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral-500 px-1 text-[10px] font-bold text-white">{count}</span>}
        </button>
        <Button onClick={()=>navigate("/restaurants")}>Order now</Button>
      </div>
      <button className="rounded-xl p-2 md:hidden" onClick={()=>setOpen(!open)} aria-label="Open menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open && <div className="border-t border-gray-100 bg-white p-4 md:hidden">
      <div className="container-x flex flex-col gap-2">
        <NavLink onClick={()=>setOpen(false)} to="/restaurants" className={link}>Explore restaurants</NavLink>
        <NavLink onClick={()=>setOpen(false)} to="/orders" className={link}>My orders</NavLink>
        <button onClick={()=>navigate("/login")} className="rounded-xl bg-gray-50 px-4 py-3 text-left text-sm font-semibold">Account</button>
        <button onClick={()=>navigate("/cart")} className="rounded-xl bg-coral-50 px-4 py-3 text-left text-sm font-semibold text-coral-700">Cart ({count})</button>
      </div>
    </div>}
  </header>;
}