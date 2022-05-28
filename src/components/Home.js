import React from "react";
import Hero from "./hero";
import { GrDeliver } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import FeaturePro from "./Product/featurePro";
import BestSel from "./Product/bestSel";
import Display from "./Product/Display";

function Home() {
  return (
    <div className="mx-auto ">
      <Hero />
      <div className="sels flex  w-full mx-auto justify-between flex-col md:flex-row px-5 bg-green-800 py-8 mb-5">
        <div className="icons">
          <GrDeliver fontSize={50} />
          <p>Fast Safe and Delivery</p>
        </div>
        <div className="icons">
          <GiReturnArrow fontSize={50} />
          <p>Instant Return</p>
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
      <div className="ads mt-[30rem]  md:mt-5">
        <div className="flex justify-center pt-10">
          <div className=" absolute z-50  text-white  font-semibold text-center text-3xl w-[60%]  ">
            <h1>
              Get
              <span className="text-red-900 font-bold text-5xl">30% Off</span>
              on Every 10 Ordered Product from Our Store
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              mollitia vel quisquam dignissimos optio? Soluta error alias beatae
              in aperiam!
            </p>
            <div className="bg-white hidden md:flex items-center  justify-center h-20 w-20 my-12 text-center rounded-full mx-auto">
              <h1 className=" text-green-900 font-bold">And</h1>
            </div>
            <h1>
              Free shipping on every
              <span className="text-red-900 font-bold text-5xl px-2">6</span>
              ordered products
            </h1>
            <p className="text-xl hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              mollitia vel quisquam dignissimos optio? Soluta error alias beatae
              in aperiam!
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-5 text-center">
        <h1 className="font-bold text-4xl mt-10 mb-3">Feature Products</h1>
        <div className="bg-green-700 py-1 w-[3rem] mx-auto mb-10"></div>
        <Display />
      </div>
    </div>
  );
}

export default Home;
