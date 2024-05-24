import { motion } from "framer-motion";
import { projects } from "@/models/projects";
import ProjectComponent from "@/components/project/project.component";

function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-3xl my-10">My Projects</h1>
      </motion.div>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectComponent key={project.id} myProject={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
