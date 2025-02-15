"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import dateFormat from "@/components/formatDate";
import { bannerImage1, bannerImage2, bgImage } from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalContext";
import { urlFor } from "@/lib/sanity";

const BlogPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { blogs, setModalActive } = useGlobalContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Wait until blogs are fetched before showing animations
  useEffect(() => {
    if (blogs && blogs.length > 0) {
      setIsLoaded(true);
    }
  }, [blogs]);

  return (
    <motion.div className="relative w-full">
      {/* Render animations only after data is loaded */}
      <AnimatePresence>
        {isLoaded && (
          <>
            {/* Hero Section */}
            <motion.div
              className="relative lg:h-[50vh] h-[40vh] font-roboto w-full flex flex-col items-center justify-center overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute w-full h-full inset-0">
                <Image
                  src={bgImage}
                  className="w-full h-full object-cover"
                  width={windowWidth}
                  priority
                  height={500}
                  alt="Background"
                />
              </div>

              <motion.div
                className="z-50 text-white w-full px-6 md:px-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="w-full h-fit flex space-x-56 items-center justify-center">
                  <div className="md:w-1/2 w-full flex flex-col items-center">
                    <p className="lg:text-[5rem] md:text-[3rem] text-[2rem] text-[#d1d1d1] font-black">
                      Blog
                    </p>
                    <p className="md:text-[1.4rem] mt-4 md:mt-6 text-center font-light text-[#a1a1aa]">
                      Read about our latest product and research announcements
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Blog Posts Section */}
            <motion.div
              className="w-full px-5 text-white md:px-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-white mb-12 text-center text-[2.3rem] font-bold">
                All posts
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogs.map((post, idx) => (
                  <motion.div
                    key={idx}
                    onClick={() => router.push(`/blog/${post?.currentSlug}`)}
                    className="w-full flex flex-col items-center h-full cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: idx * 0.1 + 0.3,
                    }}
                  >
                    <div className="h-fit rounded-2xl overflow-hidden">
                      <Image
                        src={urlFor(post?.titleImage).url()}
                        priority
                        className="object-cover w-[350px] h-[350px] rounded-2xl"
                        width={450}
                        height={450}
                        alt="Blog Post"
                      />
                    </div>

                    <div className="font-roboto w-full text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
                      <h4 className="text-white line-clamp-2 text-2xl font-bold">
                        {post?.title}
                      </h4>
                      <h4 className="line-clamp-2">{post?.smallDescription}</h4>
                      <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                        {dateFormat(post?._createdAt)}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Section */}
            <motion.div
              className="flex md:p-20 p-5 mt-16 font-roboto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <div className="relative flex flex-col rounded-2xl border items-center justify-center w-full md:h-96 h-80">
                <Image
                  src={windowWidth > 1200 ? bannerImage1 : bannerImage2}
                  className="z-40 w-full h-full absolute rounded-2xl inset-0 object-cover"
                  width={400}
                  height={400}
                  alt="Security"
                />

                <motion.div
                  className="absolute z-50 w-full flex justify-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="w-full md:w-[55%] px-4 flex flex-col items-center gap-6">
                    <h1 className="text-2xl font-black md:text-[2rem] text-center md:leading-[3rem]">
                      Enterprise-Grade Security
                    </h1>

                    <p className="text-center text-[#656573] font-light md:text-[1.2rem]">
                      Our NFC technology is protected by military-grade
                      encryption, ensuring your data and transactions remain
                      secure at all times.
                    </p>

                    <CustomButton
                      textStyles="uppercase text-[16px] sm:text-[18px] font-bold"
                      imageStyles="rounded-[35px]"
                      func={() => setModalActive(true)}
                      containerStyles="py-3 sm:py-4 self-center w-full sm:w-fit px-6 rounded-[35px]"
                      title="Join the waitlist"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogPage;
