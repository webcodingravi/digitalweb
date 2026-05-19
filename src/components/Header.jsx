import React from 'react'
import { useState } from 'react';
import {
  ArrowRight,

   PhoneCall,
    Menu,
  X,

} from "lucide-react";

const Header = () => {
      const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
       <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/gtech logo.png"
                alt="G Tech"
                className="h-14 md:h-16 object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
              <a
                href="#home"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </a>

              <a
                href="#services"
                className="hover:text-blue-600 transition duration-300"
              >
                Services
              </a>

              <a
                href="#about"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg">
                <PhoneCall size={18} />
                Talk To Expert
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-2xl border-t border-gray-100">
          <div className="px-6 py-6 flex flex-col gap-5">
            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Contact
            </a>

            <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium shadow-lg">
              Talk To Expert
            </button>
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}

export default Header