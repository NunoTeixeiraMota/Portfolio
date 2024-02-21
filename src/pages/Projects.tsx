import { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

interface Project {
    id: number;
    name: string;
    html_url: string;
    languages_url: string;
    description: string; // Add the description property

}
const projectDescriptions: { [repoName: string]: string } = {
    "repo1": "A fantastic project that does amazing things.",
    "repo2": "Another cool project with exciting features.",
    // ...add more descriptions here
    "default": "A great project by NunoTeixeiraMota." // Default if no match is found
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get<Project[]>('https://api.github.com/users/NunoTeixeiraMota/repos');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className='containermaster'>
            <div className="project-container">
                {projects.map((project) => (
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.id}
                        className="project-link"
                    >
                        <div className="project-card">
                            <div className="project-card-inner">
                                <div className="project-card-front">
                                    <div className="project-title-container">
                                        <span className="project-title">{project.name}</span>
                                    </div>
                                    <div className="project-languages">
                                        {project.languages_url && <Languages projectUrl={project.languages_url} />}
                                    </div>
                                    <div className="project-card-back">
                                        <div className="project-description">
                                            {projectDescriptions[project.name] || projectDescriptions["default"]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </a>
                ))}
            </div>
        </div>
    );
};

const Languages = ({ projectUrl }: { projectUrl: string }) => {
    const [languages, setLanguages] = useState<string[]>([]);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await axios.get(projectUrl);
                const languagesData = Object.entries(response.data) as Array<[string, any]>;
                const sortedLanguages = languagesData.sort((a, b) => b[1] - a[1]);
                const topLanguages = sortedLanguages.slice(0, 3).map(([lang, _]) => lang);
                setLanguages(topLanguages);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchLanguages();
    }, [projectUrl]);

    return (
        <>
            {languages.map((lang) => (
                <div key={lang}>{lang}</div>
            ))}
        </>
    );
};

export default Projects;
