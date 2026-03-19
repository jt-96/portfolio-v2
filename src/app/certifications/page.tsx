"use client";
import { motion } from "framer-motion";
import { variants } from "@/models/anim";
import { Carousel } from "@/components/carousel/carousel.component";
import { certifications } from "@/models/certs";

function Certifications() {
  return (
    <>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <h2 className="text-3xl my-10 text-center">Certifications</h2>
      </motion.div>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <div className="relative overflow-hidden w-full h-full pb-20">
          <Carousel slides={certifications} />
        </div>
      </motion.div>
    </>
  );
}

export default Certifications;
