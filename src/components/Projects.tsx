import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  // imageUrl: string;
  // projectUrl: string;
}

const projects: Project[] = [
  {
    title: "Uber-like Ride-Hailing App",
    description: "Developed a ride-hailing application similar to Uber for both mobile (React Native) and web (React). The backend was built using Node.js with Express and MongoDB.",
    technologies: ["React Native", "React", "Node.js", "Express", "MongoDB"]
  },
];
// imageUrl: "/uber-app.jpg"
// projectUrl: "https://github.com/yourusername/uber-like-app",
// Add more project objects as needed

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {/* <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg" /> */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Technologies:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                // href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
