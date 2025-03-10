"use client";

import { BiLogoInstagram } from "react-icons/bi";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

function SocialMedia() {
  return (
    <div className="mb-5 flex gap-1 p-3.5 justify-between overflow-x-scroll ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="p-7 h-60 flex ">
          <div
            style={{
              width: 250,
              height: 250,
            }}
            className="relative group overflow-hidden"
          >
            <BiLogoInstagram
              size={69}
              className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />

            <Image
              src={"/instagram-1png.jpg"}
              height={1000}
              width={1000}
              alt="instagram"
              className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-7 h-60 flex ">
          <div
            style={{
              width: 250,
              height: 250,
            }}
            className="relative group overflow-hidden"
          >
            <BiLogoInstagram
              size={69}
              className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />

            <Image
              src={"/instagram-1png.jpg"}
              height={250}
              width={250}
              alt="instagram"
              className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SocialMedia;
