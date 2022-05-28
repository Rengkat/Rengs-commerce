import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContex } from "../../Context/Context";
import CartItem from "./CartItem";
import Checkout from "../Product/ChechoutComponents/Checkout";

function Cart() {
  const { cart } = useContext(AppContex);

  const EmptyCart = () => {
    return (
      <div className="flex justify-center space-x-5 my-20 pb-[15rem]">
        <h1 className="text-xl md:text-2xl font-semibold">
          You have no items in your cart. Start shopping
        </h1>
        <button className="py-2 px-3 bg-green-700 font-semibold text-xl rounded-md text-white">
          <Link to="/shop">Back to Shop</Link>
        </button>
      </div>
    );
  };

  if (!cart.line_items) return "Loading...";
  return (
    <div className=" bg-gray-200 pb-10">
      <div className="h-[20vh] relative w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-green-900 opacity-70 "></div>
        <h1 className="font-bold text-4xl text-white z-30">Your Cart</h1>
      </div>
      <div className="cart p-5 ">
        {!cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <div className="flex lg:flex-row flex-col">
            <div className="w-[98%] md:w-[60%] mx-auto ">
              {cart.line_items.map((item) => {
                return (
                  <div key={item.id} className="">
                    <CartItem item={item} />
                  </div>
                );
              })}
            </div>

            <Checkout />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
