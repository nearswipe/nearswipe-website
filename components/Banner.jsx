"use client";

import React, { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { bannerImage1, bannerImage2 } from "@/constants/images";

const Banner = ({ setIsActive }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const bannerRef = useRef(null);
  const isBannerInView = useInView(bannerRef, { once: true });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.div
      ref={bannerRef}
      initial={{ opacity: 0 }}
      animate={isBannerInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="flex md:p-20 p-5 mt-16 font-roboto"
    >
      <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={windowWidth > 1200 ? bannerImage1 : bannerImage2}
            priority
            className="z-40 w-full h-full absolute rounded-2xl object-cover"
            width={400}
            height={400}
            alt=""
          />
        </motion.div>

        <div className="absolute z-50 w-full flex md:justify-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 px-4 md:px-8 flex flex-col md:items-start items-center gap-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-2xl font-black md:text-[3rem] text-center md:text-start md:leading-[3.8rem]"
            >
              Ready to Transform Your Financial Future?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-center md:text-start text-[#656573] font-light md:text-[1.2rem]"
            >
              Join thousands of users already experiencing the future of
              banking, business, and campus life.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CustomButton
                textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                imageStyles="rounded-[35px]"
                func={() => setIsActive(true)}
                containerStyles="py-3 sm:py-4 w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
