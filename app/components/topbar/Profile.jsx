"use client";
import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaKey, FaCog, FaChevronDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="cursor-pointer p-3 rounded-full transition-all duration-300 bg-[#F5F5F5] flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUserCircle className="text-xl text-secondary transition-colors duration-200" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 h-68 bg-primary  shadow-sm z-20 overflow-hidden">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="group flex items-center px-4 py-2 text-secondary text-primary-hover"
              >
                <FiUser className="mr-3 text-2xl text-secondary " />
                My account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center px-4 py-2 text-secondary text-primary-hover "
              >
                <FaKey className="mr-3 text-secondary " />
                Change Password
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center px-4 py-2 text-secondary text-primary-hover "
              >
                <FaCog className="mr-3 text-secondary " />
                Settings
              </a>
            </li>
            <li className="mt-10 flex justify-center">
              <a
                href="#"
                className="flex items-center px-10 rounded-md py-2 border border-[#00b795] text-primary-active bg-[#e5f7f4]  transition-colors duration-200"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
