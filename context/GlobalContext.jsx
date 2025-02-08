"use client";
import { client } from "@/lib/sanity";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const GlobalContext = createContext(null);

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [chatBot, setChatBot] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [cmpyDropDown, setCmpyDropDown] = useState(false);
  const [busDropDown, setBusDropDown] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const getBlogs = async () => {
    const blogQuery = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
      smallDescription,
      titleImage,
      content,
      "currentSlug": slug.current,
      _createdAt
  }`;

    const jobQuery = `*[_type == "career"] | order(_createdAt desc) {
    _id,
    title,
      link,
      jobType,
      jobLocation,
  }`;

    const response = await client.fetch(blogQuery);
    const jobsRes = await client.fetch(jobQuery);
    setJobs(jobsRes);
    setBlogs(response);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        blogs,
        jobs,
        modalActive,
        setModalActive,
        chatBot,
        setChatBot,
        cmpyDropDown,
        setCmpyDropDown,
        busDropDown,
        setBusDropDown,
        sideNav,
        setSideNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
