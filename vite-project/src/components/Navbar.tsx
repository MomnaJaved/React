function Navbar() {
  return (
    <nav className="bg-transparent p-5 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 text-base">
          <li>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
