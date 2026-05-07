"use client";
import { motion } from "framer-motion";
import { variants } from "@/models/anim";
import { works } from "@/models/work";

function Experience() {
  return (
    <>
      <div>
        <h1 className="text-3xl my-10 text-center">Experience</h1>
        {works.map((workItem, index) => (
          <motion.div
            initial={variants.start}
            whileInView={variants.onView}
            transition={variants.showPara.transition}
            key={index}
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-b-0 border-slate-700 m-5 px-8 py-4 2xl:my-5">
              <div className="flex flex-col justify-between align-center items-center my-2 md:flex-row">
                <h1 className="text-2xl">{workItem.companyName}</h1>
                <h2 className="text-sm md:text-xl">
                  {workItem.companyType} - {workItem.location}
                </h2>
              </div>
              <div className="flex flex-col justify-between align-center items-center md:flex-row">
                <h3 className="text-sm text-nowrap md:text-xl text-wrap">
                  {workItem.jobRole} - {workItem.contractType}
                </h3>
                <h3 className="text-sm md:text-xl">
                  {workItem.startTime} - {workItem.endTime}
                </h3>
              </div>
              <div className="flex flex-col my-3 mx-5">
                <ul className="text-xl marker:text-slate-500 sm:text-lg">
                  {workItem.tasks.map((taskItem, index) => (
                    <li key={index} className="list-disc my-2 text-base">{taskItem.task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Experience;
