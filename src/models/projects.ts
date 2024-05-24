import { Project } from "./project.model";
import digitalAgencyImage from "@/assets/img/digitalAgency.png";
import keeperAppImage from "@/assets/img/keeperApp.png";
import todoListImage from "@/assets/img/toDoListApp.png";
import mbotImage from "@/assets/img/m-bot.png";
import km12Image from "@/assets/img/km12.png";

export const projects: Project[] = [
  {
    id: 0,
    imageSrc: km12Image,
    title: "Kilometro 12 - Market",
    description:
      "E-commerce for fruits and vegetables, including account creation, cart functionality, multiple filtering for available products, several payment methods, like Mercado Pago, admin control for orders, etc.",
    siteLink: "https://km12-develop.netlify.app/",
    repoLink: null,
    year: 2024,
  },
  {
    id: 1,
    imageSrc: mbotImage,
    title: "M-Bot",
    description:
      "A simple bot for personal use, can play music, add Youtube links or query them, add playlists, skip, shuffle songs and change volume, for Discord.",
    siteLink: null,
    repoLink: "https://github.com/jt-96/m-bot",
    year: 2023,
  },
  {
    id: 2,
    imageSrc: todoListImage,
    title: "ToDo List App",
    description:
      "Web app for a ToDo List, allowing you to add and delete chores, saving them in an instance of MongoDB Cloud.",
    siteLink: "https://todolistapp-oz6u.onrender.com/",
    repoLink: "https://github.com/jt-96/ToDoListApp",
    year: 2022,
  },
  {
    id: 3,
    imageSrc: keeperAppImage,
    title: "Keeper App",
    description:
      "Save your notes in KeeperApp, you can add and delete entries easily, loosely based on Google Keep.",
    siteLink: "https://jt-96.github.io/keeperApp/",
    repoLink: "https://github.com/jt-96/keeperApp",
    year: 2022,
  },
  {
    id: 4,
    imageSrc: digitalAgencyImage,
    title: "Digital Agency",
    description: "Mockup page about a digital agency made in Bootstrap.",
    siteLink: "https://jt-96.github.io/digitalAgency-Mockup",
    repoLink: "https://github.com/jt-96/digitalAgency-Mockup",
    year: 2022,
  },
];
