import React from "react";
import hackerrank_logo from "../assets/hackerrank_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-header">
        <ul>
          <li>Contact US</li>
          <li>|</li>
          <li>Log in</li>
        </ul>
      </div>
      <div className="sec-head">
        <div className="Logo">
          <h2>HACKERRankk</h2>
        </div>
        <div className="links">
          <ul>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="links-2">
          <ul>
            <li>Candidates</li>
            <li>|</li>
            <li>Request Demo</li>
          </ul>
        </div>
        <button>Sign Up</button>
      </div>
    </>
  );
};

export default Navbar;
