import Image from "next/image";
import React from "react";

const CustomButton = ({ title, textStyles, containerStyles, imageStyles, func }) => {
  return (
    <div onClick={() => {func()}} className={`relative flex items-center justify-center px-6 py-2 rounded-[20px] cursor-pointer ${containerStyles}`}>
      <Image src="/assets/button-img.png" className={`absolute -z-1 w-full h-full object-cover rounded-[20px] ${imageStyles}`} width={200} height={200} alt="" />
      <Image src="/assets/btn-blur.png" className="absolute z-0 w-full h-full object-contain -bottom-1/5 rounded-full" width={200} height={200} alt="" />
      <span className={`z-10 font-roboto text-white ${textStyles}`}>{title}</span>
    </div>
  );
};

export default CustomButton;
