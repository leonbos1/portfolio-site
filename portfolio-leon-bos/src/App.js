import './App.css';
import React, { useState, useEffect } from 'react';

function ExperienceCard({ role, dates, company, description, technologies, grade }) {
  return (
    <div className="relative">
      <div className="p-10 text-black rounded-2xl shadow-2xl">
        <h3 className="text-xl md:text-2xl font-semibold">{role}</h3>
        <p className="text-sm md:text-base text-gray-800">{dates}</p>
        <p className="text-sm md:text-base mt-4 font-bold">Company: {company}</p>
        {grade &&
          <p className="text-sm md:text-base mb-2 font-bold">Grade: {grade}</p>
        }
        <p className='text-sm md:text-base'> {description} </p>
        {/* Display Technologies */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold">Technologies:</h4>
          <div className="flex space-x-4 mt-2">
            {technologies.map((tech, index) => (
              <div key={index} className="relative group w-16 h-16">
                <img
                  src={tech.image}
                  alt="technology icon"
                  className="w-full h-full object-contain"
                />
                <span className="absolute bottom-0 left-0 w-full text-center text-xs bg-gray-900 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsCard({ skill, imagePath }) {
  return (
    <div className="bg-white p-6 shadow-2xl rounded-2xl flex flex-col items-center text-center">
      <img className="w-16 h-16 mb-4" alt={skill} src={imagePath} />
      <p className="text-lg font-semibold text-gray-800 mt-6">{skill}</p>
    </div>
  );
}

function ProjectCard({ name, description, githubUrl }) {
  return (
    <div className='bg-white p-6 shadow-2xl rounded-2xl relative pb-16'>
      <h4 className='text-xl font-bold'>{name}</h4>
      <p>{description}</p>
      <a
        href={githubUrl}
        className='absolute bottom-4 right-4'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='w-10' src='github.png' alt='GitHub Link' />
      </a>
    </div>
  );
}

function updateExperienceCounter() {
  const startDate = new Date('October 1, 2022');
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;

  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30;
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return { years, months, days, seconds };
}

function ExperienceCounter() {
  const [time, setTime] = useState(updateExperienceCounter());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateExperienceCounter());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="experience-counter text-center py-10 flex flex-wrap md:flex-nowrap items-center justify-center space-x-4 shadow-md bg-white rounded-2xl mx-auto">
      <h2 className="text-xl md:text-3xl font-semibold">
        {time.years} years, {time.months} months, {time.days} days and {time.seconds} seconds
      </h2>
      <h2 className="text-xl md:text-3xl">experience in software engineering</h2>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Leon Bos</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        {isMenuOpen &&
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
              </li>
              <li>
                <a href="#experiences" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experiences</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white text-center py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Leon Bos</h2>
          <p className="text-xl">Software Engineer</p>
        </div>
      </section>

      {/* Experience counter */}
      <ExperienceCounter />

      {/* About Section */}
      <section id="about" className="container mx-auto p-10">
        <div className='bg-white p-6 shadow-2xl rounded-2xl relative pb-16'>
          <h3 className="text-xl md:text-3xl font-bold mb-6">About Me</h3>
          <div className="text-sm md:text-base leading-relaxed">
            <p>
              Hello, I'm <strong>Leon Bos</strong>, a 23-year-old software engineer based in Delfzijl, the Netherlands. I hold a bachelor's degree in ICT Software Engineering from Hanze University of Applied Sciences, Groningen. Currently, I work as a <strong>Young Professional Software Engineer</strong> at <strong>RDW</strong>, contributing to the EUCARIS service team.
            </p>
            <p className="mt-4">
              At EUCARIS, I work as part of a dedicated team developing and maintaining software systems that enable seamless vehicle data exchange between European countries. My responsibilities include implementing, and optimizing solutions using technologies such as <strong>.NET</strong>, <strong>Azure</strong>, and <strong>Entity Framework</strong>. I collaborate closely with stakeholders to ensure compliance with international standards and to support secure and efficient data sharing for cross-border vehicle registration, taxation, and law enforcement purposes.
            </p>
            <p className="mt-4">
              Outside of work, I enjoy working on hobby software projects and am passionate about fitness and powerlifting. I'm a <strong>curious</strong> and <strong>disciplined</strong> individual who constantly strives for self-improvement. I thrive in collaborative environments and pride myself on being a <strong>team player</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto p-10">
        <div className='bg-white p-6 relative pb-16'>
          <h3 className="text-xl md:text-3xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <SkillsCard skill=".NET" imagePath="dotnet.png" />
            <SkillsCard skill="Azure" imagePath="azure.png" />
            <SkillsCard skill="Python" imagePath="python.png" />
            <SkillsCard skill="React" imagePath="react.png" />
            <SkillsCard skill="Scrum" imagePath="scrum.png" />
            <SkillsCard skill="Vue" imagePath="vue.png" />
            <SkillsCard skill="Blazor" imagePath="blazor.png" />
            <SkillsCard skill="SQL Server" imagePath="sql.png" />
            <SkillsCard skill="Docker" imagePath="docker.png" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="container mx-auto p-10">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-10">
          <ExperienceCard
            role="Junior Software Developer"
            dates="October 2022 - February 2024"
            company="Bencom Group"
            description={[
              'Worked on several price comparison websites, focusing primarily on backend development. Contributed to cloud infrastructure and solutions using Azure, ensuring scalability and efficiency across multiple projects.',
            ]}
            technologies={[
              {
                'image': 'python.png',
                'description': 'Python'
              },
              {
                'image': 'dotnet.png',
                'description': '.NET'
              },
              {
                'image': 'azure.png',
                'description': 'Azure'
              },
              {
                'image': 'ef.png',
                'description': 'Entity Framework'
              }
            ]}
          />
          <ExperienceCard
            role="Internship Software Developer"
            dates="February 2023 - June 2023"
            company="Bencom Group"
            grade="9.0/10"
            description={[
              'Designed and implemented a "Postcode Availability Check" feature for internetten.nl. This project marked my first experience developing a new application in .NET and deploying a production-ready solution in the cloud using Azure.',
            ]}
            technologies={[
              {
                'image': 'dotnet.png',
                'description': '.NET'
              },
              {
                'image': 'azure.png',
                'description': 'Azure'
              },
              {
                'image': 'ef.png',
                'description': 'Entity Framework'
              }
            ]}
          />
          <ExperienceCard
            role="Graduation Internship Data Scientist"
            dates="February 2024 - June 2024"
            company="RDW"
            grade="9.0/10"
            description={[
              'Developed a proof of concept for a machine learning model to extract Vehicle Identification Numbers (VINs) from images. This automation can streamline the importation process of vehicles into The Netherlands, reducing the need for manual validation of approximately 750,000 images annually.',
            ]}
            technologies={[
              {
                'image': 'python.png',
                'description': 'Python'
              },
              {
                'image': 'azure.png',
                'description': 'Azure'
              },
              {
                'image': 'pytorch.png',
                'description': 'PyTorch'
              },
              {
                'image': 'yolo.svg',
                'description': 'YOLO, You Only Look Once'
              }
            ]}
          />
          <ExperienceCard
            role="Software Engineer"
            dates="September 2024 - Now"
            company="RDW"
            description={[
              'Joined RDW as part of the Young Professional program. Collaborating with the Eucaris team, I develop software solutions that enable secure and efficient vehicle data exchange between European countries.',
            ]}
            technologies={[
              {
                'image': 'dotnet.png',
                'description': '.NET'
              },
              {
                'image': 'azure.png',
                'description': 'Azure'
              }
            ]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto p-10">
        <h3 className="text-xl md:text-3xl font-bold mb-4">Hobby Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard githubUrl="https://github.com/leonbos1/gainz-workout-app" name="Workout App" description="A fitness tracking app developed in React Native to monitor and enhance personal fitness progress. This project involved mastering app development and gaining hands-on experience with database integration to store and retrieve workout data efficiently." />
          <ProjectCard githubUrl="https://github.com/leonbos1/occasion-scraper" name="Occassion Scraper" description="A web scraping application designed to monitor car selling websites at regular intervals and send results via email. Features include a frontend and backend for visualizing, filtering, and managing car listings. Users can create and subscribe to blueprints, custom filters that notify them of specific car listings when they become available. Developed using Selenium, Vue.js, and Flask." />
          <ProjectCard githubUrl="https://github.com/leonbos1/temperature" name="Home Temperature sensor" description="A web application for visualizing home temperature data in real time. Built with Vue.js and an ESP32 microcontroller running MicroPython to collect and transmit temperature readings." />
          <ProjectCard githubUrl="https://github.com/leonbos1/facial_recognition" name="Smart Home Facial Recognition" description="An integration for Home Assistant that utilizes facial recognition to trigger smart device actions. The system communicates using MQTT, enabling seamless automation and personalization in a smart home environment." />
          <ProjectCard githubUrl="https://github.com/leonbos1/word-prediction" name="ML Handwritten Word Reader" description="A machine learning project to recognize handwritten text, developed as a precursor to a graduation internship at RDW. The solution employs a neural network to accurately identify and read handwritten words, showcasing foundational knowledge in ML development." />
          <ProjectCard githubUrl="https://github.com/leonbos1/occasion-price-prediction" name="ML Car Price Prediction" description="A linear regression model created to predict the prices of second-hand cars. This project demonstrated practical skills in machine learning and statistical analysis for real-world applications." />
          <ProjectCard githubUrl="https://github.com/leonbos1/flask-car-auction" name="Car Auction Website" description="A platform for auctioning cars, built using Flask. The website supports features for listing, bidding, and managing car auctions, emphasizing backend development and user interaction." />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-10">
        <div className='bg-white p-6 shadow-2xl rounded-2xl relative pb-16'>
          <h3 className="text-xl md:text-3xl font-bold mb-6">Contact Me</h3>
          <p className="mb-6">Feel free to reach out to me through email or connect with me on LinkedIn!</p>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Email */}
            <a
              href="mailto:bos.leon2001@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="email.png" alt="Email" className="w-8 h-8" />
              <span className="text-base md:text-lg font-medium">bos.leon2001@gmail.com</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leon-bos-0888a7215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <img src="linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              <span className="text-base md:text-lg font-medium">Leon Bos</span>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Leon Bos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
