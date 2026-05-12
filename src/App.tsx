import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Portfolio from "./components/Projects";

function App() {
    return (
        <Router>
            <div
                className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-fuchsia-200 text-stone-800">
                <Navbar/>

                <main className="pt-20 px-6">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Portfolio/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
