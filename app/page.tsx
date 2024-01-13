"use client";
import { fadeIn } from "@/utils/fadein";

import React from "react";
import BannerLeft from "@/components/BannerCard";
import { motion } from "framer-motion";
import UserProfile from "@/components/test";
import PageWrapper from "@/components/Wrapper";
import HeadingComponent from "@/components/MIdSec";

function page() {
  return (
    <PageWrapper>
      <div className="items-center justify-center px-[100px] flex">
        <div className="flex-col items-center justify-between">
          <h2 className="text-turquoise dark:text-white font-ubuntu text-[117px] hidden md:block">
            Developer
          </h2>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="items-center ustify-between flex"
          >
            <BannerLeft />
            <HeadingComponent />
            {/* <header className="items-stretch self-stretch flex max-w-[745px] flex-col">
              <h1 className="text-teal-200 text-sm leading-5 w-full max-md:max-w-full">
                &lt;h1&gt;
              </h1>
              <span className="items-stretch flex w-full flex-col pl-4 pr-20 max-md:max-w-full max-md:pr-5">
                <h2 className="text-white text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl">
                  Hey
                </h2>
                <h3 className="text-cyan-400 text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  I’m <span className="text-cyan-400">Sinan</span>
                </h3>
                <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                  <h4 className="text-white text-6xl leading-[72px] capitalize grow max-md:max-w-full max-md:text-4xl">
                    Full-stack developer
                  </h4>
                  <div className="text-teal-200 text-sm leading-5 whitespace-nowrap mt-12 self-end max-md:mt-10">
                    &lt;/h1&gt;
                  </div>
                </div>
              </span>
            </header> */}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
