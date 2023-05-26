import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
    <div className="flex flex-col justify-center items-center px-0">
      <div className={`card-layout ${shown && "pt-2"}`}>
        <p className="text-xl pt-1 font-extrabold">{name}</p>

        {thumbnail && (
          <Image
            src={thumbnail}
            width={300}
            height={300}
            className="rounded-md"
            alt="project-thumbnail"
          ></Image>
        )}
        <p className="">{firstLine}</p>
        <p
          onClick={() => setShown((curr) => !curr)}
          className="underline hover:cursor-pointer"
        >
          {!shown ? "expand" : "hide"}
        </p>
        {shown && (
          <p>
            <i>{description.split("\n")[1]}</i>
          </p>
        )}
        <p className={`font-semibold ${shown ? "mb-[8px]" : "mb-0"}`}>
          {skills}
        </p>
        <div className={`flex gap-[8px] pb-[8px] ${shown && "pb-[12px]"}`}>
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
