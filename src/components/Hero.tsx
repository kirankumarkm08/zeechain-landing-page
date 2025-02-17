"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Mesh_140 from "/public/assets/background-assets/Mesh-gradient-140.svg";
import Mesh_305 from "/public/assets/background-assets/Mesh-gradient-305.svg";
import Mesh_740 from "/public/assets/background-assets/Mesh-gradient-740.svg";
import CustomButton from "./Custom-Button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="w-full h-screen bg-background_dot bg-cover bg-center absolute inset-0 opacity-10 "></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[
          {
            src: Mesh_140,
            alt: "Mesh 140",
            className: " top-[130px] left-0",
          },
          { src: Mesh_305, alt: "Mesh 305", className: "top-[425px] left-0" },
          { src: Mesh_740, alt: "Mesh 740", className: "top-[130px] right-0" },
        ].map((mesh, index) => (
          <Image
            key={index}
            src={mesh.src}
            alt={mesh.alt}
            className={`absolute ${mesh.className}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="text-white-200 flex flex-col items-center justify-center h-screen relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="group relative bg-primary-badge border-lightgray rounded-full border px-4 py-2 text-white-100 transition-all duration-300 hover:pr-6 mb-10"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Building since 2020
          <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-2">
            →
          </span>
        </motion.button>
        <motion.h1
          className="font-semibold text-24 xl:text-64 capitalize leading-tight"
          variants={itemVariants}
        >
          A DeFi and AI Fusion L1 Inter Chain{" "}
        </motion.h1>
        <motion.h2
          className="bg-linear-gradient bg-clip-text text-transparent font-semibold text-24 xl:text-64 leading-tight"
          variants={itemVariants}
        >
          built on Cosmos.
        </motion.h2>
        <motion.p
          className="max-w-[550px] flex items-center text-center leading-snug text-14 lg:text-18 text-white-700 font-light"
          variants={itemVariants}
        >
          Chain is the First DeFiAI L1 BlockChain fulfilling all your On-Chain
          Aspirations. Experience AI enhanced Swapping, Lending, Staking and
          Intelligent Yield Management.
        </motion.p>
        <motion.button
          className="mt-10 group rounded-full bg-purple-500 text-white font-semibold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.button>
        <CustomButton />
      </motion.div>
    </div>
  );
};

export default Hero;
