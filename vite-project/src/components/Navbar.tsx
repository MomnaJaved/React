import React from "react"; // Add this line
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-transparent p-6 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 text-white text-base">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 text-white-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
