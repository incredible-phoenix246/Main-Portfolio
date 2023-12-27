"use client";

import React, { useState, useEffect } from "react";

import { IBM_Plex_Mono } from "next/font/google";

const ibmplex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

function Navbar() {
  return (
    <div
      className={`${ibmplex.className} bg-black font-ibmplex text-white lg:px-[128px] md:px-[32px] sm:px-[24px] flex items-center w-full`}
    >
      <p className="text-turquoise lg:text-[32px] md:text-[24px] sm:text-[16px]">
        {"<P/>"} <span className="text-white">Phoenix</span>
      </p>
    </div>
  );
}

export default Navbar;
