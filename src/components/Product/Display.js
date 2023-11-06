import React, { useContext } from "react";
import { AppContex } from "../../Context/Context";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function Display() {
  const { products, addToCart } = useContext(AppContex);

  const display = products?.slice(0, 8);
  return (
    <div className="grid lg:grid-cols-4  w-[95%] grid-cols-1 md:grid-cols-2 gap-3 gap-y-10 my-[3rem] mx-auto">
      {display.map((product) => {
        return (
          <div className="border-[1px] border-gray-200 rounded h-92 p-5 w-11/12 mx-auto bg-white hover:shadow-lg ">
            <div className="flex justify-center">
              <img src={product.image.url} alt="img" className=" object-cover w-36 h-36 flex " />
            </div>
            <div className=" text-xl p-5 text-center font-lights">
              <p>{product.name}</p>
              <p>{product.price.formatted_with_symbol}</p>
            </div>
            <div className="btn flex justify-center space-x-3">
              <button
                onClick={() => addToCart(product.id, 1)}
                className="bg-green-700 py-2 px-3 rounded-md w-full text-white font-light flex justify-center gap-5 hover:opacity-75">
                <FaShoppingCart fontSize={20} className="pt-1" /> <p>Add to Cart</p>
              </button>
              <button>{/* <FaRegHeart fontSize={25} className="text-green-600 " /> */}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
