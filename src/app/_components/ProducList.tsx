import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./Data";

function ProducList({ productsNumber }: { productsNumber: number }) {
  return (
    <div
      // className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 p-11"
      className="w-full p-6 md:p-11 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {products.slice(0, productsNumber).map((product, index) => (
        <ProductCard
          status={product?.status || null}
          key={index}
          img1={product.img1}
          img2={product.img2}
          rating={product.rating}
          name={product.name}
          subpara={product.subpara}
        />
      ))}
    </div>
  );
}

export default ProducList;
