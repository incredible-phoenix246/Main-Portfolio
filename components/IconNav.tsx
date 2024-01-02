"use client";

import React from "react";
import { navData } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function IconNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max mt-auto  xl:left-[2%] z-50  w-full xl:w-16 xl:max-w-md xl:h-screen bottom-0">
      <div className="dark:text-white flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl bg-black/20 dark:bg-white/20 xl:rounded-full">
        {navData.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className={`${
                link.path === pathname &&
                "dark:text-turquoise text-white items-center p-[6px]"
              } relative flex items-center group dark:hover:text-turquoise hover:text-white transition-all duration-300`}
            >
              <div className="absolute pr-14 left-[50px] hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-black items-center p-[6px] rounded-[3px]">
                  <div className="text-[14px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* <div className="border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute "></div> */}
                </div>
              </div>
              <div>
                <link.icon
                  variant={pathname === link.path ? "Bold" : "Outline"}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default IconNav;
