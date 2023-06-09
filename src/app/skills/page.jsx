"use client";

import { easeIn, easeInOut, motion } from "framer-motion";
import { techIcons } from "@/resources";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center text-center dark:text-textDark">
        <h1 className="heading"># skills</h1>
        <div className="bg-light rounded-lg p-4 mb-2 dark:bg-dark">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>My tech stack includes: </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-2 mt-[16px] md:grid-cols-5">
            {techIcons.map((icon, i) => {
              return (
                <motion.div
                  key={icon.path}
                  initial={{
                    opacity: 0,
                    translateY: -50,
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                >
                  <Link href={icon.link} target="_blank">
                    <Image
                      src={icon.path}
                      width={75}
                      height={75}
                      alt="icon"
                      className="transition  hover:cursor-pointer hover:scale-125"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Page;
