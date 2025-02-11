"use client";
import React from 'react'
import NearSwipeAiChat from './NearSwipeAI';
import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import { aiSupport, bubble } from '@/constants/images';

const DisplayAI = () => {
    const {chatBot, setChatBot} = useGlobalContext()
  return (
    <div
        className={`fixed z-[70] flex items-center justify-end lg:inset-0 lg:w-full w-fit self-end lg:px-0 bottom-16 right-4 lg:right-0 lg:bottom-4`}
      >
        <div className="w-full lg:w-1/2 flex justify-end">
          {chatBot ? (
            <NearSwipeAiChat isActive={chatBot} setIsActive={setChatBot} />
          ) : (
            <div
              onClick={() => {
                setChatBot(true);
              }}
              className="lg:hidden relative flex text-white items-center justify-center w-fit mr-4 cursor-pointer lg:mr-8"
            >
              <Image
                src={bubble}
                className="w-[70px] h-[70px] object-contain"
                width={300}
                height={300}
                alt="NearSwipe"
              />

              <div className="absolute flex flex-col items-center justify-center gap-2">
                <Image
                  src={aiSupport}
                  className="w-7 h-7 object-contain"
                  width={300}
                  height={300}
                  alt="NearSwipe"
                />
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default DisplayAI
