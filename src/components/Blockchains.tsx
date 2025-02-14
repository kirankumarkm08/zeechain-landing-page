import React from "react";
import Eth from "/public/assets/Blockchain-logos/Eth.svg";
import Polygon from "/public/assets/Blockchain-logos/polygon.svg";
import Bnb from "/public/assets/Blockchain-logos/BNB.svg";
import Citra from "/public/assets/Blockchain-logos/Citra.svg";
import Base from "/public/assets/Blockchain-logos/base.svg";
import Thor from "/public/assets/Blockchain-logos/Thorchain.svg";
import Mantle from "/public/assets/Blockchain-logos/mantle.svg";
import Arbitrum from "/public/assets/Blockchain-logos/arbitrum.svg";
import Linea from "/public/assets/Blockchain-logos/linea.svg";
import Bitcoin from "/public/assets/Blockchain-logos/Bitcoin.svg";
import Stack from "/public/assets/Blockchain-logos/Stack.svg";
import Optimism from "/public/assets/Blockchain-logos/optimism.svg";
import Image, { StaticImageData } from "next/image";
import Diveder from "/public/assets/background-assets/Divider.svg";

const Blockchains = () => {
  interface Blockchains {
    icon: string | StaticImageData;
    label: string;
  }
  const blockchains: Blockchains[] = [
    {
      icon: Eth,
      label: "Ethereum",
    },
    {
      icon: Polygon,
      label: "polygon",
    },
    {
      icon: Bnb,
      label: "BNB chain",
    },
    {
      icon: Citra,
      label: "Citra",
    },
    {
      icon: Base,
      label: "base",
    },
    {
      icon: Thor,
      label: "Thor-chain",
    },
    {
      icon: Mantle,
      label: "mantle",
    },
    {
      icon: Arbitrum,
      label: "Arbitrum",
    },
    {
      icon: Linea,
      label: "Linea",
    },
    {
      icon: Bitcoin,
      label: "Bitcoin",
    },
    {
      icon: Stack,
      label: "Stacks",
    },
    {
      icon: Optimism,
      label: "Optimism",
    },
  ];
  return (
    <div className="py-20 mx-20">
      <Image
        src={Diveder}
        alt=""
        className=" absolute left-1/2 -translate-x-1/2 -my-10"
      />

      <div className="relative">
        <h1 className="bg-linear-gradient bg-clip-text text-transparent  flex justify-center  my-5   font-semibold  text-18 xl:text-32 leading-tight">
          Seamlessly access all Blockchains
        </h1>
        <div className=" relative grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-10  md:gap-[46px]  items-start  justify-items-start justify-center     ">
          {blockchains.map((chains) => (
            <div
              key={chains.label}
              className="flex justify-center items-center gap-2"
            >
              <Image src={chains.icon} alt="logos" />
              <p className="bg-text-top-buttom-linear text-transparent bg-clip-text  font-inter leading-snug  font-semibold text-18 ">
                {chains.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={Diveder}
        alt=""
        className=" absolute left-1/2 -translate-x-1/2 my-10"
      />
    </div>
  );
};

export default Blockchains;
