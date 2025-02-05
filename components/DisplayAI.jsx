import React from 'react'
import NearSwipeAiChat from './NearSwipeAI';
import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';

const DisplayAI = () => {
    const {chatBot, setChatBot} = useGlobalContext()
  return (
    <div
        className={`fixed z-[70] flex items-center justify-end inset-0 w-full  self-end px-6 md:px-0 bottom-16 md:bottom-4`}
      >
        <div className="w-full md:w-1/2 flex justify-end">
          {chatBot ? (
            <NearSwipeAiChat isActive={chatBot} setIsActive={setChatBot} />
          ) : (
            <div
              onClick={() => {
                setChatBot(true);
              }}
              className="md:hidden relative flex text-white items-center justify-center w-fit mr-4 cursor-pointer md:mr-8"
            >
              <Image
                src="/assets/speech-bubble.png"
                className="w-[70px] h-[70px] object-contain"
                width={300}
                height={300}
                alt="NearSwipe"
              />

              <div className="absolute flex flex-col items-center justify-center gap-2">
                <Image
                  src="/assets/support.png"
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
