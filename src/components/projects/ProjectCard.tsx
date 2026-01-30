import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    infoUrl?: string;
    fileName: string;
    skills: string[];
    githubUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="border rounded-lg shadow-md p-4">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-70 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {project.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
            {skill}
          </span>
                ))}
            </div>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex gap-4">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                >
                    <RiGithubFill size={32} />
                </a>
                <a
                    href={project.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                >
                    <FiArrowUpRight size={32} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;