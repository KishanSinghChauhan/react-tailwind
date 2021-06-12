import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container px-4">
      <div className="pb-12 md:pb-24 pt-12 flex flex-wrap justify-between items-center">
        <div className="space-y-4 w-full md:w-1/2">
          <p className="text-green-700 text-sm font-bold">
            CHOOSE YOUR BEST COURSE
          </p>
          <h1 className="font-black text-4xl md:text-5xl">
            Start learning from best plateform
          </h1>
          <p className="text-gray-500">
            21st century skills help students become smarter through specialised
            after school classes, academic tuitions summer camps and workshops.
          </p>
          <div className="flex flex-nowrap justify-around items-center p-4 space-x-2 rounded-md shadow-lg w-full md:max-w-max">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input
              placeholder="search online course"
              className="focus:outline-none"
            />
            <button className="bg-green-50 text-green-700 py-2 px-3 rounded-sm hover:bg-green-600 hover:text-white">
              Search
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/4 my-6 md:my-0">
          <div className="absolute left-4 md:-left-4 top-4 md:top-1/4 bg-red-50 rounded-full h-10 w-10 shadow-lg flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </div>
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="head-img"
              className="rounded-md md:rounded-t-full object-cover object-top h-full"
            />
          </div>
          <div className="absolute right-4 md:-right-5 bottom-4 md:-bottom-5 bg-yellow-50 rounded-full h-16 w-16 shadow-lg flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-yellow-400 text-2xl transform -rotate-45"
            />
          </div>
        </div>
        <div className="space-y-0  md:space-y-4 w-full md:w-1/5 flex flex-wrap md:block">
          <div className="w-1/2 md:w-full pt-4 md:pt-0">
            <h3 className="text-lg font-black">22300 Students</h3>
            <p className="text-gray-500 w-2/3">They Learn things Together.</p>
          </div>
          <div className="w-1/2 md:w-full pt-4 md:pt-0">
            <h3 className="text-lg font-black">2000+ Courses</h3>
            <p className="text-gray-500 w-2/3">
              every Day we add more to learn.
            </p>
          </div>
          <div className="w-1/2 md:w-full pt-4 md:pt-0">
            <h3 className="text-lg font-black">220+ Instructor</h3>
            <p className="text-gray-500 w-2/3">They Learn things Together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
