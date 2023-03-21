import React from "react";
import { NavLink } from "react-router-dom";
import ubisoftlogo from "../images/ubisoft.svg";
import { FaUserAlt } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex self-center justify-between py-2 bg-black px-14">
      <div className="logo">
        <NavLink to="/">
          <img className="w-24" src={ubisoftlogo} alt="" />
        </NavLink>
      </div>
      <div className="flex self-center text-base font-bold text-white options gap-14">
        <NavLink to="/Play">PLAY</NavLink>
        <NavLink to="/Shop">SHOP</NavLink>
        <NavLink to="/Explore">EXPLORE</NavLink>
        <NavLink to="/Help">HELP</NavLink>
      </div>
      <div className="flex self-center gap-8 text-3xl userinterface">
        <button className="p-1 text-white bg-gray-800 rounded-full">
          <RxMagnifyingGlass />
        </button>
        <button className="p-1 text-white rounded bg-slate-500">
          <FaUserAlt />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
