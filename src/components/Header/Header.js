import React from "react";
import "./Header.css";

import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">Where in the world?</div>
      <div className="header__right">
        <IoMoonOutline />
        <div className="header__right__text">Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
