"use client";

import React from "react";
import { navData } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function IconNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max mt-auto buttom-0 top-0 xl:left-[2%] z-50  w-full xl:w-16 xl:max-w-md xl:h-screen ">
      <div className="dark:text-white flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] bg-blue xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full bg-white/20 xl:rounded-full">
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