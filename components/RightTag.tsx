import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { type Icon } from "iconsax-react";

const IconClickableWithAnimation = (props: { href: string; Icon: Icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <Link href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon
          className={
            "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
          }
        />
      </Link>
    </motion.div>
  );
};
export default function SocialMediaEmail() {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 11, duration: 0.5 } }}
        className="z-10 fixed bottom-2 right-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <IconClickableWithAnimation
              Icon={FaGithub}
              href={"https://github.com/incredible-phoenix246/"}
            />

            <IconClickableWithAnimation
              Icon={FaLinkedinIn}
              href={"https://www.linkedin.com/in/ayomikun-araoye-a2485b287/"}
            />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
