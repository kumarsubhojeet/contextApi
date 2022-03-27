import React from "react";
import Logo from "../assets/logo.png";
import { Bell } from "phosphor-react";

export default function Navbar() {
  return (
    <div className=" px-3 py-3 mx-auto ">
      <div className=" flex px-3 justify-between items-center">
        <div className=" flex items-center">
          <img src={Logo} alt="logo_image" />
          <p className=" pl-3 font-semibold">CREDENC PRICER</p>
        </div>
        <div>
          <div className="flex items-center">
            <div className=" px-8">
              <Bell size={32} />
            </div>
            <p className=" bg-gray-600 text-white py-2 px-3">SK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
