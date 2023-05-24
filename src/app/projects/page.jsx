"use client";

import { motion } from "framer-motion";
import { variants } from "../layout";
const Page = () => {
  return (
    <div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.5 }}
      >
        Projects
      </motion.div>
    </div>
  );
};
export default Page;
