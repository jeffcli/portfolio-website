import jeffImg from "./assets/jeffrey.png";
import {Link} from "react-router-dom";

const About: React.FC = () => {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48">
                    <img
                        src={jeffImg}
                        alt="Profile"
                        className="rounded-full object-cover w-full h-full"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-lg mb-4">
                        I am a fourth year at Worcester Polytechnic Institute (WPI) pursuing a bachelors and masters degree in
                        Computer Science. My interests include Software Engineering, System Design and Artificial
                        Intelligence.
                    </p>
                    <p className="text-lg mb-4">
                        Outside of academics, I am an avid {" "}
                        <a
                            href="https://www.strava.com/athletes/42813327"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition underline"
                        >
                            runner
                        </a>
                        {" "}
                        and{" "}
                        <Link
                            to="/speedcubing"
                            className="hover:text-blue-300 transition underline"
                        >
                            speedcuber
                        </Link>
                        .
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Skills</h3>
                        <ul className="list-disc list-inside">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;