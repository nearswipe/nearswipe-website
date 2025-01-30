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
  }

  return (
    <div className="relative w-full">
      {isActive && (
        <WaitlistModal isActive={isActive} setIsActive={setIsActive} />
      )}
      <div className="relative h-[70vh] font-roboto w-full flex flex-col items-center justify-center">
        {/* Responsive image container */}
        <div
          className={`absolute -z-2 ${
            windowWidth > 768 ? "w-[850px] h-[100vh]" : "w-[300px] h-[300px]"
          } rounded-full -top-[130px]`}
        >
          <Image
            src="/assets/hero-gradient.png"
            className="w-full h-[90%] object-cover rounded-full"
            width={500}
            height={500}
            alt="Hero"
          />
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-black/85 via-black/70 to-black/0 h-[70vh] w-full"></div>

        <div
          className={`absolute -z-1 bg-[#283BE5]/80 ${
            windowWidth > 768 ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
          } -top-[200px] rounded-full`}
        ></div>

        <div className="z-50 text-white w-full mt-20 px-20">
          <div className=" w-full h-fit flex space-x-56 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <p className="text-[5.5rem] text-center text-[#d1d1d1] font-black">
                Contact us
              </p>

              <p className="text-[1.4rem] text-center mt-2 leading-7o font-light text-[#a1a1aa]">
                Please reach out to us, we want to hear from you
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16 sm:mt-16 px-5 text-white md:px-20">
        <div className="w-full">
          <p className="text-xl font-semibold capitalize">contact information</p>

          <div className="flex items-center space-x-5 mt-5">
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image
                src="/assets/email.svg"
                className="object-contain"
                width={20}
                height={20}
                alt=""
              />
            </div>

            <div className="font-semibold">
              <p>Email</p>

              <Link className="text-sm text-[#a1a1aa] font-light" href="mailto:contact@nearswipe.com">
                contact@nearswipe.com
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-5 mt-5">
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image
                src="/assets/phone.svg"
                className="object-contain"
                width={20}
                height={20}
                alt=""
              />
            </div>

            <div className="font-semibold">
              <p>Phone</p>

              <Link href="tel:+12345667890" className="text-sm font-light text-[#a1a1aa]">
                +234 123 456 7890
              </Link>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="w-full" >
            <div className="w-full bg-[#1e1e1e] p-6 rounded-2xl">
                <label htmlFor="name" className="text-[#a1a1aa]">Name</label>

                <input name="name" id="name" className="w-full px-4 bg-[#282828] py-3 mt-2 mb-7 rounded-xl focus-within:outline-[#635BFF] outline-none" />

                <label htmlFor="email" className="text-[#a1a1aa]">Email</label>

                <input name="email" id="email" type="email" className="w-full px-4 bg-[#282828] py-3 mt-2 mb-7 rounded-xl focus-within:outline-[#635BFF] outline-none" />

                <label htmlFor="message" className="text-[#a1a1aa] block">Message</label>

                <textarea name="message" id="message" className="h-40 w-full px-4 bg-[#282828] py-3 mt-2 rounded-xl focus-within:outline-[#635BFF] outline-none" />
            </div>

            <button type="submit" className="text-black w-full bg-white text-center py-3 text-xl font-semibold capitalize mt-7 rounded-[30px]">Get in touch</button>
        </form>
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
