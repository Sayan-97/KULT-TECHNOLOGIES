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
          className="max-md:hidden absolute top-[-14%] right-0 w-[200px] h-[200px] blur-[140px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
        <div
          className="max-md:hidden absolute top-[20%] right-0 w-[200px] h-[200px] blur-[140px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
        <Image
          src={`/imgs/sphere.png`}
          alt="img"
          width={259}
          height={259}
          className="absolute right-[-28%] md:right-[-12%] lg:right-[-4%] bottom-[40%] w-40 h-40 -z-10"
        />
        <div className="max-md:hidden absolute right-[16%] -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M40 19.9857C32.1541 20.6985 27.6462 21.3542 24.8787 23.521C21.6262 26.0584 20.8559 30.7056 20 40C19.1155 30.3635 18.3167 25.7448 14.7504 23.2644C11.9829 21.3257 7.50357 20.6985 0 20.0143C7.8174 19.3015 12.3538 18.6458 15.0927 16.5075C18.3738 13.9416 19.1441 9.32288 20 0C20.7989 8.58161 21.5121 13.1718 24.1655 15.8232C26.8188 18.4747 31.4408 19.216 40 19.9857Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute right-[6%] top-[30%] -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
          >
            <path
              d="M28.1536 0C23.7019 7.58 21.2422 11.36 18.7623 11.36C16.2823 11.36 13.8227 7.58 9.3913 0C13.8227 7.58 15.9368 11.58 14.6968 13.68C13.4568 15.78 8.88312 16 0 16C9.20836 16 13.782 16.22 14.8187 18.54C15.7945 20.7 13.6804 24.68 9.3913 32C13.843 24.42 16.3027 20.64 18.7826 20.64C21.2626 20.64 23.7222 24.42 28.1739 32C23.4579 23.94 21.3845 19.94 23.1327 17.94C24.6776 16.18 29.2309 16 37.5652 16C28.1739 16 23.6002 15.76 22.6855 13.3C21.8521 11.1 23.9661 7.14 28.1536 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute right-[12%] bottom-[28%] -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="46"
            viewBox="0 0 47 46"
            fill="none"
          >
            <path
              d="M23.3833 0L25.173 18.7502L39.9178 6.73654L27.704 21.2397L46.7667 23L27.704 24.7603L39.9178 39.2635L25.173 27.2498L23.3833 46L21.5937 27.2498L6.84882 39.2635L19.0627 24.7603L0 23L19.0627 21.2397L6.84882 6.73654L21.5937 18.7502L23.3833 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="max-md:hidden absolute left-[16%] top-[10%] -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <path
              d="M16.775 0L18.0589 13.4512L28.6367 4.83274L19.8746 15.2371L33.55 16.5L19.8746 17.7629L28.6367 28.1673L18.0589 19.5488L16.775 33L15.4911 19.5488L4.91328 28.1673L13.6754 17.7629L0 16.5L13.6754 15.2371L4.91328 4.83274L15.4911 13.4512L16.775 0Z"
              fill="white"
            />
          </svg>
        </div>
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
