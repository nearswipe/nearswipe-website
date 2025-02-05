import Image from "next/image";
import React from "react";

const Banking = () => {
  return (
    <div className="font-roboto text-white w-full h-full bg-black sm:py-12 px-6 sm:px-28 ">
      <div className="w-full h-full flex flex-col items-center">
        <div className="p-2 sm:w-2/3 w-full h-full  flex flex-col items-center sm:px-10">
          <p className="uppercase text-sm tracking-[0.3rem] text-[#635BFF]">
            banking
          </p>

          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            The everything banking app
          </h5>

          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-3">
            More than just banking--It's your financial partner for life.
            Nearswipe brings together everything you need to manage, grow, and
            protect your money, all in one beautiful app.
          </h5>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-12 sm:gap-12 sm:grid-cols-2 mt-12">
          <div className="h-full">
            <Image
              src="/assets/smart-bnk.svg"
              className="w-full object-contain"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="h-full">
            <Image
              src="/assets/grow-welt.svg"
              className="w-full object-cover"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="h-full  flex">
            <Image
              src="/assets/support.svg"
              className="w-full h-full"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="h-full flex">
            <Image
              src="/assets/secure.svg"
              className="w-full h-full"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col sm:mt-32 mt-16 items-center">
        <div className="p-2 sm:w-2/3 w-full h-full  flex flex-col items-center sm:px-10">
          <p className="uppercase text-sm sm:text-[15px] text-center font-medium tracking-[0.3rem] text-[#F59E0B]">
            for merchants
          </p>

          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            empower your business
          </h5>

          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-2">
            Transform any smartphone into a powerful payment terminal. Accept
            payments, manage your team, nd grow your businesswith NearSwipe
            Merchant.
          </h5>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 mt-12">
          <div className="h-full">
            <div className="w-full h-full">
              <Image
                src="/assets/tap-to-pay.svg"
                className="w-full object-cover"
                width={800}
                height={800}
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <div className="h-full  flex">
              <Image
                src="/assets/instant-set.svg"
                className="w-full h-full"
                width={400}
                height={400}
                alt=""
              />
            </div>
            <div className="h-full flex">
              <Image
                src="/assets/smart-analytics.svg"
                className="w-full h-full"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col sm:mt-32 mt-16 items-center">
        <div className="p-2 sm:w-2/3 w-full h-full  flex flex-col items-center sm:px-10">
          <p className="uppercase text-sm text-[15px] font-medium tracking-[0.3rem] text-[#EF4444]">
            for student & staff
          </p>

          <h5 className="capitalize text-center text-xl sm:text-3xl mt-4 sm:text-[2.8rem] font-semibold text-[#fff]">
            campus life simplified
          </h5>

          <h5 className="sm:text-[19px] text-center font-medium text-[#a1a1aa] mt-2">
            One smart card for everything on campus. Access buildings, make
            payments, and manage your student life with a simple tap.
          </h5>
        </div>

        <div className="w-full h-full grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 mt-12">
          <div className="grid grid-cols-1 gap-12">
            <div className="h-full  flex">
              <Image
                src="/assets/successfull.svg"
                className="w-full h-full"
                width={400}
                height={400}
                alt=""
              />
            </div>
            <div className="h-full flex">
              <Image
                src="/assets/virtual-card.svg"
                className="w-full h-full"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="h-full">
            <div className="w-full h-full">
              <Image
                src="/assets/secure-access.svg"
                className="w-full object-cover"
                width={800}
                height={800}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
