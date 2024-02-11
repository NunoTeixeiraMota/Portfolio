import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import About from './pages/About'; // Import your About component
import Projects from './pages/Projects'; // Import your Services component
import Contact from './pages/Contact'; // Import your Contact component
import Home from './pages/Home'; // Import your Home component
import logo from './assets/logo.png'; // Import your logo directly

function App() {
    // Define your menu links, logo
    const links = [
        { label: 'Home', to: '/'},
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Contact', to: '/contact' }
    ];
    
    // Get the current location using useLocation hook
    const location = useLocation();
    
    // State to store the active link
    const [activeLink, setActiveLink] = useState(location.pathname);
    
    // Update active link when location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            
            {/* Bubbles */}
            <div className="text-container">
            <Navbar links={links} logo={logo} activeLink={activeLink} />
            {/* Add your routes */}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
            </Routes>
            </div>
            {/* Gradients container */}
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    {/* Interactive */}
                    <div className="interactive"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
