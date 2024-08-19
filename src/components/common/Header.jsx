"use client";
import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import Logo from "@/images/Logo-.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#0061E0] lg:flex  justify-between gap-1 sticky top-0 lg:shadow-sm hidden lg:visible z-20 ">
      <div className="navlinks flex  flex-col gap-3 min-h-60   p-5 lg:flex-row lg:min-h-0 lg:gap-8 lg:p-4 lg:ml-28 lg:items-center">
        <Link href={"/"} className="mr-8">
          <Image src={Logo} width={300} hight={200} alt="Logo" />
        </Link>

        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/blogs" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/blogs"
        >
          Blogs
        </Link>
        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/price" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/price"
        >
          Pricing
        </Link>
        {/* <Link href="/dashboard">Projects</Link> */}
        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/termsandconditions" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/termsandconditions"
        >
          Terms And Conditions
        </Link>
        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/about" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/about"
        >
          About Us
        </Link>
        <Link
          className={`text-white font-normal hover:text-beige transition duration-300 link ${
            pathname === "/contact" ? " border-b-4 border-white" : "text-white"
          } `}
          href="/contact"
        >
          Enquiry
        </Link>
      </div>
      <div className="header-button shadow-md h-12 flex border-2 rounded-full  border-beige bg-navy lg:p-3 p-2 m-2  hover:bg-black duration-300 transition">
        <a
          href={`tel:+91 8376849918`}
          className="inline-flex items-center  text-white  transition duration-300"
        >
          <span className="mr-2">Hire Today</span>
          <IoCall className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;
