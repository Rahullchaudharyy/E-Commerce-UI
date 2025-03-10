import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <div className="flex border p-12 my-20 flex-wrap justify-between">
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-1.png"}
      />
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-2.png"}
      />
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-3.png"}
      />
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-4.png"}
      />
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-5.png"}
      />
      <Image
        height={80}
        width={80}
        alt="Brand-Logo"
        src={"/brand-logo-6.png"}
      />
    </div>
  );
}

export default Brands;
