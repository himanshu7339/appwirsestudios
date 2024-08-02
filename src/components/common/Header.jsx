import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import Logo from "@/images/Logo-.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white flex  justify-between gap-1 sticky top-0 lg:shadow-sm ">
      <div className="navlinks flex flex-col gap-3 min-h-60   p-5 lg:flex-row lg:min-h-0 lg:gap-8 lg:p-4 lg:ml-28 lg:items-center">
        <Link href={"/"}>
          <Image
            src={Logo}
            className="w-[100px] lg:w-[200px]"
            width={200}
            alt="website logo"
          />
        </Link>

        <Link href="/">Home</Link>
        <Link href="/price">Pricing</Link>
        {/* <Link href="/dashboard">Projects</Link> */}
        <Link href="/termsandconditions">Terms And Conditions</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Enquiry</Link>
      </div>
      <div className="header-button mt-3 mr-2 lg:items-center lg:flex">
        <a
          href={`tel:+91 8376849918`}
          className={`bg-black flex items-center gap-1 hover:bg-gray-700 p-3 text-sm text-white lg:font-semibold lg:text-[1rem] lg:p-2  rounded-lg`}
        >
          Schedule a Free Consultation <IoCall className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
