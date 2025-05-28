"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const optionsMap = {
  From: ["Dhaka", "Chittagong", "Khulna"],
  Destination: ["Sylhet", "Rajshahi", "Barisal"],
  Category: ["Electronics", "Clothing", "Furniture"],
  "Service Type": ["Express", "Standard", "Economy"],
};

const Dropdown = ({ label, options }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block mb-1 text-md font-medium text-secondary">
        {label}
      </label>
      <button
        type="button"
        className="bg-gray-50 border border-gray rounded-md w-full px-3.5 py-2.5 flex items-center justify-between cursor-pointer font-medium text-sm"
        onClick={() => setIsActive(!isActive)}
      >
        {content || ` ${label}`}
        <IoChevronDown
          className={`${
            isActive ? "rotate-180" : ""
          } transition-transform duration-300`}
        />
      </button>
      <div
        className={`absolute top-14 left-0 right-0 bg-primary rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
          isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-[-1]"
        }`}
      >
        {options.map((option, index) => (
          <p
            key={index}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer transition"
            onClick={() => {
              setContent(option);
              setIsActive(false);
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

const WeightInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full mt-1">
      <label className="block mb-1 text-sm font-medium text-secondary">
        Weight (KG)
      </label>
      <input
        type="number"
        min="0"
        className="w-full px-3  py-2 border border-gray bg-gray-50 rounded-md focus:outline-none  "
        placeholder="Enter weight in KG"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const SelectInput = () => {
  return (
 <div>
       <div className=" p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {Object.entries(optionsMap).map(([label, options]) => (
        <Dropdown key={label} label={label} options={options} />
      ))}
      <WeightInput />
    </div>
   <div className="flex justify-center">
      <button
        type="button"
        className="bg-gray-50 border border-gray rounded-md  px-3.5 py-2.5 flex items-center justify-center cursor-pointer font-medium text-xl"
        
      >50 TK</button>
   </div>
 </div>
  );
};

export default SelectInput;
