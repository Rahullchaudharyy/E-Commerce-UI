import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
function Footer() {
  return (
    <>
      <div className="hidden md:flex w-full bg-[#E6F1F2]  justify-between gap-8 md:gap-11 p-16">
        <ul className="flex flex-col gap-4">
          <h1 className="font-bold text-black">Contact Info</h1>
          <li className="text-[#47494A] font-semibold">
            70 Washington Square South, New York, NY 10012, United States
          </li>
          <li className="text-[#47494A] font-semibold">
            Email: info@fashionshop.com
          </li>
          <li className="text-[#47494A] font-semibold">Phone: (212)555-1234</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h1 className="font-bold text-black">Our Store</h1>
          <li className="text-black font-normal">Full Grooming</li>
          <li className="text-black font-normal">Bath and try</li>
          <li className="text-black font-normal">Styling</li>
          <li className="text-black font-normal">Medical Bath</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h1 className="font-bold text-black">UseFull links</h1>
          <li className="text-black font-normal">Login</li>
          <li className="text-black font-normal"> My Account</li>
          <li className="text-black font-normal">Wishlist</li>
          <li className="text-black font-normal">Checkout</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <h1 className="font-bold text-black">Sign Up for Email</h1>
          <li className="text-black font-normal">
            Subscribe to our newsletter to receive news on update.
          </li>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </ul>
      </div>
      <div className="md:hidden w-full bg-[#E6F1F2] p-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Contact Info</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li className="text-[#47494A] font-semibold">
                  70 Washington Square South, New York, NY 10012, United States
                </li>
                <li className="text-[#47494A] font-semibold">
                  Email: info@fashionshop.com
                </li>
                <li className="text-[#47494A] font-semibold">
                  Phone: (212)555-1234
                </li>
              </ul>{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Our Store</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Useful Links</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li className="text-black font-normal">Login</li>
                <li className="text-black font-normal"> My Account</li>
                <li className="text-black font-normal">Wishlist</li>
                <li className="text-black font-normal">Checkout</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Footer;
