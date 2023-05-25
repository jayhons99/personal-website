"use client";
import { motion } from "framer-motion";
import { variants } from "../layout";
import ProjectItem from "@/components/ProjectItem";

const projects = [
  {
    id: 1,
    name: "ToDo List",
    description:
      "ToDo list application built on React.\nUses localStorage to persist data after refresh. Built to solidify core React hooks such as useState() and useEffect().",
    skills: "React",
    thumbnail: "",
    sourceCode: "https://github.com/jayhons99/todo-app",
    liveDemo:
      "http://todo-list-bucket-jhon.s3-website-us-east-1.amazonaws.com/",
    completed: true,
  },
  {
    id: 2,
    name: "Business Card",
    description:
      "Business card demonstrating core AWS services.\nStatic website that uses Amazon S3 and CloudFront and utilized Route 53 to generate a domain name. Also calls a Lambda function via an API Gateway on refresh to update and fetch from a DynamoDB table.",
    thumbnail: "",
    sourceCode: "https://github.com/jayhons99/business-card",
    liveDemo: "https://www.jhonresumesite.com/",
    completed: true,
  },
];
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
      >
        {projects.map((item) => {
          return <ProjectItem key={item.id} project={item} />;
        })}
      </motion.div>
    </div>
  );
};
export default Page;
