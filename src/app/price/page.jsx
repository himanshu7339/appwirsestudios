import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Price Plans",
};
const plans = [
  {
    title: "Basic Plan",
    price: "₹2,999",
    features: ["1 Page Design", "Basic SEO Optimization", "Responsive Design"],
    buttonText: "Select Plan",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Standard Plan",
    price: "₹6,999",
    features: [
      "5 Page Design",
      "Advanced SEO Optimization",
      "Responsive Design",
      "Basic E-commerce Setup",
    ],
    buttonText: "Select Plan",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Premium Plan",
    price: "₹15,999",
    features: [
      "Unlimited Pages",
      "Premium SEO Optimization",
      "Advanced Features",
      "Complete E-commerce Solution",
    ],
    buttonText: "Select Plan",
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
];

const PricingPage = () => {
  return (
    <div className="flex justify-center mx-auto p-6 text-center">
      <section className="p-4 md:p-8">
        <div className="py-8 max-w-screen-xl lg:py-16">
          <div className="mx-auto max-w-3xl  text-center pb-12 md:pb-20">
            <h2 className="text-3xl font-semibold sm:text-4xl mb-4 text-blue">
              Pricing Plans
            </h2>
            <p className="text-xl">
              Choose a plan that best suits your data needs.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8   shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <h3 className="mb-4 lg:text-2xl text-4xl font-semibold">Basic Plan</h3>

              <div className="flex flex-col justify-center items-baseline my-9">
                <div className="discount-price-cut flex  items-center mb-4 justify-center">
                <span className="mr-2 text-2xl line-through ">₹6,000 </span>
                <span className="bg-blue text-white p-1 rounded-md"> Discount 50%</span>
                </div>
              
                <span className=" text-5xl text-center font-bold">₹2,999</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>

                  <span className="text-base-content/80">1 Page Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Basic SEO Optimization
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Responsive Design
                  </span>
                </li>
              </ul>
              {/* <button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">
                Get Started
              </button> */}
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8   shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <h3 className="mb-4 text-2xl font-semibold">Standard Plan</h3>

              <div className="flex flex-col justify-center items-baseline my-9">
              <div className="discount-price-cut flex items-center mb-4">
                <span className="mr-2 text-2xl line-through ">₹9,999</span>
                <span className="bg-blue text-white p-1 rounded-md"> Discount 30%</span>
                </div>
                
                <span className="mr-2 text-5xl font-extrabold">₹6,999</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">5 Page Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Advanced SEO Optimization
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Responsive Design
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Basic E-commerce Setup
                  </span>
                </li>

                
              </ul>
              {/* <button className="w-full p-2 bg-gray-500 text-white font-bold gap-2 shadow uppercase">
                Coming soon ...
              </button> */}
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8   shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
              <h3 className="mb-4 text-2xl font-semibold">Premium Plan</h3>
             
              <div className="flex flex-col justify-center items-baseline my-9">
              <div className="discount-price-cut flex items-center mb-4">
                <span className="mr-2 text-2xl line-through ">₹23,999 </span>
                <span className="bg-blue text-white p-1 rounded-md"> Discount 33%</span>
                </div>
                <span className="mr-2 text-5xl font-extrabold">₹15,999</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">Unlimited Pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Premium SEO Optimization
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Advanced Features
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                  </svg>
                  <span className="text-base-content/80">
                    Complete E-commerce Solution
                  </span>
                </li>
              </ul>
              {/* <button className="w-full p-2 bg-gray-500 text-white font-bold gap-2 shadow uppercase">
                Coming soon ...
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
