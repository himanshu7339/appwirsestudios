import Image from "next/image";

import { FaRegSadCry, FaRegSmileBeam } from "react-icons/fa";
import { PiArrowBendRightDownBold, PiArrowBendRightUp } from "react-icons/pi";
import HeroImage from "@/images/web_design.png";
import Men from "@/images/frusted_men.png";
import Me from "@/images/me.jpg";

import Form from "@/components/common/Form";
import { IoCall } from "react-icons/io5";
import CodingImage from "@/images/coding-Image.jpg"

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
export default function Home() {
  return (
    <div className="home">
      <div className="hero-section-div flex flex-col lg:flex-row  lg:p-11 justify-between">
        {/* Attention */}
        <section className="hero-section m-4 ">
          <h1 className="text-center lg:text-start text-xl lg:text-6xl font-semibold">
            Transform Your Online Presence <br />{" "}
            <span className="font-normal">with Expert Web Development</span>
          </h1>
          <p className="text-sm text-center lg:text-xl mt-5 lg:text-start min-w-48">
            Your website is often the first impression customers have of your
            business. Make it count with a stunning, high-performance website
            from <br /> appwisestudios Web Development Service.
          </p>

          <div className="header-button lg:w-[8.5rem] h-12 border-2 border-white bg-blue hover:bg-black duration-300 transition block p-3 mt-2 rounded-md">
            <a
              href={`tel:+91 8376849918`}
              className={`  flex items-center justify-between gap-2  text-white  rounded-lg`}
            >
              Let&apos;s Talk <IoCall className="" />
            </a>
          </div>
        </section>
        {/* form section */}
        <div className="form-section-lead p-5 lg:p-0 ">
          <Form />
        </div>
      </div>

      {/* Why Choose Us? */}

      <section className="why-we-choose-us flex flex-col gap-7 lg:flex-row p-7">
        <div className="right-div">
          <h1 className="lg:text-start text-xl text-center lg:text-5xl font-bold mb-6">
            Why Choose Us?
          </h1>
          <p className="text-sm lg:text-xl">
            In today’s digital world, your website is your most important
            business tool. It needs to be attractive, functional, and
            user-friendly. Our web development service ensures your website
            meets all these criteria and more.
          </p>
        </div>

        <div className="right-left">
          <Image src={CodingImage} alt="coding-image"/>
        </div>
      </section>

      {/* We Address Your Key Challenges */}
      <section className="">
        <ul className="list-disc bg-blue p-7 lg:text-xl ">
          <h2 className="lg:text-2xl mb-5 font-semibold text-start">
            We Address Your Key Challenges
          </h2>
          {/* list */}
          <li>
            <span>Outdated Design</span>: Fresh, modern designs that reflect
            your brand.
          </li>
          <li>
            <span>Poor User Experience</span>: Seamless navigation and
            functionality.
          </li>
          <li>
            <span>Non-Responsive Sites</span>: Fully optimized for all devices.
          </li>
          <li>
            <span>Low Conversion Rates</span>: Strategic design to convert
            visitors into customers.
          </li>
        </ul>
        <div className="line-div bg-white h-2"></div>
      </section>
    </div>
  );
}
