
import React from "react";
import styles from "./Projects.module.css";

const Portfolio: React.FC = () => {

    const projects = [
        {
            id: 1,
            title: 'Hospital Application in Collaboration with Brigham and Women’s Hospital',
            description: 'Description of Project 1.',
            imageUrl: 'path/to/image1.jpg',
            demoUrl: 'https://example.com/project1',
            githubUrl: 'https://github.com/username/project1',
        },
        {
            id: 2,
            title: 'Leveraging Early Mental Uncovering Risk for Suicide',
            description: 'Description of Project 2.',
            imageUrl: 'path/to/image2.jpg',
            demoUrl: 'https://example.com/project2',
            githubUrl: 'https://github.com/username/project2',
        },


    ];

    return (
        <div className={styles.portfolioContainer}>
            <h1>Portfolio</h1>
            <div className={styles.projectsContainer}>
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-links">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;