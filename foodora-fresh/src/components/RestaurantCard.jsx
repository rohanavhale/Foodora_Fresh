import { Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import RatingBadge from "./RatingBadge";
export default function RestaurantCard({ restaurant }) {
  return<Link to={`/restaurants/${restaurant.id}`} className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img src={restaurant.image} alt={restaurant.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute left-3 bottom-3 rounded-lg bg-coral-600 px-2.5 py-1 text-xs font-bold text-white">{restaurant.offer}</span>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2"><h3 className="font-bold">{restaurant.name}</h3>
        <RatingBadge rating={restaurant.rating} /></div>
      <p className="mt-1 text-sm text-gray-500">{restaurant.cuisine.join(" • ")}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500"><span className="flex items-center gap-1">
        <Clock3 size={14} />{restaurant.time} min</span>
        <span>₹{restaurant.price} for two</span>
      </div>
      <p className="mt-2 flex items-center gap-1 text-xs text-gray-400">
        <MapPin size={13} />{restaurant.address}
      </p>
    </div>
  </Link>
}