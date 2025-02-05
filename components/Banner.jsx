"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Banner = ({ setIsActive }) => {
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

  /*
      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <div className="relative flex flex-col rounded-2xl border items-center justify-center w-full md:h-96 h-80">
          <Image
            src={
              windowWidth > 1200
                ? "/assets/bg-gradient.svg"
                : "/assets/image-gradient.svg"
            }
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />

          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[3rem] md:leading-[3.8rem]">
                Ready to Transform Your Financial Future?
              </h1>

              <p className="text-[#656573] font-light md:text-[1.2rem]">
                Join thousands of users already experiencing the future of banking,
            business, and campus life.
              </p>

              <CustomButton
                textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                imageStyles="rounded-[35px]"
                func={() => setIsActive(true)}
                containerStyles="py-3 sm:py-4 self-center w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>
          </div>
        </div>
      </div>
  */

  return (
    <div className="w-full h-fit p-4 sm:p-12 lg:p-16">
      <div className="relative w-full px-6 py-6 sm:p-12 lg:py-12 flex bg-[#f1f1f1] items-center rounded-[25px] overflow-hidden">
        {/* Left Content */}
        <div className="z-50 w-full text-center sm:text-start sm:w-1/2 flex flex-col items-center sm:items-start">
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

        {/* Decorative Absolute Elements
        <div className="absolute -z-0 w-[150px] h-[200px] lg:w-[300px] lg:h-[300px] bg-[#7eb013ce] -bottom-32 sm:-bottom-44 left-10 sm:left-16 lg:left-56 rounded-full"></div>
        <div className="absolute -z-0 w-[200px] h-[150px] lg:w-[300px] lg:h-300px] bg-[#9113b081] top-0 left-0 rounded-full"></div>
        <div className="absolute top-0 left-0 bottom-0 w-full sm:w-1/2 -z-0 rounded-[25px] bg-transparent backdrop-blur-[90px]"></div> */}

        {/* Right Placeholder Section */}
        <Image
          src={"/assets/image-gradient.svg"}
          priority
          className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
          width={400}
          height={400}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
