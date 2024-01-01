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

export const navData = [
  { name: "home", path: "/", icon: Menu },
  { name: "about", path: "/about", icon: User },
  { name: "services", path: "/services", icon: CodeCircle },
  { name: "work", path: "/work", icon: Monitor },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: Edit,
  },
  {
    name: "contact",
    path: "/contact",
    icon: PasswordCheck,
  },
];
