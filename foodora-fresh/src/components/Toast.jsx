export default function Toast({message,onClose}) {
 if(!message) return null;
 return 
 <div role="status" className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft">
  {message}
  <button onClick={onClose} className="ml-4 text-gray-300">×</button>
 </div>
}