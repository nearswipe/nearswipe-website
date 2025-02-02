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
      <div className="relative h-[65vh] sm:h-screen font-roboto w-full flex flex-col items-center justify-center">
        {/* Responsive image container */}
        <div className="absolute w-full h-full inset-0">
          <Image
            src="/assets/bg.svg"
            className="w-full h-full object-cover"
            width={windowWidth}
            priority
            height={500}
            alt=""
          />
        </div>

        <div className="z-50 text-white w-full px-6 md:px-20">
          <div className=" w-full  h-fit flex space-x-56 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <p className="text-[2.2rem] md:text-[3.5rem] text-center text-[#d1d1d1] font-black">
                About us
              </p>

              <p className="text-md md:text-[1.4rem] text-center mt-2 leading-7o font-light text-[#a1a1aa]">
                Experience the future of seamless transactions and access
                control with our advanced Near-Field Communication solutions
              </p>
              

              <CustomButton
                textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                imageStyles="rounded-[35px]"
                func={() => setIsActive(true)}
                containerStyles="mt-6 py-3 sm:py-4 self-center w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 text-white md:px-20">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/mission.svg"
              className="object-contain"
              width={40}
              height={40}
              alt=""
            />
          </div>

          <h1 className="text-2xl md:text-[2.5rem] font-black capitalize">Our mission</h1>

          <p className="w-full md:w-1/2 text-sm md:text-xl text-[#a1a1aa] font-light text-center">
            To revolutionize identity, payments, and access with
            Near-fieldtechnology.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/vision.svg"
              className="object-contain"
              width={40}
              height={40}
              alt=""
            />
          </div>

          <h1 className="text-2xl md:text-[2.5rem] font-black capitalize">Our vision</h1>

          <p className="w-full md:w-2/3 text-sm md:text-xl text-[#a1a1aa] font-light text-center">
            To become the global standard for NFC-enabled solutions in
            education,commerce, and finance.
          </p>
        </div>
      </div>

      <div className="w-full sm:mt-16 px-5 mt-12 text-white md:px-20">
        <p className="text-white mb-6 md:mb-12 text-center text-3xl md:text-[2.5rem] capitalize font-bold">
          meet our team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="w-full bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <div className="w-40 h-40 bg-[#282828] flex items-center justify-center rounded-xl">
              {/* <Image
                src="/assets/mission.svg"
                className="object-contain"
                width={40}
                height={40}
                alt=""
              /> */}
            </div>

            <h1 className="text-2xl md:text-[2rem] font-black capitalize">Sarah Johnson</h1>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              CEO & Founder
            </p>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              Fintech veteran with +10 years of experience in payment solutions
            </p>
          </div>

          <div className="w-full bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <div className="w-40 h-40 bg-[#282828] flex items-center justify-center rounded-xl">
              {/* <Image
                src="/assets/mission.svg"
                className="object-contain"
                width={40}
                height={40}
                alt=""
              /> */}
            </div>

            <h1 className="text-2xl md:text-[2rem] font-black capitalize">Sarah Johnson</h1>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              CEO & Founder
            </p>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              Fintech veteran with +10 years of experience in payment solutions
            </p>
          </div>

          <div className="w-full bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <div className="w-40 h-40 bg-[#282828] flex items-center justify-center rounded-xl">
              {/* <Image
                src="/assets/mission.svg"
                className="object-contain"
                width={40}
                height={40}
                alt=""
              /> */}
            </div>

            <h1 className="text-2xl md:text-[2rem] font-black capitalize">Sarah Johnson</h1>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              CEO & Founder
            </p>

            <p className="text-sm md:text-xl text-[#a1a1aa] font-light text-center">
              Fintech veteran with +10 years of experience in payment solutions
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-16 mt-12 px-5 text-white md:px-20">
        <p className="text-white mb-6 md:mb-12 text-center text-3xl md:text-[2.5rem] capitalize font-bold">
          our journey
        </p>

        <div className="flex flex-col items-center">
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <p className="text-md text-[#635BFF] font-normal text-center">
              March 2023
            </p>

            <h1 className="text-2xl font-bold capitalize">NearSwipe Founded</h1>

            <p className="text-md text-[#a1a1aa] font-light text-center">
              Started a journey to revolutionize NFC payments and identity
              solutions
            </p>
          </div>

          <div className="w-full h-fit flex items-center justify-center rounded-xl">
            <Image
              src="/assets/border.svg"
              className="object-contain"
              width={24}
              height={24}
              alt=""
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <p className="text-md text-[#635BFF] font-normal text-center">
              March 2023
            </p>

            <h1 className="text-2xl font-bold capitalize">NearSwipe Founded</h1>

            <p className="text-md text-[#a1a1aa] font-light text-center">
              Started a journey to revolutionize NFC payments and identity
              solutions
            </p>
          </div>

          <div className="w-full h-fit flex items-center justify-center rounded-xl">
            <Image
              src="/assets/border.svg"
              className="object-contain"
              width={24}
              height={24}
              alt=""
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <p className="text-md text-[#635BFF] font-normal text-center">
              March 2023
            </p>

            <h1 className="text-2xl font-bold capitalize">NearSwipe Founded</h1>

            <p className="text-md text-[#a1a1aa] font-light text-center">
              Started a journey to revolutionize NFC payments and identity
              solutions
            </p>
          </div>

          <div className="w-full h-fit flex items-center justify-center rounded-xl">
            <Image
              src="/assets/border.svg"
              className="object-contain"
              width={24}
              height={24}
              alt=""
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <p className="text-md text-[#635BFF] font-normal text-center">
              March 2023
            </p>

            <h1 className="text-2xl font-bold capitalize">NearSwipe Founded</h1>

            <p className="text-md text-[#a1a1aa] font-light text-center">
              Started a journey to revolutionize NFC payments and identity
              solutions
            </p>
          </div>

          <div className="w-full h-fit flex items-center justify-center rounded-xl">
            <Image
              src="/assets/border.svg"
              className="object-contain"
              width={24}
              height={24}
              alt=""
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5">
            <p className="text-md text-[#635BFF] font-normal text-center">
              March 2023
            </p>

            <h1 className="text-2xl font-bold capitalize">NearSwipe Founded</h1>

            <p className="text-md text-[#a1a1aa] font-light text-center">
              Started a journey to revolutionize NFC payments and identity
              solutions
            </p>
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
