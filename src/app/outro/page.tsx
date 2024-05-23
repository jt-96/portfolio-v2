import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/aurora/aurora.component";
import LinkedInImage from "@/assets/linkedin.svg";
import GitHubImage from "@/assets/github.svg";
import CVImage from "@/assets/cv.svg";

function Outro() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative px-4 flex flex-col h-full justify-center"
        >
          <div className="flex flex-col items-center justify-center grow">
            <h1 className="m-5 text-2xl md:text-3xl xl:text-4xl">
              Let's talk.
            </h1>
            <div className="flex flex-col items-center md:flex-row md:w-2/3 xl:w-full">
              <Link href="/Jonathan Torrico -  ENG CV.pdf" target="_blank">
                <div className="my-5 flex justify-center items-center border border-slate-700 rounded-2xl w-64 h-24 md:mx-2">
                  <Image
                    src={CVImage}
                    alt="Curriculum Vitae Logo"
                    width={64}
                    height={64}
                    color="#000000"
                    className="p-5 md:p-2 2xl:p-2"
                  />
                </div>
              </Link>
              <Link
                href="https://ar.linkedin.com/in/jonathan-torrico"
                target="_blank"
              >
                <div className="my-5 flex justify-center items-center border border-slate-700 rounded-2xl w-64 h-24 md:mx-2">
                  <Image
                    src={LinkedInImage}
                    alt="LinkedIn Logo"
                    width={64}
                    height={64}
                    color="#000000"
                    className="p-5 md:p-2 2xl:p-2"
                  />
                </div>
              </Link>
              <Link href="https://github.com/jt-96" target="_blank">
                <div className="my-5 flex justify-center items-center border border-slate-700 rounded-2xl w-64 h-24 md:mx-2">
                  <Image
                    src={GitHubImage}
                    alt="GitHub Logo"
                    width={64}
                    height={64}
                    color="#000000"
                    className="p-5 md:p-2 2xl:p-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center align-center items-center">
            <p className="text-center p-5">
              Mendoza &bull; Argentina &bull; 2024
            </p>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}

export default Outro;
