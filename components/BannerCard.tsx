import React from "react";
import Image from "next/image";
import {
  Location,
  Link21,
  BrifecaseTick,
  Blend,
  Buildings,
} from "iconsax-react";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";

function BannerLeft() {
  return (
    <div
      className="flex-col flex items-start justify-center rounded-br-[160px] h-[520px] w-[320px] rounded-tl-[160px] border-4 border-solid dark:border-white shadow-inner border-black "
      style={{ boxShadow: "-4px -4px 2px 0px #12F7D6" }}
    >
      <Image
        src="/banner/profile.svg"
        width={96}
        height={96}
        alt="profile"
        className="aspect-square object-contain dark:border-white rounded-full border-turquoise object-center w-24 items-start overflow-hidden self-center max-w-full border-4 border-solid"
      />

      <Link
        className="text-[32px] font-ibmplex dark:text-white text-turquoise capitalize self-center whitespace-nowrap mt-4 font-medium leading-10"
        href={""}
      >
        Phoenix
      </Link>
      <span className="text-[14px] font-ibmplex font-normal dark:text-white text-turquoise leading-5 self-center whitespace-nowrap">
        Full-Stack
      </span>
      <div className="text-[16px] font-ibmplex font-medium space-y-5 leading-[18px] mt-8 dark:text-white text-turquoise self-center max-w-[274px] ">
        <div className="items-center self-stretch flex gap-4">
          <Link className="flex gap-x-3" href={""}>
            <span className="dark:text-turquoise text-black ">
              <FaRegEnvelope />
            </span>
            ayomikuntemitope@mgail.com
          </Link>
        </div>
        <Link className="flex gap-x-3" href={""}>
          <span className="dark:text-turquoise text-black ">
            <Location />
          </span>
          Kano, Nigeria
        </Link>
        <Link className="flex  gap-x-3" href={""}>
          <span className="dark:text-turquoise text-black ">
            <Buildings />
          </span>
          Freelancer
        </Link>

        <Link className="flex  gap-x-3" href={""}>
          <span className="dark:text-turquoise text-black ">
            <Link21 />
          </span>
          www.exmple.com
        </Link>
      </div>
    <div>
      
    </div>

    </div>
  );
}

export default BannerLeft;
