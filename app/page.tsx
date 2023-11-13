import ContactUs from "@/components/contact-us";
import OurPortfolio from "@/components/our-portfolio";
import Reviews from "@/components/reviews";
import Blockchains from "@/components/shared/blockchains";
import Button from "@/components/ui/button";
import WhyChooseUs from "@/components/why-choose-us";

import { services } from "@/constants";
import ServicesCard from "@/components/ui/services-card";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="container space-y-20">
          <div className="text-center flex flex-col items-center gap-6">
            <h4 className="text-xl md:text-2xl text-muted uppercase">
              Welcome to Kult Technologies
            </h4>
            <h1 className="w-full lg:w-4/6 text-4xl md:text-6xl font-bold capitalize leading-tight lg:leading-tight mx-auto">
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
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="container">
          <div className="lg:w-1/2 flex flex-col items-start space-y-6">
            <h5 className="text-2xl font-semibold uppercase text-transparent bg-primary-gradient bg-clip-text">
              about us
            </h5>
            <h2 className="text-5xl font-semibold capitalize leading-snug">
              Cutting edge technology <br /> crafted for your business
            </h2>
            <p className="text-xl text-muted">
              Web3 has never been easier for the enterprise. Our suite of
              products delivers out-of-the-box blockchain applications with
              enterprise-grade security and scalability—cutting months off
              development timelines to deliver real business value on one.
            </p>
            <Button content="Learn More" />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20">
        <div className="container space-y-12">
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
