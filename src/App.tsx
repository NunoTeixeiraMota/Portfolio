import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import About from './pages/About'; // Import your About component
import Projects from './pages/Projects'; // Import your Services component
import Contact from './pages/Contact'; // Import your Contact component
import Home from './pages/Home'; // Import your Home component

function App() {
    // Define your menu links, logo
    const links = [
        { label: 'Home', to: '/'},
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Contact', to: '/contact' }
    ];
    const logo = '../src/assets/logo.png';
    
    // Get the current location using useLocation hook
    const location = useLocation();
    
    // State to store the active link
    const [activeLink, setActiveLink] = useState(location.pathname);
    
    // Update active link when location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    
    return (
        <div className="App">
            <Navbar links={links} logo={logo} activeLink={activeLink} />
            {/* Add your routes */}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
