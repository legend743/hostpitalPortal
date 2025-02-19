import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaUserMd, FaUserInjured, FaHospital, FaClinicMedical,FaServicestack, FaPhone } from 'react-icons/fa';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header  className="bg-gray-500 text-gray-400  p-0 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" >
          <span className="text-black">AHUJA NURSING HOME</span></a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`absolute top-full left-0 w-full bg-grey-600 md:bg-transparent md:static md:w-auto md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <a href="/" className=" text-white hover:underline flex items-center space-x-2">
              <FaHome size={16} className="text-black" />
                <span className="text-gray-400">Home</span>
              </a>
            </li>
            <li>
              <a href="/about" className="text-yellow-100 hover:underline flex items-center space-x-2">
              <FaInfoCircle size={16} className="text-black"/>
              <span className="text-gray-400">About</span>
                
              </a>
            </li>
            <li>
              <a
                href="/pateint"
                className="text-yellow-100 hover:underline flex items-center space-x-2"
              >
                <FaUserInjured size={16} className="text-black"/>
                <span className="text-gray-400" >Patient Care</span>
               
              </a>
            </li>
            <li>
              <a
                href="/doctors"
                className="text-yellow-100 hover:underline flex items-center space-x-2"
              >
                <FaUserMd size={16} className="text-black"/>
                <span className="text-gray-400">Doctors</span>
                
              </a>
            </li>
            <li>
              <a
                href="/deparment"
                className="text-yellow-100 hover:underline flex items-center space-x-2"
              >
                <FaClinicMedical size={16} className="text-black"/>
                <span className="text-gray-400" >Department</span>
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
