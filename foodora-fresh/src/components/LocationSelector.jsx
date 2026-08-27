import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
const locations = ["Hinjawadi", "Baner", "Wakad", "Aundh", "Koregaon Park"];
export default function LocationSelector({ location, setLocation }) {
  const [open, setOpen] = useState(false);
  return<div className="relative">
    <button onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold hover:bg-gray-50">
      <MapPin size={18} className="text-coral-500" />
      <span className="max-w-28 truncate">{location}</span>
      <ChevronDown size={15} />
    </button>
    {open && <div className="absolute left-0 top-12 z-40 w-48 rounded-2xl border border-gray-100 bg-white p-2 shadow-soft">
      {locations.map(l =>
        <button key={l} onClick={() => { setLocation(l); setOpen(false) }}
          className="block w-full rounded-xl px-3 py-2.5 text-left text-sm hover:bg-coral-50">{l}
        </button>)}
    </div>}
  </div>;
}