// Navbar.tsx

// Import React and NavLink
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

// Define NavbarProps interface
interface NavbarProps {
    links: { label: string; to: string }[];
}

// Define Navbar functional component
const Navbar: React.FC<NavbarProps> = ({ links }) => {
    // Function to scroll to a section
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Navbar JSX
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            onClick={() => {
                                const id = link.to.substring(1);
                                scrollToSection(id);
                            }}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Export Navbar component
export default Navbar;
