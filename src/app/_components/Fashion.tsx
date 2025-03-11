import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Fashon() {
  return (
    <div className="mt-8 p-4 flex justify-center items-center  w-full">
      <div className="w-full h-auto bg-yellow-300 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2  rounded-sm overflow-hidden relative">
        <div className="bg-[#F3F3F3] col-span-1 row-span-1 h-full w-full flex justify-start items-center">
          <div className="pl-10">
            <h3 className="mt-20">For Online Purchase</h3>
            <h1 className="text-7xl font-semibold mt-3.5">50% OFF</h1>
            <button className="border flex items-center gap-2 mt-20 rounded-sm hover:bg-black hover:text-white transition-all cursor-pointer  border-black px-6 py-2">
              View Collection
              <MdOutlineArrowOutward />
            </button>
            <Image
              src={"/text-image-1.webp"}
              height={500}
              width={500}
              alt="Text-Img"
            />
          </div>
        </div>
        <Image
          className=" hidden absolute md:block transform left-1/2 top-0 -translate-x-1/2 translate-y-5"
          src={"/FashionLogo.avif"}
          height={120}
          width={120}
          alt="Logo"
        />
        <div className="h-full col-span-1 row-span-1">
          <Image
            // fill
            width={800}
            height={800}
            src={"/PeopleIngroup.webp"}
            alt="People-Group-Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Fashon;
