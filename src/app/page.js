"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Image
          src="/cropped.jpg"
          alt="picture of me"
          width={150}
          height={150}
          className="rounded-full mb-[16px] mt-0"
          priority={true}
        ></Image>{" "}
        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="home-card"
        >
          <p className="text-center">
            Hello, my name is Jhon and I am a <br></br>{" "}
            <b>Software Engineer.</b>
          </p>
        </motion.div>
        <br></br>
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
          className="home-card"
        >
          <p className="text-center">
            I love to develop <b>simple</b> and <b>clean</b> responsive
            websites.
          </p>
        </motion.div>
      </main>
    </>
  );
}
