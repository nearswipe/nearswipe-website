import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import dateFormat from "./formatDate";

const Blog = ({blogs}) => {
  const router = useRouter();
  return (
    <div className="font-roboto text-white w-full h-full bg-black py-8 sm:py-12 px-6 sm:px-24">
      <div className="w-full h-full flex flex-col items-center">
        <div className="p-2 sm:w-2/3 w-full h-full  flex flex-col items-center sm:px-24">
          <p className="uppercase text-sm tracking-[0.3rem] text-[#635BFF]">
            Blog
          </p>

          <h5 className="text-center text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            More than just an app
          </h5>

          <h5 className="text-[19px] text-center font-medium text-[#a1a1aa] mt-4">
            Read about our latest product and research announcements
          </h5>

          <div  onClick={() => router.push("/blog")} className="relative uppercase text-[13px] font-roboto px-4 py-2 rounded-[20px] hover:op mt-6 text-white bg-[#635BFF]">
            read the blog
            <div className="bg-[#f3f3f3] absolute opacity-0 inset-0 rounded-[20px] hover:opacity-15 cursor-pointer"></div>
          </div>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-12 sm:gap-12 sm:grid-cols-3 mt-12">
        {blogs.map((post, idx) => (
            <div key={idx} onClick={() => router.push(`/blog/${post?.currentSlug }`)} className="w-full flex flex-col items-center h-full cursor-pointer">
            <div className="h-fit rounded-2xl">
              <Image
                src={urlFor(post?.titleImage).url()}
                className="object-cover w-[350px] h-[350px] rounded-2xl"
                width={450}
                height={450}
                alt=""
              />
            </div>

            <div className="font-roboto w-full text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 sm:text-start text-center">
              <h4 className="text-white line-clamp-2 text-2xl font-bold">
                {post?.title}
              </h4>

              <h4 className="line-clamp-2">
                {post?.smallDescription}
              </h4>

              <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
              {dateFormat(post?._createdAt)}
              </h4>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
