"use client";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function ProductCard({
  img1,
  img2,
  rating,
  name,
  subpara,
  status,
}: {
  img1: string | undefined;
  img2: string | undefined;
  rating: number;
  name: string;
  subpara: string;
  status: string | null;
}) {
  return (
    <div className="group  max-w-full flex   md:h-auto flex-col items-center">
      {/* Image Container */}
      <div className="w-full bg-[#F6F6F6] flex p-7 md:p-0  justify-center items-center h-auto sm:h-80 rounded-2xl overflow-hidden relative">
        <Image
          alt="Cloth-Image-1"
          className={`object-cover  ${
            img2 && "group-hover:hidden"
          } transition-all fade-in-50 animate-in object-center`}
          height={250}
          width={250}
          src={img1 ? img1 : "/path/to/fallback-image.jpg"}
        />

        <Image
          alt="Cloth-Image-2"
          className={`object-cover hidden ${
            img2 && "group-hover:block"
          }  object-center`}
          height={250}
          width={250}
          src={img2 ? img2 : "/path/to/fallback-image.jpg"}
        />

        <div className="absolute translate-y-20 transition-transform group-hover:translate-y-0 bottom-0 mb-3.5 flex justify-center items-center gap-2">
          <button className="border h-6 sm:h-10 w-6 sm:w-10 text-center flex justify-center items-center bg-white p-2 border-gray-300 hover:shadow-md cursor-pointer rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1176 8.18086H9.8606L9.9 1.125C9.9 0.826632 9.9 0.45 9.7955 0.329505C9.60001 0.104095 9.29837 0 9 0C8.70163 0 8.41548 0.118527 8.2045 0.329505C8.1 0.45 8.1 0.826632 8.1 1.125L8.14883 8.18086L1.125 8.1C0.826632 8.1 0.45 8.23808 0.329505 8.34258C0.118527 8.55356 0 8.70163 0 9C0 9.29837 0.118527 9.5053 0.329505 9.71628C0.39693 9.78371 0.826632 9.73125 1.125 9.73125L8.14883 9.84916L8.1 17.1C8.1 17.3983 8.25854 17.6705 8.25854 17.6705C8.46952 17.8814 8.70163 18 9 18C9.29837 18 9.56597 17.8814 9.77695 17.6705C9.88145 17.55 9.9 17.1733 9.9 16.875L9.8606 9.84916H17.1176C17.1176 9.84916 17.55 9.83575 17.6705 9.73125C17.909 9.52439 18 9.29837 18 9C18 8.70163 17.8814 8.52544 17.6705 8.31445C17.6705 8.31445 17.4159 8.18086 17.1176 8.18086Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button className="border h-6 sm:h-10 w-6 sm:w-10 text-center flex justify-center items-center bg-white p-2 border-gray-300 hover:shadow-md cursor-pointer rounded-full">
            <svg
              className=""
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4984 7.6495C22.8328 8.11843 23 8.35295 23 8.7C23 9.04705 22.8328 9.28157 22.4984 9.7505C20.9957 11.8577 17.1581 16.4 12 16.4C6.84186 16.4 3.00431 11.8577 1.50164 9.7505C1.16721 9.28157 1 9.04705 1 8.7C1 8.35295 1.16721 8.11843 1.50164 7.6495C3.00431 5.54238 6.84186 1 12 1C17.1581 1 20.9957 5.54238 22.4984 7.6495Z"
                stroke="currentColor"
              ></path>
              <path
                d="M15.3 8.6999C15.3 6.87731 13.8226 5.3999 12 5.3999C10.1774 5.3999 8.70001 6.87731 8.70001 8.6999C8.70001 10.5225 10.1774 11.9999 12 11.9999C13.8226 11.9999 15.3 10.5225 15.3 8.6999Z"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
          <button className="border h-6 sm:h-10 w-6 sm:w-10 text-center flex justify-center items-center bg-white p-2 border-gray-300 hover:shadow-md cursor-pointer rounded-full">
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 22.4764C12.6496 22.4764 12.3117 22.3495 12.0484 22.1188C11.054 21.2493 10.0953 20.4322 9.24943 19.7114L9.24512 19.7077C6.76521 17.5944 4.62373 15.7693 3.13372 13.9715C1.46812 11.9617 0.692322 10.0561 0.692322 7.97429C0.692322 5.95169 1.38587 4.08571 2.64507 2.71984C3.91929 1.33781 5.66771 0.57666 7.56881 0.57666C8.98971 0.57666 10.291 1.02588 11.4364 1.91173C12.0144 2.35888 12.5384 2.90613 13 3.54447C13.4618 2.90613 13.9856 2.35888 14.5638 1.91173C15.7092 1.02588 17.0105 0.57666 18.4314 0.57666C20.3323 0.57666 22.0809 1.33781 23.3551 2.71984C24.6143 4.08571 25.3077 5.95169 25.3077 7.97429C25.3077 10.0561 24.532 11.9617 22.8664 13.9713C21.3764 15.7693 19.2351 17.5942 16.7556 19.7073C15.9083 20.4292 14.948 21.2476 13.9514 22.1192C13.6883 22.3495 13.3502 22.4764 13 22.4764ZM7.56881 2.01859C6.07524 2.01859 4.70317 2.61467 3.70501 3.69715C2.69202 4.79597 2.13406 6.31489 2.13406 7.97429C2.13406 9.72515 2.78479 11.291 4.24381 13.0515C5.654 14.7531 7.75154 16.5406 10.1802 18.6104L10.1847 18.6141C11.0337 19.3377 11.9962 20.158 12.9979 21.0339C14.0057 20.1563 14.9696 19.3347 15.8204 18.61C18.2488 16.5402 20.3462 14.7531 21.7564 13.0515C23.2152 11.291 23.8659 9.72515 23.8659 7.97429C23.8659 6.31489 23.308 4.79597 22.295 3.69715C21.297 2.61467 19.9247 2.01859 18.4314 2.01859C17.3372 2.01859 16.3327 2.3664 15.4457 3.05224C14.6553 3.66372 14.1046 4.4367 13.7818 4.97757C13.6158 5.2557 13.3236 5.42172 13 5.42172C12.6764 5.42172 12.3842 5.2557 12.2182 4.97757C11.8955 4.4367 11.3449 3.66372 10.5543 3.05224C9.66729 2.3664 8.66275 2.01859 7.56881 2.01859Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        {status && (
          <button className="absolute top-3 left-3.5 text-sm px-2 py-[1px] text-white bg-[#333333] rounded-sm">
            {status}
          </button>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full text-center mt-4 gap-3 flex flex-col">
        <div className="flex gap-0.5 justify-center items-center">
          {Array.from({ length: 5 }).map((data, index) =>
            rating <= index ? (
              <FaRegStar
                key={index}
                className={`fill-current text-[#339999] font-bold  ${
                  index < rating ? "bg-[#339999]" : ""
                }`}
              />
            ) : (
              <FaStar key={index} color="#339999" />
            )
          )}
        </div>

        <h1 id="Product_title" className="font-semibold text-sm md:text-lg ">
          {name}{" "}
        </h1>
        <p className="font-light  text-gray-700 text-xs md:text-sm">
          Rs. {subpara}
        </p>
        {status == "SALE" && (
          <p className="font-light line-through  text-gray-600 text-xs md:text-sm">
            Rs. {subpara + "500"}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
