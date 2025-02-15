"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import ConfettiBackground from "./ConfettiBackground";

// Smooth 800ms animation variants
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
    transition: { duration: 0.8, ease: "easeInOut" } 
  },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.6, ease: "easeInOut" } },
};

const WaitlistModal = () => {
  const { modalActive, setModalActive } = useGlobalContext();
  const [form, setForm] = useState({ name: "", email: "" });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/newsletter-subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubscribed(true);
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
              className="text-center font-bold text-3xl md:text-[2.7rem]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
              Join the waitlist
            </motion.h3>
            <motion.h3
              className="text-lg text-center text-[#656573] font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
              Get early access now!
            </motion.h3>

            {/* Input Fields */}
            <motion.input
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="px-6 text-sm focus-within:outline-[#635BFF] md:text-lg focus-within:bg-white mt-6 bg-gray-200 py-4 rounded-2xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            />

            <motion.input
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Your email"
              className="px-6 focus-within:bg-white focus-within:outline-[#635BFF] mt-4 bg-gray-200 py-4 rounded-2xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            />

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
              <CustomButton
                func={submit}
                disabled={isSubmitting}
                textStyles="uppercase text-xl font-bold"
                containerStyles="mt-10 py-4 w-full rounded-[35px]"
                imageStyles="rounded-[35px]"
                title="Join the waitlist"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
