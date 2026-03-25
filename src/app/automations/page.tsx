"use client";
import { motion } from "framer-motion";
import { variants } from "@/models/anim";
import { CardHover } from "@/components/hoverCard/hoverCard.component";

const data = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In the mountains",
    description: "$1299 / night",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In the mountains",
    description: "$1299 / night",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In the mountains",
    description: "$1299 / night",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In the mountains",
    description: "$1299 / night",
  },
];

function Automations() {
  return (
    <>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <h1 className="text-3xl my-10">n8n Workflows</h1>
      </motion.div>
      <div className="flex flex-col">
        {data.map((item) => (
          <div className="h-[40rem] relative  flex items-center justify-center">
            <CardHover imageUrl={item.imageUrl}>
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm">{item.description}</p>
            </CardHover>
          </div>
        ))}
      </div>
    </>
  );
}

export default Automations;
