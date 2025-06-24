import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/portfolio"; // Your static or fetched data

export default function Projects() {
  return (
    <div className="projects-container">
      <Header title="Projects" showBackButton />

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-wrapper">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
