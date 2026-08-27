import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({children}) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("foodora-cart") || "[]"); } catch { return []; }
  });
  useEffect(() => localStorage.setItem("foodora-cart", JSON.stringify(cart)), [cart]);

  const addItem = (item) => setCart(c => {
    const found = c.find(x => x.id === item.id);
    return found ? c.map(x => x.id === item.id ? {...x, qty:x.qty+1} : x) : [...c, {...item, qty:1}];
  });
  const changeQty = (id, delta) => setCart(c => c.map(x => x.id === id ? {...x, qty:x.qty+delta} : x).filter(x => x.qty > 0));
  const clearCart = () => setCart([]);
  const subtotal = useMemo(() => cart.reduce((s,x)=>s+x.price*x.qty,0), [cart]);
  const delivery = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 39;
  const discount = subtotal >= 699 ? Math.min(120, Math.round(subtotal*0.12)) : 0;
  const taxes = Math.round((subtotal-discount)*0.05);
  const total = subtotal + delivery + taxes - discount;
  const count = cart.reduce((s,x)=>s+x.qty,0);
  return <CartContext.Provider value={{cart,addItem,changeQty,clearCart,subtotal,delivery,discount,taxes,total,count}}>
    {children}
  </CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
