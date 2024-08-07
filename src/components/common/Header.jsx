import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import Logo from "@/images/Logo-.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#0061E0] flex  justify-between gap-1 sticky top-0 lg:shadow-sm ">
      <div className="navlinks flex flex-col gap-3 min-h-60   p-5 lg:flex-row lg:min-h-0 lg:gap-8 lg:p-4 lg:ml-28 lg:items-center">
        <Link href={"/"}>
        {/* <Image src={Logo} width={200} hight={100} alt="Logo"/> */}
          <h1 className="lg:text-3xl text-xl font-bold font-sans">Appwisestudios</h1>
        </Link>
        

        <Link className="text-white hover:text-beige transition duration-300" href="/">Home</Link>
        <Link className="text-white hover:text-beige duration-300 transition" href="/price">Pricing</Link>
        {/* <Link href="/dashboard">Projects</Link> */}
        <Link className="text-white hover:text-beige duration-300 transition" href="/termsandconditions">Terms And Conditions</Link>
        <Link className="text-white hover:text-beige duration-300 transition" href="/about">About Us</Link>
        <Link className="text-white hover:text-beige duration-300 transition" href="/contact">Enquiry</Link>
      </div>
      <div className="header-button shadow-md h-12 flex border-2 border-beige bg-navy lg:p-3 p-2 m-2 rounded-md hover:bg-black duration-300 transition">
        <a
          href={`tel:+91 8376849918`}
          className={`  flex items-center justify-between gap-2  text-beige  rounded-lg`}
        >
           Let&apos;s Talk <IoCall className="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
