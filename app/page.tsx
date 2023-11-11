import ContactUs from "@/components/contact-us";
import OurPortfolio from "@/components/our-portfolio";
import Reviews from "@/components/reviews";
import Blockchains from "@/components/shared/blockchains";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="container space-y-20">
          <div className="text-center space-y-8">
            <h4 className="text-xl md:text-2xl text-muted uppercase">
              Welcome to Kult Technologies
            </h4>
            <h1 className="w-full lg:w-4/6 text-4xl md:text-6xl font-bold capitalize leading-tight lg:leading-tight mx-auto">
              Revolutionize Your Industry with Web 3 Technology:{" "}
              <span className="text-indigo-400">Explore the Future</span>
            </h1>
            <div className="space-x-6">
              <Button content="Get Started" />
              <Button content="Our Portfolio" />
            </div>
          </div>
          {/* blockchains marquee */}
          <Blockchains />
        </div>
      </section>

      {/* Portfolio */}
      <OurPortfolio />

      {/* Reviews */}
      <Reviews />

      {/* Contact Us */}
      <ContactUs />

      {/* <section className="py-20">
        <div className="container">
          <div className="">
            <h2>Our Services</h2>
            <p>
              We're a cutting-edge service company with a passion for
              innovation, offering a wide range of services that empower
              businesses in the digital age.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="service-content bg-red-500 h-[400px]"></div>
            <div className="service-content bg-red-500 h-[400px]"></div>
            <div className="service-content bg-red-500 h-[400px]"></div>
            <div className="service-content bg-red-500 h-[400px]"></div>
            <div className="service-content bg-red-500 h-[400px]"></div>
          </div>
        </div>
      </section> */}
    </>
  );
}
