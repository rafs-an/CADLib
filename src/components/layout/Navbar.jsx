import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 text-white border-b border-slate-800">
            <Link to="/" className="text-5xl font-bold text-cyan-400">
               CAD
               <span className="text-white">Lib</span>
            </Link>

            <div className="flex gap-6 items-center">
                <Link to="/login" className="text-slate-300 hover:text-cyan-400 transition">
                     Login 
                </Link>

                <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition">
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar;