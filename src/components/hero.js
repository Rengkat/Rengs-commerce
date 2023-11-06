import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 11000,
    speed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="h-[60vh] md:h-[80vh] lg:h-[95vh] overflow-hidden ">
      <Slider {...settings}>
        <div className="h-[60vh] md:h-[95vh] relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className=" w-11/12 mx-auto flex items-center justify-between mt-[3rem]">
            <div className="left z-30 ">
              <h1 className="font-bold text-2xl">The</h1>
              <h1 className="font-bold text-3xl md:text-6xl ">Place to Get Fresh Foods</h1>
              <h3 className="font-bold text-sm md:text-2xl pb-10">Tubers, Fruits and Vegetables</h3>
              <Link to={"/shops"}>
                {" "}
                <button className="bg-green-800 text-white text-xl font-semibold py-3 px-4 rounded-md shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="right">
              <img
                className=""
                src="https://media.istockphoto.com/photos/orange-picture-id185284489?s=612x612"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* SLIDE...... */}
        <div className="h-[60vh] md:h-[95vh]  relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className=" w-11/12 mx-auto flex items-center justify-between mt-[3rem]">
            <div className="left z-30 mt-20 ">
              <h1 className="font-bold text-2xl">The</h1>
              <h1 className="font-bold text-2xl md:text-6xl ">Place to Get Fresh Tubers</h1>
              <h3 className="font-bold text-sm md:text-2xl pb-10">Yam, Potatoes and More</h3>
              <Link to={"/shops"}>
                {" "}
                <button className="bg-green-800 text-white text-xl font-semibold py-3 px-6 rounded-md shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="right">
              <img
                className=""
                src="https://media.istockphoto.com/photos/taro-roots-picture-id467022009?s=612x612"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-[60vh] md:h-[95vh]  relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className=" w-11/12 mx-auto flex items-center justify-between mt-[3rem]">
            <div className="left z-30 ">
              <h1 className="font-bold text-2xl md:text-6xl">The</h1>
              <h1 className="font-bold text-3xl  md:text-6xl ">Place to Get Quality Cerieals</h1>
              <h3 className="font-bold text-xl md:text-2xl pb-10">Corn, Soya Beans and More</h3>
              <Link to={"/shops"}>
                {" "}
                <button className="bg-green-800 text-white text-xl font-semibold py-3 px-4 rounded-md shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="right">
              <img
                className=""
                src="https://media.istockphoto.com/photos/corn-on-the-cob-kernels-peeled-isolated-on-white-background-picture-id841408966?s=612x612"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
