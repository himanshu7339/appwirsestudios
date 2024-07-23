import React from "react";
import Image from "next/image";
import CodingImage from "@/images/CodingImage.jpg";
const About = () => {
  return (
    <>
     
      {/* Body section */}

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to Appwisestudios! We are a team of passionate web
            developers dedicated to helping businesses succeed online. Our goal
            is to create beautiful, functional websites that make a real impact.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is simple: to provide high-quality web development
            services that help businesses grow. We believe that a great website
            can be a powerful tool for success.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>
              Quality: We deliver top-notch work that meets the highest
              standards.
            </li>
            <li>
              Innovation: We stay up-to-date with the latest trends and
              technologies.
            </li>
            <li>
              Customer Focus: We listen to our clients and tailor our services
              to their needs.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h3>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>
              Website Design and Development: We build custom websites that look
              great and work perfectly.
            </li>
            <li>
              E-commerce Solutions: We create online stores that are easy to use
              and manage.
            </li>
            <li>
              SEO and Digital Marketing: We help you get found online and
              attract more customers.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>
              Experienced Team: Our team has years of experience in web
              development.
            </li>
            <li>
              Personalized Service: We take the time to understand your business
              and goals.
            </li>
            <li>
              Proven Results: Our clients see real improvements in their online
              presence.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-600">
            Ready to start your web development project? Contact us today to see
            how we can help!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
