import React from "react";
import "./Nav.css";

import { IoIosSearch } from "react-icons/io";

const Nav = ({ darkMode, handleSearch }) => {
  const styles = {
    backgroundColor: darkMode
      ? "var(--dark-mode-elements)"
      : "var(--light-mode-elements)",
    color: darkMode ? "var(--dark-mode-text)" : "var(--light-mode-text)",
  };
  return (
    <div className="nav">
      <div className="nav__search" style={styles}>
        <IoIosSearch />
        <input
          name="search"
          type="text"
          placeholder="Search for a country"
          className="nav__search-input"
          style={styles}
          onChange={handleSearch}
        />
      </div>

      <select className="nav__filter nav__filter-select" style={styles}>
        <option selected disabled hidden>
          Filter by Region
        </option>
        <option value="afica">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Nav;
