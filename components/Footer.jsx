"use client";
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
          <div className="flex lg:w-1/4 flex-col gap-4">
            <h1 className="text-lg font-semibold">Logo</h1>
            <p className="text-[17px] text-[#A1A1AA]">
              Global dollar investments made simple.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12 mt-12 grid-cols-2 w-full justify-around">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Company</h1>
              <Link href="#" className="text-md text-[#A1A1AA]">
                About us
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Career
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Explore</h1>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Home
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Products
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Technology
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Legal</h1>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Privacy policy
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Terms of use
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold">Contact</h1>
              <Link href="tel:8005446877" className="text-md text-[#A1A1AA]">
                800-544-6877
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
              <Link href="#" className="text-md text-[#A1A1AA]">
                Facebook
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                LinkedIn
              </Link>
              <Link href="#" className="text-md text-[#A1A1AA]">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Dynamic Text Section */}

      <Image
        src="/assets/footer.png"
        className="w-full h-full object-cover bottom-0"
        width={windowWidth}
        height={500}
        alt=""
      />
    </div>
  );
};

export default Footer;
