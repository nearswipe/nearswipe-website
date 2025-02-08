"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { bannerImage1, bannerImage2 } from "@/constants/images";

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
    <div className="flex md:p-20 p-5 mt-16 font-roboto">
    <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80">
      <Image
        src={
          windowWidth > 1200
            ? bannerImage1
            : bannerImage2
        }
        priority
        className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
        width={400}
        height={400}
        alt=""
      />

      <div className="absolute z-50 w-full flex md:justify-start justify-center">
        <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col md:items-start items-center gap-6">
          <h1 className="text-2xl font-black md:text-[3rem] text-center md:text-start md:leading-[3.8rem]">
          Ready to Transform Your Financial Future?
          </h1>

          <p className="text-center md:text-start text-[#656573] font-light md:text-[1.2rem]">
          Join thousands of users already experiencing the future of banking,
          business, and campus life.
          </p>

          <CustomButton
            textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
            imageStyles="rounded-[35px]"
            func={() => setIsActive(true)}
            containerStyles="py-3 sm:py-4 w-full sm:w-fit px-6 rounded-[35px]"
            title="Join the waitlist"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
