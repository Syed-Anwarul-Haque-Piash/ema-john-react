import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=() => {
      logOut()
      .then(() => {})
      .catch(error=>{
        console.log(error)
      })
  }
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/manage">Manege Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {
          user && <span className="text-white">Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>
        }
      </div>
    </div>
  );
};

export default Header;
