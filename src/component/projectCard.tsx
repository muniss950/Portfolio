
import React from 'react';
// import logo from '../logo.svg';
import '../style/App.css';
import { useState } from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  tech: string[];
  source: string;
}
// const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <a href={project.source} className="block">
//       <div className="project-card bg-white border border-gray-200 rounded-lg shadow-sm w-90 h-100 hover:shadow-xl" onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}>
//         <img className="overflow-hidden" src={project.image} />
//         <div className="project-info">
//           <h2 className="font-sans font-bold text-center text-2xl">{project.title}</h2>
//           <div className="project-desc">
//           {isHovered && <p className="font-sans text text-center">{project.description}</p>}
//
//             <p className="text-xl text-center"><strong>Tech Stack:</strong> {project.tech.join(', ')}</p>
//           </div>
//         </div>
//       </div>
//     </a>
//
//   );
// }

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={project.source} className="block">
      <div
        className="project-card bg-white border border-gray-200 rounded-lg shadow-sm w-90 h-100 hover:shadow-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image fully fills the card with rounded edges */}
        <img className="w-full h-48 object-cover rounded-t-lg" src={project.image} alt={project.title} />

        <div className="project-info p-4">
          <h2 className="font-sans font-bold text-center text-2xl">{project.title}</h2>
          <div className="project-desc">
            {isHovered && <p className="font-sans text text-center">{project.description}</p>}
            <p className="text-xl text-center"><strong>Tech Stack:</strong> {project.tech.join(', ')}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
