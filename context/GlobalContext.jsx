"use client";
import { client } from "@/lib/sanity";
import React, { createContext, useContext, useEffect, useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import NearSwipeAiChat from "@/components/NearSwipeAI";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "@/components/CustomButton";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

// Create the context
const GlobalContext = createContext(null);

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [chatBot, setChatBot] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [cmpyDropDown, setCmpyDropDown] = useState(false);
  const [busDropDown, setBusDropDown] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();

  const getBlogs = async () => {
    const blogQuery = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
      smallDescription,
      titleImage,
      content,
      "currentSlug": slug.current,
      _createdAt
  }`;

    const jobQuery = `*[_type == "career"] | order(_createdAt desc) {
    _id,
    title,
      link,
      jobType,
      jobLocation,
  }`;

    const response = await client.fetch(blogQuery);
    const jobsRes = await client.fetch(jobQuery);
    setJobs(jobsRes);
    setBlogs(response);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ blogs, jobs, modalActive, setModalActive }}
    >
      <Nav
        isActive={chatBot}
        setIsActive={setChatBot}
        sideNav={sideNav}
        setSideNav={setSideNav}
      />
      {modalActive && (
        <WaitlistModal isActive={modalActive} setIsActive={setModalActive} />
      )}

      {sideNav && (
        <div className="w-full h-[100vh] fixed top-0 bottom-0 inset-0 z-[100] py-6 bg-[#0e0e0e]">
          <div className="flex items-center justify-between w-full px-4">
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
              <Image
                src="/assets/hero-gradient.png"
                className="w-full h-full object-cover"
                width={12}
                height={12}
                alt="NearSwipe"
              />
            </div>

            <div className="flex items-center justify-end">
              <div
                onClick={() => {
                  setSideNav(!sideNav);
                }}
                className="p-2 cursor-pointer text-white text-[1.2rem] font-black rounded-full bg-[#fff]/15"
              >
                <LiaTimesSolid />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white justify-between w-full mt-4 h-[98%]">
            <div>
              <div
                onClick={() => {
                  setSideNav(false);
                  router.push("/");
                }}
                className="border-b capitalize border-white/15 p-4 text-xl font-bold"
              >
                Home
              </div>

              <div className="border-b capitalize border-white/15 p-4 text-xl font-bold">
                <div
                  onClick={() => setBusDropDown(!busDropDown)}
                  className="flex items-center justify-between"
                >
                  <span>business</span>

                  <span className="text-[#635BFF] text-2xl">
                    {busDropDown ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </div>

                {busDropDown && (
                  <>
                    <div
                      onClick={() => {
                        setSideNav(false);
                        router.push("/products");
                      }}
                      className="flex items-center px-3 py-2 cursor-pointer"
                    >
                      <span className="bg-[#1e1e1e] p-2 rounded-md">
                        <Image
                          src="/assets/product.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </span>

                      <span className="ml-3 text-sm font-medium text-[#a1a1aa]">
                        Products
                      </span>
                    </div>

                    <div
                      onClick={() => {
                        setSideNav(false);
                        router.push("/technology");
                      }}
                      className="flex items-center px-3 py-2 cursor-pointer"
                    >
                      <span className="bg-[#1e1e1e] p-2 rounded-md">
                        <Image
                          src="/assets/technology.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </span>

                      <span className="ml-3 text-sm font-medium text-[#a1a1aa]">
                        technology
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="border-b capitalize border-white/15 p-4 text-xl font-bold">
                <div
                  onClick={() => setCmpyDropDown(!cmpyDropDown)}
                  className="flex items-center justify-between"
                >
                  <span>company</span>

                  <span className="text-[#635BFF] text-2xl">
                    {cmpyDropDown ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </div>

                {cmpyDropDown && (
                  <>
                    <div
                      onClick={() => {
                        setSideNav(false);
                        router.push("/career");
                      }}
                      className="flex items-center px-3 py-2 cursor-pointer"
                    >
                      <span className="bg-[#1e1e1e] p-2 rounded-md">
                        <Image
                          src="/assets/career.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </span>

                      <span className="ml-3 text-sm font-medium text-[#a1a1aa]">
                        Careers
                      </span>
                    </div>

                    <div
                      onClick={() => {
                        setSideNav(false);
                        router.push("/about-us");
                      }}
                      className="flex items-center px-3 py-2 cursor-pointer"
                    >
                      <span className="bg-[#1e1e1e] p-2 rounded-md">
                        <Image
                          src="/assets/about.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </span>

                      <span className="ml-3 text-sm font-medium text-[#a1a1aa]">
                        About us
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div
                onClick={() => {
                  setSideNav(false);
                  router.push("/blog");
                }}
                className="border-b capitalize border-white/15 p-4 text-xl font-bold"
              >
                blog
              </div>

              <div
                onClick={() => {
                  setSideNav(false);
                  router.push("/contact");
                }}
                className="border-b capitalize border-white/15 p-4 text-xl font-bold"
              >
                contact
              </div>
            </div>

            <CustomButton
              textStyles="uppercase text-lg font-bold"
              imageStyles="rounded-[35px]"
              func={() => {
                setSideNav(false);
                setModalActive(true);
              }}
              containerStyles="mb-2 py-3.5 self-center sm:self-start w-full px-6 rounded-[35px]"
              title="Join the waitlist"
            />
          </div>
        </div>
      )}

      {children}
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
      <Footer />
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
