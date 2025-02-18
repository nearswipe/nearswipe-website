"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import {
  bannerImage1,
  bannerImage2,
  bgImage,
  border,
  dynamicBanner,
  mission,
  vision,
} from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const allJourney = [
  {
    date: "24th January 2025",
    title: "NOMINEE FINTECH STARTUP OF THE YEAR AWARD",
    desc: "Nominated for the FINTECH STARTUP OF THE YEAR in United States for the Northern American Startup Awards Edition 11.",
  },
  {
    date: "05th February 2025",
    title: "NOMINEE BEST NEWCOMER AWARD",
    desc: "Nominated for the BEST NEWCOMER OF THE YEAR in United States for the Northern American Startup Awards Edition 11.",
  },
  {
    date: "12th February 2025",
    title: "NOMINEE FOUNDER OF THE YEAR AWARD",
    desc: "Nominated for the FOUNDER OF THE YEAR AWARD in United States for the Northern American Startup Awards Edition 11.",
  },
];

const myTeam = [
  {
    name: "Joshua Inioluwa Jacob",
    position: "CEO & CTO",
    experience: "",
  },
  {
    name: "Samuel Oluwatobi Joseph",
    position: "COO & CMO",
    experience: "",
  },
  {
    name: "Augustine Gboru",
    position: "Executive Chairman & President",
    experience: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[65vh] md:h-screen font-roboto w-full flex flex-col items-center justify-center"
      >
        {/* Responsive Image Container */}
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-50 text-white w-full px-6 md:px-20"
        >
          <div className="w-full h-fit flex space-x-56 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col items-center">
              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:text-[5rem] md:text-[3rem] text-[2rem] text-center text-[#d1d1d1] font-black"
              >
                About us
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-md md:text-[1.4rem] text-center mt-2 leading-7 font-light text-[#a1a1aa]"
              >
                Experience the future of seamless transactions and access
                control with our advanced Near-Field Communication solutions.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <CustomButton
                  textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                  imageStyles="rounded-[35px]"
                  func={() => setModalActive(true)}
                  containerStyles="mt-6 py-3 sm:py-4 self-center w-full sm:w-fit px-6 rounded-[35px]"
                  title="Join the waitlist"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 text-white md:px-20"
      >
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center gap-5"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl"
          >
            <Image
              src={mission}
              className="object-contain"
              width={40}
              height={40}
              alt=""
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-[2.5rem] font-black capitalize"
          >
            Our mission
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-sm md:text-xl text-[#a1a1aa] font-light text-center"
          >
            To revolutionize identity, payments, and access with Near-field
            technology.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center gap-5"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl"
          >
            <Image
              src={vision}
              className="object-contain"
              width={40}
              height={40}
              alt=""
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-[2.5rem] font-black capitalize"
          >
            Our vision
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 text-sm md:text-xl text-[#a1a1aa] font-light text-center"
          >
            To become the global standard for NFC-enabled solutions in
            education, commerce, and finance.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:mt-16 px-5 mt-12 text-white md:px-20"
      >
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white mb-6 md:mb-12 text-center text-3xl md:text-[2.5rem] capitalize font-bold"
        >
          meet our team
        </motion.p>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {myTeam?.map((team, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5"
            >
              {/* Profile Picture Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-40 h-40 bg-[#282828] flex items-center justify-center rounded-xl"
              >
                {/* <Image
            src="/assets/mission.svg"
            className="object-contain"
            width={40}
            height={40}
            alt=""
          /> */}
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-[2rem] font-[600] capitalize text-center"
              >
                {team?.name}
              </motion.h1>

              {/* Position */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm md:text-xl text-[#a1a1aa] font-light text-center"
              >
                {team?.position}
              </motion.p>

              {/* Experience */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm md:text-xl text-[#a1a1aa] font-light text-center"
              >
                {team?.experience}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:mt-16 mt-12 px-5 text-white md:px-20"
      >
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white mb-6 md:mb-12 text-center text-3xl md:text-[2.5rem] capitalize font-bold"
        >
          our journey
        </motion.p>

        {/* Journey Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {allJourney?.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col items-center"
            >
              {/* Journey Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 bg-[#1e1e1e] p-8 rounded-2xl flex flex-col items-center gap-5"
              >
                {/* Date */}
                <p className="text-md text-[#635BFF] font-normal text-center">
                  {item?.date}
                </p>

                {/* Title */}
                <h1 className="text-2xl font-bold capitalize text-center">{item?.title}</h1>

                {/* Description */}
                <p className="text-md text-[#a1a1aa] font-light text-center">
                  {item?.desc}
                </p>
              </motion.div>

              {/* Border Image (Divider) */}
              {allJourney.length !== index + 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full h-fit flex items-center justify-center rounded-xl"
                >
                  <Image
                    src={border}
                    priority
                    className="object-contain"
                    width={24}
                    height={24}
                    alt=""
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Security Section */}
      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative flex flex-col rounded-2xl border items-center justify-center w-full"
        >
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
              <h1 className="text-2xl font-black md:text-[2rem] text-center md:leading-[3rem]">
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
        </motion.div>
      </div>
    </div>
  );
};

export default page;
