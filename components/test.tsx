import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Link as Link2,
  Location,
  BrifecaseTick,
  Blend,
  Buildings,
} from "iconsax-react";

interface UserProfileProps {
  name: string;
  role: string;
  email: string;
  location: string;
  website: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  role,
  email,
  location,
  website,
}) => {
  return (
    <section className="justify-center items-start border-[color:var(--White,#FFF)] shadow-sm bg-gray-800 flex max-w-xs flex-col px-6 py-9 rounded-[160px_0px] border-4 border-solid">
      <Image
        loading="lazy"
        src="/banner/profile.svg"
        width={96}
        height={96}
        className="aspect-square object-contain object-center w-24 items-start overflow-hidden self-center max-w-full"
        alt={""}
      />
      <header className="text-white text-3xl font-medium leading-10 capitalize self-center whitespace-nowrap mt-4">
        {name}
      </header>
      <div className="text-white text-sm leading-5 self-center whitespace-nowrap">
        {role}
      </div>
      <div>
        <div className="justify-between items-center self-stretch flex gap-4 mt-8">
          <Link href="...">
            <Blend />
          </Link>
          <div className="text-white text-sm leading-5 self-stretch grow whitespace-nowrap">
            {email}
          </div>
        </div>
        <div className="justify-between items-center self-stretch flex gap-4 mt-4">
          <Link href="...">
            <Location />
          </Link>
          <div className="text-white text-sm leading-5 self-stretch grow shrink basis-auto">
            {location}
          </div>
        </div>
        <div className="justify-between items-center self-stretch flex gap-4 mt-4">
          <Link href="...">
            <Buildings />
          </Link>
          <div className="text-white text-sm leading-5 self-stretch grow shrink basis-auto">
            {role}
          </div>
        </div>
        <div className="justify-between items-center self-stretch flex gap-4 mt-4">
          <Link href="...">
            <Link2 />
          </Link>
          <div className="text-white text-sm leading-5 self-stretch grow shrink basis-auto">
            {website}
          </div>
        </div>
      </div>
      <form>
        <div className="items-stretch self-stretch flex gap-4 mt-4 pr-11">
          <div className="text-gray-800 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-cyan-400 aspect-[2.7777777777777777] px-2 rounded-lg">
            HTML
          </div>
          <div className="text-gray-800 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-cyan-400 aspect-[2.3333333333333335] px-2 rounded-lg">
            CSS
          </div>
          <div className="text-gray-800 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-cyan-400 aspect-[1.8333333333333333] px-2 rounded-lg">
            JS
          </div>
          <div className="text-gray-800 text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-cyan-400 aspect-[3.2222222222222223] px-2 rounded-lg">
            REACT
          </div>
        </div>
        <div className="justify-between items-stretch bg-white self-stretch flex gap-4 mt-8 pl-10 pr-11 py-4 rounded-[32px]">
          <button
            className="text-gray-800 text-xl leading-6 capitalize grow whitespace-nowrap"
            aria-label="Download CV"
            type="submit"
          >
            Download CV
          </button>
          {/* <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d92a42618cad1f4032b4bf9d111dc167a868835eaebd1429c3d1cafa589729d6?apiKey=252f8d5a726747838fcb04939a832fc3&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
            alt={""}
          /> */}
        </div>
      </form>
    </section>
  );
};

export default UserProfile;
