"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import {
  bAnalys,
  bannerImage1,
  bannerImage2,
  bgImage,
  campus,
  card,
  easyStp,
  identity,
  instantSettle,
  linkedCards,
  mockUp,
  secureBnk,
  vAccts,
} from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { setModalActive } = useGlobalContext();

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="relative h-[70vh] md:h-screen font-roboto w-full flex flex-col items-center justify-center">
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
          <div className=" w-full md:mt-12 h-full flex space-x-56 items-center justify-between">
            <div className="md:w-1/2 text-center md:text-start w-full">
              <p className="text-3xl md:text-[3.5rem] text-[#d1d1d1] font-black">
                Our Products
              </p>

              <p className="text-sm md:text-[1.3rem] md:leading-[1.5rem] mt-4 md:mt-6 font-light text-[#a1a1aa]">
                Discover the perfect NearSwipe solution for your needs, whether
                you're a student, business owner, or institution.
              </p>

              <CustomButton
                textStyles="uppercase text-sm md:text-md font-bold"
                imageStyles="rounded-[35px]"
                func={() => setModalActive(true)}
                containerStyles="mt-6 py-3 md:py-4 self-center md:self-start w-full md:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>

            <div className="hidden w-1/2 h-fit mt-5 relative md:flex items-center justify-end">
              <Image
                src={mockUp}
                priority
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
        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-12 rounded-3xl">
          <div>
            <p className="text-[2.5rem] text-center font-bold">
              NearSwipe Student/Staff
            </p>

            <p className="text-sm md:text-[17px] text-center leading-7o font-light mt-1 text-[#a1a1aa]">
              NFC-enabled smart cards transforming campus life with seamless
              access and payments.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={campus}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">campus access</p>

              <p className="text-sm md:text-[17px] w-full   text-center font-light text-[#a1a1aa]">
                Tap to enter buildings, labs, and facilities
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={card}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">smart payments</p>

              <p className="text-sm md:text-[17px] w-full   text-center font-light text-[#a1a1aa]">
                Cashless transactions for cafeteria, bookstore, and more
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={identity}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">Identity verification</p>

              <p className="text-sm md:text-[17px]  w-full text-center font-light text-[#a1a1aa]">
                Secure authentication for exams and events
              </p>
            </div>
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6  rounded-3xl">
          <div>
            <p className="text-[2.5rem] text-center font-bold">
              NearSwipe Merchant
            </p>

            <p className="text-sm md:text-[17px] text-center leading-7o font-light mt-1 text-[#a1a1aa]">
              Transform any smartphone into a powerful NFC payment terminal.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={easyStp}
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">Easy setup</p>

              <p className="text-sm md:text-[17px] w-full   text-center font-light text-[#a1a1aa]">
                Start accepting payments in minutes
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={instantSettle}
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">instant settlements</p>

              <p className="text-sm md:text-[17px] w-full   text-center font-light text-[#a1a1aa]">
                Get paid immediatelyafter each transaction
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={bAnalys}
                  className="object-contain"
                  width={35}
                  height={35}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">business analytics</p>

              <p className="text-sm md:text-[17px]  w-full text-center font-light text-[#a1a1aa]">
                Track sales and growth in real-time
              </p>
            </div>
          </div>
        </div>

        <div className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-12 rounded-3xl">
          <div>
            <p className="text-[2.5rem] text-center font-bold">
              NearSwipe Bank
            </p>

            <p className="text-sm md:text-[17px] text-center leading-7o font-light mt-1 text-[#a1a1aa]">
              Virtual accounts that make digital banking seamless and secure.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={vAccts}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">virtual accounts</p>

              <p className="text-sm md:text-[17px] w-full  text-center font-light text-[#a1a1aa]">
                Instant account creation and management
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={linkedCards}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">linked cards</p>

              <p className="text-sm md:text-[17px] w-full   text-center font-light text-[#a1a1aa]">
                Connect your NFC cards for easy payments
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                <Image
                  src={secureBnk}
                  className="object-contain"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>

              <p className="capitalize text-xl">secure banking</p>

              <p className="text-sm md:text-[17px]  w-full text-center font-light text-[#a1a1aa]">
                Enhance security for all transactions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <div className="relative flex flex-col rounded-2xl border items-center justify-center w-full md: 0">
          <Image
            src={windowWidth > 1200 ? bannerImage2 : bannerImage1}
            priority
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />

          <div className="z-40 w-full py-10 flex justify-center">
            <div className="w-full md:w-[50%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[2.5rem] text-center md:leading-[2.5rem]">
                Ready to Transform Your Financial future?
              </h1>

              <p className="text-center font-normal md:text-[1.2.5rem]">
                Join thousands of users already experiencing the future of
                banking, business and campus life.
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
