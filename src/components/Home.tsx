
import React from "react";
import Header from "./home/Header";
import AboutSection from "./home/AboutSection";

const Home: React.FC = () => {
    return (
        <div className="scroll-smooth">
            <Header />
            <div id="about-section" />
            <AboutSection />
        </div>
    );
};

export default Home;