"use client";

import { useState, useEffect, useRef } from "react";
import { OpenAI } from "openai";
import CustomButton from "./CustomButton";
import { LiaTimesSolid } from "react-icons/lia";
import { HiMiniCheckBadge } from "react-icons/hi2";

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
        messagesContainer.clientHeight + 100; // Adjust threshold if needed

      if (isNearBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Save conversation to local storage
    localStorage.setItem("NearSwipeAiChat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");

    // Define the AI system message
    const systemMessage = {
      role: "system",
      content: `You are NearSwipe AI, a bot designed to assist with enhancing campus security, access control, convenience, and overall efficiency on educational campuses. You specialize in providing information and support related to the NearSwipe contactless smart card solution, which integrates multiple campus services into a single, seamless platform. Your expertise covers areas such as cashless payments, automated attendance and exam verifications, real-time profile updates for students and staff, secure access to campus facilities, and more. You are knowledgeable about the system's capabilities for managing library resources, hostel accommodations, transportation bookings, and ensuring smooth campus operations through tap-enabled features. You can provide guidance on how students and staff can use their personalized NearSwipe smart cards for efficient campus management, including easy access to classrooms, libraries, labs, and dormitories, as well as the ability to make cashless payments across various campus facilities such as cafeterias, bookstores, and vending machines. Additionally, you are equipped to explain the real-time updates provided by the system, ensuring that any changes to student and staff profiles are instantly reflected without the need for reissuance of cards.You should only respond to questions that relate to NearSwipe's functionalities, campus access solutions, and any campus management processes involving NearSwipe's system. If a question falls outside of these areas, you should politely inform the user that you are only able to assist with campus-related features and services provided by NearSwipe. If this is the first interaction with a user, feel free to introduce yourself, explain the services you can assist with, and guide them in using the NearSwipe system to its full potential.`,
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
      console.log(
        aiResponse,
        "---------------------------",
        response.choices[0].message
      );

      // Validate response relevance
      const relevantKeywords = [
        "Smart Campus",
        "Contactless Smart Card",
        "Secure Access",
        "Cashless Payments",
        "Attendance Tracking",
        "Library Management",
        "NFC Technology",
        "Automated Campus Operations",
        "Digital Identity",
        "Real-Time Updates",
        "NearSwipe",
      ];

      const isRelevant = relevantKeywords.some((keyword) =>
        aiResponse.toLowerCase().includes(keyword)
      );

      const finalResponse = isRelevant
        ? aiResponse
        : "I'm sorry, but I'm only able to assist with campus-related functionalities and services provided by NearSwipe. Please ask me something related to campus security, access control, cashless payments, attendance tracking, or any other NearSwipe features.";

      const aiMessage = { text: aiResponse, sender: "ai" };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...updatedMessages,
        { text: "Error processing request", sender: "ai" },
      ]);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0e0e0e] shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between pb-3">
        <div className="text-white flex gap-1 items-center text-md font-semibold">
          NearSwipe AI <HiMiniCheckBadge color="#635BFF" />
        </div>

        <div className="flex my- items-center justify-end">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="p-1 cursor-pointer text-[15px] text-gray-300 font-roboto font-bold rounded-full bg-[#232323]"
          >
            <LiaTimesSolid />
          </div>
        </div>
      </div>

      <div className="h-[50vh] md:h-[60vh] overflow-y-auto scrollbar-hide bg-[#131313] rounded-xl p-4">
        {messages.map((msg, index) => (
          <div
            ref={messages.length - 1 === index ? messagesEndRef : () => {}}
            key={index}
            className={`flex my-2 w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className="relative max-w-[80%]">
              {/* Chat Bubble */}
              <span
                className={`inline-block text-[12px] md:text-sm px-4 py-2 text-gray-300 rounded-xl shadow-md ${
                  msg.sender === "user" ? "bg-[#232323]" : "bg-[#1a1a1a]"
                }`}
              >
                {msg?.text}
              </span>

              {/* Tail Effect */}
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
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 text-[12px] md:text-sm p-2  text-gray-300 bg-[#131313] rounded-l-lg focus:outline-none"
        />

        <CustomButton
          textStyles="text-[12px] sm:text-sm font-bold"
          imageStyles="rounded-r-lg rounded-none"
          imageStyles2="hidden"
          func={sendMessage}
          containerStyles="inline-block self-center w-fit px-3 rounded-none rounded-r-lg"
          title="Send"
        />
      </div>
    </div>
  );
};

export default NearSwipeAiChat;
