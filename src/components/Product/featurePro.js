import { Link } from "react-router-dom";

function FeaturePro() {
  return (
    <div className="w-[95%] mx-auto h-[60vh] grid grid-cols-1 md:grid-cols-3 gap-5 my-[4rem]">
      <div className="box flex items-center">
        <div className=" z-40 p-5">
          <h1 className="text-white font-light text-3xl text-center py-8">Get Every fresh Fruit</h1>
          <p className="text-center text-xl font-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.
          </p>
          <Link to="/shop" className="flex justify-center my-5">
            <button className="py-2 px-3 rounded-md shadow text-xl font-semibold bg-green-600 text-white ">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <div className="box2 flex items-center">
        <div className=" z-40 p-5">
          <h1 className="text-white font-normal text-3xl text-center py-8">
            Dry and Fresh Cerials
          </h1>
          <p className="text-center text-xl font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.
          </p>
          <Link to="/shop" className="flex justify-center my-5">
            <button className="py-2 px-3 rounded-md shadow text-xl font-semibold bg-green-600 text-white ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="box3 flex items-center">
        <div className=" z-40 p-5">
          <h1 className="text-white font-normal text-3xl text-center py-8">The Best of Tubers</h1>
          <p className="text-center text-xl font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem.
          </p>
          <Link to="/shop" className="flex justify-center my-5">
            <button className="py-2 px-3 rounded-md shadow text-xl font-semibold bg-green-600 text-white ">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturePro;
