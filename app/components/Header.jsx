"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={searchRef}
      className="h-[75px] z-50 w-full backdrop-filter: blur(10px); backdrop-blur-md  fixed top-0 left-0 content-center border-b border-amber-100  bg-[#000000c0] text-amber-100"
    >
      <div className="flex justify-between items-center px-10 md:px-30">
        <Link
          href="/"
          className="w-15 h-15 border-2 border-amber-100 rounded-full overflow-hidden "
        >
          <img
            src="/logo.jpg"
            alt="Logo"
            className="object-cover w-full scale-[1.8]"
          />
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer block  ${
            open ? "text-3xl text-red-500" : "text-3xl text-amber-100"
          }`}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav  */}
      <div className={` overflow-hidden `}>
        <nav
          className={`shadow-2xl shadow-amber-100  transition-all duration-500 ease-in-out overflow-x-hidden absolute z-50 top-[75px] right-0 h-[calc(100vh-75px)] backdrop-filter: blur(20px); backdrop-blur-md  bg-[#000000c0] flex flex-col text-center  text-lg font-medium ${
            open ? "w-full sm:w-[300px] border-l border-amber-100" : " w-0"
          }`}
        >
          <Link
            href="/doors"
            className=" group  border-b border-amber-100 flex items-center justify-center py-4"
            onClick={() => setOpen(false)}
          >
            <span className=" group-hover:translate-x-4 transition-all duration-300">
              Dors Collection
            </span>
          </Link>

          <Link
            href="/moldings"
            className="group  border-b border-gray-400 flex items-center justify-center py-4"
            onClick={() => setOpen(false)}
          >
            <span className=" group-hover:translate-x-4 transition-all duration-300">
              Wooden Moldings Collection
            </span>
          </Link>

          <Link
            href="/farnichars"
            className="group  border-b border-amber-100 flex items-center justify-center py-4"
            onClick={() => setOpen(false)}
          >
            <span className=" group-hover:translate-x-4 transition-all duration-300">
              Farnichar Design Collection
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
