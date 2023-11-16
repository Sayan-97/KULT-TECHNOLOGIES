"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { services } from "@/constants";
import Image from "next/image";
import Button from "../ui/button";

export default function ServicesSlider() {
  return (
    <section className="space-y-12">
      <div className="flex max-md:flex-col max-md:gap-8 items-end justify-between">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-5xl font-semibold">Our Other Services</h2>
          <p className="text-xl text-muted">
            We&apos;re a cutting-edge service company with a passion for innovation,
            offering a wide range of services that empower businesses in the
            digital age.
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
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".slide-prev",
          nextEl: ".slide-next",
        }}
        className=""
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full md:h-[532px] bg-accent p-6 flex flex-col items-start gap-8 rounded-2xl card-border">
              <div className="w-full h-2/5 flex justify-center">
                <Image
                  src={item.image}
                  alt="img"
                  width={271.488}
                  height={300}
                  className="h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="flex-grow text-muted">{item.desc}</p>
              <Button variant="secondary" content="Get Started" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
