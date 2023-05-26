"use client";
import { motion } from "framer-motion";
import { variants } from "../layout";
import projectsList from "../../projects.js";
import ProjectItem from "@/components/ProjectItem";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-[26px] mb-[16px]"># projects</h1>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", delay: 0.5 }}
        className="max-w-[80%] grid grid-rows-1 grid-flow-col overflow-x-auto snap-x snap-mandatory gap-4"
      >
        {projectsList.map((item) => {
          return (
            <div key={item.id} className="snap-center">
              <ProjectItem project={item} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Page;
