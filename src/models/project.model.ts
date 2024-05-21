import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  siteLink: string | null;
  repoLink: string | null;
  year: number;
}
