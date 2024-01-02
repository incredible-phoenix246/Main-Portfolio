import React from "react";
import Image from "next/image";
import { Link, Location, BrifecaseTick, Blend, Buildings } from "iconsax-react";

function BannerLeft() {
  return (
    <div
      className="flex-col flex items-center justify-center rounded-br-[160px] h-[520px] w-[320px] rounded-tl-[160px] border-4 border-solid dark:border-white shadow-inner border-black "
      style={{ boxShadow: "-4px -4px 2px 0px #12F7D6" }}
    >
      <Image
        src="/banner/profile.svg"
        width={96}
        height={96}
        alt="profile"
        className="border-4 border-solid dark:border-white rounded-full border-turquoise"
      />

      <h2 className="text-[32px] font-ibmplex font-normal leading-[42px] dark:text-white text-turquoise">
        Phoenix
      </h2>
      <span className="text-[14px] font-ibmplex font-normal leading-[18px] dark:text-white text-turquoise">
        Full-Stack
      </span>
    </div>
  );
}

export default BannerLeft;
