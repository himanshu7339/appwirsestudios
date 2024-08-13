import Image from "next/image";
import Ebook from "@/images/eBook.jpg";
import Me from "@/images/me.jpg";
import { MdOutlinePriceChange } from "react-icons/md";
import BusinessGrowImage from "@/images/benefit-key/business_grow.svg";
import CustomDesign from "@/images/benefit-key/custom_design.svg";
import ConversionFocus from "@/images/benefit-key/conversion_focused.svg";
import MobileResponsive from "@/images/benefit-key/mobile_responsive.webp";
import SEOImage from "@/images/benefit-key/seo.jpeg";

import Form from "@/components/common/Form";
import { IoCall } from "react-icons/io5";
import CodingImage from "@/images/Coding-Image.jpg";
import FormEbook from "@/components/common/FormEbook";
import Link from "next/link";

const testimonials = [
  {
    name: "John Doe",
    company: "ABC Corp",
    beforeImage: Me,
    afterImage: Me,
    testimonial:
      "Our website was outdated and slow. After working with [Your Company], we have a modern, fast website that has increased our customer engagement significantly.",
  },
  {
    name: "Jane Smith",
    company: "XYZ Ltd",
    beforeImage: Me,
    afterImage: Me,
    testimonial:
      "Thanks to [Your Company], our website is now mobile-friendly and easy to manage. We've seen a significant increase in traffic and sales.",
  },
  {
    name: "Michael Brown",
    company: "LMN Inc",
    beforeImage: Me,
    afterImage: Me,
    testimonial:
      "The redesign and SEO optimization provided by [Your Company] have taken our online presence to the next level. We're extremely satisfied with the results.",
  },
  {
    name: "Emily White",
    company: "QRS Solutions",
    beforeImage: Me,
    afterImage: Me,
    testimonial:
      "Our website's performance and user experience have greatly improved, thanks to the team at [Your Company]. We've received numerous compliments from our clients.",
  },
];
const benefits = [
  {
    image: BusinessGrowImage,
    headline: "Boost Your Business Growth",
    subheading: "Achieve up to 79% increase in online engagement and sales.",
  },
  {
    image: CustomDesign,
    headline: "Custom Designs",
    subheading:
      "Tailored websites that reflect your brand’s identity and resonate with your target audience.",
  },
  {
    image: ConversionFocus,
    headline: "Conversion-Focused",
    subheading:
      "Strategically developed to turn visitors into loyal customers.",
  },
  {
    image: MobileResponsive,
    headline: "Mobile Responsive",
    subheading:
      "Seamlessly optimized for all devices, ensuring your site looks great everywhere.",
  },
  {
    image: SEOImage,
    headline: "SEO Optimized",
    subheading:
      "Built with search engine optimization best practices to help you rank higher and get found online.",
  },
  {
    image: SEOImage,
    headline: "Ongoing Support",
    subheading:
      "We provide continuous support to keep your site running smoothly.",
  },
];
const processSteps = [
  {
    heading: "Consultation",
    borderColor: "border-[#FFAF00]",
    color: "#7C00FE", // Example color
  },
  {
    heading: "requirement",
    borderColor: "border-[#F9E400]",
  },
  {
    heading: "Design",
    borderColor: "border-[#FFAF00]",
  },
  {
    heading: "Development",
    borderColor: "border-[#F5004F]",
  },
  {
    heading: "Testing",
    borderColor: "border-[#179BAE]",
  },
  {
    heading: "Launch & Support",
    borderColor: "border-[#BED754]",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section-div flex flex-col lg:flex-row lg:p-11 justify-between">
        {/* Attention */}
        <section className="hero-section m-4 mt-14 flex-1">
        <h1 className="text-center lg:text-start text-2xl lg:text-5xl font-semibold text-white">
  <span className="font-bold text-2xl lg:text-5xl">
    Supercharge Your Online Business with{" "}
  </span>
  <br />
  <span className="font-bold text-xl lg:text-5xl leading-9">
    a Freelancer Website Developer—Grow <br /> by 79% or More! 📈
  </span>
</h1>

          <p className="text-sm text-white text-center lg:text-lg mt-5 lg:text-start lg:w-[80%] lg:max-w-[64rem]">
            Elevate your brand and capture more leads with a stunning,
            high-converting website. Let’s turn your vision into reality and
            accelerate your business success!
          </p>

          <div className="button-pricing-hire flex  lg:flex-row justify-center lg:justify-start mt-5">
            <div className="header-button  bg-blue shadow-md h-12 flex border-2 rounded-full border-beige bg-navy lg:p-3 p-2 m-2 hover:bg-black duration-300 transition">
              <a
                href={`tel:+91 8376849918`}
                className="inline-flex items-center text-white transition duration-300"
              >
                <span className="mr-2 text-sm lg:text-lg ">Hire Today</span>
                <IoCall className="w-5 h-5" />
              </a>
            </div>
            <div className="header-button bg-blue shadow-md h-12 flex border-2 rounded-full border-beige bg-navy lg:p-3 p-2 m-2 hover:bg-black duration-300 transition">
              <Link
                href={`/price`}
                className="inline-flex items-center text-white transition duration-300"
              >
                <span className="mr-2 text-sm lg:text-lg">Pricing</span>
                <MdOutlinePriceChange className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <div className="form-section-lead p-5 lg:p-0 flex-2">
          <Form />
        </div>
      </div>

      {/* key and benefits */}

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="lg:text-5xl text-2xl font-semibold text-blue mb-6">
            FEATURES & BENEFITS
          </h2>
          <p className="lg:text-xl px-2 text-gray-600 mb-12 font-medium leading-relaxed lg:px-10 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-transparent bg-clip-text">
            This subheading highlights the importance of the benefits and
            encourages the reader to explore how your services can help them
            achieve their goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={benefit.image}
                  alt={benefit.headline}
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {benefit.headline}
                </h3>
                <p className="text-gray-600 font-regular">
                  {benefit.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process overview */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="lg:text-5xl text-2xl  font-semibold text-blue mb-8">
            Our Process Overview
          </h2>
          <div className="flex flex-col lg:flex-row px-4 gap-5 justify-center items-center space-x-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`rounded-full p-4 border-4 ${step.borderColor}`}
              >
                <h1 className="rounded-full p-4">{step.heading}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* final cta */}

      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className=" lg:text-5xl text-2xl  font-semibold text-gray-800 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="lg:text-lg px-3 text-gray-600 mb-8">
            Don’t let an outdated website hold you back. Get started today and
            see the difference a professional website can make for your
            business.
          </p>
          <a
            href={`tel:+91 8376849918`}
            className="inline-flex items-center hover:bg-black px-6 py-3 bg-blue text-white rounded-full  transition duration-300"
          >
            <span className="mr-2">Hire Today</span>
            <IoCall className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* EBook */}

      <section className="download-eBook  p-11 bg-blue">
        <div className="heading mb-6">
          <h1 className="text-center text-white  lg:text-xl">
            GET A FREE COPY OF OUR EBOOK
          </h1>
          <h2 className="text-center text-white font-bold lg:text-4xl text-xl">
            WEBSITE AUDIT BLUEPRINT hOW TO ENHANCE SEO SPEED,AND USER EXPERIENCE{" "}
            <br />
            TIPS FOR AUDIT OWN SITE
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-20">
          <Image className="shadow-lg" src={Ebook} width={300} alt="eBook" />
          <FormEbook />
        </div>
      </section>
    </div>
  );
}
