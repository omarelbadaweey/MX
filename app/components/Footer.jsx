"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mx.design1?igsh=MXU3eHlzODNjYzZ4Zg==",
    },
    {
      name: "Whats app",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send/?phone=201550764367&text&type=phone_number&app_absent=0",
    },
  ];
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backtop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 ">
      {showBtn && (
        <button
          onClick={backtop}
          id="backTop"
          className="flex justify-center text-2xl items-center animate-bounce fixed bottom-6 right-6 bg-black text-amber-100 w-[50px] h-[50px] rounded-full shadow-lg border-3 border-amber-100 outline-4 outline-black transition-opacity  z-50 cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
      <div className="max-w-7xl mx-auto">
        {/* content Footer */}
        <div className=" px-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2  gap-12 mb-12">
          {/* Company Info */}
          <div className="">
            <div className="flex items-center justify-center md:justify-normal mb-6">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt=""
                  className="object-cover scale-[2]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">MX-Store</h2>
                <p className="text-gray-500 text-sm">Digital Excellence</p>
              </div>
            </div>
            <p className="text-gray-600 text-center md:text-left mx-auto md:mx-[0_0] leading-relaxed max-w-md mb-6">
              We craft interior experiences that inspire. Our team transforms
              spaces with elegant designs, premium finishes, and creative
              solutions tailored for modern living.
            </p>
            <div className="flex justify-center md:justify-normal space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-black text-3xl  transition duration-300 transform hover:scale-115"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  href="/doors"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Doors Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/moldings"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Wooden Moldings Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/farnichars"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  Farnichar Design Collection
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* copy rights */}
      <div className=" border-t border-gray-200 pt-8 bg-black pb-8 backdrop-filter: blur(10px); backdrop-blur-md">
        <p className="text-amber-100 text-lg mb-4 md:mb-0 text-center">
          © 2025 MX-Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;