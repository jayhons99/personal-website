"use client";

import { motion } from "framer-motion";
import { variants } from "./layout";
import Image from "next/image";
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
          <Image
            src="/cropped.jpg"
            alt="picture of Jhon"
            width={150}
            height={150}
            className="rounded-full mb-[16px] mt-0"
          ></Image>{" "}
          <motion.div
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            mode="wait"
          >
            <div className="bg-light flex justify-center items-center h-[4rem] w-[20rem] rounded-lg">
              <p className="text-center">
                Hello, my name is Jhon and I am a <br></br>{" "}
                <b>Software Engineer.</b>
              </p>
            </div>
            <br></br>
          </motion.div>
          <motion.div
            mode="wait"
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="bg-light flex justify-center items-center h-[4rem] w-[20rem] rounded-lg">
              <p className="text-center">
                I love to develop <b>simple</b> and <b>clean</b> responsive
                websites.
              </p>
            </div>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
