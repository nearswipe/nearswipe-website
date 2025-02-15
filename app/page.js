"use client";
import { motion } from "framer-motion";
import Banking from "@/components/Banking";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import { useGlobalContext } from "@/context/GlobalContext";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const { modalActive, setModalActive, blogs } = useGlobalContext();
  return (
    <motion.main 
      className="relative w-full pb-2"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div variants={sectionVariants}>
        <Hero isActive={modalActive} setIsActive={setModalActive} />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Banking />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Blog blogs={blogs} />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Banner isActive={modalActive} setIsActive={setModalActive} />
      </motion.div>
    </motion.main>
  );
}
