import '../style/App.css';
import ProjectCard from './projectCard.tsx';
import projects from '../assets/projects.json';
import Skills from './skillCard.tsx';

function Work() {
  return (
    <div className="flex flex-col gap-10 min-h-[calc(100vh-64px)] px-4 py-10">
      {/* Projects Section */}
      <section className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl text-center">My Projects</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((myProject) => (
            <ProjectCard key={myProject.title} project={myProject} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl text-center">My Skills</h1>
        <Skills />
      </section>
    </div>
  );
}

export default Work;
