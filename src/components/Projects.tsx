import React from "react";
import lemursImg from "./assets/lemurs.png";
import brighamImg from "./assets/brigham.png";
import { To, useNavigate} from "react-router-dom";

const Portfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Hospital Application in Collaboration with Brigham and Women’s Hospital",
            description: "",
            imageUrl: brighamImg,
            pageURL: "/brigham",
            githubUrl: "https://github.com/jeffcli/softeng-project",
        },
        {
            id: 2,
            title: "LEMURS RADAR - Suicide Risk Alerting for School Administrators and Clinicians",
            description: "",
            imageUrl: lemursImg,
            pageURL: "/lemurs",
            githubUrl: "https://github.com/mqp-dashboard-lemurs-2025-2026/web-lemurs-radar",
        },
    ];

    const navigate = useNavigate();
    const handleClick = (link: To) => {
        navigate(link);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hover:cursor-pointer">
                {projects.map((project) => (
                    <div
                        className="border rounded-lg shadow-md p-4"
                        key={project.id}
                        onClick={() => handleClick(project.pageURL)}
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-67 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">
                            {project.title}
                        </h2>
                        <p className="text-lg mb-4">{project.description}</p>
                        <div className="flex gap-4">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black-500 underline"
                            >
                                GitHub Link
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;