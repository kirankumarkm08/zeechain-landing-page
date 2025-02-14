import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div className="absolute   justify-center items-center   w-full start-0 h-[7800px]   bg-primary y ">
      {navLinks.map((navs) => (
        <Link
          key={navs.label}
          href={""}
          className="text-white-100 flex  gap-4 border-b border-lightgra  my-5 py-2  px-2     "
        >
          <p className="text-white-500 ">{navs.label}</p>
          <Image src={navs.icon} alt={navs.label} />
        </Link>
      ))}
      <button className="bg-purple-600 rounded-full h-[36px] py-4 text-white-900 font-semibold md:hidden flex justify-center items-center w-full px-20 ">
        {" "}
        Register for Test-Net
      </button>
    </div>
  );
};

export default MobileNavbar;
