import React from "react";

function NewsLeter() {
  return (
    <div className="h-[80vh] flex items-center">
      <div className="container text-center mx-auto ">
        <h1 className="text-4xl font-semibold pb-10">
          Subscribe to Our NewsLetter
        </h1>
        <input
          type="text"
          name=""
          id=""
          className="py-4 px-4 border-2 border-green-700 w-1/2 rounded-l-lg"
        />
        <button className="bg-green-700 py-4 px-5 font-semibold text-xl text-white  rounded-r-lg mt-1">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsLeter;
