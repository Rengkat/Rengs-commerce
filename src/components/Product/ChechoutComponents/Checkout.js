import React, { useContext } from "react";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcStripe,
  FaCcMastercard,
  FaCcAmazonPay,
  FaAlipay,
  FaCcApplePay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContex } from "../../../Context/Context";
function Checkout() {
  const { cart, clearCart } = useContext(AppContex);
  return (
    <div className=" w-[98%] md:w-[30%] mx-auto ">
      <div className="bg-white py-10 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-center py-5 uppercase">Total</h1>
        <section className="flex justify-between py-1 text-xl font-semibold w-[90%] mx-auto border-t-2 border-gray-300 pt-3">
          <h1>Sub-Total</h1>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </section>
        <section className="flex justify-between py-2 text-xl font-semibold w-[90%] mx-auto border-b-2 border-gray-300 pb-3">
          <h1>Delivery</h1>
          <p>300</p>
        </section>
        <div className="flex justify-center pt-3">
          <button
            onClick={clearCart}
            className="bg-red-800 text-white font-semibold rounded-md shadow-md py-2 px-3 w-[90%] hover:opacity-75 ">
            CLEAR CART
          </button>
        </div>
        <div className="flex justify-center pt-3">
          <button className="bg-green-800 text-white font-semibold rounded-md shadow-md py-2 px-3 w-[90%] hover:opacity-75 ">
            {" "}
            <Link to="/checkoutMain">CHEKOUT</Link>
          </button>
        </div>
        <section>
          <h1 className="pl-5 font-bold uppercase text-cl pb-2">We accept:</h1>
          <div className="card flex list-none justify-between w-[90%] mx-auto">
            <li>
              <FaCcVisa fontSize={40} />
            </li>
            <li>
              <FaCcPaypal fontSize={40} />
            </li>
            <li>
              <FaCcStripe fontSize={40} />
            </li>
            <li>
              <FaCcMastercard fontSize={40} />
            </li>
            <li>
              <FaCcAmazonPay fontSize={40} />
            </li>
            <li>
              <FaAlipay fontSize={40} />
            </li>
            <li>
              <FaCcApplePay fontSize={40} />
            </li>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
