"use client";

import { motion } from "framer-motion";
import { variants } from "../layout";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.5 }}
      >
        UNDER CONSTRUCTION
      </motion.div>
    </div>
  );
};
export default Page;
