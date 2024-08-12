import Link from 'next/link';
import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
const WhatApp = () => {
  return (
    <Link  target="_blank" className="text-sm flex flex-col right-6  items-center sho justify-center font-semibold fixed lg:right-0 bottom-6 lg:mr-4 hover:underline transition-all ease-in duration-300" href={"https://wa.me/918376849918"}>
    <RiWhatsappFill className="text-6xl text-[#25D366] drop-shadow-md" />
    
    <p  className='font-bold'><span className='hidden lg:block'>Contact On</span> WhatApp</p>
    </Link>
  )
}

export default WhatApp