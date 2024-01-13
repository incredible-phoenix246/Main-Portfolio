import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhoenixSquadron } from "react-icons/fa";

import { IBM_Plex_Mono } from "next/font/google";

const ibmplex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const Logo = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const textToType = "PHOENIX";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(textToType.substring(0, (index % textToType.length) + 1));
      index = (index + 1) % textToType.length;
    }, 500);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <Link href="/" className={`${ibmplex.className} glass p-2 rounded-lg`}>
      <div className="flex flex-row dark:text-turquoise text-black gap-1 items-center uppercase">
        <span className=" lg:text-[28px] md:text-[20px] sm:text-[16px]">
          {"<P/>"}
        </span>
        <div className="text-2xl">{typedText}</div>
        <div>
          <FaPhoenixSquadron size={24} className="animate-spin" />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
