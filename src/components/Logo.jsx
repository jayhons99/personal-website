"use client";
import { Share_Tech_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
});

const Logo = () => {
  return (
    <div>
      <MotionLink
        href="/"
        className={`${shareTechMono.className} flex items-center justify-center text-lg text-center bg-light h-14 w-14 rounded-md`}
        whileHover={{
          scale: 1.5,
          transition: { duration: 1, repeat: Infinity },
        }}
        whileTap={{
          y: -10,
        }}
      >
        Jhon Sisneros
      </MotionLink>
    </div>
  );
};
export default Logo;
