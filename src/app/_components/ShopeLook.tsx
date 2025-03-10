import React from "react";

function ShopeLook() {
  return (
    <div className="flex flex-col md:flex-row p-3.5">
      <img src="/fashen-banner-11.png" alt="" />
      <div className="flex flex-col gap-5 justify-center items-start md:w-[40%]">
        <h1 className="text-4xl font-semibold">Shope the Look</h1>
        <h2 className="break-words text-[#4D4D6A] ">
          Here is your chance to upgrade your wardrobe with a variation of
          styles and fits that are both.
        </h2>
        <button className="text-white bg-black p-3 rounded-xs">
          DISCOVER NOW
        </button>
      </div>
    </div>
  );
}

export default ShopeLook;
