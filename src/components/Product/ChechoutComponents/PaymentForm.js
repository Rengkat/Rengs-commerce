import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Reveiw from "./Reveiw";

const stripePromise = loadStripe("...");
function PaymentForm({ checkoutToken, backStep }) {
  return (
    <div className="p-5">
      <Reveiw checkoutToken={checkoutToken} />
      <div className="w-[50%] mx-auto">
        <h1 className="py-2"> Payment method</h1>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ element, stripe }) => {
              return (
                <form>
                  <CardElement className="p-2 border-2 border-gray-300 w-[13rem] rounded" />
                  <div className="button flex space-x-5 my-10">
                    <button
                      onClick={backStep}
                      className="bg-red-800 py-2 px-5 md:px-3 rounded-md shadow-md font-semibold text-xl hover:opacity-70 text-white w-[10rem]">
                      Back
                    </button>
                    <button className="bg-green-800 py-2 px-5 md:px-3 rounded-md shadow-md font-semibold text-sm md:text-xl w-[10rem] hover:opacity-70 text-white">
                      Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                    </button>
                  </div>
                </form>
              );
            }}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
}

export default PaymentForm;
