"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Zeechain {
  icon: string;
  label: string;
  description: string;
}

const zeechain: Zeechain[] = [
  {
    icon: "/assets/why_zee/Defi.svg",
    label: "DeFiAI will on-board billions on DeFi",
    description:
      "ZeeChain's AI-powered infrastructure is designed to break down barriers and make decentralized finance accessible to everyone. By integrating AI-driven automation, gasless transactions, and seamless cross-chain aggregation, DeFiAI will onboard the next billion users into Web3.",
  },
  {
    icon: "/assets/why_zee/build.svg",
    label: "Building since 2020",
    description:
      "From pioneering aggregation solutions to evolving into a Cosmos-based Layer-1, we've been relentlessly innovating since 2020. ZeeChain is the next step in our journey—scalable, AI-powered, and built for the future of decentralized finance.",
  },
  {
    icon: "/assets/why_zee/values.svg",
    label: "Values",
    description:
      "ZeeChain is built on the principles of scalability, interoperability, AI-driven innovation, and user empowerment. We believe in a frictionless, decentralized future, where seamless cross-chain aggregation, gasless transactions, and community governance redefine the Web3 experience.",
  },
  {
    icon: "/assets/why_zee/zee-tech.svg",
    label: "ZEE Chain Technology",
    description:
      "powered by Cosmos SDK, ZeeChain combines AI-driven automation, cross-chain interoperability, and modular scalability to create a seamless Web3 experience. With gasless transactions, decentralized governance, and high-performance aggregation, ZeeChain is the next evolution of blockchain infrastructure",
  },
];

const Whyzee = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="mx-auto max-w-[1280px] py-20 px-10 md:px-0">
      <h1 className="bg-linear-gradient bg-clip-text text-transparent flex justify-center my-5 font-semibold text-18 xl:text-32 leading-tight">
        Why ZEE Chain?
      </h1>
      <div
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-14 justify-center"
        ref={ref}
      >
        {zeechain.map((data, index) => (
          <motion.div
            key={data.label}
            className="max-w-[580px] bg-card_background border-2 border-lightgray rounded-3xl font-inter px-10 py-2 justify-start items-start"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={index}
          >
            <Image
              src={data.icon || "/placeholder.svg"}
              alt=""
              width={100}
              height={100}
              className="-ml-4"
            />
            <h2 className="leading-[41px] line-clamp-[-0.16px] text-32 text-white-500 font-semibold font-clash ">
              {data.label}
            </h2>
            <p className="text-14 leading-[21px] text-white-700 font-normal font-inter my-2">
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whyzee;
