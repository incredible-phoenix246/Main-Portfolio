import Link from "next/link";
import React from "react";

function HeadingComponent() {
  return (
    <section className="flex-col flex items-center max-w-[700px]">
      <header className="items-stretch self-stretch flex max-w-[745px] flex-col">
        <h1 className="text-teal-200 text-sm leading-5 w-full max-md:max-w-full">
          &lt;h1&gt;
        </h1>
        <span className="items-stretch flex w-full flex-col pl-4 pr-20 max-md:max-w-full max-md:pr-5">
          <h2 className="text-white text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl">
            Hey
          </h2>
          <h3 className="text-cyan-400 text-6xl leading-[72px] capitalize max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            I&apos;m <span className="text-cyan-400">Phoenix</span>
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
          I help businesses grow by crafting amazing web experiences.
          <span>
            If you're looking for a developer that likes to get stuff done,
          </span>
        </div>
        <p className="text-teal-200 text-sm leading-5 self-stretch mt-4 max-md:max-w-full">
          &lt;/p&gt;{" "}
        </p>
        <div className="items-stretch flex gap-4 mt-4 pl-6 self-start max-md:pl-5">
          <h1 className="text-cyan-400 text-3xl font-medium leading-10 capitalize grow whitespace-nowrap">
            Let&apos;{" "}
            <Link href="#" className="text-cyan-400" passHref>
              talk
            </Link>{" "}
          </h1>

        </div>
      </header>
    </section>
  );
}

export default HeadingComponent;
