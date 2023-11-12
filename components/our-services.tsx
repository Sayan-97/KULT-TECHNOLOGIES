import Image from "next/image";
import Button from "./ui/button";
import { services } from "@/constants";

export default function OurServices() {
  return (
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
            <div
              key={index}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333333%-16px)] bg-accent p-6 rounded-2xl flex flex-col items-start gap-8 card-border"
            >
              <Image
                src={item.image}
                alt="img"
                width={271.488}
                height={280.585}
                className="self-center"
              />
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
              <Button variant="secondary" content="Get Started" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
