import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/king.png";

function Footer() {
  return (
    <div className="bg-green-900 mt-5 py-10">
      <Link to="/" className="flex justify-center">
        <div className="img flex justify-start items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold text-4xl text-green-700">Rengs</h1>
        </div>
      </Link>

      <ul className="flex justify-center items-center space-x-10 text-xl font-semibold text-white py-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="copyright text-center text-white font-bold">
        <p>All Copyrights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
