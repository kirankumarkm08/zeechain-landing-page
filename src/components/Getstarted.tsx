import React from "react";
import Participate from "/public/assets/Blog/Governance_zerochain.svg";
import When from "/public/assets/Blog/When_test-net.svg";
import How from "/public/assets/Blog/How_test-net.svg";
import Image, { StaticImageData } from "next/image";
import Arrow_right from "/public/assets/Blog/Arrow_right.svg";
import Link from "next/link";

const Get_started = () => {
  interface Blog {
    image: string | StaticImageData;
    label: string;
    descrption: string;
    link: string;
    ReadMore: string;
  }
  const Blog: Blog[] = [
    {
      image: Participate,
      label: "How to participate in Governance of Zero Chain",
      descrption:
        "Be a part of Zero Chain’s future! Vote on proposals, stake your tokens, and contribute to key decisions that shape the ecosystem. Join the governance and make your voice heard.",
      link: "https://kiran-kumar-km.ghost.io/ghost/#/site",
      ReadMore: "Read more",
    },
    {
      image: When,
      label: "When is the Test-Net arriving for Zero Chain",
      descrption:
        "Get ready to experience Zero Chain! The testnet launch is just around the corner, bringing early access to developers and users. Stay tuned for updates and launch details.",
      link: "",
      ReadMore: "Read more",
    },
    {
      image: How,
      label: "How to use Zero Chain Test-Net",
      descrption:
        "Explore Zero Chain’s features risk-free on the testnet. Learn how to set up your wallet, deploy smart contracts, and interact with DeFiAI-powered services before the mainnet launch.",
      link: "",
      ReadMore: "Read more",
    },
  ];
  return (
    <div className="mx-auto max-w-[1280px]">
      <h1 className="bg-linear-gradient bg-clip-text text-transparent  flex justify-center my-5   font-semibold  text-18 xl:text-32 leading-tight">
        Get-Started with Zero Chain
      </h1>
      <div className="grid lg:grid-cols-3 justify-center gap-10">
        {Blog.map((blog) => (
          <div
            key={blog.label}
            className=" w-[384px] rounded-3xl border border-lightgray p-[24px]  bg-card_background flex flex-col items-center gap-7 leading-30 line-extra-tight 
             "
          >
            <Image
              src={blog.image}
              alt=""
              className="rounded-xl mt-2 border-2 border-lightgray"
            />
            <h1 className="font-bold text-white-600 text-24 ">{blog.label}</h1>
            <h3 className="font-light  text-14 leading-20 text-white-400 border-b border-lightgray pb-2">
              {blog.descrption}
            </h3>

            <div className="flex justify-between w-full">
              {" "}
              <p className="font-normal text-white-800 ">February 8,2025</p>
              <Link
                href={blog.link}
                className="font-medium text-16 flex text-white-900 items-center hover:scale-95 translate-x-1 duration-300"
              >
                Read More
                <span>
                  <Image src={Arrow_right} alt="" className="-rotate-90 mx-1" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Get_started;
