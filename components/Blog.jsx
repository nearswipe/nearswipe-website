"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import dateFormat from "./formatDate";

const Blog = ({ blogs }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="font-roboto text-white w-full h-full bg-black py-8 md:py-12 px-6 md:px-24"
    >
      <div className="w-full h-full flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-2 md:w-2/3 w-full h-full flex flex-col items-center md:px-24"
        >
          <p className="uppercase text-sm tracking-[0.3rem] text-[#635BFF]">
            Blog
          </p>

          <h5 className="text-center text-3xl mt-4 md:text-[2.8rem] font-semibold text-[#fff]">
            More than just an app
          </h5>

          <h5 className="text-[19px] text-center font-medium text-[#a1a1aa] mt-4">
            Read about our latest product and research announcements
          </h5>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/blog")}
            className="relative uppercase text-[13px] font-roboto px-6 py-2 rounded-[20px] mt-6 text-white bg-[#635BFF] cursor-pointer transition"
          >
            Read the blog
            <div className="bg-[#f3f3f3] absolute opacity-0 inset-0 rounded-[20px] hover:opacity-15"></div>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="w-full h-full grid grid-cols-1 gap-12 md:grid-cols-3 mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {blogs.map((post, idx) => (
            <motion.div
              key={idx}
              onClick={() => router.push(`/blog/${post?.currentSlug}`)}
              className="w-full flex flex-col items-center h-full cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="h-fit rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  loading="lazy"
                  src={urlFor(post?.titleImage).url()}
                  className="object-cover w-[350px] h-[350px] rounded-2xl"
                  width={450}
                  height={450}
                  alt=""
                />
              </motion.div>

              <div className="font-roboto w-full text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 md:text-start text-center">
                <h4 className="text-white line-clamp-2 text-2xl font-bold">
                  {post?.title}
                </h4>

                <h4 className="line-clamp-2">{post?.smallDescription}</h4>

                <h4 className="flex items-center space-x-1 text-sm md:justify-start justify-center">
                  {dateFormat(post?._createdAt)}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;
