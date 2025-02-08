"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import { bannerImage1, bannerImage2, bgImage, campusAccess, digitalBnk, mark, merchantPay, mockUp } from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { setModalActive} = useGlobalContext();

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[70vh] sm:h-screen font-roboto w-full flex flex-col items-center justify-center">
        {/* Responsive image container */}
        <div className="absolute w-full h-full inset-0">
          <Image
            src={bgImage}
            className="w-full h-full object-cover"
            width={windowWidth}
            priority
            height={500}
            alt=""
          />
        </div>

        <div className="z-50 text-white w-full px-6 md:px-20">
          <div className=" w-full md:mt-12 h-fit flex space-x-56 items-center justify-between">
            <div className="md:w-1/2 text-center md:text-start w-full">
              <p className="text-[2rem] md:text-[3.5rem] text-[#d1d1d1] font-black">
                Technology
              </p>

              <p className="text-sm md:text-[1.2rem] mt-6 md:mt-6 leading-7o font-light text-[#a1a1aa]">
                Experience the future of seamless transactions and access
                control with our advanced Near-Field Communication solutions
              </p>

              <CustomButton
                textStyles="uppercase text-sm sm:text-md font-bold"
                imageStyles="rounded-[35px]"
                func={() => setModalActive(true)}
                containerStyles="mt-6 py-3 sm:py-4 self-center sm:self-start w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>

            <div className="hidden w-1/2 h-fit relative md:flex items-center justify-end">
              <Image
                src={mockUp}
                className={`object-fill `}
                width={windowWidth / 3}
                height={600}
                alt="Decorative Hand"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 gap-16 px-5 md:px-20">
        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-9 md:gap-12 w-full px-5 md:px-12 rounded-3xl">
          <div className="w-full hidden md:flex h-full pt-6">
            <Image
              src={campusAccess}
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>

          <div className=" w-full px-4 pt-6 md:pt-0 flex flex-col gap-4">
            <p className="capitalize text-2xl md:text-3xl font-black">Campus access</p>

            <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
              Seamless entry to buildings and facilities with a simple tap
            </p>

            <div className="w-full grid grid-cols-1 gap-1 md:gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Instant authentication
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time access logs
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Integration with campus security
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex md:hidden h-full ">
            <Image
              src={campusAccess}
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-9 md:gap-12 w-full md:px-12 rounded-3xl">
          <div className="w-full md:px-4 px-9 pt-6 md:pt-0 flex flex-col gap-5">
            <p className="capitalize text-2xl md:text-3xl font-black">merchant payments</p>

            <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
              Transform any smartphone into a powerful payment terminal
            </p>

            <div className="w-full grid grid-cols-1 gap-1 md:gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Contactless transactions
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time access logs
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Digital receipts
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex max-h-[500px] md:pt-6 overflow-hidden relative h-full">
            <Image
              src={merchantPay}
              className="w-full h-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-9 md:gap-12 w-full rounded-3xl">
          <div className="w-full hidden md:flex max-h-[500px] pt-6 overflow-hidden relative h-full">
            <Image
              src={digitalBnk}
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>

          <div className=" w-full md:px-4 px-9 pt-6 md:pt-0 flex flex-col gap-4">
            <p className="capitalize text-2xl md:text-3xl font-black">digital banking</p>

            <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
              Secure integration with virtual accounts and banking services
            </p>

            <div className="w-full grid grid-cols-1 gap-1 md:gap-4">
              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Multi-Currency support
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Real-Time transfers
                </p>
              </div>

              <div className="flex space-x-4 w-full items-center">
                <Image
                  src={mark}
                  className="object-contain"
                  width={13}
                  height={13}
                  alt=""
                />

                <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">
                  Enhanced security
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex md:hidden h-full mt-6">
            <Image
              src={digitalBnk}
              className="w-full object-contain"
              width={0}
              height={0}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80">
          <Image
            src={
              windowWidth > 1200
                ? bannerImage2
                : bannerImage1
            }
            priority
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
                func={() => setModalActive(true)}
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
