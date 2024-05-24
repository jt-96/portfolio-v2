"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Intro() {
  const [titles, setTitles] = useState<string[]>([
    "Full Stack Dev",
    "Printer Fixer",
    "Gamer",
    "Future Funk & City Pop Enthusiast",
  ]);
  const [currentTitle, setCurrentTitle] = useState<string>(titles[0]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (
        titles.findIndex((value) => value === currentTitle) + 1 >=
        titles.length
      ) {
        setCurrentTitle(titles[0]);
      } else {
        setCurrentTitle(
          titles[titles.findIndex((value) => value === currentTitle) + 1]
        );
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTitle]);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mb-96 2xl:mb-[20rem]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.4 }}
        >
          <h1 className="text-2xl text-center md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl">
            Hi, I'm Jonathan Torrico
          </h1>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTitle}
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0.0,
              y: -40,
              transition: { delay: 0.0, duration: 0.3 },
            }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.4 }}
          >
            <p className="text-lg text-center md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">
              {currentTitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Intro;
