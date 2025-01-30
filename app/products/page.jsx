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
    <div>
      <div className="relative h-screen font-roboto w-full flex flex-col items-center justify-center">
        {isActive && (
          <WaitlistModal isActive={isActive} setIsActive={setIsActive} />
        )}
        {/* Responsive image container */}
        <div
          className={`absolute -z-2 ${
            windowWidth > 768 ? "w-[850px] h-[850px]" : "w-[300px] h-[300px]"
          } rounded-full -top-[150px]`}
        >
          <Image
            src="/assets/hero-gradient.png"
            className="w-full h-full object-cover rounded-full"
            width={500}
            height={500}
            alt="Hero"
          />
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-black/85 via-black/70 to-black/0 h-screen w-full"></div>
        <div
          className={`absolute -z-1 bg-[#283BE5]/80 ${
            windowWidth > 768 ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
          } -top-[200px] rounded-full`}
        ></div>

        <div className="z-50 text-white w-full px-20">
          <div className=" w-full mt-12 h-fit flex space-x-56 items-center justify-between">
            <div className="md:w-1/2 w-full">
              <p className="text-[5rem] text-[#d1d1d1] font-black">
                Our Products
              </p>

              <p className="text-[1.479rem] leading-7o font-light text-[#a1a1aa]">
                Discover the perfect NearSwipe solution for your needs, whether
                you're a student, business owner, or institution.
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
        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-12 rounded-3xl">
          <div>
            <p className="text-[3rem] text-center font-bold">
              NearSwipe Student/Staff
            </p>

            <p className="text-lg text-center leading-7o font-light mt-3 text-[#a1a1aa]">
              NFC-enabled smart cards transforming campus life with seamless
              access and payments.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/campus.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">campus access</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Tap to enter buildings, labs, and facilities
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/card.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">smart payments</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Cashless transactions for cafeteria, bookstore, and more
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/identity.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">Identity verification</p>

              <p className="text-lg  w-[73%] text-center font-light text-[#a1a1aa]">
                Secure authentication for exams and events
              </p>
            </div>
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-12 rounded-3xl">
          <div>
            <p className="text-[3rem] text-center font-bold">
              NearSwipe Merchant
            </p>

            <p className="text-lg text-center leading-7o font-light mt-3 text-[#a1a1aa]">
              Transform any smartphone into a powerful NFC payment terminal.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/easy-setup.svg"
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">Easy setup</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Start accepting payments in minutes
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/instant-settle.svg"
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">instant settlements</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Get paid immediatelyafter each transaction
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/b-analysis.svg"
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">business analytics</p>

              <p className="text-lg  w-[73%] text-center font-light text-[#a1a1aa]">
                Track sales and growth in real-time
              </p>
            </div>
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-12 rounded-3xl">
          <div>
            <p className="text-[3rem] text-center font-bold">NearSwipe Bank</p>

            <p className="text-lg text-center leading-7o font-light mt-3 text-[#a1a1aa]">
              Virtual accounts that make digital banking seamless and secure.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/virtual-accts.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">virtual accounts</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Instant account creation and management
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/linked-cards.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">linked cards</p>

              <p className="text-lg w-[73%] text-center font-light text-[#a1a1aa]">
                Connect your NFC cards for easy payments
              </p>
            </div>

            <div className="flex w-1/3 flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src="/assets/secure-bank.svg"
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">secure banking</p>

              <p className="text-lg  w-[73%] text-center font-light text-[#a1a1aa]">
                Enhance security for all transactions
              </p>
            </div>
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
            <div className="w-full md:w-[45%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[3rem] text-center md:leading-[3.8rem]">
                Ready to Transform Your Financial future?
              </h1>

              <p className="text-center font-normal md:text-[1.3rem]">
                Join thousands of users already experiencing the future of
                banking, business and campus life.
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
