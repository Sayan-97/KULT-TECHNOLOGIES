import ContactUs from "@/components/contact-us";
import OurPortfolio from "@/components/our-portfolio";
import Reviews from "@/components/reviews";
import Blockchains from "@/components/shared/blockchains";
import Button from "@/components/ui/button";
import WhyChooseUs from "@/components/why-choose-us";

import { services } from "@/constants";
import ServicesCard from "@/components/ui/services-card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h4 className="text-xl md:text-2xl text-muted uppercase">
            Welcome to Kult Technologies
          </h4>
          <h1 className="w-full lg:w-4/6 text-4xl md:text-6xl font-bold capitalize leading-tight md:leading-tight lg:leading-snug mx-auto">
            Revolutionize Your Industry with Web 3 Technology:{" "}
            <span className="text-indigo-400">Explore the Future</span>
          </h1>
          <div className="flex items-center space-x-6">
            <Button content="Get Started" />
            <Button variant="secondary" content="Our Portfolio" />
          </div>
        </div>
        {/* blockchains marquee */}
        <Blockchains />

        <div
          className="absolute top-[-14%] left-0 w-[354.323px] h-[354.323px] blur-[100px] rounded-[354.323px] -z-10"
          style={{
            background: "linear-gradient(180deg, #173B80 0%, #11573E 100%)",
          }}
        ></div>
        <div
          className="max-md:hidden absolute top-[-14%] right-0 w-[200px] h-[200px] blur-[160px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
        <div
          className="max-md:hidden absolute top-[10%] right-0 w-[200px] h-[200px] blur-[160px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
      </section>

      {/* About Us */}
      <section
        id="aboutus"
        className="relative flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <h5 className="text-2xl font-semibold uppercase text-transparent bg-primary-gradient bg-clip-text">
            about us
          </h5>
          <h2 className="text-5xl font-semibold capitalize leading-snug">
            Cutting edge technology <br /> crafted for your business
          </h2>
          <p className="text-xl text-muted">
            Web3 has never been easier for the enterprise. Our suite of products
            delivers out-of-the-box blockchain applications with
            enterprise-grade security and scalability—cutting months off
            development timelines to deliver real business value on one.
          </p>
          <Button content="Learn More" />
        </div>
        <div className="relative">
          <div
            className="absolute top-[20%] right-[20%] w-[300px] h-[300px] blur-[160px] rounded-[354.323px] -z-10"
            style={{
              background: "var(--primary-gradient)",
            }}
          ></div>
          <Image
            src={`/imgs/about-us-image.png`}
            alt="img"
            width={507}
            height={507}
          />
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="space-y-12">
        <div className="lg:w-1/2 space-y-6 flex flex-col items-center text-center mx-auto">
          <h2 className="text-5xl font-semibold">Our Services</h2>
          <p className="text-xl text-muted">
            {" "}
            We&apos;re a cutting-edge service company with a passion for
            innovation, offering a wide range of services that empower
            businesses in the digital age.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {services.map((item, index) => (
            <ServicesCard item={item} key={index} />
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <OurPortfolio />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Reviews */}
      <Reviews />

      {/* Contact Us */}
      <ContactUs />
    </>
  );
}
