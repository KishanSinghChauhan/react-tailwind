import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faLightbulb,
  faBookReader,
  faUserNinja,
  faFlask,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  return (
    <div className="pt-12 pb-12 md:pb-24">
      <div className="my-container flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap">
            <div className="py-4 md:p-4 w-full md:w-1/2">
              <div className="p-4 shadow-lg rounded-lg">
                <div className="rounded-full h-10 w-10 flex justify-center items-center bg-green-100">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="text-green-500"
                  />
                </div>
                <h3 className="text-lg font-bold mt-3">Communication Skills</h3>
                <p className="text-sm text-gray-500">
                  make yourself more confident with communication
                </p>
                <p className="text-green-500 font-bold text-sm mt-2">
                  Know More
                </p>
              </div>
            </div>
            <div className="py-4 md:p-4 w-full md:w-1/2">
              <div className="p-4 shadow-lg rounded-lg">
                <div className="rounded-full h-10 w-10 flex justify-center items-center bg-purple-100">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-purple-500"
                  />
                </div>
                <h3 className="text-lg font-bold mt-3">Creativity Skills</h3>
                <p className="text-sm text-gray-500">
                  make yourself more creative and intelligent
                </p>
                <p className="text-green-500 font-bold text-sm mt-2">
                  Know More
                </p>
              </div>
            </div>
            <div className="py-4 md:p-4 w-full md:w-1/2">
              <div className="p-4 shadow-lg rounded-lg">
                <div className="rounded-full h-10 w-10 flex justify-center items-center bg-yellow-100">
                  <FontAwesomeIcon
                    icon={faBookReader}
                    className="text-yellow-500"
                  />
                </div>
                <h3 className="text-lg font-bold mt-3">Reading Skills</h3>
                <p className="text-sm text-gray-500">
                  reading is the best thing to improve daily
                </p>
                <p className="text-green-500 font-bold text-sm mt-2">
                  Know More
                </p>
              </div>
            </div>
            <div className="py-4 md:p-4 w-full md:w-1/2">
              <div className="p-4 shadow-lg rounded-lg">
                <div className="rounded-full h-10 w-10 flex justify-center items-center bg-pink-100">
                  <FontAwesomeIcon
                    icon={faUserNinja}
                    className="text-pink-500"
                  />
                </div>
                <h3 className="text-lg font-bold mt-3">Speaking Skills</h3>
                <p className="text-sm text-gray-500">
                  stand out yourself and deliver you ideas
                </p>
                <p className="text-green-500 font-bold text-sm mt-2">
                  Know More
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-3 md:space-y-5 mt-6 md:mt-0">
          <h4 className="text-3xl md:text-4xl font-extrabold">
            Don't waste your valuable time or money
          </h4>
          <p className="text-gray-500 text-lg">
            Keep yourself engage and learn new things
          </p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFlask} className="text-purple-600 mr-3" />
            <p className="text-gray-500">Experienced Instructor</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFlag} className="text-blue-500 mr-3" />
            <p className="text-gray-500">Daily Report</p>
          </div>
          <button className="bg-green-700 text-white py-2 px-3 rounded-msmd hover:bg-green-600">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
