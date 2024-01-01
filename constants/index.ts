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
import { NavDataItem } from "@/types";

import {
  type Icon,
  Menu,
  CodeCircle,
  Monitor,
  User,
  PasswordCheck,
  Edit,
} from "iconsax-react";

export const socials = [
  {
    href: "",
    icon: FacebookIcon,
  },
  {
    href: "",
    icon: XIcon,
  },
  {
    href: "",
    icon: LinkedinIcon,
  },
];

export const navData: NavDataItem[] = [
  { id: 1, name: "home", path: "/", icon: Menu },
  { id: 2, name: "about", path: "/about", icon: User },
  { id: 3, name: "services", path: "/services", icon: CodeCircle },
  { id: 4, name: "work", path: "/work", icon: Monitor },
  { id: 5, name: "testimonials", path: "/testimonials", icon: Edit },
  { id: 6, name: "contact", path: "/contact", icon: PasswordCheck },
];