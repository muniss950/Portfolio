

// import React from 'react';
// import logo from '../logo.svg';
import '../style/App.css';
import ProjectCard from './projectCard.tsx';
import projects from '../assets/projects.json';
import Skills from './skillCard.tsx';

// const myProject: Project = {
//   title: "Cricket Team Selector",
//   description: "A full-stack web app to select cricket teams based on stats.",
//   tech: ["MySQL", "Python", "React"],
//   source:"https://github.com/muniss950/CricketTeamSelector"
// };
function Work() {
  return (
    <div className="flex flex-col gap-5 min-h-[calc(100vh-64px)]">
      <div className="work flex flex-col gap-5">
        <h1 className="font-bold text-5xl text-center">My projects</h1>

        <div className="projects flex flex-wrap gap-5 justify-center justify-items-center">
          {projects.map((myProject) => (
            <ProjectCard project={myProject} />
          ))}
        </div>

      </div>
      <h1 className="font-bold text-5xl text-center">My Skills</h1>
      <Skills />
    </div>

  );
}

export default Work;

