import { Link } from "react-router-dom";
export default function CategoryCard({ category }) {
  return<Link to={`/restaurants?cuisine=${encodeURIComponent(category.name)}`}
    className={`group min-w-[105px] rounded-2xl p-3 text-center transition hover:-translate-y-1 ${category.color}`}>
    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-4xl shadow-sm transition group-hover:scale-105">{category.emoji}</div>
    <div className="mt-2 text-sm font-bold">{category.name}</div>
  </Link>
}