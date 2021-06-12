import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const items = [0, 1, 2, 2];

const Insrtructor = () => {
  return (
    <div className="bg-gray-100 pt-12 pb-12 md:pb-24">
      <div className="my-container space-y-4">
        <h1 className="font-black text-left text-3xl">Meet Your Instructor</h1>
        <p className="lg:w-2/3 text-left text-gray-500">
          21st century skills help students become smarter through specialised
          after school classes, academic tuitions summer camps and workshops.
        </p>
        <div className="flex flex-wrap -mx-4">
          {items.map((d, i) => (
            <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={i}>
              <div className="shadow-lg p-3 rounded-sm bg-white w-full">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRlYWNoZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="teacher-img"
                    className="rounded-sm w-full"
                  />
                  <div className="h-10 w-10 flex justify-center items-center bg-white rounded-sm absolute right-0 bottom-0 cursor-pointer">
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="text-xl font-extrabold">Kishan Singh</h4>
                  <p className="text-gray-500">Web Developer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insrtructor;
