"use client";
import dynamic from "next/dynamic";
import Intro from "./intro/page";
import "@/app/globals.css";

const DynamicMeteors = dynamic(
  () =>
    import("@/components/meteors/meteors.component").then(
      (module) => module.Meteors
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className="sticky top-0">
        <DynamicMeteors />
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <Intro />
      </div>
    </>
  );
}
