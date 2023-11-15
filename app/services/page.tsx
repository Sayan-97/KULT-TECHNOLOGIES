import OurPortfolio from "@/components/our-portfolio";
import WhyChooseUs from "@/components/why-choose-us";
import Reviews from "@/components/reviews";
import ContactUs from "@/components/contact-us";
import { gameDevServices } from "@/constants";
import Image from "next/image";
import Button from "@/components/ui/button";
import Blockchains from "@/components/shared/blockchains";
import ServicesSlider from "@/components/shared/ServicesSlider";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative space-y-16">
        <div className="flex items-center max-md:flex-col justify-between gap-8">
          <div className="w-full lg:w-2/5 space-y-6">
            <h2 className="text-5xl font-bold capitalize leading-tight">
              Redesigning Gaming with{" "}
              <span className="text-primary">
                Blockchain and Decentralization
              </span>
            </h2>
            <p className="text-xl text-muted">
              Welcome to the future of gaming! At Kult Technologies, we're at
              the forefront of Web 3 game development, revolutionizing the
              gaming industry by seamlessly integrating blockchain and
              decentralized technologies. We believe in creating gaming
              experiences that are not only captivating but also secure,
              transparent, and community-driven.
            </p>
            <Button variant="secondary" content="Contact Us" />
          </div>
          <Image
            src={`/imgs/Green Blue Medical Cross Doctor Modern Logo.png`}
            alt="img"
            width={577.037}
            height={533}
          />
        </div>
        <Blockchains />
        {/* Gradients */}
        <div
          className="absolute top-[2%] left-0 w-[354.323px] h-[354.323px] blur-[150px] rounded-[354.323px] -z-10"
          style={{
            background: "linear-gradient(180deg, #173B80 0%, #11573E 100%)",
          }}
        ></div>
        <div
          className="max-md:hidden absolute top-10 right-10 w-[400px] h-[300px] blur-[180px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
        <div
          className="absolute top-[15%] right-60 w-[354.323px] h-[354.323px] blur-[140px] rounded-[354.323px] -z-10"
          style={{
            background: "linear-gradient(180deg, #173B80 0%, #11573E 100%)",
          }}
        ></div>
      </section>

      {/* Why Web3 Game Dev? */}
      <section className="relative flex items-center max-md:flex-col justify-between gap-8">
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-4xl font-semibold">
            Why Web 3 Game Development?
          </h3>
          <p className="text-xl text-muted">
            The gaming landscape is rapidly evolving, and Web 3 is the next
            frontier. This new era of gaming is marked by trustless ecosystems,
            player ownership, and blockchain-powered experiences.
          </p>
          <Button content="Contact Us" />
        </div>
        <Image
          src={`/imgs/winning-stairs-graphics-new.png`}
          alt="img"
          width={488}
          height={450}
          className="rounded-2xl"
        />
        <div
          className="absolute bottom-[-30%] right-[-2%] w-[454.323px] h-[454.323px] blur-[100px] rounded-[354.323px] -z-10"
          style={{
            background: "linear-gradient(90deg, #173B80 0%, #11573E 100%)",
          }}
        ></div>
      </section>

      {/* Web 3 Game Dev Services */}
      <section className="relative space-y-12">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-5xl font-semibold">
            Our Web 3 Game Development Services
          </h2>
          <p className="text-xl text-muted">
            We offer a comprehensive range of services tailored to your unique
            vision and objectives
          </p>
        </div>
        <div className="flex gap-12 flex-wrap justify-center">
          {gameDevServices.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-48px)] lg:w-[calc(33.333333%-48px)] flex flex-col items-center gap-4 text-center"
            >
              <div className="border border-secondary p-2.5 rounded-full">
                <Image src={item.icon} alt="img" width={30} height={30} />
              </div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="max-md:hidden absolute bottom-[-20%] left-[-15%] w-[400px] h-[300px] blur-[180px] rounded-[354.323px] -z-10"
          style={{
            background: "var(--primary-gradient)",
          }}
        ></div>
      </section>

      {/* Portfolio */}
      <OurPortfolio />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Other Services */}
      <ServicesSlider />

      {/* Reviews */}
      <Reviews />

      {/* Contact Us */}
      <ContactUs />
    </>
  );
}
