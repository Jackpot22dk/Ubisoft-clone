import React from "react";
import {
  FaGlobe,
  FaTwitter,
  FaFacebookF,
  FaTwitch,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import cpr from "../images/esrb-privacy-footer.webp";
import ubisoftlogo from "../images/ubisoft.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D1E22]">
      <div className="grid justify-center bg-black grid-col-3 promologos">
        <p className="absolute left-0 self-center pl-24 text-xs text-gray-200 ">
          Visit Other Ubisoft Channels
        </p>
        <div className="flex self-center col-start-2 gap-5 p-3 text-center rounded-full ">
          <div className="bg-white rounded-full">
            <FaTwitter size={30} className="p-1" />
          </div>
          <div className="bg-white rounded-full">
            <FaFacebookF size={30} className="p-1" />
          </div>
          <div className="bg-white rounded-full">
            <FaTwitch size={30} className="p-1" />
          </div>
          <div className="bg-white rounded-full">
            <FaYoutube size={30} className="p-1" />
          </div>
          <div className="bg-white rounded-full">
            <FaInstagram size={30} className="p-1" />
          </div>
          <div className="bg-white rounded-full">
            <FaLinkedinIn size={30} className="p-1" />
          </div>
        </div>
      </div>
      <div className="px-14 foot">
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center gap-10 pt-5 text-white">
            <div className="pb-5">
              <img className="w-32" src={ubisoftlogo} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <NavLink to="/">CONTACT US</NavLink>
                <NavLink to="/">PRIVACY & LEGAL</NavLink>
              </div>
              <NavLink className="text-sm text-gray-200" to="/">
                Interest-Based Ads
              </NavLink>
              <NavLink className="text-sm text-gray-200" to="/">
                Do Not Sell My Personal Information
              </NavLink>
              <NavLink className="text-sm text-gray-200" to="/">
                Set cookies
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10 pt-5 text-white">
            <div className="flex gap-6 align-bottom">
              <div className="flex flex-col gap-2">
                <NavLink to="/">UBISOFT CONNECT</NavLink>
                <NavLink to="/">SUPPORT</NavLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink to="/">INVESTORS</NavLink>
                <NavLink to="/">PRESS</NavLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink to="/">ABOUT US</NavLink>
                <NavLink to="/">CAREERS</NavLink>
                <NavLink to="/">LOCATIONS</NavLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10 pt-5 text-white">
            <div className="flex flex-col gap-6 align-bottom">
              <div className="flex self-end justify-self-center">
                <div className="flex items-center gap-1 text-4xl">
                  <FaGlobe />
                  <p>English</p>
                </div>
              </div>
              <div className="flex flex-col self-end gap-2">
                <img className="w-14" src={cpr} alt="" />
              </div>
              <div className="text-sm text-right">
                <p>
                  © 2023 Ubisoft Entertainment. All Rights Reserved. Ubisoft,
                  Ubi.com and the Ubisoft logo are trademarks of Ubisoft
                  Entertainment in the U.S. and/or other countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
