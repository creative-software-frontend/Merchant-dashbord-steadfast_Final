"use client";
import {
  FaBars,
  FaSearch,
  FaUserCircle,
  FaReceipt,
  FaTimes,
  FaHandPointer,
} from "react-icons/fa";
import { GoNote } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";
import NotificationBell from "./topbar/NotificationBell";
import ProfileMenu from "./topbar/Profile";
import LanguageToggle from "./topbar/LanguageToggle";


const Topbar = ({ toggleSidebar, toggleMobileSearch, showMobileSearch }) => {
  const [balanceClicked, setBalanceClicked] = useState(false);

  const CheckBalanceButton = () => (
    <button
      className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00b795]  text-primary-active shadow-sm hover:shadow-md transition-all duration-300 bg-[#FAFAFA]"
      onClick={() => setBalanceClicked(!balanceClicked)}
    >
      {balanceClicked ? (
        <div className="flex justify-between items-center gap-16 md:gap-20 py-0.5">
          <span className="font-semibold  text-primary-active ">0 TK </span>
          <span className="text-[15px] bg-[#00b795] text-white rounded-full px-2.5 py-0.5">
            Details
          </span>
        </div>
      ) : (
        <>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary shadow-inner border border-green-100">
            <FaHandPointer className=" text-primary-active text-lg" />
          </div>
          <span className="font-medium">Check Balance</span>
        </>
      )}
    </button>
  );

  return (
    <div className="bg-primary px-5 py-8 shadow sticky top-0 z-10 ">
      <header className="flex justify-between items-center">
        <FaBars
          onClick={toggleSidebar}
          className="text-xl cursor-pointer md:mr-4 hover:text-gray-600 transition-colors duration-200"
        />

        <div className="flex-1 flex items-center justify-center md:justify-between">
          {showMobileSearch ? (
            <div className="relative w-full max-w-md md:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-[#a3a3a3]  rounded-full focus:outline-none transition-all duration-300"
                autoFocus
              />
              <FaTimes
                onClick={toggleMobileSearch}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-200"
              />
            </div>
          ) : (
            <>
              <Link href="/">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="h-8 mx-auto md:mx-0 md:ml-4  transition-opacity duration-200"
                />
              </Link>

              <div className="hidden md:flex items-center justify-center gap-4 absolute left-1/2 transform -translate-x-1/2">
                <div className="relative transition-all duration-300 bg-[#FAFAFA]">
                  <input
                    type="text"
                    placeholder="Search Consignment"
                    className="px-4 py-2.5 border border-[#a3a3a3] rounded-full w-48 lg:w-60 focus:outline-none transition-all duration-300 hover:border-gray-400 focus:border-[#a3a3a3]"
                  />
                  <FaSearch className="absolute right-3 top-3 text-gray-400 transition-colors duration-200" />
                </div>

                <CheckBalanceButton />
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 ">
          <FaSearch
            onClick={toggleMobileSearch}
            className="text-lg text-gray-600 cursor-pointer md:hidden hover:text-gray-800 transition-colors duration-200"
          />

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />

            <div className="cursor-pointer p-3 rounded-full transition-all duration-300 bg-[#F5F5F5]">
              <GoNote className="text-xl text-gray-600  transition-colors duration-200" />
            </div>
            <NotificationBell />

            <ProfileMenu />
          </div>
        </div>
      </header>

      <div className="md:hidden mt-3 flex justify-center">
        <CheckBalanceButton />
      </div>

      
    </div>
  );
};

export default Topbar;
