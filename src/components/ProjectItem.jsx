import Link from "next/link";
import { useState } from "react";

const ProjectItem = ({ project }) => {
  const [shown, setShown] = useState(false);
  const {
    name,
    description,
    skills,
    thumbnail,
    sourceCode,
    liveDemo,
    completed,
  } = project;
  const firstLine = description.split("\n")[0];

  return (
    <div className="flex flex-col justify-center items-center px-16 mb-8">
      <div className="flex flex-col gap-[8px] justify-center items-start text-left bg-light rounded-lg text-[14px] p-[8px] w-[300px]">
        <p className="text-lg">{name}</p>
        <p>{firstLine}</p>
        <p
          onClick={() => setShown((curr) => !curr)}
          className="underline hover:cursor-pointer"
        >
          {!shown ? "expand" : "hide"}
        </p>
        {shown && <p>{description.split("\n")[1]}</p>}
        <p className="font-semibold">{skills}</p>
        <div className="flex gap-[8px]">
          <Link href={sourceCode} className="project-link" target="_blank">
            source
          </Link>
          <Link href={liveDemo} className="project-link" target="_blank">
            live
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
