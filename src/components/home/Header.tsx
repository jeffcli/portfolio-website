import React, {useState} from "react";
import { motion } from "framer-motion";
import { container, letter } from "../../animations/animationVariants";
import ContactPopup from "./ContactPopup.tsx";

const Header: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section className="snap-start max-w-4xl mx-auto text-center min-h-screen flex flex-col">
            <p className="text-primary-600 font-mono text-sm mb-4">Hi, I&#39;m</p>

            <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {"Jeffrey Li".split("").map((char, index) => (
                    <motion.span key={index} variants={letter} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            <p className="text-lg">Aspiring Software Developer and Machine Learning Engineer</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5">
                <a
                    className="group px-8 py-3 bg-primary-500 rounded-lg font-medium hover:bg-primary-600 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    href="/projects"
                >
                    View My Work
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                    >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </a>

                <a
                    className="px-8 py-3 bg-white text-neutral-900 border-2 border-neutral-200 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-all duration-200 flex items-center gap-2"
                    onClick={togglePopup}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    Contact Me

                </a>
            </div>

            <div className="mt-8 text-lg cursor-pointer"
                 onClick={scrollToAbout}
            >↓</div>

            {isPopupVisible && <ContactPopup onClose={togglePopup} />}
        </section>
    );
};

export default Header;