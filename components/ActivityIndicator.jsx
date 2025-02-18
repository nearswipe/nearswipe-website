"use client";
import { motion } from "framer-motion";

const ActivityIndicator = ({ size = 40, color = "#635BFF" }) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          className="opacity-30"
          cx="25"
          cy="25"
          r="20"
          stroke={color}
          strokeWidth="5"
        />
        <path
          d="M 25 5 A 20 20 0 0 1 45 25"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default ActivityIndicator;
