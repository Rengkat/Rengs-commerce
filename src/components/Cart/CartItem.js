import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AppContex } from "../../Context/Context";
function CartItem({ item }) {
  const { removeItem, updateQuantity } = useContext(AppContex);

  return (
    <div className="flex justify-between my-1 bg-white items-center p-5 rounded-md">
      <div className="flex">
        <img
          src={item.image.url}
          alt="Image"
          className=" w-40 h-40 object-cover"
        />
        <div className="pl-5">
          <h1 className="font-semibold text-xl">
            {item.price.formatted_with_symbol}
          </h1>
          <h1>{item.name}</h1>
          <div className="buttons flex mt-10 space-x-4">
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className=" bg-gray-300 py-1 px-2 font-semibold text-xl rounded-sm shadow-sm hover:opacity-75">
              +
            </button>
            {/* <input type="text" name="" id="" /> */}
            <p className="pt-2">{item.quantity}</p>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className=" bg-gray-300 py-1 px-3 font-semibold text-xl rounded-sm shadow-sm hover:opacity-75">
              -
            </button>
          </div>
        </div>
      </div>
      <div className="p-1 md:p-5">
        <button onClick={() => removeItem(item.id)}>
          <AiOutlineClose fontSize={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
