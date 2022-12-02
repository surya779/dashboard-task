import React from "react";
import logo from "../../../src/assests/male-avatar.jpg";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between space-x-6">
        <div className="relative w-full">
          <input
            className="w-full rounded-sm pl-20 h-8"
            type="text"
            placeholder="Search for something"
          />
          <i className="fa fas fa-solid fa-magnifying-glass absolute left-10 top-3"></i>
        </div>
        <div className="relative">
          <i className="fa-solid fa-bell text-2xl"></i>
          <div className="w-[10px] h-[10px] rounded-full bg-pink-500 absolute top-0 -right-1"></div>
        </div>
        <div className="relative">
          <i className="fa-regular fa-message text-2xl"></i>
          <div className="w-[10px] h-[10px] rounded-full bg-pink-500 absolute top-0 -right-1"></div>
        </div>
        <img
          className="w-10 h-10 rounded-full"
          src={logo}
          alt="Rounded avatar"
        />

        <div className="flex items-center space-x-2">
          <p className="text-sm whitespace-nowrap">Pravin Raj</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}
