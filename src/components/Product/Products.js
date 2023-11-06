import React, { useContext } from "react";
import { AppContex } from "../../Context/Context";
import Fruits from "../Cart/fruits";
import Tubers from "../Cart/Tubers";
import Cereals from "../Cart/Cerials";
// import Product from "./Product";
// import me from "../../asset/me.jpg";
function Products() {
  const { products } = useContext(AppContex);

  return (
    <div>
      <div className="text-center font-bold text-3xl my-[5rem]">
        <h1>Most Featured Fresh Fruits</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] gap-y-10 mb-5 mx-auto">
        {products.map((product) => {
          if (product.categories[0].name === "Fruits") {
            return (
              <div key={product.id} className=" ">
                <Fruits product={product} />
              </div>
            );
          }
        })}
      </div>
      <div className="text-center font-bold text-3xl my-[5rem]">
        <h1 className="my-[3rem]">Most Featured Tuber Foods</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] my-5 mx-auto">
          {products.map((product) => {
            if (product.categories[0].name === "Tubers") {
              return (
                <div key={product.id} className=" ">
                  <Tubers product={product} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="text-center font-bold text-3xl my-10">
        <h1 className="my-[3rem]">Most Featured Cereal Crops Foods</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] my-5 mx-auto">
          {products.map((product) => {
            if (product.categories[0].name === "Cerials") {
              return (
                <div key={product.id} className=" ">
                  <Cereals product={product} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
