import { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

interface Project {
    id: number;
    name: string;
    html_url: string;
    languages_url: string;
}

// Define the predefined descriptions map
const descriptions: { [key: string]: string } = {
    'EmpireBot-API': `🤖 CS:GO Empire Trading Automation System \n\nA Python script built to interact with the CS:GO Empire API, facilitating tasks like metadata retrieval, item fetching, bidding, and item withdrawal via API calls and data manipulation.\n\nKey features:\n\n🔌 Uses Python's requests library for API communication.\n🔧 Implements argparse for command-line argument handling.\n📂 Employs JSON for data storage and retrieval.\n💡 Demonstrates strong exception handling and error management for reliability.`,
    'ProjetoIntegrador24-ISEP': `🏫 University System: Full-Stack Project 🖥️\n\nFull-Stack Developer in university project using Node.js, C#, Angular, Three.js, and MongoDB.\n\nKey Features:\n\n🔧 Tech Stack: Node.js, C# ASP.NET Core, Angular, Three.js, MongoDB.\n📊 Backend: Node.js and C# ASP.NET Core managed operations like delivery robots, vigilance, and administration.\n🌟 Frontend: Angular provided intuitive user portal.\n🚀 Real-Time Visualization: Three.js within Angular for real-time delivery robot movements.\n💾 Data Management: MongoDB offered flexibility and scalability.`,
    'Portfolio': `🔍 Portfolio: My Coding Journey\n\n⚡️Vite:  Fast build tool\n\n⚛️ React:  UI library\n\n👨‍💻TypeScript:  Typed JavaScript\n\n🔍 Realtime Project Viewer: Leveraging the Github API, this feature allows for live viewing of my projects, providing an interactive experience.\n\n📁 Open Source: GitHub repository open for exploration, offering insights into my coding practices and project structure.`
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
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsPopoverVisible(true);
    };

    const handleMouseLeave = () => {
        setIsPopoverVisible(false);
    };

    // Retrieve the predefined description from the map
    const predefinedDescription = descriptions[project.name] || '';

    return (
        <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-card">
                <div className="project-card-inner">
                    <div className="project-card-front">
                        <div className="project-title-container">
                            <span className="project-title">{project.name}</span>
                        </div>
                        <div className="project-languages">
                            {/* Display languages */}
                            <Languages projectUrl={project.languages_url} />
                        </div>
                    </div>
                    {isPopoverVisible && (
                        <div className="project-card-back">
                            <div className="project-description">
                                {/* Display predefined description */}
                                {predefinedDescription}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </a>
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
