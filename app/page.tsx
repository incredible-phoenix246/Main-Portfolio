"use client";
import { fadeIn } from "@/utils/fadein";

import React from "react";
import BannerLeft from "@/components/BannerCard";
import { motion } from "framer-motion";

function page() {
  return (
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
        >
          <BannerLeft />
        </motion.div>
      </div>
    </div>
  );
}

export default page;
