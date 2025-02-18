"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import ConfettiBackground from "./ConfettiBackground";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const WaitlistModal = () => {
  const { modalActive, setModalActive } = useGlobalContext();
  const [form, setForm] = useState({ name: "", email: "", reason: "" });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setIsSubmitting(true);
    setErrorMsg("")
    try {
      const response = await fetch(`/api/newsletter-subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setForm({ name: "", email: "", reason: "" });
        setIsSubscribed(true);
        setErrorMsg("");
      } else {
        const e = await response.json();
        setErrorMsg(JSON.parse(e?.error).title);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {modalActive && (
        <motion.div
          className="z-[80] fixed inset-0 flex items-center justify-center bg-black/40 px-6"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
        >
          <motion.div
            className="absolute inset-0 z-50"
            onClick={() => setModalActive(false)}
          />

          <motion.div
            className="relative z-[100] w-full md:w-1/2 bg-white text-black rounded-xl border p-5 md:p-8 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {isSubscribed && <ConfettiBackground trigger={isSubscribed} />}

            {/* Close Button */}
            <motion.div
              className="flex items-center justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            >
              <div
                onClick={() => setModalActive(false)}
                className="p-2 cursor-pointer text-[1rem] font-black rounded-full bg-gray-300 hover:bg-gray-400 transition"
              >
                <LiaTimesSolid />
              </div>
            </motion.div>

            {/* Modal Title & Description */}
            <motion.h3
              className={`text-center font-bold text-3xl md:text-[2.7rem] ${
                isSubscribed && "mt-6"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
            >
              {isSubscribed ? "Congratulations!" : "Join the waitlist"}
            </motion.h3>

            {!isSubscribed && (
              <motion.h3
                className="text-base md:text-lg text-center text-[#656573] mt-1 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                Get early access now!
              </motion.h3>
            )}

            {errorMsg !== "" && (
              <motion.h3
                className="text-sm md:mt-1 text-center text-red-500 font-normal"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                {errorMsg}
              </motion.h3>
            )}

            {/* Input Fields */}
            {isSubscribed ? (
              <motion.h3
                className="text-base md:text-lg text-center text-[#656573] mt-5 md:mt-8 font-normal"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                You have successfully joined the waitlist of our app. Thank you
                for your interest in NearSwipe Bank! We're excited to have you
                on board and will keep you updated on your application status.
                Stay tuned for more information!
              </motion.h3>
            ) : (
              <>
                {/* Name Input */}
                <motion.input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="px-6 text-sm focus-within:outline-[#635BFF] md:text-lg focus-within:bg-white mt-6 bg-gray-200 py-4 rounded-2xl w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />

                {/* Email Input */}
                <motion.input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your email"
                  className="px-6 focus-within:bg-white focus-within:outline-[#635BFF] mt-4 bg-gray-200 py-4 rounded-2xl w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />

                {/* Dropdown: What Product are you contacting for? */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                >
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full px-4 bg-gray-200 py-3 mt-2 mb-5 rounded-xl outline-none text-[#656573]"
                  >
                    <option value="">
                      What Product are you contacting for?
                    </option>
                    <option value="NearSwipe For Campus">
                      NearSwipe For Campus
                    </option>
                    <option value="NearSwipe For Business">
                      NearSwipe For Business
                    </option>
                    <option value="NearSwipe For Personal">
                      NearSwipe For Personal
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </motion.div>
              </>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
            >
              <CustomButton
                func={submit}
                disabled={isSubmitting}
                isLoading={isSubmitting}
                textStyles="uppercase text-xl font-bold"
                containerStyles="mt-10 py-4 w-full rounded-[35px]"
                title={isSubscribed ? "OKAYY!" : "Join the waitlist"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
