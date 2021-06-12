import React from 'react'
import Logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <div className="w-16">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="flex flex-nowrap space-x-5 items-center">
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">Intructor</li>
            <li className="cursor-pointer">Contact Us</li>
            <button className="bg-green-700 text-white py-2 px-3 rounded-md hover:bg-green-600">
              Get Start
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
