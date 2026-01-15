import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "linear" } },
};

const aboutVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const Home: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const [showAbout, setShowAbout] = useState(false);
    const aboutSectionRef = useRef<HTMLElement | null>(null);
    const snappedRef = useRef(false);

    useEffect(() => {
        const el = aboutSectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setShowAbout(true);

                if (!snappedRef.current) {
                    snappedRef.current = true;
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            },
            {
                threshold: 0.0001,
                rootMargin: "0px 0px -30% 0px",
            }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);


    return (
        <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
            <section className="snap-start max-w-4xl mx-auto text-center min-h-screen flex flex-col">
                <p className="text-primary-600 font-mono text-sm mb-4">Hi, I'm</p>

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

                <p className="text-lg">
                    Aspiring Software Developer and Machine Learning Engineer
                </p>

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
                        href="mailto:jcli@wpi.edu"
                        className="px-8 py-3 bg-white text-neutral-900 border-2 border-neutral-200 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-all duration-200 flex items-center gap-2"
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


                <div className="mt-8 text-lg"
                // onClick={}
                >
                    ↓
                </div>
            </section>

            <section ref={aboutSectionRef} className="snap-start max-w-4xl mx-auto px-4 min-h-screen py-24 scroll-mt-6">
                <div ref={aboutRef}/>

                <motion.div
                    variants={aboutVariants}
                    initial="hidden"
                    animate={showAbout ? "show" : "hidden"}
                >
                    <h2 className="text-3xl font-bold mb-6">About me</h2>

                    <p className="text-lg mb-4">
                        I’m a senior at Worcester Polytechnic Institute (WPI) pursuing my Bachelors and Masters in Computer Science. I’m interested in Software
                        Engineering, System Design, and Machine Learning.
                    </p>

                    <p className="text-lg mb-4">
                       When I'm not coding, I am an avid runner (just ran my first marathon!),
                        and{" "}
                        <Link to="/speedcubing">
                            speedcuber
                        </Link>
                        .
                    </p>


                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/100 p-4 bg-white/5">
                            <div className="text-sm">Focus</div>
                            <div className="font-semibold">Full-stack + ML</div>
                        </div>
                        <div className="rounded-xl border border-white/100 p-4 bg-white/5">
                            <div className="text-sm">Currently</div>
                            <div className="font-semibold">Building + Grinding Leetcode</div>
                        </div>
                        <div className="rounded-xl border border-white/100 p-4 bg-white/5">
                            <div className="text-sm">Open to</div>
                            <div className="font-semibold">Internships / FT</div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
