"use client";
import CustomButton from "@/components/CustomButton";
import WaitlistModal from "@/components/WaitlistModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {isActive && (
        <WaitlistModal isActive={isActive} setIsActive={setIsActive} />
      )}
      <div className="relative h-[70vh] font-roboto w-full flex flex-col items-center justify-center">
        {/* Responsive image container */}
        <div
          className={`absolute -z-2 ${
            windowWidth > 768 ? "w-[850px] h-[100vh]" : "w-[300px] h-[300px]"
          } rounded-full -top-[130px]`}
        >
          <Image
            src="/assets/hero-gradient.png"
            className="w-full h-[90%] object-cover rounded-full"
            width={500}
            height={500}
            alt="Hero"
          />
        </div>

        {/* Background gradient */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-black/85 via-black/70 to-black/0 h-[70vh] w-full"></div>

        <div
          className={`absolute -z-1 bg-[#283BE5]/80 ${
            windowWidth > 768 ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
          } -top-[200px] rounded-full`}
        ></div>

        <div className="z-50 text-white w-full mt-20 px-20">
          <div className=" w-full h-fit flex space-x-56 items-center justify-center">
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <p className="text-[5.5rem] text-center text-[#d1d1d1] font-black">
                Blog
              </p>

              <p className="text-[1.4rem] text-center mt-2 leading-7o font-light text-[#a1a1aa]">
                Read about our latest product and research announcements
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-24 px-5 text-white md:px-20">
        <p className="text-white mb-12 text-center text-[2.3rem] font-bold">
          All post
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>

          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>

          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>

          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>

          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>

          <div onClick={() => router.push("/blog/234")} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src="/assets/blog.png"
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white text-2xl font-bold">
                The Digital Revolution in Nigeria
              </h4>

              <h4>
                In an era where digital ransformation is rehaping every aspect
                of our lives Nigeria and beyond
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <div className="relative flex flex-col rounded-2xl border items-center justify-center w-full md:h-96 h-80">
          <Image
            src={
              windowWidth > 1200
                ? "/assets/bg-gradient.svg"
                : "/assets/image-gradient.svg"
            }
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />

          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[3rem] text-center md:leading-[3.8rem]">
                Enterprise-Grade Security
              </h1>

              <p className="text-center text-[#656573] font-light md:text-[1.2rem]">
                Our NFC technologyis protected by military-grade encryption,
                ensuring your data and transactions remain secure at all times.
              </p>

              <CustomButton
                textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                imageStyles="rounded-[35px]"
                func={() => setIsActive(true)}
                containerStyles="py-3 sm:py-4 self-center w-full sm:w-fit px-6 rounded-[35px]"
                title="Join the waitlist"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
