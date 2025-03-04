"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { IoChevronForward } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { bgImage, heroBg } from "@/constants/images";

const Hero = ({ isActive, setIsActive }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden h-[70vh] md:h-screen w-full flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {/* Background Image with Smooth Fade-in */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={bgImage}
          className="w-full h-full object-cover rounded-full"
          width={windowWidth}
          priority
          height={10000}
          alt=""
        />
      </motion.div>

      {/* Background Overlay */}
      <motion.div
        className="absolute bottom-0 z-1 bg-transparent w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={heroBg}
          priority
          className="w-full h-full object-fill"
          width={windowWidth}
          height={1000}
          alt="Hero"
        />
      </motion.div>

      {/* Hero Content with Soft Motion Effects */}
      <motion.div
        className="z-40 text-white flex flex-col items-center p-3 sm:mb-[100px] mb-[50px] sm:gap-3"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Tagline with Hover Effect */}
        <motion.div
          className="bg-white/10 flex items-center space-x-1 px-3 py-0.5 mb-3 sm:mb-0 rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="capitalize text-[.6rem] text-[#a1a1aa]">
            Smart, secure, seamless
          </span>
          <span>&#8729;</span>
          <div
            onClick={() => router.push("/products")}
            className="text-[13px] font-semibold flex items-center space-x-1.5 cursor-pointer"
          >
            <span className="text-[10px]">Learn more</span> <IoChevronForward />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          className="sm:text-[70px] text-[45px] leading-[3rem] uppercase flex flex-col items-center justify-center sm:leading-[4.5rem] font-roboto font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        >
          <span>Access</span>
          <span>
            Pay. <motion.span className="text-[#fff]/50">Thrive.</motion.span>
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.div
          className="text-[1rem] sm:text-lg font-normal text-[#b0b0b8] mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          Revolutionizing campuses with Near-field technology
        </motion.div>

        {/* Button with Scale Animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <CustomButton
            func={() => setIsActive(true)}
            textStyles="uppercase text-[16px] font-bold"
            containerStyles="mt-5 py-2 px-6 rounded-[35px]"
            imageStyles="rounded-[35px]"
            title="Join the waitlist"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
