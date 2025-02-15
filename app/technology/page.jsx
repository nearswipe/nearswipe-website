"use client";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  bannerImage1,
  bannerImage2,
  bgImage,
  campusAccess,
  digitalBnk,
  mark,
  merchantPay,
  mockUp,
} from "@/constants/images";

// Reusable section component with animation
const FeatureSection = ({ title, description, image, features, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col md:flex-row items-center gap-9 md:gap-12 w-full px-5 md:px-12 pt-6 rounded-3xl overflow-hidden"
    >
      {/* Image for larger screens */}
      <div className={`w-full ${reverse ? "md:order-2" : ""} hidden md:flex h-full`}>
        <Image src={image} className="w-full object-contain" width={500} height={500} alt="" />
      </div>

      {/* Text Content */}
      <div className="w-full px-4 flex flex-col gap-4">
        <p className="capitalize text-2xl md:text-3xl font-black">{title}</p>
        <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">{description}</p>

        <div className="w-full grid grid-cols-1 gap-1 md:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4 w-full items-center">
              <Image src={mark} className="object-contain" width={16} height={16} alt="" />
              <p className="text-md md:text-lg w-full font-light text-[#a1a1aa]">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image for mobile */}
      <div className="w-full flex md:hidden h-full mt-6">
        <Image src={image} className="w-full object-contain" width={500} height={500} alt="" />
      </div>
    </motion.div>
  );
};

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { setModalActive } = useGlobalContext();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[90vh]  font-roboto w-full flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute w-full h-full inset-0">
          <Image src={bgImage} className="w-full h-full object-cover" width={windowWidth} height={500} alt="" priority />
        </div>

        {/* Hero Content */}
        <div className="z-50 text-white w-full px-6 md:px-20">
          <div className="w-full md:mt-12 h-fit flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 text-center md:text-start w-full"
            >
              <p className="text-[2rem] md:text-[3rem] lg:text-[5rem] text-[#d1d1d1] font-black">Technology</p>
              <p className="md:text-[1.2rem] mt-6 leading-7 font-light text-[#a1a1aa]">
                Experience the future of seamless transactions and access control with our advanced NFC solutions.
              </p>
              <CustomButton
                textStyles="uppercase text-sm md:text-md font-bold"
                containerStyles="mt-6 py-3 md:py-4 self-center md:self-start w-full md:w-fit px-6 rounded-[35px]"
                func={() => setModalActive(true)}
                title="Join the waitlist"
              />
            </motion.div>

            {/* Mockup Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="hidden w-1/2 h-fit md:flex items-center justify-end"
            >
              <Image src={mockUp} className="object-fill" width={windowWidth / 3} height={600} alt="Decorative Hand" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="flex flex-col mt-10 gap-16 px-5 md:px-20">
        <FeatureSection
          title="Campus Access"
          description="Seamless entry to buildings and facilities with a simple tap."
          image={campusAccess}
          features={["Instant authentication", "Real-time access logs", "Integration with campus security"]}
          reverse={false}
        />

        <FeatureSection
          title="Merchant Payments"
          description="Transform any smartphone into a powerful payment terminal."
          image={merchantPay}
          features={["Contactless transactions", "Real-time logs", "Digital receipts"]}
          reverse={true}
        />

        <FeatureSection
          title="Digital Banking"
          description="Secure integration with virtual accounts and banking services."
          image={digitalBnk}
          features={["Multi-currency support", "Real-time transfers", "Enhanced security"]}
          reverse={false}
        />
      </div>

      {/* Security Banner */}
      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80"
        >
          <Image
            src={windowWidth > 1200 ? bannerImage2 : bannerImage1}
            priority
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />
          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[2rem] text-center md:leading-[3rem]">Enterprise-Grade Security</h1>
              <p className="text-center text-[#656573] font-light md:text-[1.2rem]">Our NFC technology is protected by military-grade encryption.</p>
              <CustomButton func={() => setModalActive(true)} title="Join the waitlist" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
