"use client";
import React from "react";
import Logo from "/public/assets/navbar/Vector.svg";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import MobileNavbar from "./MobileView/MobileNavbar";
import { useState } from "react";

const Navbar = () => {
  const [menu, isMenu] = useState(false);
  const HandleMobileView = () => isMenu((prev) => !prev);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-primary h-[60px]   flex justify-between px-10 lg:px-20 items-center fixed w-full z-50">
      <Link href="/" className="flex items-center gap-3 ">
        <Image src={Logo} alt="logo" />
        <p className=" font-normal leading-[17px] text-white-200">ZEE Chain</p>
      </Link>
      <button className="hidden md:flex gap-[25px] ">
        {navLinks.map((nav) => (
          <div
            className="text-white-500 flex items-center  gap-2  font-medium"
            key={nav.label}
          >
            <h1>{nav.label}</h1>
            <Image src={nav.icon} alt={nav.label} />
          </div>
        ))}
      </button>
      <button
        className="relative overflow-hidden px-6 py-3  group rounded-full bg-purple-500 text-white font-semibold text-white-100 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg  hidden md:flex "
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
      <div className="md:hidden">
        <Image
          src={"/assets/navbar/Mobile_menu.svg"}
          alt="menu"
          className="w-[30px]"
          onClick={HandleMobileView}
          width={40}
          height={40}
        />

        {menu && <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
