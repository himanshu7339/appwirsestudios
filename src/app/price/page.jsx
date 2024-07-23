// src/PricingPage.js

import React from 'react';

const plans = [
  {
    title: 'Basic Plan',
    price: '₹2,999',
    features: ['1 Page Design', 'Basic SEO Optimization', 'Responsive Design'],
    buttonText: 'Select Plan',
    buttonColor: 'bg-green-500 hover:bg-green-600'
  },
  {
    title: 'Standard Plan',
    price: '₹6,999',
    features: ['5 Page Design', 'Advanced SEO Optimization', 'Responsive Design', 'Basic E-commerce Setup'],
    buttonText: 'Select Plan',
    buttonColor: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    title: 'Premium Plan',
    price: '₹15,999',
    features: ['Unlimited Pages', 'Premium SEO Optimization', 'Advanced Features', 'Complete E-commerce Solution'],
    buttonText: 'Select Plan',
    buttonColor: 'bg-red-500 hover:bg-red-600'
  }
];

const PricingPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
      <p className="text-lg text-gray-600 mb-12">Affordable solutions for all your web development needs.</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-xl text-gray-800 mb-4">{plan.price}</p>
            <ul className="list-disc list-inside mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className={`${plan.buttonColor} text-white font-bold py-2 px-4 rounded-full`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Need something unique?</h2>
        <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
          Request a Custom Quote
        </a>
      </div>
    </div>
  );
};

export default PricingPage;
