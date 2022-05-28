import React from "react";

function Reveiw({ checkoutToken }) {
  return (
    <div className=" w-[93%] mx-auto">
      <h1 className="font-bold text-3xl py-3">Order Summary</h1>
      <div>
        {checkoutToken.live.line_items.map((item) => {
          return (
            <div key={item.name} className="py-2 border-b-2 border-gray-300">
              <div className="flex justify-between">
                <ul className="text-xl">
                  <li className="font-semibold">{item.name}</li>
                  <li>{`Quantity: ${item.quantity}`}</li>
                </ul>
                <ul>
                  <li className="font-semibold">
                    {item.line_total.formatted_with_symbol}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-semibold text-2xl pb-2 pt-5">
        <h2 className="font-bold ">Totoal</h2>
        <h2 className="py-2 ">
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </h2>
      </div>
    </div>
  );
}

export default Reveiw;
