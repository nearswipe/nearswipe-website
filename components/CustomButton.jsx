import { buttonBlur, buttonImg } from "@/constants/images";
import Image from "next/image";
import React from "react";
import ActivityIndicator from "./ActivityIndicator"; // Import the spinner component

const CustomButton = ({
  title,
  textStyles,
  containerStyles,
  isLoading,
  imageStyles,
  imageStyles2,
  func,
  disabled,
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={() => func()}
      className={`relative flex items-center justify-center px-6 py-2 rounded-[20px] cursor-pointer ${containerStyles} ${
        (disabled || isLoading) && "opacity-80"
      }`}
    >
      {/* Background Images */}
      <Image
        src={buttonImg}
        className={`absolute -z-1 w-full h-full object-cover rounded-[20px] ${imageStyles}`}
        width={200}
        height={200}
        alt=""
      />
      <Image
        src={buttonBlur}
        className={`absolute z-0 w-full h-full object-contain -bottom-1/5 rounded-full ${imageStyles2}`}
        width={200}
        height={200}
        alt=""
      />

      {/* Content */}
      <span
        className={`z-10 font-roboto text-white transition-opacity ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${textStyles}`}
      >
        {title}
      </span>

      {/* Show Loading Spinner if isLoading is true */}
      {isLoading && (
        <div className="absolute flex items-center justify-center">
          <ActivityIndicator size={24} color="#FFFFFF" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
