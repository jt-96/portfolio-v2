"use client";
import dynamic from "next/dynamic";
import About from "./about/page";
import Experience from "./experience/page";
import "@/app/globals.css";

const LazyMeteors = dynamic(
  () =>
    import("@/components/meteors/meteors.component").then(
      (module) => module.Meteors
    ),
  { ssr: false }
);

const LazyIntro = dynamic(() => import("@/app/intro/page"));
const LazyProfile = dynamic(() => import("@/app/profile/page"));
const LazyProjects = dynamic(() => import("@/app/projects/page"));
const LazyOutro = dynamic(() => import("@/app/outro/page"));

export default function Home() {
  return (
    <>
      <div className="sticky top-0">
        <LazyMeteors />
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <LazyIntro />
        <About />
        <LazyProfile />
        <Experience />
        <LazyProjects />
        <LazyOutro />
      </div>
    </>
  );
}
