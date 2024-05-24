import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project.model";
import { variants } from "@/models/anim";
import SiteIcon from "@/assets/site.svg";
import GitHubIcon from "@/assets/github.svg";

type Props = {
  myProject: Project;
};

function ProjectComponent({ myProject }: Props) {
  return (
    <motion.div
      initial={variants.start}
      whileInView={variants.onView}
      transition={variants.showPara.transition}
    >
      <div className="my-2 mx-5 lg:flex justify-center">
        <div className="flex justify-center items-center align-center p-5 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
          <Image src={myProject.imageSrc} alt="Kilometro 12 Landing Page" />
        </div>
        <div className="flex flex-col mt-5 justify-center items-center lg:w-1/2 xl:w-1/3 2xl:w-1/4 md:justify-between">
          <h2 className="text-2xl mb-5">{myProject.title}</h2>
          <p className="text-xl text-center lg:text-left">
            {myProject.description}
          </p>
          <div className="flex flex-row justify-between items-center py-5 px-5 w-full lg:px-0">
            <div className="flex">
              {myProject.siteLink ? (
                <Link href={myProject.siteLink}>
                  <Image
                    src={SiteIcon}
                    alt="Visit Site Icon"
                    width={32}
                    height={32}
                    className={myProject.repoLink ? "mr-2" : ""}
                  />
                </Link>
              ) : null}

              {myProject.repoLink ? (
                <Link href={myProject.repoLink}>
                  <Image
                    src={GitHubIcon}
                    alt="Visit GitHub Repo"
                    width={32}
                    height={32}
                    className={myProject.siteLink ? "ml-2" : ""}
                  />
                </Link>
              ) : null}
            </div>
            <div>
              <span>{myProject.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectComponent;
