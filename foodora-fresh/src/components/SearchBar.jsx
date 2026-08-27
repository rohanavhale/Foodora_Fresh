import { Search } from "lucide-react";
export default function SearchBar({ value, onChange, placeholder = "Search for restaurant, cuisine or dish" }) {
  return<label className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-coral-300 focus-within:ring-4 focus-within:ring-coral-50">
    <Search size={20} className="shrink-0 text-gray-400" />
    <input aria-label="Search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent outline-none placeholder:text-gray-400" />
  </label>;
}