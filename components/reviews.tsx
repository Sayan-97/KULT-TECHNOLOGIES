"use client";

import Image from "next/image";
import { reviews } from "@/constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="container space-y-16">
        <div className="lg:w-1/2 flex flex-col items-center text-center mx-auto space-y-8">
          <h2 className="text-5xl font-semibold ">What Keeps Us Going</h2>
          <p className="text-xl text-muted ">
            {" "}
            We're a cutting-edge service company with a passion for innovation,
            offering a wide range of services that empower businesses in the
            digital age.
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          navigation={{
            prevEl: ".review-slide-prev",
            nextEl: ".review-slide-next",
          }}
          style={{
            position: "relative",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-accent flex flex-col items-center text-center mt-8 p-8 pt-10 space-y-4 rounded-2xl">
                <div className="absolute -top-8 bg-primary p-1 rounded-full">
                  <Image
                    src={item.image}
                    alt="img"
                    width={59.231}
                    height={59.231}
                    className="rounded-full object-cover"
                  />
                </div>
                <p>{item.reviews}</p>
                <h6 className="font-semibold">{item.name}</h6>
                <p>{item.msg}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute z-10 left-0 top-[50%] review-slide-prev">
            Prev
          </div>
          <div className="absolute z-10 right-0 top-[50%] review-slide-next">
            Next
          </div>
        </Swiper>
      </div>
    </section>
  );
}
