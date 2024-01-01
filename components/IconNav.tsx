import React from "react";
import { navData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function IconNav() {
  return (
    <div>
      {navData.map((link, Index) => {
        return (
          <Link href={link.path}>
            <link.icon />
          </Link>
        );
      })}
    </div>
  );
}

export default IconNav;
