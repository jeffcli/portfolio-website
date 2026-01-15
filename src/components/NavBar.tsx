import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (

        <nav className={` ${isHome ? "fixed top-0" :"relative"} top-0 left-0 w-full z-10`}>
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                <span className="text-slate-700 hover:text-indigo-600 transition"> <Link to="/">JL</Link></span>
                <ul className="flex items-center gap-6">
                    <li className="text-slate-700 hover:text-indigo-600 transition">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="text-slate-700 hover:text-indigo-600 transition">
                        <Link to="/projects">Portfolio</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};


export default Navbar;
