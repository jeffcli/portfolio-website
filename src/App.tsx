import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Projects";
import Speedcubing from "./components/hobbies/Speedcubing";
import Brigham from "./components/projects/Brigham";
import Lemurs from "./components/projects/Lemurs";
import Multimodal from "./components/projects/Multimodal";

function App() {
    return (
        <Router>
            <div
                className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-fuchsia-100 text-slate-800">
                <Navbar/>

                <main className="pt-25 px-6">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Portfolio/>}/>
                        <Route path="/speedcubing" element={<Speedcubing/>}/>
                        <Route path="/brigham" element={<Brigham/>}/>
                        <Route path="/lemurs" element={<Lemurs/>}/>
                        <Route path="/multimodal" element={<Multimodal/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
