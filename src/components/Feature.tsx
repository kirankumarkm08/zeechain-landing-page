import React from "react";
import Gas_Less from "/public/assets/Features/gas_less_protocol.png";
import Market_analytics from "/public/assets/Features/market_Analytics.png";
import AI_Powered from "/public/assets/Features/AI_powered.png";
import AI_managed from "/public/assets/Features/AI_managed.png";
import AI_Powered_DAO from "/public/assets/Features/AI_powered_DAO.png";
import Smarter_Yield from "/public/assets/Features/smarter_yield.png";
import AI_Driven from "/public/assets/Features/AI_driven.png";
import Cross_chain from "/public/assets/Features/cross_chain.png";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="mx-auto max-w-[1280px] py-20 bg-background_mesh">
      <h1 className=" bg-linear-gradient bg-clip-text text-transparent   flex justify-center my-5   font-semibold  text-18 xl:text-32 leading-tight">
        Features of ZEE Chain
      </h1>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
        <div className=" gap-5 flex flex-col">
          <Image src={Gas_Less} alt="" />
          <Image src={Market_analytics} alt="" />
        </div>
        <div className="gap-5 flex flex-col">
          <Image src={AI_Powered} alt="" />
          <Image src={AI_managed} alt="" />
          <Image src={AI_Powered_DAO} alt="" />
        </div>
        <div className="gap-5 flex flex-col">
          <Image src={Smarter_Yield} alt="" />
          <Image src={AI_Driven} alt="" />
          <Image src={Cross_chain} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
