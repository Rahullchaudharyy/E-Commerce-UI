import AnoucementInfinite from "../_components/AnoucementInfinite";
import ProducList from "../_components/ProducList";
import CallToAction from "./CallToAction";

function Products() {
  return (
    <div className="flex pt-12 flex-col items-center w-full ">
      <h1 className="text-2xl lg:text-4xl text-center font-medium mb-2.5">
        Featured Products
      </h1>
      <p className="text-sm tracking-wider text-center  text-[#414141]">
        We have occasions coverd
      </p>
      <ProducList productsNumber={8} />

      <CallToAction />
      <AnoucementInfinite />

      <h1 className="text-2xl lg:text-4xl text-center font-medium mb-2.5">
        New Arrivals
      </h1>
      <p className="text-sm tracking-wider text-center  text-[#414141]">
        The best quality products are waiting for you & choose it now.
      </p>
      <ProducList productsNumber={4} />
    </div>
  );
}

export default Products;
