"use client";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import { bannerImage1, bannerImage2, bgImage } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const { jobs, setModalActive } = useGlobalContext();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[70vh] md:h-screen overflow-hidden font-roboto w-full flex flex-col items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute w-full h-full inset-0">
          <Image src={bgImage} className="w-full h-full object-cover" width={windowWidth} height={500} alt="" priority />
        </div>

        {/* Hero Text */}
        <div className="z-50 text-white w-full mt-6 md:mt-12 px-6 md:px-20">
          <div className="w-full h-fit flex space-x-56 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex flex-col items-center"
            >
              <p className="lg:text-[5rem] md:text-[3rem] text-[2rem] text-center text-[#d1d1d1] font-black">
                Career
              </p>
              <p className="text-md md:text-[1.4rem] text-center mt-2 leading-7 font-light text-[#a1a1aa]">
                Join our team of innovators and help shape the future of Near-field technology.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
        className="w-full flex flex-col gap-8 px-5 text-white md:px-20"
      >
        {jobs.length !== 0 ? (
          jobs.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-sm md:text-xl font-bold">{item?.title}</p>
                <p className="flex items-center text-[#a1a1aa] text-[12px] md:text-[17px]">
                  {item?.jobLocation} <span className="mx-2 text-md text-3xl">&#8729;</span> {item?.jobType}
                </p>
              </div>

              <Link
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:px-6 px-4 py-2 md:text-[17px] text-[12px] cursor-pointer rounded-[35px] md:py-3 border font-medium uppercase"
              >
                Apply now
              </Link>
            </motion.div>
          ))
        ) : (
          <></>
        )}
      </motion.div>

      {/* Security Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex md:p-20 p-5 mt-16 font-roboto"
      >
        <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80">
          <Image
            src={windowWidth > 1200 ? bannerImage1 : bannerImage2}
            priority
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />

          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[2rem] text-center md:leading-[3rem]">
                Enterprise-Grade Security
              </h1>

              <p className="text-center text-[#656573] font-light md:text-[1.2rem]">
                Our NFC technology is protected by military-grade encryption, ensuring your data and transactions remain secure at all times.
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
      </motion.div>
    </div>
  );
};

export default page;
