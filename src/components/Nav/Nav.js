import React from "react";
import "./Nav.css";

import { IoIosSearch } from "react-icons/io";

const Nav = ({ darkMode, handleSearch, handleRegion, regionSelected }) => {
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

      <select
        value={regionSelected}
        className="nav__filter nav__filter-select"
        style={styles}
        onChange={handleRegion}
      >
        <option value={regionSelected} disabled hidden>
          {regionSelected}
        </option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Nav;
