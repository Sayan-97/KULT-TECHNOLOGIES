"use client";

import Link from "next/link";
import { portfolios } from "@/constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function OurPortfolio() {
  return (
    <section id="portfolio" className="py-20 space-y-16">
      <div className="flex max-md:flex-col max-md:gap-8 items-end justify-between">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-5xl font-semibold">Our Portfolio</h2>
          <p className="text-xl text-muted">
            {" "}
            We&apos;re a cutting-edge service company with a passion for
            innovation, offering a wide range of services that empower
            businesses in the digital age.
          </p>
        </div>
        <div className="space-x-5">
          <button className="slide-prev border border-secondary rounded-full p-3">
            <FaArrowLeft />
          </button>
          <button className="slide-next border border-secondary rounded-full p-3">
            <FaArrowRight />
          </button>
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
        className="portfolioSwiper"
      >
        {portfolios.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl overflow-hidden example"
          >
            <div className="w-full h-[440px] card-border">
              <div
                className="w-full h-full flex items-end p-4 md:p-8"
                style={{
                  background: `var(--portfolio-card-gradient), url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-start gap-4 md:gap-8">
                  <Image
                    src={item.title}
                    alt="img"
                    width={160}
                    height={50}
                    className="h-auto"
                  />
                  <p className="flex-grow text-xl">{item.des}</p>
                  <Link
                    className="text-lg font-semibold bg-primary-gradient text-transparent bg-clip-text"
                    href={`/`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
