"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";

interface featuresArray {
  name: string;
  background: string;
  className: string;
  textPosition: "top-left" | "top-right" | "bottom";
}

const features: featuresArray[] = [
  {
    name: "100% Gas-less Protocol",
    background: "/assets/Features/Card1.svg",
    className:
      "col-span-2 md:col-span-3  row-span-3   col-start-1 lg:col-start-1 lg:col-end-1 lg:row-end-3",
    textPosition: "top-left",
  },
  {
    name: "AI powered personalised learning about DeFi",
    background: "/assets/Features/Card2.svg",
    className:
      "col-span-2 md:col-span-3  row-span-2 col-start-1  lg:col-start-2 lg:col-end-2 lg:-row-start-2 lg:row-end-",
    textPosition: "bottom",
  },
  {
    name: "Smarter Yield Optimization",
    background: "/assets/Features/Card3.svg",
    className:
      "col-span-2 md:col-span-3  row-span-1 col-start-1 lg:col-start-3  lg:col-end-3 lg:-row-start-2 lg:row-end-3",
    textPosition: "top-right",
  },
  {
    name: "Predictive Market Analytics",
    background: "/assets/Features/Card4.svg",
    className:
      " col-span-2 md:col-span-3  row-span-3 lg:col-start-1 lg:col-end-2 lg:row-start-3",
    textPosition: "top-left",
  },
  {
    name: "AI Managed Interoperability",
    background: "/assets/Features/Card5.svg",
    className:
      "col-span-2 md:col-span-3 row-span-3 lg:col-start-2 lg:col-end-2 lg:row-start-4 lg:row-end-2",
    textPosition: "top-left",
  },
  {
    name: "AI Driven Trading Bots",
    background: "/assets/Features/Card6.svg",
    className:
      " col-span-2 md:col-span-3   row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-3",
    textPosition: "top-right",
  },
  {
    name: "AI Powered DAO Governance",
    background: "/assets/Features/Card7.svg",
    className:
      "col-span-2 md:col-span-3  row-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-6 lg:row-end-4",
    textPosition: "top-left",
  },
  {
    name: "Cross Chain Liquidity Hub",
    background: "/assets/Features/Card8.svg",
    className:
      "col-span-2 md:col-span-3 row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-6",
    textPosition: "bottom",
  },
];

function Features() {
  return (
    <div className="p-4 sm:p-6 md:p-8 mt-10 relative  ">
      {/* <div className="">
        <Image
          src="/assets/background-assets/Ellipse.svg"
          alt="bg"
          className=" "
          width={10000}
          height={1000}
        />
      </div> */}

      <h1 className="text-center mb-12 text-2xl sm:text-3xl md:text-24 font-semibold bg-linear-gradient bg-clip-text text-transparent">
        Features of ZEE Chain
      </h1>

      <BentoGrid className=" lg:grid-cols-3 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] gap-3 sm:gap-4 md:gap-6 max-w-[1400px] mx-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Features;
