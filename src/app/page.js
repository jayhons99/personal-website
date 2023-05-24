"use client";

import { motion } from "framer-motion";
import { variants } from "./layout";
export default function Home() {
  return (
    <main>
      <motion.div
        variants={variants}
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 1 }}
      >
        Home Page here
      </motion.div>
    </main>
  );
}
