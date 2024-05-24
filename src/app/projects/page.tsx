"use client";
import { motion } from "framer-motion";
import { projects } from "@/models/projects";
import { variants } from "@/models/anim";
import ProjectComponent from "@/components/project/project.component";

function Projects() {
  return (
    <>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
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
