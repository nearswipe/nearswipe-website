"use client";

import { motion } from "framer-motion";
import {
  growWelt,
  instantSet,
  secure,
  secureAccess,
  smartAnalys,
  smartBnk,
  successful,
  support,
  tap2pay,
  vCard,
} from "@/constants/images";
import Image from "next/image";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Banking = () => {
  return (
    <div className="font-roboto text-white w-full h-full bg-black sm:py-12 px-6 sm:px-28">
      <div className="w-full h-full flex flex-col items-center">
        <motion.div
          className="p-2 sm:w-2/3 w-full h-full flex flex-col items-center sm:px-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p className="uppercase text-sm tracking-[0.3rem] text-[#635BFF]">banking</p>
          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            The everything banking app
          </h5>
          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-3">
            More than just banking—It’s your financial partner for life.
            Nearswipe brings together everything you need to manage, grow, and protect your money, all in one beautiful app.
          </h5>
        </motion.div>

        <div className="w-full h-full grid grid-cols-1 gap-12 sm:grid-cols-2 mt-12">
          {[smartBnk, growWelt, support, secure].map((img, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" variants={imageFade}>
              <Image priority src={img} className="w-full object-cover" width={1000} height={1000} alt="" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Merchants Section */}
      <motion.div className="w-full h-full flex flex-col sm:mt-32 mt-16 items-center" initial="hidden" whileInView="visible" variants={fadeIn}>
        <div className="p-2 sm:w-2/3 w-full h-full flex flex-col items-center sm:px-10">
          <p className="uppercase text-sm sm:text-[15px] text-center font-medium tracking-[0.3rem] text-[#F59E0B]">
            for merchants
          </p>
          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            empower your business
          </h5>
          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-2">
            Transform any smartphone into a powerful payment terminal. Accept payments, manage your team, and grow your business with NearSwipe Merchant.
          </h5>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 mt-12">
          <motion.div initial="hidden" whileInView="visible" variants={imageFade}>
            <Image priority src={tap2pay} className="w-full object-cover" width={800} height={800} alt="" />
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {[instantSet, smartAnalys].map((img, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" variants={imageFade}>
                <Image priority src={img} className="w-full h-full" width={400} height={400} alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Students & Staff Section */}
      <motion.div className="w-full h-full flex flex-col sm:mt-32 mt-16 items-center" initial="hidden" whileInView="visible" variants={fadeIn}>
        <div className="p-2 sm:w-2/3 w-full h-full flex flex-col items-center sm:px-10">
          <p className="uppercase text-sm text-[15px] font-medium tracking-[0.3rem] text-[#EF4444]">
            for student & staff
          </p>
          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            campus life simplified
          </h5>
          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-2">
            One smart card for everything on campus. Access buildings, make payments, and manage your student life with a simple tap.
          </h5>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 mt-12">
          <div className="grid grid-cols-1 gap-12">
            {[successful, vCard].map((img, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" variants={imageFade}>
                <Image priority src={img} className="w-full h-full" width={1000} height={1000} alt="" />
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" variants={imageFade}>
            <Image priority src={secureAccess} className="w-full object-cover" width={1000} height={1000} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banking;
