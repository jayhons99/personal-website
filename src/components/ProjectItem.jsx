import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ project }) => {
  const { name, description, skills, thumbnail, sourceCode, liveDemo } =
    project;

  return (
    <div className="flex flex-col justify-center items-center px-0 gap-4">
      <Image
        src={thumbnail}
        width={250}
        height={250}
        alt="project thumbnail"
        className="rounded-xl"
      />
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-sm">{description}</p>
      <i className="text-sm font-semibold">{skills}</i>
      <div className="flex justify-around gap-4">
        <span className="project-link">
          <Link
            href={sourceCode}
            aria-label="Go to project repository"
            target="_blank"
          >
            source
          </Link>
        </span>
        <span className="project-link">
          <Link href={liveDemo} aria-label="Go to project demo" target="_blank">
            live
          </Link>
        </span>
      </div>
    </div>
  );
};
export default ProjectItem;
