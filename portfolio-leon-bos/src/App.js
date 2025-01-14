import './App.css';
import React, { useState, useEffect } from 'react';

function ExperienceCard({ role, dates, company, responsibilities, technologies }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-600"></div>
      <div className="ml-10 pl-6 pt-6 pb-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold">{role}</h3>
        <p className="text-sm text-gray-400">{dates}</p>
        <p className="mt-4">Company: {company}</p>
        <ul className="mt-2 text-sm">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* Display Technologies */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold">Technologies:</h4>
          <div className="flex space-x-4 mt-2">
            {technologies.map((tech, index) => (
              <img key={index} src={tech} alt="technology icon" className="w-8 h-8 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function updateExperienceCounter() {
  const startDate = new Date('October 1, 2022'); // Starting from October 2022
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;

  // Calculate time difference in years, months, days, and seconds
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
    <div className="experience-counter text-center py-10 flex items-center justify-center space-x-4">
      <h2 className="text-3xl font-semibold">
        {time.years} years, {time.months} months, {time.days} days and {time.seconds} seconds
      </h2>
      <h2 className="text-3xl">experience in software engineering</h2>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#experiences" className="hover:underline">Experiences</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-white text-center py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="bg.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Leon Bos</h2>
          <p className="text-xl">Insert some quote or something here</p>
        </div>
      </section>

      {/* Experience counter */}
      <ExperienceCounter />


      {/* About Section */}
      <section id="about" className="container mx-auto py-10">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-10">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 shadow-md rounded">
            <img className='w-[20%]' alt='.NET' src='dotnet.png' />
            .NET
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <img className='w-[20%]' alt='azure' src='azure.png' />
            Azure
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <img className='w-[20%]' alt='python' src='python.png' />
            Python
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <img className='w-[20%]' alt='python' src='python.png' />
            Python
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-10">
          <ExperienceCard
            role="Junior Software Developer"
            dates="October 2022 - February 2024"
            company="Bencom Group"
            responsibilities={[
              'Worked on a number of price comparison websites',
              'Mainly did backend development with some cloud development in Azure',
            ]}
            technologies={['dotnet.png', 'azure.png']}
          />
          <ExperienceCard
            role="Internship Software Developer"
            dates="February 2023 - June 2023"
            company="Bencom Group"
            responsibilities={[
              'Developed a new "Postcode availability check" for internetten.nl',
              'First experience building a new project in .NET and first experience putting a production application in the cloud with Azure',
            ]}
            technologies={['dotnet.png', 'azure.png']}
          />
          <ExperienceCard
            role="Graduation Internship Data Scientist"
            dates="February 2024 - June 2024"
            company="RDW"
            responsibilities={[
              'Created a Proof of concept of a machine learning model to extract Vehicle Identification Numbers out of pictures',
              'Can be used to automate the process of importing cars to The Netherlands',
              'Helps to save a lot of manual labor, 250.000 cars are imported every year, 3 pictures have to be validated per car',
            ]}
            technologies={['python.png', 'azure.png']}
          />
          <ExperienceCard
            role="Software Engineer"
            dates="September 2024 - Now"
            company="RDW"
            responsibilities={[
              'Started working as a software engineer at RDW in the Young Professional program',
              'Working with team Eucaris, which is a team working on software to make vehicle data exchange possible between European countries',
            ]}
            technologies={['dotnet.png', 'azure.png']}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-10">
        <h3 className="text-3xl font-bold mb-4">Hobby Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 5</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h4 className="text-xl font-bold">Project 6</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt lobortis lobortis. Maecenas volutpat auctor porttitor. Proin tincidunt scelerisque malesuada. Donec ut pulvinar lacus, sed interdum dui. Ut fringilla dignissim bibendum. Nullam ut lacus elementum, efficitur felis at, dictum enim. Aenean quis suscipit mi. Duis in justo tristique risus feugiat aliquam quis id elit. Aliquam arcu elit, aliquam nec nulla sed, volutpat vestibulum nibh. Morbi sed hendrerit sem, eu pulvinar nulla. Praesent nec purus finibus ligula gravida placerat non bibendum nisl. </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-10">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p>If you'd like to get in touch, email me at <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>.</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Leon Bos. All rights reserved.</p>
      </footer>
    </div>
  );


}

export default App;
