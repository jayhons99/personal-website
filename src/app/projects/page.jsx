"use client";
import { motion } from "framer-motion";
import { projectsList } from "@/resources.js";
import ProjectItem from "@/components/ProjectItem";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center text-center dark:text-textDark">
        <h1 className="heading"># projects</h1>
        <div className="max-w-[80%] grid grid-rows-1 grid-flow-col overflow-x-auto snap-x snap-mandatory gap-4 md:grid-flow-col">
          {projectsList.map((item, i) => {
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.3,
                }}
              >
                <div className="snap-center">
                  <ProjectItem project={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};
export default Page;
