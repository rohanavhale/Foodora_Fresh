import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";
export default function CheckoutSummary({checkout=false}) {
 const {subtotal,delivery,taxes,discount,total}=useCart(); const navigate=useNavigate();
 return <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
  <h2 className="text-lg font-bold">Bill details</h2>
  <div className="mt-5 space-y-3 text-sm">
   <div className="flex justify-between"><span>Item subtotal</span><span>₹{subtotal}</span></div>
   <div className="flex justify-between"><span>Delivery fee</span><span>{delivery?`₹${delivery}`:"FREE"}</span></div>
   <div className="flex justify-between"><span>Taxes</span><span>₹{taxes}</span></div>
   {discount>0 && <div className="flex justify-between text-emerald-600"><span>Fresh savings</span><span>-₹{discount}</span></div>}
   <div className="border-t pt-4 flex justify-between text-base font-bold"><span>Grand total</span><span>₹{total}</span></div>
  </div>
  <Button className="mt-5 w-full" disabled={!subtotal} onClick={()=>navigate(checkout?"/checkout":"/checkout")}>{checkout?"Place order":"Proceed to checkout"}</Button>
 </div>
}