"use client";

import { motion } from "framer-motion";
import { variants } from "./layout";
export default function Home() {
  return (
    <main>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.5 }}
      >
        Home Page here
      </motion.div>
    </main>
  );
}
