import { Link } from "react-router-dom";
export default function Footer() {
    return <footer className="mt-20 border-t border-gray-100 bg-cream">
        <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                <div className="flex items-center gap-2 font-black">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-coral-500 text-white">F</span> FoodoraFresh</div>
                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">Good food, good mood. Discover neighborhood favorites and get them delivered fresh.</p>
            </div>
            <div><h3 className="font-bold">Explore</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-500">
                    <Link className="block hover:text-coral-500" to="/restaurants">Restaurants</Link>
                    <Link className="block hover:text-coral-500" to="/orders">Orders</Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold">For you</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-500">
                    <Link className="block hover:text-coral-500" to="/login">Sign in</Link>
                    <Link className="block hover:text-coral-500" to="/cart">Your cart</Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold">Made with care</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">A polished demo experience using original branding and mock data.</p>
            </div>
        </div>
        <div className="container-x border-t border-gray-200 py-5 text-xs text-gray-400">© 2026 FoodoraFresh. Demo project.</div>
    </footer>
}