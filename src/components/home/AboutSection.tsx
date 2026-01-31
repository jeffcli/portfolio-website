
import React from "react";
import { motion } from "framer-motion";
import { aboutVariants } from "../../animations/animationVariants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section ref={elementRef} className="snap-start max-w-4xl mx-auto px-4 min-h-screen py-24 scroll-mt-6">
            <motion.div
                variants={aboutVariants}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
            >
                <h2 className="text-3xl font-bold mb-6">About me</h2>

                <p className="text-lg mb-4">
                    I’m a senior at Worcester Polytechnic Institute (WPI) pursuing my Bachelor’s and Master’s degrees in Computer Science, with interests in software engineering, system design, and machine learning. I enjoy building scalable, well-designed systems that solve real-world problems.
                </p>

                <p className="text-lg mb-4">
                    When I&#39;m not building, I am an avid runner (just ran my first marathon!),
                    and{" "}
                    <Link to="/speedcubing"
                          className="hover:text-blue-700">
                        speedcuber
                    </Link>
                    .
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;