"use client";

import { BiLogoInstagram } from "react-icons/bi";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";

function SocialMedia() {
  return (
    <div className="mb-5 flex gap-1 p-3.5 justify-between overflow-x-scroll ">
      <div
        style={{
          width: 350,
          height: 200,
          display: "flex",
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
      <div
        style={{
          width: 350,
          height: 200,
          display: "flex",
        }}
        className="relative group overflow-hidden"
      >
        <BiLogoInstagram
          size={69}
          className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />

        <Image
          src={"/instagram-2png.jpg"}
          height={1000}
          width={1000}
          alt="instagram"
          className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
        />
      </div>
      <div
        style={{
          width: 350,
          height: 200,
          display: "flex",
        }}
        className="relative group overflow-hidden"
      >
        <BiLogoInstagram
          size={69}
          className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />

        <Image
          src={"/instagram-3.jpg"}
          height={1000}
          width={1000}
          alt="instagram"
          className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
        />
      </div>
      <div
        style={{
          width: 350,
          height: 200,
          display: "flex",
        }}
        className="relative group overflow-hidden"
      >
        <BiLogoInstagram
          size={69}
          className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />

        <Image
          src={"/instagram-4.jpg"}
          height={1000}
          width={1000}
          alt="instagram"
          className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
        />
      </div>
      <div
        style={{
          width: 350,
          height: 200,
          display: "flex",
        }}
        className="relative group overflow-hidden"
      >
        <BiLogoInstagram
          size={69}
          className="hidden bg-black p-3 rounded-full z-50 text-white  group-hover:block group-hover:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />

        <Image
          src={"/instagram-5png.jpg"}
          height={1000}
          width={1000}
          alt="instagram"
          className="object-cover scale-110 hover:scale-125 duration-200 transition-all"
        />
      </div>
    </div>
  );
}

export default SocialMedia;
