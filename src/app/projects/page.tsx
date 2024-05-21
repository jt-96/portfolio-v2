import { projects } from "@/models/projects";
import ProjectComponent from "@/components/project/project.component";

function Projects() {
  return (
    <>
      <h1 className="text-3xl my-10">My Projects</h1>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectComponent key={project.id} myProject={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
