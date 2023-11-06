import React from "react";
import Products from "./Product/Products";

function Shop() {
  return (
    <div className="bg-gray-200 pb-10">
      <div className="h-[20vh] relative w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-green-900 opacity-70 "></div>
        <h1 className="font-bold text-4xl text-white z-30">Shop</h1>
      </div>
      <div className="w-[90%] mx-auto">
        <Products />
      </div>
    </div>
  );
}

export default Shop;
