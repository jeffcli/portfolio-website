import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Projects";
import Speedcubing from "./components/Hobbies/Speedcubing";
import Brigham from "./components/Projects/Brigham";
import Lemurs from "./components/Projects/Lemurs";

function App() {
    return (
        <Router>
            <div
                className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-fuchsia-200 text-slate-800">
                <Navbar/>

                <main className="pt-32 px-6">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Portfolio/>}/>
                        <Route path="/speedcubing" element={<Speedcubing/>}/>
                        <Route path="/brigham" element={<Brigham/>}/>
                        <Route path="/lemurs" element={<Lemurs/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
