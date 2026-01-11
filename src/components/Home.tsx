import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { ease: "linear" },
    },
};

const Home: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto text-center">
            <p className="text-primary-600 font-mono text-sm mb-4"> Hi, I'm</p>


            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6"
            ></h1>


            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {"Jeffrey Li".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letter}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>
            </h1>

            <p className="80 text-lg">
                Building intelligent systems at the intersection of Software Engineering and Machine Learning.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5">
                <a className="group px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
                href="/projects">View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </a><a href="mailto:jcli@wpi.edu"
                   className="px-8 py-3 bg-white text-neutral-900 border-2 border-neutral-200 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-all duration-200 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
               Contact Me</a></div>




            {/*<div className="flex justify-center gap-6 mt-8">*/}
            {/*    <a*/}
            {/*        href="https://github.com/jeffcli"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        className="text-white hover:text-blue-300 transition"*/}
            {/*    >*/}
            {/*        <RiGithubFill size={32}/>*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*        href="https://www.linkedin.com/in/jeffrey-li-156013203/"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        className="text-white hover:text-blue-300 transition"*/}
            {/*    >*/}
            {/*        <RiLinkedinFill size={32}/>*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*        href="jeffrey.cui.li@gmail.com"*/}
            {/*        className="text-white hover:text-blue-300 transition"*/}
            {/*    >*/}
            {/*        <RiMailFill size={32}/>*/}
            {/*    </a>*/}


            {/*</div>*/}

        </section>
    );
};

export default Home;
