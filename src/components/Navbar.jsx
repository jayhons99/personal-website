import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-between items-center py-16">
      <Logo />
      <div className="flex justify-between gap-16 mt-8">
        <nav className="flex justify-between gap-4">
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
            LinkedIn
          </Link>
          <Link
            href="https://github.com/jayhons99"
            target={"_blank"}
            className="hover:underline"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
