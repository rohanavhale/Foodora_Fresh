export default function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary: "bg-coral-500 text-white hover:bg-coral-600 shadow-sm",
    soft: "bg-coral-50 text-coral-700 hover:bg-coral-100",
    dark: "bg-ink text-white hover:bg-black",
    outline: "border border-gray-200 bg-white hover:border-coral-300 hover:text-coral-600"
  };
  return<button
    className={`rounded-xl px-4 py-2.5 font-semibold transition-all duration-200 active:scale-[.98] 
    ${styles[variant]} 
    ${className}`}
    {...props}>{children}
  </button>;
}

