"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Banner = ({ isActive, setIsActive }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width after the component mounts
    if (typeof window !== "undefined") {
      console.log("innnn");

      setWindowWidth(window.innerWidth);

      // Update width on resize
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      console.log(windowWidth);

      return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="w-full h-fit p-4 sm:p-12 lg:p-16">
      <div className="relative w-full px-6 py-6 sm:p-12 lg:py-20 flex bg-[#f1f1f1] items-center rounded-[25px] overflow-hidden">
        {/* Left Content */}
        <div className="z-10 w-full text-center sm:text-start sm:w-1/2 flex flex-col items-center sm:items-start">
          <h1 className="text-3xl sm:text-[2.0rem] lg:text-[3rem] font-black font-roboto sm:leading-[2.4rem] lg:leading-[3.5rem]">
            Ready to Transform Your Financial Future?
          </h1>

          <p className="text-lg mt-3 font-light text-[#656573] font-roboto w-full sm:w-5/6 lg:w-4/6">
            Join thousands of users already experiencing the future of banking,
            business, and campus life.
          </p>

          <CustomButton
            textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
            imageStyles="rounded-[35px]"
            func={() => setIsActive(true)}
            containerStyles="mt-6 py-3 sm:py-4 self-center sm:self-start w-full sm:w-fit px-6 rounded-[35px]"
            title="Join the waitlist"
          />
        </div>

        {/* Decorative Absolute Elements */}
        <div className="absolute -z-0 w-[150px] h-[200px] lg:w-[300px] lg:h-[300px] bg-[#7eb013ce] -bottom-32 sm:-bottom-44 left-10 sm:left-16 lg:left-56 rounded-full"></div>
        <div className="absolute -z-0 w-[200px] h-[150px] lg:w-[300px] lg:h-300px] bg-[#9113b081] top-0 left-0 rounded-full"></div>
        <div className="absolute top-0 left-0 bottom-0 w-full sm:w-1/2 -z-0 rounded-[25px] bg-transparent backdrop-blur-[90px]"></div>

        {/* Right Placeholder Section */}
        <div className="hidden absolute right-0 inset-y-0 sm:flex w-1/2 h-full items-center justify-center">
          <Image
            src="/assets/hand.svg"
            className={`   lg:w-[80%] xl:w-[50%] 2xl:w-[50%] h-auto object-contain absolute bottom-0 ${
              windowWidth > 830 &&
              windowWidth < 980 &&
              console.log(windowWidth) &&
              "w-[100%]"
            } ${windowWidth > 1280 && windowWidth < 1350 && "w-[60%]"}`}
            width={300}
            height={300}
            alt="Decorative Hand"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
