import React from "react";
import Marquee from "react-fast-marquee";
import { IoMdStar } from "react-icons/io";

function AnoucementInfinite() {
  return (
    <div className="border-t border-b my-14 ">
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        <div className="flex h-14 text-xl items-center gap-9 ">
          <h1>FREE DELIVERY FOR ORDER OVER $120</h1>
          <IoMdStar />
          <h1>FREE DELIVERY FOR ORDER OVER $120</h1>
          <IoMdStar />
          <h1>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</h1>
          <IoMdStar />
        </div>
      </Marquee>
    </div>
  );
}

export default AnoucementInfinite;
