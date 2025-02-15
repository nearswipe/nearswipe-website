"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import {
  bannerImage1,
  bannerImage2,
  bgImage,
  email,
  phone,
} from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { setModalActive } = useGlobalContext();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ADMIN_SERVER_URL}/api/contact/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div 
      className="relative w-full"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative lg:h-[50vh] h-[40vh] overflow-hidden font-roboto w-full flex flex-col items-center justify-center"
        variants={fadeIn}
      >
        <motion.div className="absolute" variants={imageFade}>
          <Image
            src={bgImage}
            className="w-full h-full object-cover"
            width={windowWidth}
            priority
            height={500}
            alt=""
          />
        </motion.div>

        <div className="z-50 text-white w-full mt-20 px-20">
          <motion.div className="w-full h-fit flex space-x-56 items-center justify-center" variants={fadeIn}>
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <motion.p className="lg:text-[5rem] md:text-[3rem] text-[2rem] text-center text-[#d1d1d1] font-black">
                Contact us
              </motion.p>
              <motion.p className="md:text-[1.4rem] text-center mt-2 font-light text-[#a1a1aa]">
                Please reach out to us, we want to hear from you
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Information & Form */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mt-16 px-5 text-white md:px-20">
        <motion.div className="w-full" variants={fadeIn}>
          <p className="text-xl font-semibold capitalize">contact information</p>

          <motion.div className="flex items-center space-x-5 mt-5" variants={fadeIn}>
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image src={email} priority className="object-contain" width={20} height={20} alt="" />
            </div>
            <div className="font-semibold">
              <p>Email</p>
              <Link className="text-sm text-[#a1a1aa] font-light" href="mailto:contact@nearswipe.com">
                team@nearswipe.com
              </Link>
            </div>
          </motion.div>

          <motion.div className="flex items-center space-x-5 mt-5" variants={fadeIn}>
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image src={phone} priority className="object-contain" width={20} height={20} alt="" />
            </div>
            <div className="font-semibold">
              <p>Phone</p>
              <Link href="tel:+234 806 364 2312" className="text-sm font-light text-[#a1a1aa]">
                +234 806 364 2312
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form onSubmit={submit} className="w-full" variants={fadeIn}>
          <div className="w-full bg-[#1e1e1e] p-6 rounded-2xl">
            <label htmlFor="name" className="text-[#a1a1aa]">Name</label>
            <input name="name" onChange={handleChange} type="text" className="w-full px-4 bg-[#282828] py-3 mt-2 mb-7 rounded-xl outline-none" />
            
            <label htmlFor="email" className="text-[#a1a1aa]">Email</label>
            <input name="email" onChange={handleChange} type="email" className="w-full px-4 bg-[#282828] py-3 mt-2 mb-7 rounded-xl outline-none" />

            <label htmlFor="message" className="text-[#a1a1aa] block">Message</label>
            <textarea name="message" onChange={handleChange} className="h-40 w-full px-4 bg-[#282828] py-3 mt-2 rounded-xl outline-none" />
          </div>

          <motion.button type="submit" className="w-full bg-white text-black py-3 text-xl font-semibold mt-7 rounded-[30px]" whileHover={{ scale: 1.05 }}>
            Get in touch
          </motion.button>
        </motion.form>
      </div>

      {/* Security Banner */}
      <motion.div className="flex md:p-20 p-5 mt-16 font-roboto" variants={fadeIn}>
        <div className="relative flex flex-col rounded-2xl border items-center justify-center w-full md:h-96 h-80">
          <motion.div className="absolute z-40 w-full h-full inset-0" variants={imageFade}>
            <Image src={windowWidth > 1200 ? bannerImage1 : bannerImage2} priority className="rounded-2xl absolute z-40 inset-0 w-full h-full object-cover" width={400} height={400} alt="" />
          </motion.div>

          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[2rem] text-center">Enterprise-Grade Security</h1>
              <p className="text-center text-[#656573] font-light md:text-[1.2rem]">Our NFC technology is protected by military-grade encryption.</p>
              <CustomButton title="Join the waitlist" containerStyles="py-3 sm:py-4 px-6 rounded-[35px]" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
