"use client";

import React from "react";
import { navData } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function IconNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav>
      <div className="dark:text-white flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10">
        {navData.map((link, Index) => {
          return (
           <Link key={link.id} href={link.path}>
              <link.icon />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default IconNav;
