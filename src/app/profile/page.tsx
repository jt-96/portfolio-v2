import { InfiniteMovingCards } from "@/components/movingCards/cards.component";
import { frontStack } from "@/models/front";
import { backStack } from "@/models/back";
import { others } from "@/models/other";

function Profile() {
  return (
    <>
      <h2 className="text-3xl my-5">Profile</h2>
      <InfiniteMovingCards items={frontStack} direction="left" speed="normal" />
      <InfiniteMovingCards items={backStack} direction="right" speed="normal" />
      <InfiniteMovingCards items={others} direction="left" speed="normal" />
    </>
  );
}

export default Profile;
