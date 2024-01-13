import React from "react";
import Link from "next/link";
import { FaPhoenixSquadron } from "react-icons/fa";

const Logo = () => {
  return (
    <Link href="/" className="glass p-2 rounded-lg">
      <div className="flex flex-row text-white gap-1 items-center uppercase">
        <div className="text-2xl">Phoenix</div>
        <div>
          <FaPhoenixSquadron size={24} className="animate-spin" />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
