import React from "react";
import testimonials from "./lib/testimonial";
import Slider from "react-slick";
function About() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 500,
    cssEase: "linear",
  };
  return (
    <div className="bg-gray-200 pb-10">
      <div className="h-[20vh] relative w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-green-900 opacity-70 "></div>
        <h1 className="font-bold text-4xl text-white z-30">About us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%] mx-auto mt-20 mb-10">
        <div>
          <h1 className="font-bold text-4xl  mb-3 text-center">Our Mission</h1>
          <h1 className="text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            voluptate distinctio tempora iusto labore dolor consequuntur qui
            saepe esse veritatis natus obcaecati illum autem corporis fugiat,
            dolore sunt voluptates ullam.
          </h1>
          <h1 className="text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            voluptate distinctio tempora iusto labore dolor consequuntur qui
            saepe esse veritatis natus obcaecati illum autem corporis fugiat,
            dolore sunt voluptates ullam.
          </h1>
        </div>
        <div>
          <img
            className="w-[100%] h-[30rem] object-cover"
            src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg"
            alt=""
          />
        </div>
        <div className="my-20 md:my-32">
          {" "}
          <img
            src="https://images.pexels.com/photos/4199347/pexels-photo-4199347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="pt-2 md:pt-32">
          <h1 className="font-bold text-4xl  mb-3 text-center">Our Vission</h1>
          <h1 className="text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, quia quisquam mollitia error vero aspernatur aliquid
            voluptatem deleniti doloribus natus ex asperiores expedita officiis
            aliquam aut iusto dolorem. Magnam placeat dicta voluptatum
            accusantium. Dolores quidem cupiditate incidunt voluptates sunt
            odio?
          </h1>
          <h1 className="text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, quia quisquam mollitia error vero aspernatur aliquid
            voluptatem deleniti doloribus natus ex asperiores expedita officiis
            aliquam aut iusto dolorem. Magnam placeat dicta voluptatum
            accusantium. Dolores quidem cupiditate incidunt voluptates sunt
            odio?
          </h1>
        </div>
      </div>
      <div className=" w-[90%] md:w-[60%] lg:w-[40%] mx-auto my-10 rounded-md p-10 shadow-md bg-white">
        <Slider {...settings}>
          {testimonials.map((testimonial) => {
            return (
              <div className="my-10 text-center">
                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt="image"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold py-5">{testimonial.name}</h1>
                <p className="text-2xl ">{testimonial.message}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default About;
