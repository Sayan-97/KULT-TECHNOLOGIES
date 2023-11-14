"use client";

import Image from "next/image";
import { reviews } from "@/constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Reviews() {
  return (
    <section className="space-y-16">
      <div className="lg:w-1/2 flex flex-col items-center text-center mx-auto space-y-6">
        <h2 className="text-5xl font-semibold">What Keeps Us Going</h2>
        <p className="text-xl text-muted">
          {" "}
          We&apos;re a cutting-edge service company with a passion for
          innovation, offering a wide range of services that empower businesses
          in the digital age.
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
            <div className="h-[340px] relative bg-accent flex flex-col items-center text-center mt-8 p-8 pt-10 space-y-4 rounded-2xl card-border">
              <div className="absolute -top-8 bg-primary p-1 rounded-full">
                <Image
                  src={item.image}
                  alt="img"
                  width={59.231}
                  height={59.231}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M5.67743 15.862C5.39735 16.031 5.05183 15.7803 5.12554 15.4616L6.0813 11.3298C6.1122 11.1962 6.06673 11.0565 5.96313 10.9667L2.75722 8.18724C2.51011 7.973 2.64187 7.56701 2.9677 7.53873L7.20503 7.1709C7.3417 7.15904 7.4606 7.07257 7.51401 6.94622L9.15928 3.05338C9.28668 2.75195 9.71385 2.75195 9.84125 3.05338L11.4865 6.94622C11.5399 7.07257 11.6588 7.15904 11.7955 7.1709L16.0328 7.53873C16.3587 7.56701 16.4904 7.973 16.2433 8.18724L13.0374 10.9667C12.9338 11.0565 12.8883 11.1962 12.9192 11.3298L13.875 15.4616C13.9487 15.7803 13.6032 16.031 13.3231 15.862L9.69148 13.6713C9.57388 13.6003 9.42666 13.6003 9.30905 13.6713L5.67743 15.862Z"
                    fill="#F9BB00"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M5.67743 15.862C5.39735 16.031 5.05183 15.7803 5.12554 15.4616L6.0813 11.3298C6.1122 11.1962 6.06673 11.0565 5.96313 10.9667L2.75722 8.18724C2.51011 7.973 2.64187 7.56701 2.9677 7.53873L7.20503 7.1709C7.3417 7.15904 7.4606 7.07257 7.51401 6.94622L9.15928 3.05338C9.28668 2.75195 9.71385 2.75195 9.84125 3.05338L11.4865 6.94622C11.5399 7.07257 11.6588 7.15904 11.7955 7.1709L16.0328 7.53873C16.3587 7.56701 16.4904 7.973 16.2433 8.18724L13.0374 10.9667C12.9338 11.0565 12.8883 11.1962 12.9192 11.3298L13.875 15.4616C13.9487 15.7803 13.6032 16.031 13.3231 15.862L9.69148 13.6713C9.57388 13.6003 9.42666 13.6003 9.30905 13.6713L5.67743 15.862Z"
                    fill="#F9BB00"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M5.67743 15.862C5.39735 16.031 5.05183 15.7803 5.12554 15.4616L6.0813 11.3298C6.1122 11.1962 6.06673 11.0565 5.96313 10.9667L2.75722 8.18724C2.51011 7.973 2.64187 7.56701 2.9677 7.53873L7.20503 7.1709C7.3417 7.15904 7.4606 7.07257 7.51401 6.94622L9.15928 3.05338C9.28668 2.75195 9.71385 2.75195 9.84125 3.05338L11.4865 6.94622C11.5399 7.07257 11.6588 7.15904 11.7955 7.1709L16.0328 7.53873C16.3587 7.56701 16.4904 7.973 16.2433 8.18724L13.0374 10.9667C12.9338 11.0565 12.8883 11.1962 12.9192 11.3298L13.875 15.4616C13.9487 15.7803 13.6032 16.031 13.3231 15.862L9.69148 13.6713C9.57388 13.6003 9.42666 13.6003 9.30905 13.6713L5.67743 15.862Z"
                    fill="#F9BB00"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M5.67743 15.862C5.39735 16.031 5.05183 15.7803 5.12554 15.4616L6.0813 11.3298C6.1122 11.1962 6.06673 11.0565 5.96313 10.9667L2.75722 8.18724C2.51011 7.973 2.64187 7.56701 2.9677 7.53873L7.20503 7.1709C7.3417 7.15904 7.4606 7.07257 7.51401 6.94622L9.15928 3.05338C9.28668 2.75195 9.71385 2.75195 9.84125 3.05338L11.4865 6.94622C11.5399 7.07257 11.6588 7.15904 11.7955 7.1709L16.0328 7.53873C16.3587 7.56701 16.4904 7.973 16.2433 8.18724L13.0374 10.9667C12.9338 11.0565 12.8883 11.1962 12.9192 11.3298L13.875 15.4616C13.9487 15.7803 13.6032 16.031 13.3231 15.862L9.69148 13.6713C9.57388 13.6003 9.42666 13.6003 9.30905 13.6713L5.67743 15.862Z"
                    fill="#F9BB00"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M5.67743 15.862C5.39735 16.031 5.05183 15.7803 5.12554 15.4616L6.0813 11.3298C6.1122 11.1962 6.06673 11.0565 5.96313 10.9667L2.75722 8.18724C2.51011 7.973 2.64187 7.56701 2.9677 7.53873L7.20503 7.1709C7.3417 7.15904 7.4606 7.07257 7.51401 6.94622L9.15928 3.05338C9.28668 2.75195 9.71385 2.75195 9.84125 3.05338L11.4865 6.94622C11.5399 7.07257 11.6588 7.15904 11.7955 7.1709L16.0328 7.53873C16.3587 7.56701 16.4904 7.973 16.2433 8.18724L13.0374 10.9667C12.9338 11.0565 12.8883 11.1962 12.9192 11.3298L13.875 15.4616C13.9487 15.7803 13.6032 16.031 13.3231 15.862L9.69148 13.6713C9.57388 13.6003 9.42666 13.6003 9.30905 13.6713L5.67743 15.862Z"
                    fill="#F9BB00"
                  />
                </svg>
              </div>
              <h6 className="font-semibold">{item.name}</h6>
              <p>{item.msg}</p>
            </div>
          </SwiperSlide>
        ))}
        <button className="absolute z-10 left-0 top-[50%] review-slide-prev border border-secondary rounded-full p-3">
          <FaArrowLeft />
        </button>
        <button className="absolute z-10 right-0 top-[50%] review-slide-next border border-secondary rounded-full p-3">
          <FaArrowRight />
        </button>
      </Swiper>
    </section>
  );
}
