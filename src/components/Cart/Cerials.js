import React, { useContext } from "react";
import { AppContex } from "../../Context/Context";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function Cereals({ product }) {
  const { addToCart } = useContext(AppContex);

  return (
    <div className="border-[1px] border-gray-200 rounded h-92 p-5 w-full mx-auto bg-white hover:shadow-lg ">
      <div className="flex justify-center">
        <img src={product.image.url} alt="img" className=" object-cover w-[70%] h-36 flex " />
      </div>
      <div className=" text-xl p-5 font-normal text-centers">
        <p>{product.name}</p>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
      <button
        onClick={() => addToCart(product.id, 1)}
        className="bg-green-600 w-full py-[3px]  rounded-md text-white flex justify-center items-center gap-4 hover:opacity-75">
        <FaShoppingCart fontSize={20} /> <p className="text-[16px] font-semibolds">Add to Cart</p>
      </button>
    </div>
  );
}

export default Cereals;
