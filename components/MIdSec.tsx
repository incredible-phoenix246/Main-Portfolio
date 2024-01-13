import Link from "next/link";
import React from "react";

function HeadingComponent() {
  return (
    <>
      <header className="items-stretch self-stretch flex max-w-[745px] flex-col">
        <h1 className="text-teal-200 text-sm leading-5 w-full max-md:max-w-full">
          &lt;h1&gt;
        </h1>
        <span className="items-stretch flex w-full flex-col pl-4 pr-20 max-md:max-w-full max-md:pr-5">
          <h2 className="text-white text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl">
            Hey
          </h2>
          <h3 className="text-cyan-400 text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            I’m <span className="text-cyan-400">Phoenix</span>
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
      </header>
      <header className="header">
        <p className="text-teal-200 text-sm leading-5 self-stretch max-md:max-w-full">
          &lt;p&gt;{" "}
        </p>
        <div className="text-white text-base leading-5 self-stretch mt-4 max-md:max-w-full">
          I help businesses grow by crafting amazing web experiences. If you're
          looking for a developer that likes to get stuff done,{" "}
        </div>
        <p className="text-teal-200 text-sm leading-5 self-stretch mt-4 max-md:max-w-full">
          &lt;/p&gt;{" "}
        </p>
        <div className="items-stretch flex gap-4 mt-4 pl-6 self-start max-md:pl-5">
          <h1 className="text-cyan-400 text-3xl font-medium leading-10 capitalize grow whitespace-nowrap">
            Let's{" "}
            <Link href="#" className="text-cyan-400" passHref>
              talk
            </Link>{" "}
          </h1>
          <div className="items-center bg-zinc-700 flex aspect-square flex-col justify-center w-10 h-10 px-2 rounded-[40px] self-start">
            {/* <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1515fd4b72eaabff4c22131ecf1198b051960deb78cadcf6222156daed097f51?apiKey=252f8d5a726747838fcb04939a832fc3&"
              className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
              alt=""
              role="img"
              aria-label="User Avatar"
              width={50}
              height={50}
            /> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeadingComponent;
