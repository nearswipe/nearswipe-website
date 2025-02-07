"use client";
import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "./CustomButton";

const WaitlistModal = ({ isActive, setIsActive }) => {
  const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_APIKEY;
  const audienceID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
  const [form, setForm] = useState({
    Name: "",
    Email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    console.log(audienceID);
    
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://us19.api.mailchimp.com/3.0/lists/${audienceID}/members/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          email_address: form?.Email,
          status: "subscribed",
          merge_fields: {
            FNAME: form?.Name
          }
        }),
      })
      console.log(response)

      const data = await response.json()

      console.log("data", data);
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
    // Object.entries(form).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    // fetch(
    //   "https://script.google.com/macros/s/AKfycbwX9zK-Zm-OszFwyaGG-YDkyLlnmhRfvY7aiCzxrQ1_Upjrpi-EEzVHgsq64yAM4Hmw/exec",
    //   { method: "POST", body: formData }
    // )
    //   .then(async (response) => {
    //     const data = await response.json();
    //     console.log("Success!", response);
    //     console.log("data", data);
    //   })
    //   .catch((error) => console.error("Error!", error.message))
    //   .finally(() => {
    //     setForm({
    //       Name: "",
    //       Email: "",
    //     });
    //   });
  };

  return (
    <div className="z-[80] cursor-pointer px-6 text-white fixed flex items-center justify-center inset-0 bg-black/40">
      <div
        className="fixed inset-0 z-50"
        onClick={() => {
          setIsActive(!isActive);
        }}
      ></div>
      <div
        onClick={() => {}}
        className="md:w-1/2 w-full text-black bg-white text-[1rem] rounded-xl cursor-auto border z-[100] p-5 md:p-8"
      >
        <div className="flex items-center justify-end">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="p-2 cursor-pointer text-[1rem] font-black rounded-full bg-gray-300"
          >
            <LiaTimesSolid />
          </div>
        </div>
        <h3 className="md:text-[2.7rem] text-3xl text-center font-bold">
          Join the waitlist
        </h3>

        <h3 className="text-lg text-center text-[#656573] font-medium">
          Get early access now!
        </h3>

        <input
          name="name"
          value={form?.Name}
          onChange={(e) => setForm({ ...form, Name: e.target.value })}
          placeholder="Your name"
          className="px-6 text-sm focus-within:outline-[#635BFF] md:text-lg focus-within:bg-white mt-6 bg-gray-200 py-4 rounded-2xl w-full"
        />

        <input
          name="email"
          value={form?.Email}
          onChange={(e) => setForm({ ...form, Email: e.target.value })}
          type="email"
          placeholder="Your email"
          className="px-6 focus-within:bg-white focus-within:outline-[#635BFF] mt-4 bg-gray-200 py-4 rounded-2xl w-full"
        />

        <CustomButton
          func={submit}
          disabled={isSubmitting}
          textStyles="uppercase text-xl font-bold"
          containerStyles="mt-10 py-4 w-full rounded-[35px]"
          imageStyles="rounded-[35px]"
          title="Join the withlist"
        />
      </div>
    </div>
  );
};

export default WaitlistModal;
