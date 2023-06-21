import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "@iconify/react";

const Navbar = ({ links }) => {
  return (
    <header className="flex flex-col mb-8 justify-center items-center">
      <Logo />
      <div className="flex flex-col justify-between gap-[16px] mt-8 dark:text-textDark">
        <nav className="flex justify-center gap-[16px]">
          <Link
            href="https://www.linkedin.com/in/jhon-sisneros/"
            target={"_blank"}
            aria-label="Visit my LinkedIn page"
          >
            <Icon icon="simple-icons:linkedin" width={26} height={26} />
          </Link>
          <Link
            href="https://github.com/jayhons99"
            target={"_blank"}
            aria-label="Visit my Github"
          >
            <Icon icon="jam:github" width={26} height={26} />
          </Link>
          <Link href="mailto: jhonrsisneros@gmail.com" aria-label="Email me">
            <Icon icon="ic:baseline-email" width={26} height={26}></Icon>
          </Link>
        </nav>
        <nav className="flex justify-between gap-[48px]">
          {links.map((link) => {
            return (
              <Link
                key={link}
                href={link}
                className="hover:underline"
                aria-label="Navigation link"
              >
                {link.replace("/", "# ")}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
