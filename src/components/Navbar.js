import React from "react";
import { Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi";
import Random from "./Random";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="d-flex gap-2">
        <h1 className="navbar-header">
          Cocktail <span className="nav-span">Hour</span>
        </h1>
        <BiDrink size={40} className="mt-1" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
