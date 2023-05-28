"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToggleTheme from "@/components/ToggleTheme";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <html lang="en" className={isDark && "dark"}>
      <head>
        <title>Personal Website</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Personal website built by Jhon Sisneros"
        />
        <meta name="author" content="Jhon Sisneros" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.className} h-screen bg-primary dark:bg-primaryDark`}
      >
        <ToggleTheme toggleTheme={toggleTheme} isDark={isDark} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
