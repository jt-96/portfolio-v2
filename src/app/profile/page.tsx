import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/movingCards/cards.component";
import { frontStack } from "@/models/front";
import { backStack } from "@/models/back";
import { others } from "@/models/other";

function Profile() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
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
