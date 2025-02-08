import { buttonBlur, buttonImg } from "@/constants/images";
import Image from "next/image";
import React from "react";

const CustomButton = ({ title, textStyles, containerStyles, imageStyles, imageStyles2, func, disabled }) => {
  return (
    <button disabled={disabled} onClick={() => {func()}} className={`relative flex items-center justify-center px-6 py-2 rounded-[20px] cursor-pointer ${containerStyles} ${disabled && "opacity-80"}`}>
      <Image src={buttonImg} className={`absolute -z-1 w-full h-full object-cover rounded-[20px] ${imageStyles}`} width={200} height={200} alt="" />
      <Image src={buttonBlur} className={`absolute z-0 w-full h-full object-contain -bottom-1/5 rounded-full ${imageStyles2}`} width={200} height={200} alt="" />
      <span className={`z-10 font-roboto text-white ${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
