import Image from "next/image";

import { FaRegSadCry, FaRegSmileBeam } from "react-icons/fa";

import HeroImage from "@/images/web_design.png";
import Men from "@/images/frusted_men.png";
import Me from "@/images/me.jpg";
import { GoArrowUpRight } from "react-icons/go";
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
    <div className={``}>
      {/* Hero section */}
      <div className="flex-container flex flex-col lg:flex-row justify-between">
        <div className="left-container p-2 lg:p-20 flex flex-col items-center lg:items-start">
          <h1 className="lg:text-4xl text-3xl flex flex-col  gap-2">
            <span className="lg:text-6xl font-bold   lg:font-bold">
              {" "}
              Transform Your Online{" "}
            </span>
            <span className="lg:text-6xl lg:font-semibold">
              Presence with Professional{" "}
            </span>
            <span className="lg:text-5xl lg:font-semibold underline">
              Web Development{" "}
            </span>
          </h1>
          <p className="sub-heading text-xl  text-slate-700  mt-6 lg:mt-16 lg:text-2xl">
            Helping small businesses create stunning effective websites.
          </p>

          <div className="buttons lg:mt-16 mt-4 flex gap-5">
            <a
              href={`tel:+91 8376849918`}
              className="bg-black flex gap-1 items-center hover:bg-gray-700 p-2 text-[1rem] text-white  lg:text-[1rem] lg:p-2  rounded-lg"
            >
              Schedule a Free Consultation
              <GoArrowUpRight />
            </a>
          </div>
        </div>

        <div className="right-container p-5 lg:p-20">
          <Image src={HeroImage} width={600} alt="hero-image"/>
        </div>
      </div>

      {/* Problem Section */}
      <div className="problem-section ">
        <h1 className="flex flex-col text-4xl gap-1 lg:text-xl p-1  justify-center  lg:text-6xl font-bold xl  text-center">
          Are You Struggling to
          <span className="text-[#E90074]"> Build Your Website</span>{" "}
        </h1>
        <div className="container-div flex  flex-col-reverse lg:flex-row justify-center items-center">
          <div className=" left-box problem-in-points mt-4 p-8">
            <ul className="list-disc text-lg lg:text-2xl space-y-3">
              <li>Building a website can be overwhelming and time-consuming</li>
              <li>Do you feel frustrated by the technical complexities?</li>
              <li>
                We believe every business deserves a great website without the
                hassle.
              </li>
            </ul>
          </div>
          <div className="right-box">
            {/* <h1>Image</h1> */}
            <Image src={Men} alt="" width={400} height={200} />
          </div>
        </div>
      </div>

      {/* About Us */}
      {/* <div className="about-section">
        <h1 className="text-center text-2xl font-bold lg:text-[2.5rem] mb-5">
          About Us
        </h1>
        <h1 className="text-center text-xl  lg:text-5xl font-bold ">
          {" "}
          <span className="text-[#E90074] ">Your Expert Web </span>Development
          Guide
        </h1>
        <div className="about-us-container flex flex-col-reverse lg:flex-row justify-center p-7 gap-16 items-center">
          <div className="left">
            <ul className="list-disc lg:text-2xl space-y-3">
              <li>
                We understand the challenges of creating a professional website.
              </li>
              <li>
                With over 3 years of experience and a portfolio of successful
                projects, we are here to help.
              </li>
            </ul>
            <h1></h1>
            <h1></h1>
          </div>
          <div class="w-[23rem] h-[37rem] md:w-48 md:h-48 lg:w-[26rem] lg:h-[29rem] rounded-full overflow-hidden ">
            <Image
              className="w-full h-full object-none"
              src={Me}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div> */}

      {/* Our Dev strategy */}

     
      

        <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Website Development Strategy</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our Simple 3-Step Plan: Discuss Your Needs, Design & Build Your Website, and Launch & Maintain.
        </p>
      </div>
    </section>

      {/* download guide */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Schedule a free consultation with us or download our guide to start
            building an effective website today.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#schedule-consultation"
              className="inline-block bg-black text-white  py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800"
            >
              Schedule a Free Consultation
            </a>

            <a
              href="https://drive.google.com/file/d/1vRd_6e4cJPs80oITyKmStCKcWGmyEisS/view?usp=drive_link"
              className="inline-block bg-white text-black  py-3 px-6 rounded-lg shadow-lg border border-black hover:bg-gray-100"
            >
              Download Our Free Guide
            </a>
          </div>
        </div>
      </div>

      {/* testimonials */}

      {/* <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Read how we’ve helped businesses like yours grow with a professional
            website.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <Image
                    src={testimonial.beforeImage}
                    alt="Before"
                    className="w-full rounded-lg mb-2"
                  />
                  <Image
                    src={testimonial.afterImage}
                    alt="After"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {testimonial.name}, {testimonial.company}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Stakes */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Don’t Risk Losing Potential Customers
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Without a strong online presence, your business may fall behind
            competitors. Ensure your success with a professional website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Risk Section --> */}
            <div className="bg-red-100 p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
              <FaRegSadCry className="text-red-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Risk</h3>
              <p className="text-gray-700">
                Losing potential customers, falling behind competitors, and
                missing out on growth opportunities.
              </p>
            </div>

            {/* <!-- Reward Section --> */}
            <div className="bg-green-100 p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
              <FaRegSmileBeam className="text-green-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Reward
              </h3>
              <p className="text-gray-700">
                Attracting more customers, staying ahead of competitors, and
                achieving significant business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
