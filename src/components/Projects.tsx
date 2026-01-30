import React from "react";
import MultimodalProject from "./projects/MultimodalProject.tsx";
import BrighamProject from "./projects/BrighamProject.tsx";
import LemursProject from "./projects/LemursProject.tsx";
import ProjectCard from "./projects/ProjectCard";

const Portfolio: React.FC = () => {
    const projects = [BrighamProject, LemursProject, MultimodalProject];
    return (
    <div className="container mx-auto pb-10">
            <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;