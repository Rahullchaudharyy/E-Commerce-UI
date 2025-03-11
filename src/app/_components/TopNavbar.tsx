import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrPinterest } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import { currencies, languages } from "./Data";

function TopNavbar() {
  return (
    <div className="h-12 bg-[#090A0A] flex items-center justify-center lg:justify-between px-3">
      <div className="h-full hidden   lg:flex gap-2 items-center">
        <h1 className="text-[#C1C2C2]  tracking-tight font-light flex gap-2  items-center">
          <TbPhoneCall fontWeight={"50"} size={19} />+ 0123456789
        </h1>
        <h1 className="text-[#C1C2C2]  tracking-tight font-light flex gap-2  items-center">
          <CiMail fontWeight={"50"} size={16} />
          Digizen@domain.com
        </h1>
      </div>
      <div>
        <h1 className="text-[#C1C2C2] text-sm text-center">
          Free Delivery on <strong>orders</strong> over $260
        </h1>
      </div>
      <div className="lg:flex hidden  ">
        <Select>
          <SelectTrigger className="bg-[#090A0A]  w-[80px]  text-white  ">
            <SelectValue
              className="text-white hover:border-b"
              placeholder="INR ₹"
            />
          </SelectTrigger>
          <SelectContent className="rounded-none h-56 bg-[#090A0A] ">
            {currencies?.map((data, index) => (
              <SelectItem
                key={index}
                className="bg-[#090A0A]  focus:bg-[#090A0A]  focus:text-gray-400 text-[#C1C2C2] "
                value={data}
              >
                {data}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-[#090A0A] w-[100px] text-white  ">
            <SelectValue
              className="text-white hover:border-b"
              placeholder="English"
            />
          </SelectTrigger>
          <SelectContent className="rounded-none bg-[#090A0A] ">
            {languages?.map((data, index) => (
              <SelectItem
                key={index}
                className="bg-[#090A0A]  focus:bg-[#090A0A]  focus:text-gray-400 text-[#C1C2C2] "
                value={data}
              >
                {" "}
                {data}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-3">
          <FaFacebookF
            size={18}
            className="text-white hover:text-blue-600 transition-all"
          />
          <FaInstagram
            size={18}
            className="text-white hover:text-pink-600 transition-all"
          />
          <FaYoutube
            size={18}
            className="text-white hover:text-red-600 transition-all"
          />
          <FaTwitter
            size={18}
            className="text-white hover:text-blue-400 transition-all"
          />
          <GrPinterest
            size={18}
            className="text-white hover:text-red-600 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
