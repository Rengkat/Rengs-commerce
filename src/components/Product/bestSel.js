import React from "react";

function BestSel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 h-[90vh] pt-8 gap-5">
      <div className="bg-red-500 row-span-3"></div>
      <div className="bg-blue-300 row-span-2 h-[20vh]"></div>
      <div className="bg-yellow-700"></div>
      <div className="bg-black row-span-2 h-[20vh]"></div>
      <div className="bg-yellow-700"></div>
    </div>
  );
}

export default BestSel;
