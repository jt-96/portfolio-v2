"use client";
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
      <div className="mb-96 2xl:mb-[35rem]">
        <h1 className="text-2xl text-center md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl">
          Hi, I'm Jonathan Torrico
        </h1>
        <p className="text-lg text-center md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">
          {currentTitle}
        </p>
      </div>
    </div>
  );
}

export default Intro;
