import { WorkExperience } from "./work.model";

export const works: WorkExperience[] = [
  {
    companyName: "WAYPOINT",
    companyType: "Gaming Industry",
    location: "United States",
    jobRole: "Web Developer",
    contractType: "Contractor",
    startTime: "September 2024",
    endTime: "February 2025",
    tasks: [
      {
        id: 0,
        task: "Worked alongside CEO and Production Assistant to update the homepage to Webflow.",
      },
      {
        id: 1,
        task: "Ported all data to Webflow CMS, improved general site performance and polished look and feel, as well as usability.",
      },
      {
        id: 2,
        task: "Create a new homepage for the E-Commerce Team, following specifications delivered from the Area Leader in complete detail.",
      },
    ],
  },
  {
    companyName: "Vivvidero",
    companyType: "Prop Tech StartUp",
    location: "Colombia",
    jobRole: "Full Stack Developer",
    contractType: "Contractor",
    startTime: "May 2022",
    endTime: "July 2023",
    tasks: [
      {
        id: 0,
        task: "Developed Cotibot, a quotation engine web app for home renovations and lead generation.",
      },
      {
        id: 1,
        task: "Developed several intra-company tools for process optimizations (data exporting, scrappers, renovation management system).",
      },
      {
        id: 2,
        task: "Assigned with administrative tasks for project management, reporting projects and ticket status, supporting other members of the tech team.",
      },
    ],
  },
];
