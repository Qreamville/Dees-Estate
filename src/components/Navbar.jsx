import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar w-full border-b">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="navbar-brand font-bold text-2xl cursor-pointer">
          Dee's Estate
        </div>
        <ul className="nav-link md:flex items-center hidden">
          <li className="md:mr-6 text-xl hover:text-blue-800 duration-500">
            <a href="#home">Home</a>
          </li>
          <li className="md:mr-6 text-xl hover:text-blue-800 duration-500">
            <a href="#rent">Rent</a>
          </li>
          <li className="md:mr-6 text-xl hover:text-blue-800 duration-500">
            <a href="#land">Land</a>
          </li>
          <li className="md:mr-6 text-xl hover:text-blue-800 duration-500">
            <a href="#agent">Agent</a>
          </li>
          <li className="md:mr-6 text-xl hover:text-blue-800 duration-500">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
        <button className="btn bg-blue-800 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 duration-500 hidden sm:block">
          Get Started
        </button>
        <BiMenuAltRight size={30} className="block md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
