import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

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
        transition: { ease: "easeOut" },
    },
};

const Home: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {"Welcome to My Portfolio Website!".split("").map((char, index) => (
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
                Hello! I'm Jeffrey, a senior studying Computer Science at Worcester Polytechnic Institute (WPI).
            </p>


            <div className="flex justify-center gap-6 mt-8">
                <a
                    href="https://github.com/jeffcli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition"
                >
                    <RiGithubFill size={32}/>
                </a>

                <a
                    href="https://www.linkedin.com/in/jeffrey-li-156013203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition"
                >
                    <RiLinkedinFill size={32}/>
                </a>

                <a
                    href="jeffrey.cui.li@gmail.com"
                    className="text-white hover:text-blue-300 transition"
                >
                    <RiMailFill size={32}/>
                </a>
            </div>
        </section>
    );
};

export default Home;
