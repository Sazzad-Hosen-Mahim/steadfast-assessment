import CommonWrapper from "@/common/CommonWrapper";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-website-color-layout shadow-lg h-[80px]">
      <CommonWrapper>
        <div className=" mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="" className="object-cover" />
                <Link to="/" className="text-white text-2xl font-bold">
                  Falcon
                </Link>
              </div>
            </div>
            {/* search bar  */}
            <div className="lg:flex lg:items-center">
              <input
                type="text"
                className="lg:w-[763px] bg-white lg:h-[48px] lg:mt-[14px] rounded-l-md"
              />
              <button className="lg:w-[48px] lg:h-[48px] lg:mt-[14px] bg-[#00B795] flex items-center justify-center rounded-r-md">
                <CiSearch className="text-white text-2xl" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              <div className="relative">
                <Link
                  to="/"
                  className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  <img src="/shopping-cart-01.png" alt="" />
                </Link>
                <Badge
                  variant="destructive"
                  className="bg-red-500 rounded-full w-5 h-5 absolute top-4 left-5"
                >
                  1
                </Badge>
              </div>
              <Link
                to="/"
                className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                <img src="/profile.png" alt="" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
