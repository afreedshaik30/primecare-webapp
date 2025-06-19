import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      {/* A. NavBar */}
      <div className="flex justify-between p-3 md:px-22 px-5 bg-[var(--primary-color)] shadow-md">
        {/* 1. Logo */}
        <div className="flex items-center cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="text-3xl font-bold">PrimeCare Hospital.</h1>
          </Link>
        </div>

        {/* 2. Desktop Nav Links */}
        <nav className="hidden lg:flex items-center text-xl font-xl gap-6">
          {["home", "about", "services", "docs", "blog"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#ffc000] transition-all cursor-pointer capitalize"
              onClick={closeMenu}
            >
              {item === "docs"
                ? "Doctors"
                : item === "blog"
                ? "Blogs"
                : item.charAt(0).toUpperCase() + item.slice(1)}{" "}
              {/* "H" + "ome"  → "Home" */}
            </Link>
          ))}
        </nav>

        {/* 3. Appointment Button */}
        <div className="hidden lg:flex">
          <button
            className="bg-[#dd8036] px-7 py-4 rounded-full text-md hover:bg-amber-600 transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Book Appointment
          </button>
        </div>

        {showForm && <Contact closeForm={closeForm} />}

        {/* 4. Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose
              size={32}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={32}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* B. Mobile Menu Dropdown */}
      {menu && (
        <div className="font-bold lg:hidden bg-[var(--primary-color)] flex flex-col items-center text-2xl gap-6 py-6 shadow-md">
          {["home", "about", "services", "docs", "blog"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="hover:text-[#ffc000] transition-all cursor-pointer capitalize"
            >
              {item === "docs"
                ? "Doctors"
                : item === "blog"
                ? "Blogs"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <button
            className="bg-[#dd8036] px-6 py-3 rounded-full text-md hover:bg-zinc-500 transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
