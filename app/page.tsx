"use client";

import MyName from "@/components/home/Hero";
import React, { useEffect, useState } from "react";
import ThisCantBeReached from "@/components/NotReachable";
import Startup from "@/components/home/StartUp";

function page() {
  const [ShowElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 4500);
    setTimeout(() => {
      setShowElement(false);
    }, 10400);
  }, []);
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <ThisCantBeReached />
      {ShowElement ? <Startup /> : <></>}
      <MyName />
    </div>
  );
}

export default page;
