import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Enum_Logo_White 1.png";

const Sidebar = () => {
  const baseClass = "flex items-start space-x-4 cursor-pointer hover:text-gray-300";
  const activeClass = "text-yellow-300 font-bold";

  return (
    <div className="h-screen w-64 bg-blue-600 text-white flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-10">
        <img src={logo} alt="Logo" className="w-20 h-5" />
      </div>

 
      <div className="space-y-10">
        <NavLink
          to="/letmeetyou"
          className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
        >
          <div className="w-5 h-5 border-2 border-white rounded-full mt-1"></div>
          <div>
            <p className="font-semibold">Let’s meet you</p>
            <p className="text-sm text-gray-200">With your name and work email</p>
          </div>
        </NavLink>

        <NavLink
          to="/addcompany"
          className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
        >
          <div className="w-5 h-5 border-2 border-white rounded-full mt-1"></div>
          <div>
            <p className="font-semibold">Add company</p>
            <p className="text-sm text-gray-200">Create your space on Enum</p>
          </div>
        </NavLink>

        <NavLink
          to="/inviteteam"
          className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ""}`}
        >
          <div className="w-5 h-5 border-2 border-white rounded-full mt-1"></div>
          <div>
            <p className="font-semibold">Invite your team</p>
            <p className="text-sm text-gray-200">Start collaborating with your team</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
