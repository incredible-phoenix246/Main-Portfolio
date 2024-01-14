"use client";

import React from "react";
import Image from "next/image";
import { Location, Buildings } from "iconsax-react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

function BannerLeft() {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../public/assets/resume.pdf";
    downloadLink.download = "cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div
      className="flex-col flex items-start justify-center rounded-br-[160px] h-[520px] self-center w-[320px] rounded-tl-[160px] border-4 border-solid dark:border-white shadow-inner border-black "
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
      <div className="text-[16px] font-ibmplex font-medium space-y-2 leading-[18px] mt-4 dark:text-white text-turquoise self-center max-w-[274px] ">
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
      </div>
      <div className="flex items-center justify-center max-w-[274px] flex-wrap text-[#292F36] self-center mt-3 gap-x-3 gap-y-1 font-semibold text-[16px]">
        <span className="bg-[#12F7D6] rounded-lg p-2">FRONTEND</span>
        <span className="bg-[#12F7D6] rounded-lg p-2">BACKEND</span>
        <span className="bg-[#12F7D6] rounded-lg p-2">TYPESCRIPT ADVOCATE</span>
      </div>

      <button
        className="dark:bg-white rounded-full w-full bg-[#292F36] text-[18px] gap-2 self-center mt-3 flex items-center justify-center max-w-[180px] max-h-[56px] dark:text-[#292F36] font-semibold text-white py-[10px] px-[8px]"
        onClick={() => handleDownloadCV()}
      >
        Download CV
        <BsCloudDownload />
      </button>
    </div>
  );
}

export default BannerLeft;
