import { Link } from "react-scroll";

import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[var(--primary-color)] text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">PrimeCare Hospital</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Quick Links
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="docs"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              Lab Test
            </Link>

            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-200 transition-all cursor-pointer"
            >
              Pharmacy
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Katuru Rd, beside Reliance SMART , Vuyyuru, Andhra Pradesh -
              521165
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@primecare.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 723-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-2 text-md text-white">
          &copy; PrimeCare Hospital | All rights reserved
          <br />
          Designed and developed by{" "}
          <a
            href="https://afreedshaik30.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-medium hover:underline"
          >
            Afreedshaik30
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
