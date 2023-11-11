"use client";

import Link from "next/link";
import { portfolios } from "@/constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function OurPortfolio() {

  return (
    <section className="py-20">
      <div className="container space-y-16">
        <div className="flex items-end justify-between">
          <div className="w-1/2 space-y-6">
            <h2 className="text-5xl font-semibold">Our Portfolio</h2>
            <p className="text-xl text-muted">
              {" "}
              We're a cutting-edge service company with a passion for
              innovation, offering a wide range of services that empower
              businesses in the digital age.
            </p>
          </div>
          <div className="space-x-5">
            <button className="slide-prev">Prev</button>
            <button className="slide-next">Next</button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".slide-prev",
            nextEl: ".slide-next",
          }}
        >
          {portfolios.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "60%",
                height: "440px",
                display: "flex",
                alignItems: "flex-end",
                background: `var(--portfolio-card-gradient), url(${item.image})`,
                backgroundSize: "cover",
              }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="w-full h-1/2 flex flex-col p-8 space-y-2">
                <h3>{item.title}</h3>
                <p className="flex-grow text-xl">{item.des}</p>
                <Link href={`/`}>Learn More</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
