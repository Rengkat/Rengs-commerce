import React, { useContext } from "react";
import { AppContex } from "../../Context/Context";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function Fruits({ product }) {
  const { addToCart } = useContext(AppContex);

  return (
    <div className="border-[1px] border-gray-300 rounded h-92 p-5 w-full mx-auto bg-white hover:shadow-lg ">
      <div className="flex justify-center">
        <img src={product.image.url} alt="img" className=" object-cover w-[70s%] h-36 flex " />
      </div>
      <div className=" text-xl p-5 text-center">
        <p>{product.name}</p>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
      <div className="btn">
        <button
          onClick={() => addToCart(product.id, 1)}
          className="bg-green-600 w-full py-2 px-3 rounded-md text-white font-semibold flex justify-center gap-4 hover:opacity-75">
          <FaShoppingCart fontSize={20} className="pt-1" /> <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}

export default Fruits;
