
import { useState } from 'react';
// Assuming all image imports are correct based on the original code
import weatherAppImage from './assets/weather app.png';
import youtubeCloneImage from './assets/youtube clone.png';
import calculatorImage from './assets/image.png';
import ticTacToeImage from './assets/tic tac toe.png';
import photoImage from './assets/photo 1.jpg';

// add skill images
import reactLogo from './assets/react-logo.svg';
import tailwindLogo from './assets/tailwind css.png';
import jsLogo from './assets/javascript-logo.svg';
import htmlLogo from './assets/HTML5_logo.png';
import cssLogo from './assets/css-3.svg';
import gitLogo from './assets/git.png';
import vsCodeLogo from './assets/vs logo.png';
//add soft skill images

import problemSolvingLogo from './assets/problem solving.webp';
import teamworkLogo from './assets/teamwork.jpg';
import communicationLogo from './assets/communication.jpg';
import adapatibilityLogo from './assets/adaptability_skills.webp';
import timeManagementLogo from './assets/time-management.jpg';

// --- Reusable Component for Stylish Section Headers ---

const SectionHeader = ({ title }: { title: string }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white inline-block border-b-4 border-purple-500 pb-2">
                {title}
            </h2>
        </div>
    );
};


// Main App component for the portfolio website.
const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };


    const portfolioContent = {
        name: "Khushi Chaurasiya", 
        title: "Aspiring Software Developer", 
        about: "I'm a passionate **Software Developer** with a strong foundation in **React, JavaScript, HTML, and CSS**. I enjoy building elegant and efficient web applications and am always eager to learn new technologies to solve complex problems and contribute to impactful projects. My focus is on creating seamless and responsive user experiences. Let's connect and create something amazing together! ✨", 
        skills: {
            frontend: [
                { name: "React.js", logo: reactLogo },
                { name: "Tailwind CSS", logo: tailwindLogo },
                { name: "JavaScript", logo: jsLogo },
                { name: "HTML", logo: htmlLogo },
                { name: "CSS", logo: cssLogo }
            ],
            tools: [
                { name: "Git", logo: gitLogo },
                { name: "VS Code", logo: vsCodeLogo }
            ],
            softskills: [
                { name: "Problem Solving", logo: problemSolvingLogo },
                { name: "Teamwork", logo: teamworkLogo },
                { name: "Communication", logo: communicationLogo },
                { name: "Adaptability", logo: adapatibilityLogo },
                { name: "Time Management", logo: timeManagementLogo }
            ],
        },
        projects: [
            {
                title: "Weather App",
                description: "A dynamic weather application built with JavaScript that fetches real-time weather data from a third-party API. Demonstrates API handling, asynchronous programming, and DOM manipulation for data display.",
                image: weatherAppImage,
                link: "#",
                tech: ["JavaScript", "API", "CSS"], 
            },
            {
                title: "YouTube UI Clone",
                description: "A responsive front-end clone of the YouTube homepage built with pure HTML and CSS. Highlights my ability to replicate complex UIs and create structured, responsive layouts from scratch.",
                image: youtubeCloneImage,
                link: "#",
                tech: ["HTML", "CSS", "Responsive Design"],
            },
            {
                title: "Simple Calculator",
                description: "A fully functional web-based calculator using JavaScript. Project focuses on user input handling, arithmetic logic, and real-time display updates.",
                image: calculatorImage,
                link: "#",
                tech: ["JavaScript", "DOM", "Logic"],
            },
            {
                title: "Tic-Tac-Toe Game",
                description: "A classic two-player game created with JavaScript, featuring dynamic board state, win condition logic, and game reset functionality.",
                image: ticTacToeImage,
                link: "#",
                tech: ["JavaScript", "Game Logic", "DOM"],
            },
        ],

        certifications: [
            {
                title: "Web Development Fundamentals",
                issuer: "IBM SKILLSBUILD",
                link: "https://www.credly.com/badges/bc31cc3c-1466-4773-a522-f99f6c3ecafd/public_url",
            },
            {
                title: "Cloud Computing Fundamentals",
                issuer: "IBM",
                link: "https://www.credly.com/badges/dc199aa6-9e4b-4f71-bd50-4e0efc2e464f/public_url",
            },
            {
                title: "Artificial Intelligence Fundamentals",
                issuer: "IBM SKILLSBUILD",
                link: "https://www.credly.com/badges/af9e867b-8ddd-4105-8936-2fb1b70d3c65/public_url",
            },
        ],
        contact: {
            email: "khushichaurasiya30@gmail.com",
            phone: "+91 8827577465", 
            linkedin: "https://www.linkedin.com/in/khushi-chaurasiya-/",
            github: "https://github.com/KhushiHub08",
        },
    };

    return (
        <div className="bg-gray-950 text-white min-h-screen font-sans">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-95 backdrop-blur-md z-50 shadow-xl shadow-gray-900/50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-extrabold text-purple-400 hover:text-teal-400 transition-colors duration-300">
                        {portfolioContent.name.split(' ')[0]}<span className='text-teal-400 hover:text-purple-400'>.Dev</span>
                    </a>
                    <div className="hidden md:flex space-x-6">
                        {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((link) => (
                             <a 
                                key={link}
                                href={`#${link}`} 
                                className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300 capitalize relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-purple-400 before:hover:scale-x-100 before:scale-x-0 before:transition before:duration-300 before:origin-left"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none p-2 rounded-lg bg-gray-800 hover:bg-purple-500 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu dropdown */}
                <div className={`md:hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 ease-in-out overflow-hidden`}>
                    <div className="flex flex-col items-center space-y-4 py-4 bg-gray-900 shadow-inner">
                        {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((link) => (
                            <a 
                                key={`mobile-${link}`} 
                                href={`#${link}`} 
                                onClick={handleLinkClick} 
                                className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300 capitalize w-full text-center py-1"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>


            {/* Main Content Sections */}
            <main className="pt-24 pb-12 space-y-36">

                {/* Home Section */}
                <section id="home" className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[90vh]">
                    <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-16 animate-bounce-slow"> 
                        <img 
                            src={photoImage} 
                            alt="Khushi's profile" 
                            className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-3xl border-4 border-teal-400 ring-4 ring-purple-500/50 hover:ring-purple-500 transition-all duration-500" 
                        />
                    </div>
                    <div className="text-center md:text-left text-gray-300 max-w-xl">
                        <p className='text-lg text-teal-400 font-semibold mb-2'>Hello, I'm</p>
                        <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight">
                            <span className="text-white">{portfolioContent.name.split(' ')[0]}</span> <span className="text-purple-400">{portfolioContent.name.split(' ')[1]}</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-light text-gray-400 mb-8">
                            {portfolioContent.title}
                        </p>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href={portfolioContent.contact.linkedin} target='_blank' rel='noopener noreferrer' className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.353 7 3.256v5.979h.001z" />
                                </svg>
                            </a>
                            <a href={portfolioContent.contact.github} target='_blank' rel='noopener noreferrer' className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.266.82-.596v-2.183c-3.338.724-4.04-1.611-4.04-1.611-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.836 2.809 1.305 3.49-1.05.108-.822.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.399 1.021 0 2.047.133 3.004.399 2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.875.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.802 5.626-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .33.217.701.823.585 4.768-1.587 8.205-6.085 8.205-11.385 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="container mx-auto px-4">
                    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 animate-fade-up">
                        <SectionHeader title="About Me" />
                        <div className='bg-gray-800 rounded-xl shadow-2xl p-6 border-l-4 border-teal-400'>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {portfolioContent.about.split(' ').map((word, index) => (
                                    <span key={index} className={word.includes('**') ? 'font-semibold text-purple-400' : ''}>
                                        {word.replace(/\*\*/g, '')}{' '}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="container mx-auto px-4">
                    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 animate-fade-up">
                        <SectionHeader title="My Skills" />
                        <div className='bg-gray-800 rounded-xl shadow-2xl p-6'>
                            {(Object.keys(portfolioContent.skills) as Array<keyof typeof portfolioContent.skills>).map(category => (
                                <div key={category} className="mb-8 last:mb-0">
                                    <h3 className="text-2xl font-bold capitalize mb-4 text-teal-400 border-b border-gray-700 pb-1">{category}</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {portfolioContent.skills[category].map(skill => (
                                            <div key={skill.name} className="flex items-center space-x-2 px-5 py-2 bg-gray-700 text-gray-200 text-base font-medium rounded-lg shadow-md border-b-2 border-purple-500 hover:bg-gray-600 transition-colors duration-200 transform hover:scale-[1.05]">
                                                <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 object-contain" />
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="container mx-auto px-4">
                    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 animate-fade-up">
                        <SectionHeader title="My Projects" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {portfolioContent.projects.map(project => (
                                <div key={project.title} className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-purple-500/20">
                                    <img src={project.image} alt={project.title} className="rounded-lg mb-4 h-48 w-full object-cover border border-gray-600"/>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="text-xs font-medium px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-base text-gray-400 mb-4">{project.description}</p>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer' className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                        View Project →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="container mx-auto px-4">
                    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 animate-fade-up">
                        <SectionHeader title="Certifications" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {portfolioContent.certifications.map((cert) => (
                                <div key={cert.title} className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-teal-500 hover:shadow-teal-500/20 transition-shadow duration-300">
                                    <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">Issued by: <span className='font-semibold text-gray-300'>{cert.issuer}</span></p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 flex items-center">
                                        View Certificate
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-10l-4 4m0 0l-4-4m4 4V3" /></svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Contact Section */}
                <section id="contact" className="container mx-auto px-4 pb-20">
                    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 animate-fade-up">
                        <SectionHeader title="Get in Touch" />
                        <div className='text-center'>
                            <p className="text-xl text-gray-300 mb-8">
                                I'm always open to new opportunities. Let's connect to discuss how I can contribute to your team or project!
                            </p>
                            <div className="space-y-4 max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-2xl border-2 border-purple-500/50">
                                <div className='flex items-center justify-center space-x-3'>
                                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                                    <p className="text-lg text-white font-semibold">
                                        <a href={`mailto:${portfolioContent.contact.email}`} className='hover:text-teal-400 transition-colors'>{portfolioContent.contact.email}</a>
                                    </p>
                                </div>
                                <div className='flex items-center justify-center space-x-3'>
                                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.741 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.741a1 1 0 01.836.986V17a1 1 0 01-1 1h-12A7 7 0 012 5V3z"/></svg>
                                    <p className="text-lg text-white font-semibold">
                                        <a href={`tel:${portfolioContent.contact.phone}`} className='hover:text-teal-400 transition-colors'>{portfolioContent.contact.phone}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="w-full py-6 text-center text-gray-400 text-sm border-t border-gray-800">
                &copy; {new Date().getFullYear()} {portfolioContent.name}. Built with <span className='text-purple-400'>React</span> & <span className='text-teal-400'>Tailwind CSS</span>.
            </footer>
        </div>
    );
};

export default App;