"use client";

import React, { useState } from "react";
import Mesh_140 from "/public/assets/background-assets/Mesh-gradient-140.svg";
import Mesh_305 from "/public/assets/background-assets/Mesh-gradient-305.svg";
import Mesh_740 from "/public/assets/background-assets/Mesh-gradient-740.svg";
import Image from "next/image";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full ">
      <Image src={Mesh_140} alt="Mesh" className="top-[130px] absolute" />
      <Image src={Mesh_305} alt="Mesh" className="absolute top-[425px]" />
      <Image
        src={Mesh_740}
        alt="Mesh"
        className="absolute end-0 top-[130px] "
      />

      <div className="text-white-200  flex flex-col items-center justify-center h-screen relative">
        <button className="group relative bg-primary-badge border-lightgray rounded-full border px-4 py-2 text-white-100 transition-all duration-300 hover:pr-6 mb-10">
          Building since 2020
          <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-2">
            →
          </span>
        </button>
        <h1 className="font-semibold text-24 xl:text-64 capitalize leading-tight">
          A DeFi and AI Fusion L1 Inter Chain{" "}
        </h1>
        <h2 className="bg-linear-gradient bg-clip-text text-transparent    font-semibold text-24 xl:text-64 leading-tight">
          built on Cosmos.
        </h2>
        <p className="max-w-[550px] flex items-center text-center  leading-snug text-14  lg:text-18 text-white-700 font-light">
          {" "}
          Chain is the First DeFiAI L1 BlockChain fulfilling all your On-Chain
          Aspirations. Experience AI enhanced Swapping, Lending, Staking and
          Intelligent Yield Management.
        </p>
        <button
          className="relative overflow-hidden px-6 py-3 mt-5 group rounded-full bg-purple-500 text-white font-semibold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
          onMouseEnter={() => isHovered && setIsHovered(true)}
          onMouseLeave={() => isHovered && setIsHovered(false)}
        >
          <span className="relative inline-block transition-all duration-300 ease-out group-hover:-translate-y-[120%] group-hover:opacity-0">
            Register for Test-Net
          </span>
          <span className="absolute left-0 top-0 flex w-full h-full translate-y-[120%] items-center justify-center transition-all duration-500 ease-out group-hover:translate-y-0">
            Coming Soon 🚀
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
