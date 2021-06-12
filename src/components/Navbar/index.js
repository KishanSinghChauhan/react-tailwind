import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [stickNav, setStickNav] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 10) {
        setStickNav(true);
      } else {
        setStickNav(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={`sticky bg-white top-0 ${stickNav ? "shadow-lg z-10" : ""}`}
    >
      <div className="container px-4">
        <div className="flex justify-between items-center h-20">
          <div className="w-16">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="flex flex-nowrap space-x-5 items-center">
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">Intructor</li>
            <li className="cursor-pointer">Contact Us</li>
            <button className="bg-green-700 text-white py-2 px-3 rounded-sm hover:bg-green-600">
              Get Start
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
