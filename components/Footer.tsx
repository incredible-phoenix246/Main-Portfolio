import Link from "next/link";
import React from "react";
import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { socials } from "@/constants";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export default function Footer() {
  return (
    <footer
      className={`${ubuntu.className} max-w-[1240px] mx-auto p-4 py-12 text-white text-[16px] font-normal`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0 pt-6">
        <div className="flex gap-6 md:hidden">
          {socials.map((social) => {
            return (
              <Link
                key={social.href}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full"
              >
                <social.icon />
              </Link>
            );
          })}
        </div>
        <p className="text-primary-100">© 2023 Phoenix. All rights reserved.</p>
        <div>
          <Link href={""} className="pr-4">
            Terms of Service
          </Link>
          <Link href={""} className="">
            Privacy Policy
          </Link>
        </div>
        <div className="hidden md:flex gap-4 lg:gap-6">
          {socials.map((social) => {
            return (
              <Link
                key={social.href}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full"
              >
                <social.icon />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
