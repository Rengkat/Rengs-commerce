import React, { useContext, useState } from "react";
import logo from "../asset/king.png";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { AppContex } from "../Context/Context";
import { GiHamburgerMenu } from "react-icons/gi";
const link = "py-2 ";
function Nav() {
  const { addToCart, cart } = useContext(AppContex);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="bg-white sticky top-0 z-[100]  ">
      <div className=" w-11/12 mx-auto flex justify-between py-4 border-b-2 border-gray-300  ">
        <Link to="/">
          <div className="img flex justify-start items-center mt-2 md:mt-0">
            <img src={logo} alt="Logo" className="w-7 h-7 md:w-10 md:h-10" />
            <h1 className="font-bold text-2xl md:text-4xl text-green-700">Rengs</h1>
          </div>
        </Link>
        <nav className="mt-3">
          <ul className=" hidden md:flex  justify-center items-center space-x-10 text-xl font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            fontSize={45}
            className=" absolute md:hidden z-[10] right-5 top-[5rem] cursor-pointer text-white"
          />
          <ul
            className={
              isOpen
                ? "  fixed right-0 top-[4.5rem] h-screen z-50 bg-green-800 rounded-l-md w-2/4 text-xl font-semibold transition-all duration-700 ease-linear p-5 text-white"
                : " hidden fixed -right-full top-24 h-screen z-50 bg-green-800 rounded-l-md w-1/2  transition-all duration-700 ease-linear text-xl font-semibold p-5 text-white"
            }>
            <GiHamburgerMenu fontSize={30} onClick={() => setIsOpen(false)} />
            <li className={link}>
              <Link to="/">Home</Link>
            </li>
            <li className={link}>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li className={link}>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className={link}>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex justify-end mt-5 md:mt-0 items-center space-x-10">
          {location !== "/cart" && (
            <li>
              <Link to="/cart" className="relative ">
                <FaShoppingCart fontSize={25} className="text-green-700" />
                {cart.line_items && (
                  <div className="bg-red-500 rounded-full w-5 h-5 p-3 flex justify-center items-center absolute -top-4 left-1">
                    <h1 className="text-white font-semibold ">{cart.total_items}</h1>
                  </div>
                )}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
