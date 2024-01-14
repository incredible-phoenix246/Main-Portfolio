"use client";
import { fadeIn } from "@/utils/fadein";

import React from "react";
import BannerLeft from "@/components/BannerCard";
import { motion } from "framer-motion";
import PageWrapper from "@/components/Wrapper";
import HeadingComponent from "@/components/MIdSec";
import MyUpdatedComponent from "@/components/RightSide";

function page() {
  return (
    <PageWrapper>
      <div className="items-center justify-center flex-col px-[100px] flex mt-[30px]">
        <h2 className="text-turquoise dark:text-white font-ubuntu text-[117px] hidden md:block self-center">
          Developer
        </h2>
        <div className="flex-col items-center justify-center self-center flex">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="items-center justify-between space-x-[30px] self-center flex flex-wrap md:flex-row flex-col"
          >
            <div className="flex md:flex-row flex-col flex-wrap">
            <BannerLeft />
              <HeadingComponent />
              <MyUpdatedComponent
                programmingCount={5}
                developmentCount={3}
                experienceYears={2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
