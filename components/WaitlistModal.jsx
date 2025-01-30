import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "./CustomButton";

const WaitlistModal = ({ isActive, setIsActive }) => {
  return (
    <div className="z-[70] cursor-pointer px-6 text-white fixed flex items-center justify-center inset-0 bg-black/40">
      <div
        className="fixed inset-0 z-50"
        onClick={() => {
          setIsActive(!isActive);
        }}
      ></div>
      <div
        onClick={() => {}}
        className="md:w-1/2 w-full text-black bg-white text-[1rem] rounded-xl cursor-auto border z-[100] p-5 md:p-10"
      >
        <div className="flex items-center justify-end">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="p-2 cursor-pointer text-[1rem] font-black rounded-full bg-gray-300"
          >
            <LiaTimesSolid />
          </div>
        </div>
        <h3 className="md:text-[3rem] text-3xl text-center font-bold">Join the waitlist</h3>

        <h3 className="text-lg text-center text-[#656573] font-medium">
          Get early access now!
        </h3>

        <input
          name="name"
          placeholder="Your name"
          className="px-6 text-sm md:text-lg focus-within:bg-white mt-8 bg-gray-200 py-4 rounded-2xl w-full"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="px-6 focus-within:bg-white mt-4 bg-gray-200 py-4 rounded-2xl w-full"
        />

        <CustomButton
          func={() => setIsActive(true)}
          textStyles="uppercase text-xl font-bold"
          containerStyles="mt-12 py-4 rounded-[35px]"
          imageStyles="rounded-[35px]"
          title="Join the withlist"
        />
      </div>
    </div>
  );
};

export default WaitlistModal;
