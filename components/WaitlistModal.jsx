"use client";
import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "@/context/GlobalContext";
import ConfettiBackground from "./ConfettiBackground";

const WaitlistModal = () => {
  const { modalActive, setModalActive } = useGlobalContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/newsletter-subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
      }
      console.log("data", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (modalActive)
    return (
      <div className="z-[80] cursor-pointer px-6 text-white fixed flex items-center justify-center inset-0 bg-black/40">
        <div
          className="fixed inset-0 z-50"
          onClick={() => {
            setModalActive(!modalActive);
          }}
        ></div>
        <div
          onClick={() => {}}
          className="md:w-1/2 w-full relative text-black bg-white text-[1rem] rounded-xl cursor-auto border z-[100] p-5 md:p-8"
        >
          {isSubscribed && <ConfettiBackground trigger={isSubscribed} />}
          <div className="flex items-center justify-end">
            <div
              onClick={() => {
                setModalActive(!modalActive);
              }}
              className="p-2 cursor-pointer text-[1rem] font-black rounded-full bg-gray-300"
            >
              <LiaTimesSolid />
            </div>
          </div>
          <h3 className="md:text-[2.7rem] text-3xl text-center font-bold">
            Join the waitlist
          </h3>

          <h3 className="text-lg text-center text-[#656573] font-medium">
            Get early access now!
          </h3>

          <input
            name="name"
            value={form?.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="px-6 text-sm focus-within:outline-[#635BFF] md:text-lg focus-within:bg-white mt-6 bg-gray-200 py-4 rounded-2xl w-full"
          />

          <input
            name="email"
            value={form?.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Your email"
            className="px-6 focus-within:bg-white focus-within:outline-[#635BFF] mt-4 bg-gray-200 py-4 rounded-2xl w-full"
          />

          <CustomButton
            func={submit}
            disabled={isSubmitting}
            textStyles="uppercase text-xl font-bold"
            containerStyles="mt-10 py-4 w-full rounded-[35px]"
            imageStyles="rounded-[35px]"
            title="Join the withlist"
          />
        </div>
      </div>
    );

  return <></>;
};

export default WaitlistModal;
