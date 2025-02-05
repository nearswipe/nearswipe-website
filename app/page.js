"use client";
import Banking from "@/components/Banking";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NearSwipeAiChat from "@/components/NearSwipeAI";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="relative w-full pb-2">
      {modalActive && (
        <WaitlistModal isActive={modalActive} setIsActive={setModalActive} />
      )}
      <Hero isActive={modalActive} setIsActive={setModalActive} />

      <Banking />
      <Blog />
      <Banner isActive={modalActive} setIsActive={setModalActive} />
    </main>
  );
}
