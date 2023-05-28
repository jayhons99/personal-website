"use client";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
});

const Logo = () => {
  return (
    <div
      className={`${shareTechMono.className} flex items-center justify-center text-lg text-center bg-light h-14 w-14 rounded-full transition hover:-translate-y-2 hover:cursor-pointer duration-300`}
    >
      <Link href="/">Jhon Sisneros</Link>
    </div>
  );
};
export default Logo;
