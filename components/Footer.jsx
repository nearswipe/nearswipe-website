"use client";
import { footer, logo } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set the initial window width
      setWindowWidth(window.innerWidth);

      // Update the width on resize
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full font-roboto text-white h-fit p-4 sm:p-12 lg:p-16">
        <div className="grrd grid-cols-1 md:grid-cols-2 mb-3">
          <div className="flex lg:w-1/2 flex-col gap-4">
            <div className="flex items-center ">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={logo}
                  onClick={() => router.push("/")}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                  alt="NearSwipe"
                />
              </div>
              <h1 className="text-lg font-semibold">NearSwipe, Inc.</h1>
            </div>
            <div className="space-y-2">
              <p className="text-[17px] text-[#A1A1AA]">
                Secure Access. Trusted Identity. Seamless Payments.
              </p>
              <p className="text-[15px] text-[#A1A1AA]">
                NearSwipe, Inc. &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12 mt-12 grid-cols-2 w-full justify-around">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Company</h1>
              <Link href="/about-us" className="text-md text-[#A1A1AA]">
                About us
              </Link>
              <Link href="/career" className="text-md text-[#A1A1AA]">
                Career
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Explore</h1>
              <Link href="/" className="text-md text-[#A1A1AA]">
                Home
              </Link>
              <Link href="/products" className="text-md text-[#A1A1AA]">
                Products
              </Link>
              <Link href="/technology" className="text-md text-[#A1A1AA]">
                Technology
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Legal</h1>
              <Link href="/legal" className="text-md text-[#A1A1AA]">
                Privacy policy
              </Link>
              <Link href="/terms" className="text-md text-[#A1A1AA]">
                Terms of use
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Contact</h1>
              <Link
                href="tel:+2348063642312"
                className="text-md text-[#A1A1AA]"
              >
                +234 806-364-2312
              </Link>
              <Link
                href="mailto:team@nearswipe.com"
                className="text-md text-[#A1A1AA]"
              >
                team@nearswipe.com
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Social</h1>
              <Link
                target="_blank"
                href="https://facebook.com/@NearSwipe"
                className="text-md text-[#A1A1AA]"
              >
                Facebook
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/nearswipe"
                className="text-md text-[#A1A1AA]"
              >
                LinkedIn
              </Link>
              <Link
                target="_blank"
                href="https://x.com/nearswipe"
                className="text-md text-[#A1A1AA]"
              >
                X
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Dynamic Text Section */}

      <Image
        src={footer}
        className="w-full h-full object-cover bottom-0"
        width={5000}
        height={5000}
        alt=""
      />
    </div>
  );
};

export default Footer;
