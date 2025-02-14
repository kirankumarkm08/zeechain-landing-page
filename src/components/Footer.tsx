import React from "react";
import Logo from "/public/assets/ZEEchain_logo/Footer_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Learn, ZEE, Community } from "@/constants";

const Footer = () => {
  return (
    <footer className=" text-white py-12 bg-black h-fit    px-10">
      <div className=" lg:flex   items-center justify-evenly h-[450px] max-w-[1280px] m-auto  ">
        <div className="flex ">
          {/* Company Info */}
          <div className="space-y-4 border-r border-lightgray pr-20 ">
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="ZEE Chain Logo" width={40} height={40} />
              <span className="text-white-500 font-semibold text-24 leading-30">
                ZEE Chain
              </span>
            </div>
            <p className="text-white-200 max-w-xs text-16 ">
              ZeeChain is the first AI-driven DeFi Layer 1, merging Cosmos
              interoperability with intelligent swaps, lending, and staking.
              Experience the future of decentralized finance with AI automation
            </p>
          </div>
        </div>{" "}
        <div className="  md:flex  -md:flex-col  gap-10 md:gap-20 my-10 ">
          <div className="">
            <h3 className="text-24  font-semibold mb-4 text-white-100">ZEE</h3>
            <ul className="space-y-2">
              {Learn.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-white-200 capitalize hover:text-white-100 transition-colors "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-24 font-semibold mb-4 text-white-100">Learn</h3>
            <ul className="space-y-2">
              {ZEE.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-white-200 capitalize hover:text-white-100 transition-colors "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-24  font-semibold mb-4 text-white-100">
              Community
            </h3>
            <ul className="space-y-2">
              {Community.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-white-200 capitalize hover:text-white-100 transition-colors "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
