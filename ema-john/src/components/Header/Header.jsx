import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/review">Review</a>
        <a href="/manage">Manege Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
