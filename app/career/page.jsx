"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full">
      {isActive && (
        <WaitlistModal isActive={isActive} setIsActive={setIsActive} />
      )}
      <div className="relative h-[70vh] overflow-hidden font-roboto w-full flex flex-col items-center justify-center">
        {/* Responsive image container */}
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

        <div className="z-50 text-white w-full mt-20 px-20">
          <div className=" w-full h-fit flex space-x-56 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <p className="text-[5.5rem] text-center text-[#d1d1d1] font-black">
                Career
              </p>

              <p className="text-[1.4rem] text-center mt-2 leading-7o font-light text-[#a1a1aa]">
                Join our team of innovators and help shape the future of
                Near-field technology. We're looking for passionate individuals
                who want to make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-16 flex flex-col gap-8 px-5 text-white md:px-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">Senior Frontend developer</p>
            <p className="flex items-center text-[#a1a1aa]">
              Lagos, Nigeria <span className="mx-2 text-3xl">&#8729;</span>{" "}
              Full-time
            </p>
          </div>

          <div className="px-6 cursor-pointer rounded-[35px] py-3 border font-medium uppercase">
            Apply now
          </div>
        </div>
      </div>

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
              <h1 className="text-2xl font-black md:text-[3rem] text-center md:leading-[3.8rem]">
                Enterprise-Grade Security
              </h1>

              <p className="text-center text-[#656573] font-light md:text-[1.2rem]">
                Our NFC technologyis protected by military-grade encryption,
                ensuring your data and transactions remain secure at all times.
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
    </div>
  );
};

export default page;
