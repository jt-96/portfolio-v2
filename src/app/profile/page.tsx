import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/movingCards/cards.component";
import { frontStack } from "@/models/front";
import { backStack } from "@/models/back";
import { others } from "@/models/other";
import { variants } from "@/models/anim";

function Profile() {
  return (
    <>
      <motion.div
        initial={variants.start}
        whileInView={variants.onView}
        transition={variants.showPara.transition}
      >
        <h2 className="text-3xl my-5 text-center">Profile</h2>
        <InfiniteMovingCards
          items={frontStack}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={backStack}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards items={others} direction="left" speed="normal" />
      </motion.div>
    </>
  );
}

export default Profile;
