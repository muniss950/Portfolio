
import React, { useState } from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  tech: string[];
  source: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 w-72 md:w-80 overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={project.title}
        />
        <div className="p-4 space-y-2">
          <h2 className="font-semibold text-xl text-center">{project.title}</h2>

          <div
            className={`text-sm text-gray-700 text-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            {project.description}
          </div>

          <p className="text-center text-gray-800 text-sm">
            <span className="font-medium">Tech Stack:</span>{" "}
            {project.tech.join(", ")}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
