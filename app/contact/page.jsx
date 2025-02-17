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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    reason: "",
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
  
    await toast.promise(
      fetch(`${process.env.ADMIN_SERVER_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then(async (res) => {
        const data = await res.json();
  
        if (!data.success)
          throw new Error(data.error || "Something went wrong.");
  
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          reason: "",
          message: "",
        });
  
        return;
      }),
      {
        pending: "Sending your message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      }
    );
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
          <motion.div
            className="w-full h-fit flex space-x-56 items-center justify-center"
            variants={fadeIn}
          >
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
          <p className="text-xl font-semibold capitalize">
            contact information
          </p>

          <motion.div
            className="flex items-center space-x-5 mt-5"
            variants={fadeIn}
          >
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image
                src={email}
                priority
                className="object-contain"
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="font-semibold">
              <p>Email</p>
              <Link
                className="text-sm text-[#a1a1aa] font-light"
                href="mailto:contact@nearswipe.com"
              >
                team@nearswipe.com
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-5 mt-5"
            variants={fadeIn}
          >
            <div className="w-16 h-16 bg-[#282828] flex items-center justify-center rounded-xl">
              <Image
                src={phone}
                priority
                className="object-contain"
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="font-semibold">
              <p>Phone</p>
              <Link
                href="tel:+2348063642312"
                className="text-sm font-light text-[#a1a1aa]"
              >
                +234 806 364 2312
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form onSubmit={submit} className="w-full" variants={fadeIn}>
          <div className="w-full bg-[#1e1e1e] p-6 rounded-2xl">
            <label className="text-[#a1a1aa]">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full px-4 bg-[#282828] py-3 mt-2 mb-5 rounded-xl outline-none"
            />

            <label className="text-[#a1a1aa]">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full px-4 bg-[#282828] py-3 mt-2 mb-5 rounded-xl outline-none"
            />

            <label className="text-[#a1a1aa]">Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              className="w-full px-4 bg-[#282828] py-3 mt-2 mb-5 rounded-xl outline-none"
            />

            <label className="text-[#a1a1aa]">
              What Product are you contacting for?
            </label>
            <select
              name="reason"
              onChange={handleChange}
              className="w-full px-4 bg-[#282828] py-3 mt-2 mb-5 rounded-xl outline-none text-[#a1a1aa]"
            >
              <option value="">Select an option</option>
              <option value="NearSwipe For Campus">NearSwipe For Campus</option>
              <option value="NearSwipe For Business">
                NearSwipe For Business
              </option>
              <option value="NearSwipe For Personal">
                NearSwipe For Personal
              </option>
              <option value="Others">Others</option>
            </select>

            <label className="text-[#a1a1aa]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-40 w-full px-4 bg-[#282828] py-3 mt-2 rounded-xl outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full hover:bg-white/80 bg-white text-black py-3 text-xl font-semibold mt-7 rounded-[30px]"
            whileHover={{ scale: 1.05 }}
          >
            Get in touch
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Page;
