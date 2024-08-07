import React from "react";
import Link from "next/link"
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
                <a href="mailto:info@example.com" class="hover:underline">
                  appwisestudios@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" class="hover:underline">
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
          {/* <!-- Social Media Links --> */}
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="flex space-x-4">
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
          {/* <!-- Additional CTAs --> */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <div className="mb-4 ">
              <a
                href="#subscribe"
                className="inline-block bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-800 border-2 border-white"
              >
                Subscribe to our newsletter
              </a>
            </div>
            <div>
              <a
                href="#follow-us"
                className="inline-block bg-white text-black font-bold py-2 px-4 rounded-lg border border-blue-600 hover:bg-gray-100"
              >
                Follow us on social media
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
