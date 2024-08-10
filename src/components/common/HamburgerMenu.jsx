"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCall } from "react-icons/io5";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
      <GiHamburgerMenu onClick={toggleMenu} className="text-2xl left-4 top-7 absolute lg:hidden" />
      <div className="header-button shadow-md  flex border-2 border-beige bg-navy  rounded-md hover:bg-black duration-300 transition bg-blue p-1 right-4 top-6 absolute lg:hidden">
        <a
          href={`tel:+91 8376849918`}
          className={`  flex items-center justify-between gap-2  text-beige  rounded-lg`}
        >
           Let&apos;s Talk <IoCall className="" />
        </a>
      </div>
      
      <div
        className={`absolute  z-30 min-h-[100%] shadow-lf min-w-[70%]  lg:hidden visible  bg-blue ${isOpen ? "translate-x-0" : "-translate-x-full"} duration-500 `}
      >
        <div className="top-div flex justify-between p-4">
            <h1 className=" text-xl font-bold">Appwisestudios</h1>
          <RxCross2 onClick={toggleMenu} className={`text-2xl text-white   ${isOpen ? "visible" : "hidden"}`} />
        </div>
        <div className="navlinks-content flex flex-col gap-3 pl-4 pb-4 text-white text-sm">
          <Link onClick={toggleMenu} href="/">Home</Link>
          <Link onClick={toggleMenu} href="/price">Pricing</Link>
          <Link onClick={toggleMenu} href="/about">About</Link>
          <Link onClick={toggleMenu} href="/contact">Enquiry</Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
