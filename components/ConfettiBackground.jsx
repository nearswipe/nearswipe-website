"use client";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const ConfettiBackground = ({ trigger }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      const myCanvas = canvasRef.current;
      const confettiInstance = confetti.create(myCanvas, { resize: true });
      confettiInstance({ particleCount: 100, spread: 70 });
    }
  }, [trigger]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 z-[100] left-0 w-full h-full pointer-events-none"
    />
  );
};

export default ConfettiBackground;
