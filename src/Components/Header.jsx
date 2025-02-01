import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../assets/Netflix_Logo_RGB.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <Link to="/">
        <img
          className=" w-44 "
          src={NetflixLogo} 
          alt="Netflix Logo"
        />
      </Link>
    </div>
  );
};

export default Header;
