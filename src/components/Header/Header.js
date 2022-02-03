import React from "react";
import "./Header.css";

import { IoMoonOutline } from "react-icons/io5";

const Header = ({ darkMode, toggleDarkMode }) => {
  const styles = {
    backgroundColor: darkMode
      ? "var(--dark-mode-elements)"
      : "var(--light-mode-elements)",
    color: darkMode ? "var(--dark-mode-text)" : "var(--light-mode-text)",
  };
  return (
    <div className="header" style={styles}>
      <div className="header__left">Where in the world?</div>
      <div className="header__right">
        <IoMoonOutline />
        <div className="header__right__text" onClick={() => toggleDarkMode()}>
          Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Header;
