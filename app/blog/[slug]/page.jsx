"use client";
import CustomButton from "@/components/CustomButton";
import dateFormat from "@/components/formatDate";
import WaitlistModal from "@/components/WaitlistModal";
import { useGlobalContext } from "@/context/GlobalContext";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { blogs } = useGlobalContext();
  const router = useRouter();
  const { slug } = use(params);
  const { setModalActive} = useGlobalContext();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    console.log(blogs);

    setArticle(() => blogs.find((blog) => blog?.currentSlug === slug));
    console.log(article);
  }, [blogs]);

  useEffect(() => {
    // Set the initial window width on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative font-roboto w-full flex flex-col items-center justify-center">
        <div className="z-50 text-white w-full mt-32 md:mt-48 px-6 md:px-20">
          <div className=" w-full h-fit flex space-x-56 items-center justify-center">
            <div className="w-full md:px-20">
              <p className="md:text-[3rem] sm:leading-[3rem] text-2xl text-center sm:text-start text-[#d1d1d1] font-black">
                {article?.title}
              </p>

              {article && (
                <>
                  <p className="text-md text-center sm:text-start mt-2 leading-7o font-light text-[#a1a1aa]">
                    {dateFormat(article?._createdAt)}
                  </p>
                  <Image
                    src={urlFor(article?.titleImage).url()}
                    className="z-40 w-full h-96 mt-16 rounded-2xl object-cover"
                    width={400}
                    height={400}
                    priority
                    alt=""
                  />
                </>
              )}

              <div className="mt-16">
                <p className="text-3xl text-center sm:text-start font-black">
                  {article?.smallDescription}
                </p>

                <div className="prose font-roboto min-w-full text-md  my-8 font-light text-[#a1a1aa]">
                  <PortableText value={article?.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blogs.slice(0, 6).length > 1 && (
        <div className="w-full sm:mt-16 px-5 text-white md:px-20">
          <p className="text-white mb-12 text-center text-[2.3rem] font-bold">
            Other posts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogs.slice(0, 6).map((post, idx) => {
              if (post?.currentSlug === slug) return null; // Ensure it returns null instead of nothing

              return (
                <div
                  key={idx}
                  onClick={() => router.push(`/blog/${post?.currentSlug}`)}
                  className="w-full flex flex-col items-center h-full cursor-pointer"
                >
                  <div className="h-fit rounded-2xl">
                    <Image
                      src={urlFor(post?.titleImage).url()}
                      className="object-cover w-[350px] h-[350px] rounded-2xl"
                      width={450}
                      height={450}
                      alt=""
                    />
                  </div>

                  <div className="font-roboto w-full text-[15px] grid gap-3 font-thin text-[#a1a1aa] mt-7 text-start">
                    <h4 className="text-white line-clamp-2 text-2xl font-bold">
                      {post?.title}
                    </h4>

                    <h4 className="line-clamp-2">{post?.smallDescription}</h4>

                    <h4 className="flex items-center space-x-1 text-sm sm:justify-start justify-center">
                      <span>Dec 23, 2024</span>
                      <span className="text-2xl">&#8729;</span>{" "}
                      <span>4 min</span>
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex md:p-20 p-5 mt-16 font-roboto">
        <div className="relative flex flex-col rounded-2xl items-center justify-center w-full md:h-96 h-80">
          <Image
            src={
              windowWidth > 1200
                ? "/assets/dynamic-bg.svg"
                : "/assets/image-gradient.svg"
            }
            priority
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
                func={() => setModalActive(true)}
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
