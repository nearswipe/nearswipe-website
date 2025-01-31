"use client";
import { client } from "@/lib/sanity";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const GlobalContext = createContext(null);

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
      smallDescription,
      titleImage,
      content,
      "currentSlug": slug.current,
      _createdAt
  }`;

  const response = await client.fetch(query)

  setBlogs(response )
  
  };

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <GlobalContext.Provider value={{ blogs }}>
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
