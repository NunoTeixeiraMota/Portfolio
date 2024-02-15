import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './navbar';

function App() {
    const links = [
        { label: 'Home', to: '#home' },
        { label: 'Experience', to: '#about' },
        { label: 'Projects', to: '#projects' },
        { label: 'Contact', to: '#contact' }
    ];


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
            <Navbar links={links}/>
            <div className="page-content">
                <div id="home"><Home /></div>
                <div id="about"><About /></div>
                <div id="projects"><Projects /></div>
                <div id="contact"><Contact /></div>

            </div>
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
                    <div className="interactive"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
