import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-custom-purple py-5 flex text-white items-center justify-between lg:px-32 md:px-16 sm:px-8 px-4">
      {/* LOGO */}
      <a href="/">
        <img src="./logo.png" alt="" />
      </a>

      {/* DESKTOP NAVIGATION LINKS */}
      <div className="hidden sm:flex place-content-between gap-32 md:gap-16 sm:gap-8 text-sm">
        <a href="#" className="hover:cursor-pointer">
          About
        </a>
        <a href="#" className="hover:cursor-pointer">
          Service
        </a>
        <a href="#" className="hover:cursor-pointer">
          Pricing
        </a>
        <a href="#" className="hover:cursor-pointer">
          Blog
        </a>
      </div>
      <button className="hidden sm:block border rounded px-8 py-4 font-bold">
        CONTACT
      </button>
      <div className="sm:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <CloseIcon className="cursor-pointer" />
          ) : (
            <MenuIcon className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* MOBILE NAV LINKS */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4">
          <a href="#" className="hover:cursor-pointer">
            About
          </a>
          <a href="#" className="hover:cursor-pointer">
            Service
          </a>
          <a href="#" className="hover:cursor-pointer">
            Pricing
          </a>
          <a href="#" className="hover:cursor-pointer">
            Blog
          </a>
          <button className=" sm:block border rounded px-4 py-2 font-bold">
            CONTACT
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
