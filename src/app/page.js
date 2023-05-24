"use client";

import { motion } from "framer-motion";
import { variants } from "./layout";
export default function Home() {
  return (
    <>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.5 }}
      >
        <main className="flex flex-col items-center">
          <div>Image here</div>{" "}
          <motion.div
            initial={{
              x: -9999,
            }}
            animate={{
              x: 0,
            }}
            mode="wait"
          >
            <p className="text-center">
              Hello, my name is Jhon and I am a <br></br>{" "}
              <b>Software Engineer.</b>
            </p>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
