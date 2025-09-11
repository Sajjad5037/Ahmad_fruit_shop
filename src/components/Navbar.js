import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className="h-16 w-16" />
              <span className="text-2xl font-bold text-green-800">
                Royal Dry Fruits
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-700">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-700">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700">
              Contact
            </Link>
          </div>

          {/* Shop Now button */}
          <div className="hidden md:flex">
            <Link
              to="/ShopOnline"
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
