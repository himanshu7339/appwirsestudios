import Image from "next/image";

import Ebook from "@/images/eBook.jpg";
import Me from "@/images/me.jpg";

import Form from "@/components/common/Form";
import { IoCall } from "react-icons/io5";
import CodingImage from "@/images/Coding-Image.jpg";
import FormEbook from "@/components/common/FormEbook";

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
        <section className="hero-section m-4 mt-14 ">
          <h1 className="text-center lg:text-start text-xl lg:text-6xl font-semibold">
            <span className="font-normal text-3xl lg:text-6xl">
              {" "}
              Is Your Business Missing Out{" "}
            </span>{" "}
            <br /> <span className="font-bold">on the Digital Revolution?</span>
          </h1>
          <p className="text-sm text-center lg:text-xl mt-5 lg:text-start lg:w-[64rem]">
            In today’s digital age, not having a website means missing out on
            countless opportunities. <br /> A professional website is your
            online storefront, accessible to customers 24/7, showcasing your
            services, and setting you apart from competitors
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

      {/* video section */}
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="lg:text-2xl mb-4">
              Imagine this  A single Google search leads potential customers
              straight to your business. With a professionally designed website,
              your business becomes easily discoverable online, driving more
              traffic and boosting your profits. Don’t miss out on the
              opportunity to grow your business with a powerful online presence!
            </h1>
            <div className="aspect-w-16 aspect-h-9 flex justify-center">
              <iframe
                width="800"
                height="500"
                src="https://www.youtube.com/embed/cmoSVEjNXZY?si=DP0ofnHHAtvBCiWa"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                
              ></iframe>
            </div>
          </div>
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
          <Image src={CodingImage} alt="coding-image" />
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
