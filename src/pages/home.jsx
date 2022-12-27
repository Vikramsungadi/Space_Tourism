import React, { Fragment } from "react";

import { motion } from "framer-motion";

//Animation Variants

const slideAnim = {
  hidden: { translateX: "-20%" },
  show: {
    translateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const opacityAnim = {
  hidden: { opacity: 0, translateX: "-50%" },
  show: { opacity: 1, translateX: 0 },
};
const opacityAnim2 = {
  hidden: { opacity: 0, translateX: "50%" },
  show: { opacity: 1, translateX: 0 },
};

const home = () => {
  return (
    <motion.div
      layout
      className=" relative grid h-full w-full grid-rows-[auto_auto] flex-col  items-end justify-center p-24 max-lap:p-8 max-lap:text-center tab:mt-16  lap:grid lap:grid-cols-2 "
    >
      {/* HOME DETAILS  */}
      <motion.div
        variants={slideAnim}
        initial={"hidden"}
        animate={"show"}
        className="ml-6 flex flex-col gap-6 self-start max-tab:ml-0 max-tab:overflow-hidden"
      >
        <motion.h5
          variants={opacityAnim}
          transition={{ type: "tween", duration: 0.3 }}
        >
          SO, YOU WANT TO TRAVEL TO
        </motion.h5>
        <motion.h1
          variants={opacityAnim2}
          transition={{ type: "tween", duration: 0.3 }}
        >
          SPACE
        </motion.h1>
        <motion.p
          variants={opacityAnim}
          transition={{ type: "tween", duration: 0.3 }}
          className="mx-4 max-w-[45rem]  "
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </motion.p>
      </motion.div>

      {/* HOME EXPLORE  */}
      <motion.div className="relative z-[10] flex h-full items-end justify-center  max-lg:mt-36 max-tab:mt-24 ">
        <motion.div
          animate={{
            scale: [0, 1],
            opacity: [0, 1],
            transition: { duration: 1, ease: "easeOut", delay: "2" },
          }}
          className=" relative flex h-[15rem] w-[15rem] items-center  justify-center   rounded-full bg-white before:absolute  before:box-content before:h-full before:w-full before:rounded-full before:border-white before:transition-all before:hover:border-[5rem]  before:hover:border-white/10  tab:h-[24.2rem]  tab:w-[24.2rem] lap:h-[27.4rem]  lap:w-[27.4rem]"
        >
          <motion.span className="text-h4 text-navy max-tab:text-[2rem]">
            EXPLORE
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default home;
