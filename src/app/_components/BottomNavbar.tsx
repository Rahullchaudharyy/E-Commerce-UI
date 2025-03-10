"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiHeartLight } from "react-icons/pi";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Categories = {
  [key: string]: string[]; // Each key is a string, and its value is an array of strings
};

const categories: Categories = {
  instruments: [
    "Electric Guitar",
    "Drum Sticks",
    "Piano Keyboard",
    "Violin",
    "Flute",
    "Bass Guitar",
  ],
  products: [
    "Smartphone Case",
    "Wireless Earbuds",
    "Gaming Mouse",
    "Mechanical Keyboard",
    "4K Monitor",
    "Smartwatch",
  ],
  accessories: [
    "Sunglasses",
    "Leather Wallet",
    "Silk Scarf",
    "Wrist Watch",
    "Handbag",
    "Cap",
  ],
};

function BottomNavbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [FirstLevelNested, setFirstLevelNested] = useState("");
  const [SecondNestedValue, setSecondNestedValue] = useState("");

  const HandleFirstLevelNest = (Value: string) => {
    // if (Value != "") {
    //   Value = "";
    // }
    setSecondNestedValue("");
    setFirstLevelNested((PrevValue) => (PrevValue == Value ? "" : Value));
  };

  const HandleNestedVal = (Value: string) => {
    // if (Value != "") {
    //   Value = "";
    // }
    setSecondNestedValue((PrevValue) => (PrevValue == Value ? "" : Value));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full  z-50 transition-all duration-500 ${
          isFixed
            ? "fixed top-0 animate-slide-down left-0 bg-white  shadow-md translate-y-0"
            : "relative  "
        }`}
      >
        <div className="h-20 md:h-24  top-0 left-0  relative flex justify-between items-center md:px-3">
          <Sheet key={"left"}>
            <SheetTrigger asChild>
              <button className="lg:hidden">
                {" "}
                <CiMenuBurger className="block w-20 lg:hidden" />
              </button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader className="h-20 bg-[#F4F4F4] flex items-start justify-center">
                <h2 className="text-3xl">Rivon</h2>
              </SheetHeader>

              <div className="text-[#535353]">
                <h1 className="p-2 border">Home</h1>
                <div className="flex flex-col">
                  <h2 className="p-2 border border-t-0 flex justify-between">
                    Shope{" "}
                    <span
                      onClick={() => HandleFirstLevelNest("Shope")}
                      className="text-xl cursor-pointer"
                    >
                      {FirstLevelNested === "Shope" ? "-" : "+"}
                    </span>
                  </h2>
                  {FirstLevelNested === "Shope" && (
                    <>
                      {Object.keys(categories).map((category) => (
                        <div
                          key={category}
                          className="transition-all overflow-hidden animate-slide-Side flex flex-col"
                        >
                          <h2 className="p-2 pl-5 border border-t-0 flex justify-between">
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}{" "}
                            <span
                              onClick={() => HandleNestedVal(category)}
                              className="text-xl cursor-pointer"
                            >
                              {SecondNestedValue === category ? "-" : "+"}
                            </span>
                          </h2>
                          {SecondNestedValue === category && (
                            <div className="transition-all  flex animate-slide-Side flex-col animate-[fadeInDown_0.3s_ease-in-out]">
                              {categories[category].map((item: string) => (
                                <h1
                                  key={item}
                                  className="p-2 pl-7   border border-l-0 w-full border-t-0 flex justify-between"
                                >
                                  {item}
                                </h1>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}

                  <div className="transition-all flex flex-col">
                    <h2 className="p-2 border border-t-0 flex justify-between">
                      Pages{" "}
                      <span
                        onClick={() => HandleNestedVal("pages")}
                        className="text-xl cursor-pointer"
                      >
                        {SecondNestedValue === "pages" ? "-" : "+"}
                      </span>
                    </h2>
                    {SecondNestedValue === "pages" && (
                      <div className="transition-all flex flex-col animate-slide-Side">
                        {[
                          "About Us",
                          "Careers",
                          "FAQs",
                          "Privacy Policy",
                          "Terms of Service",
                          "Customer Support",
                        ].map((page) => (
                          <h1
                            key={page}
                            className="p-2 pl-5 border border-t-0 flex justify-between"
                          >
                            {page}
                          </h1>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <h1 className="p-2 border-t-0 border">Blogs</h1>
                <h1 className="p-2 border-t-0 border">Contact</h1>
              </div>

              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>

          <Image alt="Logo" height={70} width={80} src={"/logo.png"} />
          <ul className="lg:flex h-full hidden font-semibold gap-11">
            <li className="hover:text-[#4D4D4D] flex items-center ">Home</li>
            <li className="group  h-full hover:text-[#4D4D4D] cursor-pointer flex items-center gap-1.5">
              Shope{" "}
              <MdKeyboardArrowDown className="group-hover:rotate-180 transition-all duration-300  transform" />
              <div className="h-96 p-8 z-30 bg-white  hidden group-hover:flex justify-between shadow-sm  transition-transform duration-500 w-full top-20 left-0  absolute">
                <div className="flex gap-8 md:gap-11">
                  <ul className="flex flex-col gap-4">
                    <h1 className="font-semibold text-[#4D4D4D]">
                      instruments
                    </h1>
                    <li className="text-[#4D4D4D] font-light">
                      Cotton Full shirt
                    </li>
                    <li className="text-[#4D4D4D] font-light">Resin Strap</li>
                    <li className="text-[#4D4D4D] font-light">
                      Boheme Rose Gold
                    </li>
                    <li className="text-[#4D4D4D] font-light">Hat Craft</li>
                    <li className="text-[#4D4D4D] font-light">Oxford Shoe</li>
                    <li className="text-[#4D4D4D] font-light">Nail Grinder</li>
                  </ul>
                  <ul className="flex flex-col gap-4">
                    <h1 className="font-semibold text-[#4D4D4D]">Product</h1>
                    <li className="text-[#4D4D4D] font-light">T-Shirt</li>
                    <li className="text-[#4D4D4D] font-light">
                      Rainbow T-shirt
                    </li>
                    <li className="text-[#4D4D4D] font-light">Waist Denim</li>
                    <li className="text-[#4D4D4D] font-light">Hat Craft</li>
                    <li className="text-[#4D4D4D] font-light">Oxford Shoe</li>
                    <li className="text-[#4D4D4D] font-light">Nail Grinder</li>
                  </ul>
                  <ul className="flex flex-col gap-4">
                    <h1 className="font-semibold text-[#4D4D4D]">
                      Accessories
                    </h1>
                    <li className="text-[#4D4D4D] font-light">
                      Cotton Full shirt
                    </li>
                    <li className="text-[#4D4D4D] font-light">Resin Strap</li>
                    <li className="text-[#4D4D4D] font-light">
                      Boheme Rose Gold
                    </li>
                    <li className="text-[#4D4D4D] font-light">Hat Craft</li>
                    <li className="text-[#4D4D4D] font-light">Oxford Shoe</li>
                    <li className="text-[#4D4D4D] font-light">Nail Grinder</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Image
                      alt="Featured Image"
                      height={300}
                      width={300}
                      src={"/featured.webp"}
                    />
                    <h1 className="text-center mt-4 font-bold text-black">
                      Featured
                    </h1>
                  </div>
                  <div>
                    <Image
                      alt="Featured Image"
                      height={300}
                      width={300}
                      src={"/new-arrival.webp"}
                    />

                    <h1 className="text-center mt-4 font-bold text-black">
                      New Arrivals
                    </h1>
                  </div>
                </div>
              </div>
            </li>
            <li className="group h-full  hover:text-[#4D4D4D] cursor-pointer flex items-center gap-1.5">
              Pages{" "}
              <MdKeyboardArrowDown className="group-hover:rotate-180 transition-all  transform" />
              <div className="h-auto p-5 z-30 w-40 bg-white  hidden group-hover:flex flex-col gap-4 shadow-sm  transition-transform duration-500  top-20   absolute">
                {[
                  "About Us",
                  "Careers",
                  "FAQs",
                  "Privacy Policy",
                  "Terms of Service",
                  "Customer Support",
                ].map((data) => (
                  <h2 className="text-sm">{data}</h2>
                ))}
              </div>
            </li>
            <li className=" h-full flex items-center  hover:text-[#4D4D4D]">
              Blog
            </li>
            <li className=" h-full flex items-center   hover:text-[#4D4D4D]">
              Contact
            </li>
          </ul>

          <div className="flex w-20 gap-2.5 items-center">
            <CiSearch size={25} />
            <PiHeartLight className="hidden lg:block" size={25} />
            <PiHandbagSimpleThin size={25} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNavbar;
