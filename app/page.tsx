"use client";

import MyName from "@/components/home/Hero";
import React, { useEffect, useState } from "react";
import ThisCantBeReached from "@/components/NotReachable";
import Startup from "@/components/home/StartUp";
import SocialMediaAround from "@/components/RightTag";
import AboutMe from "@/components/About";

function Page() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 4500);
    setTimeout(() => {
      setShowElement(false);
    }, 10400);
    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    setTimeout(() => {
      setShowMe(true);
    }, 10400);
  }, []);
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      {ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
      {ShowElement ? <Startup /> : <></>}
      <MyName />
      <SocialMediaAround />
      {ShowMe ? <AboutMe /> : <></>}
    </div>
  );
}

export default Page;
