import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="">
        <a href="">Shopping</a>
        <a href="">Oders</a>
        <a href="">Inventory</a>
        <a href="">About</a>
      </div>
    </nav>
  );
};

export default Header;
