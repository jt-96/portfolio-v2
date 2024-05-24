import { motion } from "framer-motion";

function About() {
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
        <h2 className="text-2xl md:text-3xl xl:text-4xl">
          Something about me.
        </h2>
      </motion.div>
      <section className="my-2 mx-5 md:mx-10 lg:mx-20 xl:mx-32 2xl:mx-72">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            I was always interested about computers & games since I was a kid,
            playing Enduro, Barnstorming on the Atari 2600 (which I found later
            in Black Ops Cold War, what a throwback!) later getting my hands on
            my brother's PC playing MAME / Age of Empires 2 / Warcraft 3.
          </p>
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            Later, I would start tinkering with that PC, even though it wasn't
            mine, learning how to use Windows and its utilities and configs, the
            motherboard BIOS, changing parts of that PC when it was gifted to
            me.
          </p>
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            Moving on, I got to build my own, a double core AMD A8, it wasn't
            top of the line, but got the job done.
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            Considering what my parents would say 'obsession' about computers,
            they told me to make something out of it, I thought well, maybe I
            could study more about it in College, try to make a career of it.
          </p>
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            In College, I learned a lot from different branches of programming
            development, from embedded systems to games and web, even legal
            stuff like licenses and infrastructure standards for IT services.
          </p>
          <p className="text-lg mb-2 md:text-2xl xl:text-3xl">
            In my last semester, web development was the last thing we saw, and
            after getting my hands on everything else, I decided that this was
            the path I should follow, so here we are!
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default About;
