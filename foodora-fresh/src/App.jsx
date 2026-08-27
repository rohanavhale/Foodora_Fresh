import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

export default function App(){
 return <><Navbar/><Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/restaurants" element={<Restaurants/>}/>
   <Route path="/restaurants/:id" element={<RestaurantDetails/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/checkout" element={<Checkout/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/orders" element={<Orders/>}/>
 </Routes><Footer/></>;
}