import { useState } from 'react';
import weatherAppImage from './assets/weather app.png'; 
import youtubeCloneImage from './assets/youtube clone.png';
import calculatorImage from './assets/calculator.png'; 
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
// Main App component for the portfolio website, now with a vertical scroll layout.
const App = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  const portfolioContent = {
    name: "Khushi chaurasiya",
    title: "Aspiring software developer",
    about: "I'm a passionate Software Developer with a strong foundation in React, JavaScript, and HTML, CSS. I enjoy building elegant and efficient web applications and am always eager to learn new technologies to solve complex problems"
      + " and contribute to impactful projects. Let's connect and create something amazing together!",
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
        description: "A dynamic weather application built with JavaScript that fetches real-time weather data from a third-party API. This project demonstrates my ability to handle API requests and manipulate the DOM to display data.",
        image: weatherAppImage,
        link: "#",
      },
      {
        title: "YouTube UI Clone",
        description: "A front-end clone of the YouTube homepage built with HTML and CSS. This project demonstrates my ability to replicate complex user interfaces and create responsive, structured layouts from scratch. It was a hands-on learning experience in modern web design principles.",
        image: youtubeCloneImage,
        link: "#",
      },
      {
        title: "Simple Calculator",
        description: "A functional web-based calculator built using JavaScript, HTML, and CSS. This project focuses on handling user input, performing basic arithmetic operations, and updating the display in real-time.",
        image: calculatorImage,
        link: "#",
    
      },
      {
        title: "Tic-Tac-Toe Game",
        description: "A classic two-player Tic-Tac-Toe game created with JavaScript. The game features a dynamic board, win condition logic, and the ability to reset the game. It highlights my skills in DOM manipulation and logical problem-solving.",
        image: ticTacToeImage,
        link: "#",
      },
    ],

    certifications: [
        {
            title: "Web Development Fundamentals",
            issuer: "Issued by IBM SKILLSBUILD",
            link: "https://www.credly.com/badges/bc31cc3c-1466-4773-a522-f99f6c3ecafd/public_url",
        },
        {
            title: "Cloud Computing Fundamentals",
            issuer: "Issued by IBM",
            link: "https://www.credly.com/badges/dc199aa6-9e4b-4f71-bd50-4e0efc2e464f/public_url",
        },
         {
            title: "Artificial Intelligence Fundamentals",
            issuer: "Issued by IBM SKILLSBUILD",
            link: "https://www.credly.com/badges/af9e867b-8ddd-4105-8936-2fb1b70d3c65/public_url",
        },
    ],
    contact: {
      email: "khushichaurasiya30@gmail.com",
      phone: "+918827577465",
      linkedin: "https://www.linkedin.com/in/khushi-chaurasiya-/",
      github: "https://github.com/KhushiHub08",
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-purple-500">
            {portfolioContent.name}
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Home</a>
            <a href="#about" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">About</a>
            <a href="#skills" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Projects</a>
                        <a href="#certifications" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Certifications</a>
            <a href="#contact" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Contact</a>
          </div>
          {/* Mobile menu button */}
         <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Conditionally render the hamburger or close icon */}
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
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col items-center space-y-4 py-4 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
            <a href="#home" onClick={handleLinkClick} className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Home</a>
            <a href="#about" onClick={handleLinkClick} className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">About</a>
            <a href="#skills" onClick={handleLinkClick} className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Skills</a>
            <a href="#projects" onClick={handleLinkClick} className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Projects</a>
            <a href="#contact" onClick={handleLinkClick} className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>


      {/* Main Content Sections */}
      <main className="pt-24 pb-12 space-y-24">

        {/* Home Section */}
        <section id="home" className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-screen">
          {/* 2. Add a div for the image with some spacing */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
            {/* 3. Insert the image tag. You can customize the styling. */}
            <img 
              src={photoImage} 
              alt="Khushi's profile" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-purple-500 animate-fade-in"
            />
          </div>
          <div className="text-center md:text-left text-gray-300">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
              {portfolioContent.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-delay-1">
              {portfolioContent.title}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-delay-2">
              <a href={portfolioContent.contact.linkedin} className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.353 7 3.256v5.979h.001z" />
                </svg>
              </a>
              <a href={portfolioContent.contact.github} className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.266.82-.596v-2.183c-3.338.724-4.04-1.611-4.04-1.611-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.836 2.809 1.305 3.49-1.05.108-.822.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.399 1.021 0 2.047.133 3.004.399 2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.875.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.802 5.626-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .33.217.701.823.585 4.768-1.587 8.205-6.085 8.205-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {portfolioContent.about}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            {(Object.keys(portfolioContent.skills) as Array<keyof typeof portfolioContent.skills>).map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-xl font-semibold capitalize mb-2">{category}</h3>
                <div className="flex flex-wrap gap-4">
                  {portfolioContent.skills[category].map(skill => (
                    <div key={skill.name} className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-200 text-sm rounded-full">
                      <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioContent.projects.map(project => (
                <div key={project.title} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={project.image} alt={project.title} className="rounded-lg mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                  <a href={project.link} className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300">
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioContent.certifications.map((cert) => (
                <div key={cert.title} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">Issuer: {cert.issuer}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    View Certificate →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-400">
              I'm always open to new opportunities; let's connect to discuss how I can contribute to your team.
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-semibold text-white">Email:</span> {portfolioContent.contact.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Phone:</span> {portfolioContent.contact.phone}
              </p>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {portfolioContent.name}. All rights reserved.
      </footer>
    </div>
  );
};

export default App;