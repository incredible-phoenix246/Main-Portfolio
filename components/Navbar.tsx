"use client";

import React from "react";
import ThemeButton from "./ThemeButton";
import Logo from "./NavBar/logo";

import { IBM_Plex_Mono } from "next/font/google";

const ibmplex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

function Navbar() {
  return (
    <div
      className={`${ibmplex.className} dark:bg-black bg-white font-ibmplex text-white lg:px-[128px] md:px-[32px] sm:px-[24px] flex items-center justify-between w-full sticky`}
    >
      <Logo />
      <ThemeButton />
    </div>
  );
}

export default Navbar;
