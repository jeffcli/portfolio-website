import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Portfolio from "./components/Projects";
import Speedcubing from "./components/Speedcubing";

function App() {
    return (
        <Router>
            <div
                className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-fuchsia-100 text-slate-800">
                <Navbar/>

                <main className="pt-25 px-6">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Portfolio/>}/>
                        <Route path="/speedcubing" element={<Speedcubing/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
