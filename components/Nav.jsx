"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { useGlobalContext } from "@/context/GlobalContext";
import CustomButton from "./CustomButton";
import { about, bgImage, career, hamburger, product, technology } from "@/constants/images";

const Nav = () => {
  const [dropDown, setDropDown] = useState("");
  const { chatBot, setChatBot, sideNav, setSideNav, busDropDown, setBusDropDown, cmpyDropDown, setCmpyDropDown, setModalActive } = useGlobalContext();
  const router = useRouter();
  const pathName = usePathname();

  return (
    <>
      <div className="hidden absolute top-0 w-full px-16 z-[70] py-6 sm:flex items-center justify-between text-white bg-transparent">
        {/* Logo */}
        <div className="w-8 h-8  bg-white rounded-full overflow-hidden">
          <Image
            src={bgImage}
            className="w-full h-full object-cover"
            width={12}
            height={12}
            alt="NearSwipe"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 capitalize font-roboto font-normal text-sm text-[#a1a1aa]">
          <div
            onClick={() => router.push("/")}
            className={`cursor-pointer hover:text-white  ${pathName === "/" && "text-white"}`}
          >
            home
          </div>

          {/* Business Dropdown */}
          <div
            onClick={() => {
              if (dropDown !== "business") {
                setDropDown("business");
              } else {
                setDropDown("");
              }
            }}
            className={`relative flex group hover:text-white items-center justify-center space-x-1 cursor-pointer ${
              pathName === "/products" ||
              (pathName === "/technology" && "text-white")
            }`}
          >
            <span>business</span>
            <div>
              {dropDown === "business" ? <IoChevronUp /> : <IoChevronDown />}
            </div>

            {dropDown === "business" && (
              <div className="absolute z-50 top-8 bg-[#282828] w-[300px] py-1.5 rounded-md shadow-lg">
                <div
                  onClick={() => router.push("/products")}
                  className="flex items-center px-3 py-2 hover:bg-[#383838] cursor-pointer"
                >
                  <span className="bg-[#1e1e1e] p-2 rounded-md">
                    <Image
                      src={product}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>

                  <span className="ml-3 text-[#f3f3f3]">
                    <div className="text-[11px] font-medium">Product</div>
                    <div className="text-[9px] text-[#a1a1aa]">
                      Explore our product
                    </div>
                  </span>
                </div>

                <div
                  onClick={() => router.push("/technology")}
                  className="flex items-center px-3 py-2 hover:bg-[#383838] z-50 cursor-pointer"
                >
                  <span className="bg-[#1e1e1e] p-2 rounded-md">
                    <Image
                      src={technology}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>

                  <span className="ml-3 text-[#f3f3f3]">
                    <div className="text-[11px] font-medium">Technology</div>
                    <div className="text-[9px] text-[#a1a1aa]">
                      Read more about our safe and secure technology
                    </div>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            onClick={() => {
              if (dropDown !== "company") {
                setDropDown("company");
              } else {
                setDropDown("");
              }
            }}
            className="relative flex group hover:text-white items-center justify-center space-x-1 cursor-pointer"
          >
            <span>company</span>
            <div>
              {dropDown === "company" ? <IoChevronUp /> : <IoChevronDown />}
            </div>

            {dropDown === "company" && (
              <div className="absolute top-8 bg-[#282828] w-[300px] py-1.5 rounded-md shadow-lg">
                <div
                  onClick={() => router.push("/career")}
                  className="flex items-center px-3 py-2 hover:bg-[#383838] cursor-pointer"
                >
                  <span className="bg-[#1e1e1e] p-2 rounded-md">
                    <Image
                      src={career}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>

                  <span className="ml-3 text-[#f3f3f3]">
                    <div className="text-[11px] font-medium">Careers</div>
                    <div className="text-[9px] text-[#a1a1aa]">
                      see our open positions
                    </div>
                  </span>
                </div>

                <div
                  onClick={() => router.push("/about-us")}
                  className="flex items-center px-3 py-2 hover:bg-[#383838] cursor-pointer"
                >
                  <span className="bg-[#1e1e1e] p-2 rounded-md">
                    <Image
                      src={about}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>

                  <span className="ml-3 text-[#f3f3f3]">
                    <div className="text-[11px] font-medium">About us</div>
                    <div className="text-[9px] text-[#a1a1aa]">
                      Learn about the team
                    </div>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => router.push("/blog")}
            className="group hover:text-white cursor-pointer"
          >
            Blog
          </div>

          <div
            onClick={() => router.push("/contact")}
            className="group hover:text-white cursor-pointer"
          >
            Contact
          </div>

          <div
            onClick={() => setChatBot(!chatBot)}
            className="group flex  items-center gap-1 tracking-widest hover:text-white cursor-pointer"
          >
            Ask AI <BiSupport size={15} color="#635BFF" />
          </div>
        </div>

        {/* Get Started Button */}
        <div
          onClick={() => router.push("/products")}
          className="px-4 py-1.5 uppercase font-normal bg-[#212121] text-[12px] rounded-[20px] cursor-pointer"
        >
          Get started
        </div>
      </div>

      <div className="absolute sm:hidden  top-0 w-full px-5 z-[70] py-6 flex items-center justify-between text-white bg-transparent">
        {/* Logo */}
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
          <Image
            src={bgImage}
            className="w-full h-full object-cover"
            width={12}
            height={12}
            alt="NearSwipe"
          />
        </div>

        <div
          onClick={() => setSideNav(!sideNav)}
          className="flex bg-[#fff]/15 items-center justify-center rounded-3xl py-1.5 px-4"
        >
          <Image
            src={hamburger}
            className="w-5 h-5 object-contain"
            width={8}
            height={8}
            alt="NearSwipe"
          />
        </div>
      </div>

      {sideNav && (
        <div className="w-full h-[100vh] fixed top-0 bottom-0 inset-0 z-[100] py-6 bg-[#0e0e0e]">
          <div className="flex items-center justify-between w-full px-4">
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
              <Image
                src={bgImage}
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
                          src={product}
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
                          src={technology}
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
                          src={career}
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
                          src={about}
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
    </>
  );
};

export default Nav;
