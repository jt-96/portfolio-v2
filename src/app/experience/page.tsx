"use client";
import { motion } from "framer-motion";
import { variants } from "@/models/anim";

function Experience() {
  return (
    <>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <h1 className="text-3xl my-10 text-center">Experience</h1>
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-b-0 border-slate-700 mx-5 p-2 md:m-10 2xl:px-8 2xl:py-4 2xl:my-5">
          <div className="flex flex-col justify-between align-center items-center my-2 md:flex-row md:mx-5">
            <h1 className="text-3xl">WAYPOINT</h1>
            <h2 className="text-lg lg:text-2xl">
              Gaming Industry - United States
            </h2>
          </div>
          <div className="flex flex-row mx-5 justify-between align-center items-center md:flex-row md:mx-5">
            <h3 className="text-md lg:text-2xl">Frontend Developer - Contractor</h3>
            <h3 className="text-md lg:text-2xl">September 2024 - February 2025</h3>
          </div>
          <div className="flex flex-col justify-center items-center align-center my-3 mx-5">
            <ul className="text-xl marker:text-slate-500">
              <li className="list-disc my-2">
                Worked alongside CEO and Production Assistant to update the homepage to Webflow
              </li>
              <li className="list-disc my-2">
                Ported all data to Webflow CMS, improved general site performance and polished look and feel, as well as usability.
              </li>
              <li className="list-disc my-2">
                Create a new homepage for the E-Commerce Team, following specifications delivered from the Area Leader in complete detail.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-b-0 border-slate-700 mx-5 p-2 md:m-10 2xl:px-8 2xl:py-4 2xl:my-5">
          <div className="flex flex-col justify-between align-center items-center my-2 md:flex-row md:mx-5">
            <h1 className="text-3xl">Vivvidero</h1>
            <h2 className="text-lg lg:text-2xl">
              Prop Tech StartUp - Colombia
            </h2>
          </div>
          <div className="flex flex-row mx-5 justify-between align-center items-center md:flex-row md:mx-5">
            <h3 className="text-md lg:text-2xl">Full Stack Developer - Contractor</h3>
            <h3 className="text-md lg:text-2xl">May 2022 - July 2023</h3>
          </div>
          <div className="flex flex-col justify-center items-center align-center my-3 mx-5">
            <ul className="text-xl marker:text-slate-500">
              <li className="list-disc my-2">
                Development of Cotibot, a quotation engine web app for home
                renovations.
              </li>
              <li className="list-disc my-2">
                Development of several intra-company tools for process
                optimizations (data exporting, scrappers, renovation
                management).
              </li>
              <li className="list-disc my-2">
                Assigned with administrative tasks for project management,
                reporting tickets status, supporting other members of the tech
                team.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experience;
