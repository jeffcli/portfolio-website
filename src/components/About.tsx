import {Link} from "react-router-dom";
const About: React.FC = () => {
    const skills = [
        "Java",
        "Python",
        "JavaScript/Typescript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <p className="text-lg mb-4">
                        I am a senior at Worcester Polytechnic Institute (WPI) pursuing a bachelors and masters degree in
                        Computer Science. My interests lie at the intersection of Software Engineering, System Design and Machine Learning.
                    </p>
                    <p className="text-lg mb-4">
                        Outside of academics, I am an avid runner (just ran my first marathon!)

                        {" "}
                        and{" "}
                        <Link
                            to="/speedcubing"
                            className="hover:text-blue-300 transition"
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