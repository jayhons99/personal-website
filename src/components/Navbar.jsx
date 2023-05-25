import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-center items-center pt-16 pb-8">
      <Logo />
      <div className="flex flex-col justify-between gap-[16px] mt-8">
        <nav className="flex justify-center gap-[16px]">
          <Link
            href="https://www.linkedin.com/in/jhon-sisneros/"
            target={"_blank"}
          >
            <Icon icon="simple-icons:linkedin" width={26} height={26} />
          </Link>
          <Link href="https://github.com/jayhons99" target={"_blank"}>
            <Icon icon="jam:github" width={26} height={26} />
          </Link>
          <Link href="mailto: jhonrsisneros@gmail.com">
            <Icon icon="ic:baseline-email" width={26} height={26}></Icon>
          </Link>
        </nav>
        <nav className="flex justify-between gap-[48px]">
          <Link href="/skills" className="hover:underline">
            # skills
          </Link>
          <Link href="/projects" className="hover:underline">
            # projects
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
