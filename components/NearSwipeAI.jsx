"use client";

import { useState, useEffect, useRef } from "react";
import { OpenAI } from "openai";
import CustomButton from "./CustomButton";
import { LiaTimesSolid } from "react-icons/lia";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY, // Store this in your .env file
  dangerouslyAllowBrowser: true, // Allows frontend API call
});

const NearSwipeAiChat = ({ setIsActive, isActive }) => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("NearSwipeAiChat")) || []
  );
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesContainer = messagesEndRef.current?.parentElement;
    if (messagesContainer) {
      const isNearBottom =
        messagesContainer.scrollHeight - messagesContainer.scrollTop <=
        messagesContainer.clientHeight + 100;
      if (isNearBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
    localStorage.setItem("NearSwipeAiChat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");

    const systemMessage = {
      role: "system",
      content: `You are NearSwipe AI, a bot designed to assist with campus security, access control, convenience, and overall efficiency...`,
    };

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          systemMessage,
          ...updatedMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        ],
      });

      const aiResponse = response.choices[0].message.content;

      const aiMessage = { text: aiResponse, sender: "ai" };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...updatedMessages, { text: "Error processing request", sender: "ai" }]);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Faster animation (600ms)
          className="fixed bottom-16 right-4 lg:right-8 lg:bottom-4 w-[90%] self-center md:w-full md:max-w-lg bg-[#0e0e0e] shadow-lg rounded-lg p-4 z-50"
        >
          <div className="flex items-center justify-between pb-3">
            <div className="text-white flex gap-1 items-center text-md font-semibold">
              NearSwipe AI <HiMiniCheckBadge color="#635BFF" />
            </div>
            <div className="flex items-center justify-end">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsActive(false)}
                className="p-1 cursor-pointer text-[15px] text-gray-300 font-bold rounded-full bg-[#232323]"
              >
                <LiaTimesSolid />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Faster
            className="h-[60vh] overflow-y-auto scrollbar-hide bg-[#131313] rounded-xl p-4"
          >
            {messages.map((msg, index) => (
              <div
                ref={messages.length - 1 === index ? messagesEndRef : () => {}}
                key={index}
                className={`flex my-2 w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="relative max-w-[80%]">
                  <span
                    className={`inline-block text-[13px] md:text-sm px-4 py-2 text-gray-300 rounded-xl shadow-md ${
                      msg.sender === "user" ? "bg-[#232323]" : "bg-[#1a1a1a]"
                    }`}
                  >
                    {msg.text}
                  </span>
                  <div
                    className={`absolute w-2 h-[0.5px] rotate-12 ${
                      msg.sender === "user"
                        ? "bg-[#232323] right-0 -bottom-1"
                        : "bg-[#1a1a1a] left-0 -bottom-1"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Faster
            className="mt-4 flex"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 text-[12px] md:text-sm p-2 text-gray-300 bg-[#131313] rounded-l-lg focus:outline-none"
            />
            <CustomButton
              textStyles="text-[12px] sm:text-sm font-bold"
              imageStyles="rounded-r-lg rounded-none"
              imageStyles2="hidden"
              func={sendMessage}
              containerStyles="inline-block self-center w-fit px-3 rounded-none rounded-r-lg"
              title="Send"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NearSwipeAiChat;
