import React from "react";
import Link from "next/link";
import Logo from "@/images/Logo-.svg";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Contact Information --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <a href="mailto:info@example.com" className="hover:underline">
                  appwisestudios@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="hover:underline">
                  +91 8376849918
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Chhattarpur Mata Chowk New Delhi 110074
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Information Links --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/price" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="/termsandconditions" className="hover:underline">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Logo Column --> */}
          <div className="flex justify-start lg:justify-end">
          <Image src={Logo} width={300} hight={200} alt="Logo"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
