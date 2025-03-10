import Image from "next/image";
import React from "react";

function CTAcards({
  img,
  heading,
  subHeading,
  button,
}: {
  img: string;
  heading: string;
  subHeading: string;
  button: string;
}) {
  return (
    <div className="relative rounded-4xl p-5">
      <Image
        src={img}
        width={700}
        height={600}
        alt="Call-to-action"
        className="rounded-2xl"
      />
      <div className="absolute bottom-10 p-3 pl-9">
        <h3 className="text-[#4C4846] tracking-wider pb-2 break-words">
          {heading}{" "}
        </h3>
        <h2 className="lg:text-4xl pb-5">{subHeading}</h2>
        <button className="text-[#4C4846] cursor-pointer hover:-translate-y-2 border-b-black border-b transition-all ">
          {button}
        </button>
      </div>
    </div>
  );
}

export default CTAcards;
