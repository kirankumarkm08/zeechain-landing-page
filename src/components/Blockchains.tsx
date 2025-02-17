"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import Solana from "/public/assets/Blockchain-logos/solana.svg";
import Ethereum from "/public/assets/Blockchain-logos/Ethereum.svg";
import BNB from "/public/assets/Blockchain-logos/BNB.svg";
import Base from "/public/assets/Blockchain-logos/base.svg";
import Mantle from "/public/assets/Blockchain-logos/mantle.svg";
import Scroll from "/public/assets/Blockchain-logos/mantle.svg";
import Arbitrum from "/public/assets/Blockchain-logos/arbitrum.svg";
import Optimism from "/public/assets/Blockchain-logos/optimism.svg";
import Linea from "/public/assets/Blockchain-logos/linea.svg";
import Bitcoin from "/public/assets/Blockchain-logos/bitcoin.svg";
import Stacks from "/public/assets/Blockchain-logos/Stacks.svg";
import Citra from "/public/assets/Blockchain-logos/Citra.svg";
import Thorchain from "/public/assets/Blockchain-logos/Thorchain.svg";
import Avalanche from "/public/assets/Blockchain-logos/avalanche.svg";
import Manta from "/public/assets/Blockchain-logos/Manta.svg";
import Polygon from "/public/assets/Blockchain-logos/polygon.svg";

interface Blockchain {
  icon: string | StaticImageData;
  label: string;
}

const blockchains: Blockchain[] = [
  { icon: Solana, label: "Solana" },
  { icon: Ethereum, label: "Ethereum" },
  { icon: Polygon, label: "Polygon" },

  { icon: BNB, label: "BNB CHAIN" },
  { icon: Base, label: "Base" },
  { icon: Mantle, label: "Mantle" },
  { icon: Scroll, label: "Scroll" },
  { icon: Arbitrum, label: "Arbitrum" },
  { icon: Optimism, label: "Optimism" },
  { icon: Linea, label: "Linea" },
  { icon: Bitcoin, label: "Bitcoin" },
  { icon: Stacks, label: "Stacks" },
  { icon: Citra, label: "Citra" },
  { icon: Thorchain, label: "Thor-chain" },
  { icon: Avalanche, label: "Avalanche" },
  { icon: Manta, label: "Manta" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Blockchains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-20 "
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 -top-10"
      >
        <Image src={Divider || "/placeholder.svg"} alt="" priority />
      </motion.div> */}

      <div className="max-w-[1440px] mx-auto relative">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-2xl sm:text-3xl md:text-40 font-semibold bg-Section-title-gradient  bg-clip-text text-transparent font-clash-display leading-166 "
        >
          Seamlessly access all Blockchains
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:gap-8 lg:gap-[40px] max-w-fit mx-auto "
        >
          {blockchains.map((chain) => (
            <motion.div
              key={chain.label}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="flex flex-row items-center px-10  gap-2 group w-full  "
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={chain.icon || "/placeholder.svg"}
                  alt={`${chain.label} logo`}
                  className="object-contain transition-transform group-hover:scale-110"
                  fill
                />
              </div>
              <p className="text-left text-sm sm:text-base font-semibold bg-text-top-buttom-linear text-transparent bg-clip-text whitespace-nowrap">
                {chain.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-16" />
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 -bottom-10"
      >
        <Image src={Divider || "/placeholder.svg"} alt="" />
      </motion.div> */}
    </section>
  );
}
