import React from "react";
import Hero from "./hero";
// import { MdDeliveryDining } from "react-icons/ci";
import { MdPayment, MdDeliveryDining } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import FeaturePro from "./Product/featurePro";
import BestSel from "./Product/bestSel";
import Display from "./Product/Display";

function Home() {
  return (
    <div className="mx-auto ">
      <Hero />
      <div className="sels flex  w-full mx-auto justify-between flex-col md:flex-row px-5 bg-green-600 py-8 mb-5">
        <div className="icons">
          <MdDeliveryDining fontSize={50} className="text-white" />
          <p>Fast Safe and Delivery</p>
        </div>
        <div className="icons">
          <GiReturnArrow fontSize={50} />s<p>Instant Return</p>
        </div>
        <div className="icons">
          <MdPayment fontSize={50} />
          <p>Instant Online Payment</p>
        </div>
        <div className="icons">
          <RiCustomerService2Fill fontSize={50} />
          <p>Best Customer Care Service</p>
        </div>
      </div>
      <FeaturePro />

      <div className=" my-[2rem] text-center">
        <h1 className="font-bold text-4xl mt-10 mb-3">Feature Products</h1>
        <div className="bg-green-700 py-[2px] w-[3rem] mx-auto mb-[1rems]"></div>
        <Display />
      </div>
    </div>
  );
}

export default Home;
