import React from "react";
import lemursImg from "./assets/lemurs_images/lemurs.png";
import brighamImg from "./assets/brigham_images/brigham.png";
import multimodalImg from  "./assets/multimodal_images/sentiment.png";
import { To, useNavigate} from "react-router-dom";
import {RiGithubFill} from "react-icons/ri";

const Portfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Hospital Application in Collaboration with Brigham and Women’s Hospital",
            description: "A full stack web application designed to run on Kiosks " +
                "at Brigham and Women's Hospital ",
            imageUrl: brighamImg,
            pageURL: "/brigham",
            githubUrl: "https://github.com/jeffcli/softeng-project",
        },
        {
            id: 2,
            title: "LEMURS RADAR - Suicide Risk Alerting for School Administrators and Clinicians",
            description: "An application designed for school officials" +
                " to streamline the alerting process for at-risk students",
            imageUrl: lemursImg,
            pageURL: "/lemurs",
            githubUrl: "https://github.com/mqp-dashboard-lemurs-2025-2026/web-lemurs-radar",
        },
        {
            id: 3,
            title: "Multimodal Sentiment Analysis",
            description: "Implementing a transformer-based architecture to detect the sentiment " +
                "in both images and text from social media posts",
            imageUrl: multimodalImg,
            pageURL: "/multimodal",
            githubUrl: "https://github.com/jeffcli/multimodal-sentiment-analysis",
        },
    ];

    const navigate = useNavigate();
    const handleClick = (link: To) => {
        navigate(link);
    }

    return (
        <div className="container mx-auto pb-10">
            <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
            <p className="text-xl text-center mb-8">A collection of projects spanning full-stack development, AI/ML, and other exploratory work</p>
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
                            className="w-full h-70 object-cover rounded-md mb-4"
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
                                className="hover:text-blue-300 transition"
                            >
                                <RiGithubFill size={32}/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;