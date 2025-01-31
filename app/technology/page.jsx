"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import Image from "next/image";
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

  return (
    <div className="relative w-full">
      {isActive && (
        <WaitlistModal isActive={isActive} setIsActive={setIsActive} />
      )}
      <div className="relative h-screen font-roboto w-full flex flex-col items-center justify-center">
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

        <div className="z-50 text-white w-full px-20">
          <div className=" w-full mt-12 h-fit flex space-x-56 items-center justify-between">
            <div className="md:w-1/2 w-full">
              <p className="text-[5.5rem] text-[#d1d1d1] font-black">
                Technology
              </p>

              <p className="text-[1.479rem] mt-2 leading-7o font-light text-[#a1a1aa]">
                Experience the future of seamless transactions and access
                control with our advanced Near-Field Communication solutions
              </p>

              <CustomButton
                textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                imageStyles="rounded-[35px]"
                func={() => setIsActive(true)}
                containerStyles="mt-6 py-3 sm:py-4 self-center sm:self-start w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>

            <div className="hidden w-1/2 h-fit relative md:flex items-center justify-end">
              <Image
                src="/assets/mockup.svg"
                className={`object-fill `}
                width={windowWidth / 3}
                height={600}
                alt="Decorative Hand"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-5 md:px-20">
        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-12 w-full px-12 rounded-3xl">
          <div className="w-full hidden md:flex h-full mt-6">
            <Image
              src="/assets/campus-acs.svg"
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>

          <div className=" w-full px-4 flex flex-col gap-4">
            <p className="capitalize text-3xl font-black">Campus access</p>

            <p className="text-lg w-full font-light text-[#a1a1aa]">
              Seamless entry to buildings and facilities with a simple tap
            </p>

            <div className="w-full grid grid-cols-1 gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Instant authentication
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time access logs
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Integration with campus security
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex md:hidden h-full mt-6">
            <Image
              src="/assets/campus-acs.svg"
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-12 w-full px-12 rounded-3xl">
          <div className=" w-full px-4 flex flex-col gap-5">
            <p className="capitalize text-3xl font-black">merchant payments</p>

            <p className="text-lg w-full font-light text-[#a1a1aa]">
              Transform any smartphone into a powerful payment terminal
            </p>

            <div className="w-full grid grid-cols-1 gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Contactless transactions
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time access logs
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Digital receipts
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex max-h-[500px] pt-6 overflow-hidden relative h-full">
            <Image
              src="/assets/merchant-pay.svg"
              className="w-full h-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-12 w-full rounded-3xl">
          <div className="w-full flex max-h-[500px] pt-6 overflow-hidden relative h-full">
            <Image
              src="/assets/digital-bnk.svg"
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>

          <div className=" w-full px-4 flex flex-col gap-4">
            <p className="capitalize text-3xl font-black">digital banking</p>

            <p className="text-lg w-full font-light text-[#a1a1aa]">
              Secure integration with virtual accounts and banking services
            </p>

            <div className="w-full grid grid-cols-1 gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Multi-Currency support
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time transfers
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src="/assets/mark.svg"
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-lg w-full font-light text-[#a1a1aa]">
                  Enhanced security
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex md:hidden h-full mt-6">
            <Image
              src="/assets/digital-bnk.svg"
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
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
