"use client";

import React from "react";

type MyUpdatedComponentProps = {
  programmingCount: number;
  developmentCount: number;
  experienceYears: number;
};

function MyUpdatedComponent(props: MyUpdatedComponentProps) {
  const { programmingCount, developmentCount, experienceYears } = props;

  return (
    <div className="justify-center items-stretch shadow-sm bg-zinc-900 flex max-w-[215px] flex-col px-8 py-12 rounded-[80px]">
      <header className="items-stretch flex justify-between gap-4">
        <div className="text-cyan-400 text-5xl font-medium leading-[61.92px] capitalize">
          {programmingCount}
        </div>
        <div className="justify-center items-stretch self-center flex-grow basis-[0%] flex-col my-auto">
          <div className="text-white text-base leading-5 whitespace-nowrap">
            Programming
          </div>
          <div className="text-white text-base leading-5 whitespace-nowrap">
            Language
          </div>
        </div>
      </header>
      <header className="items-stretch flex justify-between gap-4 mt-12">
        <div className="text-cyan-400 text-5xl font-medium leading-[61.92px] capitalize">
          {developmentCount}
        </div>
        <div className="justify-center items-stretch self-center flex-grow basis-[0%] flex-col my-auto">
          <div className="text-white text-base leading-5 whitespace-nowrap">
            Development
          </div>
          <div className="text-white text-base leading-5">Tools</div>
        </div>
      </header>
      <header className="items-stretch flex justify-between gap-4 mt-12">
        <div className="text-cyan-400 text-5xl font-medium leading-[61.92px] capitalize">
          {experienceYears}
        </div>
        <div className="justify-center items-stretch self-center flex-grow basis-[0%] flex-col my-auto">
          <div className="text-white text-base leading-5 whitespace-nowrap">
            Years of
          </div>
          <div className="text-white text-base leading-5 whitespace-nowrap">
            Experience
          </div>
        </div>
      </header>
    </div>
  );
}

export default MyUpdatedComponent;
