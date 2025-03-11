"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function Reviews() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="p-7 h-60 flex ">
          <div className="flex gap-5">
            <div className="bg-[#F3F3F3] p-7 flex flex-col justify-center items-center gap-3.5">
              <Image
                src={"/avator-test-4.jpg"}
                width={60}
                height={60}
                className="rounded-full"
                alt="Modle"
              />
              <h2>Smart Home Assistant</h2>
              <h3>
                &quot;Fringilla nec adipiscing eu purus pellentesque adipiscing
                neque odio ac tincidunt. Diam platea felis leo nunc. Pharetra
                fermentum neque. lorem text more&quot;
              </h3>
              <h3 className="font-bold">Emily T.</h3>
              <h4 className="">Sydney, Australia</h4>
            </div>
            <div className="bg-[#F3F3F3] p-7 hidden md:flex flex-col justify-center items-center gap-3.5">
              <Image
                src={"/avator-test-4.jpg"}
                width={60}
                height={60}
                className="rounded-full"
                alt="Modle"
              />
              <h2>Smart Home Assistant</h2>
              <h3>
                &quot;Fringilla nec adipiscing eu purus pellentesque adipiscing
                neque odio ac tincidunt. Diam platea felis leo nunc. Pharetra
                fermentum neque. lorem text more&quot;
              </h3>
              <h3>Emily T.</h3>
              <h4>Sydney, Australia</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-7 h-60 flex ">
          <div className="flex gap-5">
            <div className="bg-[#F3F3F3] p-7 flex flex-col justify-center items-center gap-3.5">
              <Image
                src={"/avator-test-4.jpg"}
                width={60}
                height={60}
                className="rounded-full"
                alt="Modle"
              />
              <h2>Smart Home Assistant</h2>
              <h3>
                &quot;Fringilla nec adipiscing eu purus pellentesque adipiscing
                neque odio ac tincidunt. Diam platea felis leo nunc. Pharetra
                fermentum neque. lorem text more&quot;
              </h3>
              <h3 className="font-bold">Emily T.</h3>
              <h4 className="">Sydney, Australia</h4>
            </div>
            <div className="bg-[#F3F3F3] hidden p-7 md:flex flex-col justify-center items-center gap-3.5">
              <Image
                src={"/avator-test-4.jpg"}
                width={60}
                height={60}
                className="rounded-full"
                alt="Modle"
              />
              <h2>Smart Home Assistant</h2>
              <h3>
                &quot;Fringilla nec adipiscing eu purus pellentesque adipiscing
                neque odio ac tincidunt. Diam platea felis leo nunc. Pharetra
                fermentum neque. lorem text more&quot;
              </h3>
              <h3>Emily T.</h3>
              <h4>Sydney, Australia</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-full">
        <h1 className="text-4xl font-semibold text-center mt-3.5">
          Follow @Rivon
        </h1>
        <h2 className="text-[#323232] text-center mt-2">
          The best quality products are waiting for you & choose it now.
        </h2>
      </div>
    </div>
  );
}
