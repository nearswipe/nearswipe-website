"use client";
import Banking from "@/components/Banking";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Home() {
  const { modalActive, setModalActive, blogs} = useGlobalContext();
  return (
    <main className="relative w-full pb-2">
      <Hero isActive={modalActive} setIsActive={setModalActive} />

      <Banking />
      <Blog blogs={blogs} />
      <Banner isActive={modalActive} setIsActive={setModalActive} />
    </main>
  );
}
