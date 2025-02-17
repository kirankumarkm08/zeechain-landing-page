"use client";
import React from "react";
import Logo from "/public/assets/navbar/Vector.svg";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import MobileNavbar from "./MobileView/MobileNavbar";
import { useState } from "react";
import CustomButton from "./Custom-Button";

const Navbar = () => {
  const [menu, isMenu] = useState(false);
  const HandleMobileView = () => isMenu((prev) => !prev);

  return (
    <div className="bg-primary h-[60px]   flex justify-between px-10 lg:px-20 items-center fixed w-full z-50 ">
      <Link href="/" className="flex items-center gap-3 ">
        <Image src={Logo} alt="logo" />
        <p className=" font-inter leading-[17px] text-white-200">ZEE Chain</p>
      </Link>
      <button className="hidden md:flex gap-[25px]  ">
        {navLinks.map((nav) => (
          <div
            className="text-white-500 flex items-center  gap-2 font-clash-display  "
            key={nav.label}
          >
            <h1>{nav.label}</h1>
            <Image src={nav.icon} alt={nav.label} />
          </div>
        ))}
      </button>{" "}
      <div className="hidden md:flex">
        <CustomButton />
      </div>
      <div className="md:hidden">
        <Image
          src={"/assets/navbar/Mobile_menu.svg"}
          alt="menu"
          className="w-[30px]"
          onClick={HandleMobileView}
          width={30}
          height={30}
        />
        {menu && <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
