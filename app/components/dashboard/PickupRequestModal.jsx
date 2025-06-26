"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const PickupRequestModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-10">
      <div className="bg-white w-[90%] sm:w-[80%] md:w-[35%] rounded-md shadow-lg relative">
        <div className="flex justify-between items-center border-b px-5 py-3">
          <h2 className="text-xl font-semibold">Pickup Request</h2>
          <RxCross1
            className="cursor-pointer text-gray-600 hover:bg-gray-100 p-2 rounded-full w-8 h-8"
            onClick={onClose}
          />
        </div>
        <div className="p-5">
          <form className="flex flex-col gap-4">
            <label className="block font-medium text-gray-700">
              Pickup Address <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Enter pickup address"
                className="w-full border border-gray outline-none rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block font-medium text-gray-700">
              Note <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Note"
                className="w-full border border-gray outline-none rounded px-3 py-2 mt-1"
              />
            </label>
            <label className="block font-medium text-gray-700">
              Estimated Parcel (Optional){" "}
              <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Estimated Parcel (Optional) "
                className="w-full border border-gray outline-none rounded px-3 py-2 mt-1"
              />
            </label>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="submit"
                className="button-primary cursor-pointer  text-white px-4 py-2 rounded"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickupRequestModal;
