import { TbTruckDelivery } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { FaCrown } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

function Highlights() {
  return (
    <div className="flex  px-10  flex-col justify-center items-center flex-wrap md:grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-4 py-11 gap-12">
      <div className="flex justify-center flex-col md:flex-row items-center gap-2.5">
        <TbTruckDelivery className="text-[#4D4D4D]" size={59} />
        <h1 className="flex flex-col items-center md:items-start gap-3 justify-center md:justify-start font-bold">
          FREE SHIPPING
          <span className="font-light">On all orders over $75.00</span>
        </h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center gap-2.5">
        <GoGift className="text-[#4D4D4D]" size={59} />
        <h1 className="flex flex-col items-center md:items-start gap-3 justify-center md:justify-start font-bold">
          MONEY BACK
          <span className="font-light">30 days money back guarantee</span>
        </h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center gap-2.5">
        <FaCrown className="text-[#4D4D4D]" size={59} />
        <h1 className="flex flex-col items-center md:items-start gap-3 justify-center md:justify-start font-bold">
          FRIENDLY SUPPORT
          <span className="font-light">Team always ready for you</span>
        </h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center gap-2.5">
        <FaWallet className="text-[#4D4D4D]" size={59} />
        <h1 className="flex flex-col items-center md:items-start gap-3 justify-center md:justify-start font-bold">
          FREE SHIPPING
          <span className="font-light">On all orders over $75.00</span>
        </h1>
      </div>
    </div>
  );
}

export default Highlights;
