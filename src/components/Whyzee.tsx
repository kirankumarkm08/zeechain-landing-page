import React from "react";
import Defi from "/public/assets/why_zee/Defi.svg";
import Building from "/public/assets/why_zee/Building_2020.svg";
import Values from "/public/assets/why_zee/values.svg";
import Technology from "/public/assets/why_zee/Technology.svg";
import Image, { StaticImageData } from "next/image";

const Whyzee = () => {
  interface Zeechain {
    icon: string | StaticImageData;
    label: string;
    description: string;
  }
  const zeechain: Zeechain[] = [
    {
      icon: Defi,
      label: "DeFiAI will on-board billions on DeFi",
      description:
        "ZeeChain’s AI-powered infrastructure is designed to break down barriers and make decentralized finance accessible to everyone. By integrating AI-driven automation, gasless transactions, and seamless cross-chain aggregation, DeFiAI will onboard the next billion users into Web3.",
    },
    {
      icon: Building,
      label: "Building since 2020",
      description:
        "From pioneering aggregation solutions to evolving into a Cosmos-based Layer-1, we’ve been relentlessly innovating since 2020. ZeeChain is the next step in our journey—scalable, AI-powered, and built for the future of decentralized finance.",
    },
    {
      icon: Values,
      label: "Values",
      description:
        "ZeeChain is built on the principles of scalability, interoperability, AI-driven innovation, and user empowerment. We believe in a frictionless, decentralized future, where seamless cross-chain aggregation, gasless transactions, and community governance redefine the Web3 experience.",
    },
    {
      icon: Technology,
      label: "ZEE Chain Technology",
      description:
        "powered by Cosmos SDK, ZeeChain combines AI-driven automation, cross-chain interoperability, and modular scalability to create a seamless Web3 experience. With gasless transactions, decentralized governance, and high-performance aggregation, ZeeChain is the next evolution of blockchain infrastructure",
    },
  ];
  return (
    <div className="mx-auto max-w-[1280px]  py-20 px-10 md:px-0 ">
      <h1 className="bg-linear-gradient bg-clip-text text-transparent  flex justify-center my-5   font-semibold  text-18 xl:text-32 leading-tight">
        Why ZEE Chain?
      </h1>
      <div className=" grid md:grid-cols lg:grid-cols-2  gap-10  justify-center">
        {zeechain.map((data) => (
          <div
            className="max-w-[580px]  bg-[#0A0C1B] border-2 border-lightgray rounded-3xl font-inter px-10 py-2 justify-start items-start "
            key={data.label}
          >
            <Image src={data.icon} alt="" className="-ml-9" />
            <h1 className=" leaing-[41px] line-clamp-[-0.16px] text-32 text-white-500 font-semibold">
              {data.label}
            </h1>
            <h3 className="ftext-14 leading-[21px] text-white-700 font-normal">
              {data.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyzee;
