import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-between items-center py-16">
      <Logo />
      <div className="flex justify-between gap-16 mt-8">
        <nav className="flex justify-between gap-6">
          <Link href="/skills" className="hover:underline">
            Skills
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </nav>
        <nav className="flex justify-between gap-4">
          <Link
            href="https://www.linkedin.com/in/jhon-sisneros/"
            target={"_blank"}
            className="hover:underline"
          >
            <Icon icon="simple-icons:linkedin" width={26} height={26} />
          </Link>
          <Link
            href="https://github.com/jayhons99"
            target={"_blank"}
            className="hover:underline"
          >
            <Icon icon="jam:github" width={26} height={26} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
