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
      <div className="relative font-roboto w-full flex flex-col items-center justify-center">
        <div className="z-50 text-white w-full mt-32 md:mt-48 px-6 md:px-20">
          <div className=" w-full h-fit flex space-x-56 items-center justify-center">
            <div className="w-full md:px-40">
              <p className="md:text-[3rem] sm:leading-[3rem] text-2xl text-center sm:text-start text-[#d1d1d1] font-black">
                The Digital Revolution in Nigeria Campuses: How NearSwipe is
                Transforming Student Life
              </p>

              <p className="text-md text-center sm:text-start mt-2 leading-7o font-light text-[#a1a1aa]">
                <span>Dec 23, 2024</span>
                <span className="text-2xl">&#8729;</span> <span>4 min</span>
              </p>

              <Image
                src={"/assets/blog.png"}
                className="z-40 w-full h-96 mt-16 rounded-2xl object-cover"
                width={400}
                height={400}
                alt=""
              />

              <div className="mt-16">
                <p className="text-3xl text-center sm:text-start font-black">
                  The Challenge of Campus Management
                </p>

                <p className="text-md text-center sm:text-start my-8 leading-7o font-light text-[#a1a1aa]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odit voluptas vitae reprehenderit eaque magnam
                  praesentium consequatur, ex veritatis minus beatae assumenda
                  dolor unde quis, architecto eos! Fugit enim libero, dolorem
                  tempore explicabo nam minima impedit asperiores ab quasi qui
                  placeat tenetur labore cumque nisi totam repellendus quia in
                  quos! Dolore vero sapiente deserunt id, quos libero cupiditate
                  eveniet voluptatum, culpa iure, doloribus vitae. Distinctio
                  illo recusandae animi esse doloribus voluptate, nisi soluta
                  dolores, delectus, exercitationem perferendis incidunt nostrum
                  sint!
                </p>

                <p className="text-3xl text-center sm:text-start font-black">
                  The Challenge of Campus Management
                </p>

                <p className="text-md text-center sm:text-start my-8 leading-7o font-light text-[#a1a1aa]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odit voluptas vitae reprehenderit eaque magnam
                  praesentium consequatur, ex veritatis minus beatae assumenda
                  dolor unde quis, architecto eos! Fugit enim libero, dolorem
                  tempore explicabo nam minima impedit asperiores ab quasi qui
                  placeat tenetur labore cumque nisi totam repellendus quia in
                  quos! Dolore vero sapiente deserunt id, quos libero cupiditate
                  eveniet voluptatum, culpa iure, doloribus vitae. Distinctio
                  illo recusandae animi esse doloribus voluptate, nisi soluta
                  dolores, delectus, exercitationem perferendis incidunt nostrum
                  sint!
                </p>

                <p className="text-3xl text-center sm:text-start font-black">
                  The Challenge of Campus Management
                </p>

                <p className="text-md text-center sm:text-start my-8 leading-7o font-light text-[#a1a1aa]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odit voluptas vitae reprehenderit eaque magnam
                  praesentium consequatur, ex veritatis minus beatae assumenda
                  dolor unde quis, architecto eos! Fugit enim libero, dolorem
                  tempore explicabo nam minima impedit asperiores ab quasi qui
                  placeat tenetur labore cumque nisi totam repellendus quia in
                  quos! Dolore vero sapiente deserunt id, quos libero cupiditate
                  eveniet voluptatum, culpa iure, doloribus vitae. Distinctio
                  illo recusandae animi esse doloribus voluptate, nisi soluta
                  dolores, delectus, exercitationem perferendis incidunt nostrum
                  sint!
                </p>

                <p className="text-3xl text-center sm:text-start font-black">
                  The Challenge of Campus Management
                </p>

                <p className="text-md text-center sm:text-start my-8 leading-7o font-light text-[#a1a1aa]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, odit voluptas vitae reprehenderit eaque magnam
                  praesentium consequatur, ex veritatis minus beatae assumenda
                  dolor unde quis, architecto eos! Fugit enim libero, dolorem
                  tempore explicabo nam minima impedit asperiores ab quasi qui
                  placeat tenetur labore cumque nisi totam repellendus quia in
                  quos! Dolore vero sapiente deserunt id, quos libero cupiditate
                  eveniet voluptatum, culpa iure, doloribus vitae. Distinctio
                  illo recusandae animi esse doloribus voluptate, nisi soluta
                  dolores, delectus, exercitationem perferendis incidunt nostrum
                  sint!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-16 px-5 text-white md:px-20">
        <p className="text-white mb-12 text-center text-[2.3rem] font-bold">
          Other posts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            onClick={() => router.push("/blog/234")}
            className="w-full flex flex-col items-center h-full"
          >
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

          <div className="w-full flex flex-col items-center h-full">
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

          <div className="w-full flex flex-col items-center h-full">
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

          <div className="w-full flex flex-col items-center h-full">
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

          <div className="w-full flex flex-col items-center h-full">
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

          <div className="w-full flex flex-col items-center h-full">
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
        <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80">
          <Image
            src={
              windowWidth > 1200
                ? "/assets/dynamic-bg.svg"
                : "/assets/image-gradient.svg"
            }
            className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
            width={400}
            height={400}
            alt=""
          />

          <div className="absolute z-50 w-full flex justify-center">
            <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-black md:text-[3rem] md:text-white text-center md:leading-[3.8rem]">
                Enterprise-Grade Security
              </h1>

              <p className="text-center text-[#656573] md:text-white font-light md:text-[1.2rem]">
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
