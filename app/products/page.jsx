"use client";
import { motion, useInView } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

// Section Data
const sectionsData = [
  {
    title: "NearSwipe Campus",
    description:
      "Multi-functional Smart-ID card for Access Control, Identity Verification and Cashless Payments.",
    features: [
      {
        title: "Seamless Student & Staff Identification",
        description:
          "Secure NFC smart ID cards for virtual and physical verification.",
        icon: campus,
      },
      {
        title: "Campus-Wide Payments & Services",
        description:
          "Pay for tuition, meals, transportation, and online transactions using one digital wallet.",
        icon: card,
      },
      {
        title: "Security & Access Control",
        description:
          "Automated entry for dorms, libraries, classrooms, and exams with fraud prevention.",
        icon: identity,
      },
    ],
  },
  {
    title: "NearSwipe Business",
    description:
      "Corporate Security, Payments, & Access Control",
    features: [
      {
        title: "Smart Employee ID & Attendance Tracking",
        description: "NFC-powered office entry, time management, and visitor check-ins.",
        icon: easyStp,
      },
      {
        title: "Seamless Payroll & Business Payments",
        description: "Corporate expense cards, vendor payments, and salary disbursements.",
        icon: instantSettle,
      },
      {
        title: "Enterprise-Level Security & Compliance",
        description: "Two-factor authentication (2FA), access logs, and compliance tracking.",
        icon: bAnalys,
      },
    ],
  },
  {
    title: "NearSwipe Personal",
    description:
      "Bank, Save, Invest, Pay - All in One App",
    features: [
      {
        title: "Instant Banking",
        description: "Open a multi-tiered account in minutes with BVN/NIN verification and enjoy global access. Get a multi-currency account (NGN, USD, GBP, EUR, Crypto) and real-time banking insights to keep your finances in check.",
        icon: vAccts,
      },
      {
        title: "Universal Payments & Transfers",
        description: "From Tap to Pay to Crypto, NearSwipe makes payments seamless. Send money from and to anywhere, pay with a tap, and manage subscriptions-all in one app.",
        icon: linkedCards,
      },
      {
        title: "Smarter Savings & Investments",
        description: "Grow your money effortlessly with Al-powered savings and investment tools. Save smarter with auto-roundups and get investment recommendations tailored to your goals.",
        icon: secureBnk,
      },
    ],
  },
];

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-screen font-roboto w-full flex flex-col items-center justify-center">
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="w-full md:mt-12 h-full flex space-x-56 items-center justify-between"
          >
            <div className="md:w-1/2 text-center md:text-start w-full">
              <p className="lg:text-[5rem] md:text-[3rem] text-[2rem] text-[#d1d1d1] font-black">
                Our Products
              </p>
              <p className="md:text-[1.3rem] md:leading-[1.5rem] mt-4 md:mt-6 font-light text-[#a1a1aa]">
                Discover the perfect NearSwipe solution—whether you’re a
                university, corporation, or individual user.
              </p>
              <CustomButton
                textStyles="uppercase text-sm md:text-md font-bold"
                imageStyles="rounded-[35px]"
                func={() => setModalActive(true)}
                containerStyles="mt-6 py-3 md:py-4 self-center md:self-start w-full md:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden w-1/2 h-fit mt-5 md:flex items-center justify-end"
            >
              <Image
                src={mockUp}
                priority
                className="object-fill"
                width={windowWidth / 3}
                height={600}
                alt="Decorative Hand"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Sections with Scroll Animation */}
      <div className="flex flex-col mt-10 gap-16 px-5 md:px-20">
        {sectionsData.map((section, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            triggerOnce: true,
            threshold: 0.3,
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="z-50 font-roboto text-white bg-[#1e1e1e] flex flex-col items-center gap-12 w-full p-6 px-10 rounded-3xl"
            >
              <div>
                <p className="text-[2.5rem] text-center font-bold">
                  {section.title}
                </p>
                <p className="md:text-[17px] text-center leading-7 font-light mt-1 text-[#a1a1aa]">
                  {section.description}
                </p>
              </div>

              <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3">
                {section.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    variants={fadeUp}
                    className="flex w-full flex-col items-center gap-4"
                  >
                    <div className="w-20 h-20 bg-[#282828] flex items-center justify-center rounded-xl">
                      <Image
                        src={feature.icon}
                        className="object-contain"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </div>
                    <p className="capitalize text-xl">{feature.title}</p>
                    <p className="md:text-[17px] w-full text-center font-light text-[#a1a1aa]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
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

export default Page;
