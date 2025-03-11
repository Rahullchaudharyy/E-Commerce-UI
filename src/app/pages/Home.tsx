"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div className="mx-5 md:mx-11  bg-white rounded-2xl   overflow-hidden  ">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="overflow-hidden "
      >
        <SwiperSlide className="select-none overflow-hidden w-full h-[70%]">
          <div className="flex flex-col relative h-auto md:h-[500px] lg:h-[600px] rounded-2xl rounded-r-[0px]  overflow-hidden md:bg-[#C1DBD7]  justify-end">
            <Image
              height={1000}
              width={1000}
              className="scale-[1] hidden md:block h-full w-full rounded-2xl object-cover "
              alt="Hero Image"
              src={"/Slider-image-girl.webp"}
            />
            <Image
              height={1000}
              width={1000}
              className="scale-[1]  md:hidden h-full w-full object-cover "
              alt="Hero Image"
              src={"/Slider-image-girl-mobile.webp"}
            />
            <div className="md:absolute  p-7 pb-20 flex justify-center h-full items-center md:items-start flex-col md:pl-12 gap-6 top-0 left-0">
              <h1 className="md:text-xl tracking-widest fade-in-up font-light text-center md:text-start">
                ELEGENCE IS ELIMINATION
              </h1>
              <h1 className="text-xl md:text-7xl fade-in-up md:leading-24 text-center md:text-start">
                Stay Ahead of <br /> The Trends
              </h1>
              <h1 className="text-start fade-in-up">
                Tell your brand&apos;s story through images
              </h1>

              <button className="text-xl fade-in-up hover:-translate-y-1 transition-transformn cursor-pointer duration-150 flex justify-center items-center gap-2 text-white bg-[#121212] p-2 rounded-sm">
                COLLECTIONS
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="select-none overflow-hidden w-full h-[70%]">
          <div className="flex flex-col relative h-auto md:h-[500px] lg:h-[600px] rounded-2xl rounded-l-[0px] overflow-hidden md:bg-[#C7D7F1]  justify-end">
            <Image
              height={1000}
              width={1000}
              className="scale-[1] hidden md:block h-full w-full rounded-2xl object-cover "
              alt="Hero Image"
              src={"/Slider-image-boy.webp"}
            />
            <Image
              height={1000}
              width={1000}
              className="scale-[1]  md:hidden h-full w-full object-cover "
              alt="Hero Image"
              src={"/Slider-image-boy-mobile.webp"}
            />
            <div className="md:absolute  p-7 pb-20 flex justify-center h-full items-center md:items-start flex-col md:pl-12 gap-6 top-0 left-0">
              <h1 className="md:text-xl tracking-widest fade-in-up font-light text-center md:text-start">
                ELEGENCE IS ELIMINATION
              </h1>
              <h1 className="text-xl md:text-7xl fade-in-up md:leading-24 text-center md:text-start">
                Stay Ahead of <br /> The Trends
              </h1>
              <h1 className="text-start fade-in-up">
                Tell your brand&apos;s story through images
              </h1>

              <button className="text-xl fade-in-up hover:-translate-y-1 transition-transformn cursor-pointer duration-150 flex justify-center items-center gap-2 text-white bg-[#121212] p-2 rounded-sm">
                Shope Now
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
