import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function ProductCheck() {
  return (
    <div className="h-auto md:h-screen flex flex-col gap-3  md:flex-row p-4">
      <div className="h-full w-full">
        <img
          src={`/Cloth-2.webp`}
          className="h-[60%] md:h-[80%] object-cover w-full"
          alt="Cloth"
        />
        <div className="flex gap-2 mt-3.5">
          <div className="h-[12rem] w-[12rem] md:h-32 md:w-32 border flex justify-center items-center">
            <img
              src={`/Cloth-2.webp`}
              className="h-full object-cover w-[80%]"
              alt="Cloth"
            />
          </div>
          <div className="h-[12rem] w-[12rem] md:h-32 md:w-32 border flex justify-center items-center">
            <img
              src={`/Cloths.webp`}
              className="h-full object-cover w-[80%]"
              alt="Cloth"
            />
          </div>
          <div className="h-[12rem] w-[12rem] md:h-32 md:w-32 border flex justify-center items-center">
            <img
              src={`/Cloth-2.webp`}
              className="h-full object-cover w-[80%]"
              alt="Cloth"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-4 md:pl-9 mt-2 pl-0">
        <h3 className="text-xl text-[#4D4D4D]">Fashion</h3>
        <h1 className="text-4xl font-bold">Rainbow Gradient Unisex T-Shirt</h1>
        <h1 className="font-sans font-semibold">Rs. 57,800.00 </h1>
        <p className="text-sm text-[#4D4D4D]">Tax included.</p>
        <h3 className="text-[#4D4D4D] font-bold">
          Color: <span className="font-normal">{"Rainbow"}</span>
        </h3>
        <div className="flex gap-2">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full active:ring-2  ring-1">
            <div className="w-[25px] h-[25px] rounded-full bg-red-500 ring-1"></div>
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full active:ring-2  ring-1">
            <div className="w-[25px] h-[25px] rounded-full bg-black ring-1"></div>
          </div>
        </div>
        <h3 className="text-[#4D4D4D] font-bold">
          Size: <span className="font-normal">{"S"}</span>
        </h3>
        <div className="flex gap-1">
          <h2 className="w-[40px] text-white h-[40px] rounded-xs bg-black  flex justify-center items-center cursor-pointer ">
            S
          </h2>
          <h2 className="w-[40px] text-black h-[40px] rounded-xs border  flex justify-center items-center  cursor-pointer ">
            M
          </h2>
          <h2 className="w-[40px] text-black h-[40px] rounded-xs border   flex justify-center items-center cursor-pointer ">
            L
          </h2>
        </div>
        <div className="flex flex-col">
          <h1 className="col-span-2 mb-2">Quantity</h1>
          <div className="flex gap-12 ">
            <div className="border flex px-2 justify-center items-center gap-10 w-auto md:p-3.5">
              <button className="w-auto text-sm"> - </button>
              {4}
              <button className="w-auto text-sm"> + </button>
            </div>
            <button className="hover:bg-black transition-all hover:text-white p-2 md:px-14 border-black border-2">
              Add To Cart
            </button>
          </div>
        </div>
        <button className="bg-black text-white p-3.5 rounded-sm">
          Buy It Now
        </button>

        <div>
          <div className=" border-y-1 p-3.5">
            <h1 className="text-xl flex justify-between  font-bold">
              Discription
              <MdKeyboardArrowDown />
            </h1>
          </div>
          <div className=" border-b-1 p-3.5">
            <h1 className="text-xl flex justify-between  font-bold">
              Return Policy
              <MdKeyboardArrowDown />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCheck;
