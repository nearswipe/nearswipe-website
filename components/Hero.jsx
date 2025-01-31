"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { IoChevronForward } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Hero = ({ isActive, setIsActive }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden h-[70vh] sm:h-screen w-full flex flex-col items-center justify-center">
      {/* Responsive image container */}
      {/* <div
        className={`absolute -z-2 ${
          windowWidth > 768 ? "w-[850px] h-[850px]" : "w-[300px] h-[300px]"
        } rounded-full -top-[150px]`}
      >
        <Image
          src="/assets/bg.svg"
          className="w-full h-full object-cover rounded-full"
          width={windowWidth}
          priority
          height={500}
          alt=""
        />
      </div> */}

      <div className="absolute">
        <Image
          src="/assets/bg.svg"
          className="w-full h-full object-cover rounded-full"
          width={windowWidth}
          priority
          height={500}
          alt=""
        />
      </div>

      {/* Background gradient */}
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-black/85 via-black/70 to-black/0 h-[70vh] sm:h-screen w-full"></div>
      <div
        className={`absolute -z-1 bg-[#283BE5]/80 ${
          windowWidth > 768 ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
        } -top-[200px] rounded-full  bg-gradient-to-b from-black/0 via-black/20 to-black/85`}
      ></div> */}

      {/* Background Bottom */}
      <div className="absolute bottom-0 z-1 bg-transparent w-full h-full ">
        <Image
          src="/assets/hero-down.svg"
          className="w-full h-full object-fill"
          width={700}
          height={700}
          alt="Hero"
        />
      </div>

      <div className="z-40 text-white flex flex-col items-center p-3 sm:mb-[100px] sm:gap-3">
        <div className="bg-white/10 flex items-center space-x-1 px-3 py-0.5 rounded-2xl">
          <span className="capitalize text-[9px] text-[#a1a1aa]">
            Smart, secure, seemless
          </span>
          <span>&#8729;</span>
          <div
            onClick={() => router.push("/products")}
            className="text-[13px] font-semibold flex items-center space-x-1.5 cursor-pointer"
          >
            <span className="text-[10px]">Learn more</span> <IoChevronForward />
          </div>
        </div>

        <div className="sm:text-[70px] text-[45px] leading-[3rem] uppercase flex flex-col items-center justify-center sm:leading-[4.5rem] font-roboto font-bold">
          <span>Access</span>
          <span>
            Pay. <span className="text-[#fff]/30">Thrive.</span>
          </span>
        </div>

        <div className="text-[13px] sm:text-lg font-normal text-[#a1a1aa] mt-2">
          Revolutionizing campuses with Near-filed technology
        </div>

        <CustomButton
          func={() => setIsActive(true)}
          textStyles="uppercase text-[16px] font-bold"
          containerStyles="mt-5 py-2 px-6 rounded-[35px]"
          imageStyles="rounded-[35px]"
          title="Join the withlist"
        />
      </div>
    </div>
  );
};

export default Hero;
