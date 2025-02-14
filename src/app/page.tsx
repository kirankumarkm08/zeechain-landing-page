import React from "react";
import Hero from "@/components/Hero";
import Blockchains from "@/components/Blockchains";
import Features from "@/components/Feature";
import Whyzee from "@/components/Whyzee";
import Getstarted from "@/components/Getstarted";
import Newsletter from "@/components/Newsletter";

const page = () => {
  return (
    <div className="">
      <Hero />
      <Blockchains />
      <Features />
      <Whyzee />
      <Getstarted />
      <Newsletter />
    </div>
  );
};

export default page;
