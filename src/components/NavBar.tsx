import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                <span className="text-lg font-medium">Jeffrey Li's Portfolio Site</span>

                <ul className="flex items-center gap-6 text-sm">
                    <li className="text-slate-700 hover:text-indigo-600 transition">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-slate-700 hover:text-indigo-600 transition">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="text-indigo-600 font-medium">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
