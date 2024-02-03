import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/maxonex-high-resolution-logo-transparent.png";

const Header = () => {
  return (
    <header className="py-6 mb-2 border-b">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-11 w-15" />
        </Link>
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-700 transition " to="">
            Log in
          </Link>
          <Link
            className="bg-violet-700 text-white px-4 hover:text-violet-800 py-3  rounded-lg transition"
            to=""
          >
            {" "}
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
