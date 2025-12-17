import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";
const Home: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Welcome to My Portfolio Website!
            </h1>

            <p className="text-white/80 text-lg">
                Hello! I'm Jeffrey, a fourth year undergraduate student studying
                computer science at Worcester Polytechnic Institute (WPI).
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
