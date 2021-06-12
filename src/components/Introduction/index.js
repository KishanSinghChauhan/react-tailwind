import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <div className="pt-12 pb-12 md:pb-24">
      <div className="my-container flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            Mrs. Dash Extends Free Course Access For Univerties
          </h3>
          <p className="text-gray-500">
            21st century skills help students become smarter through specialised
            after school classes. academic tuitions summer camps and workshops.
          </p>
          <p className="text-gray-500">
            Academic tuitions summer camps and workshops.
          </p>
          <button className="bg-green-700 text-white py-2 px-3 rounded-sm hover:bg-green-600">
            Get Start
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="relative w-2/3 h-80">
            <div className="bg-yellow-400 h-16 w-16 rounded-full shadow-sm absolute -right-8 -top-8 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="intro"
              className="w-full object-cover object-top h-full relative z-20"
            />
            <div className="p-4 rounded-sm bg-white shadow-lg max-w-max absolute -bottom-16 -left-16 z-30">
              <div className="flex">
                <div className="h-8 w-8 rounded-full shadow-md flex justify-center items-center bg-purple-100 mr-4">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-purple-500"
                  />
                </div>
                <div className="h-8 w-8 rounded-full shadow-md flex justify-center items-center bg-red-100">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="text-red-500"
                  />
                </div>
              </div>
              <h3 className="text-base font-bold mt-3">Amount Will Refund</h3>
              <p className="text-gray-500 text-sm">No Question Asked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
