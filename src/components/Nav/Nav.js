import React from "react";
import "./Nav.css";

import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__search">
        <IoIosSearch />
        <input
          name="search"
          type="text"
          placeholder="Search for a country"
          className="nav__search-input"
        />
      </div>

      <select className="nav__filter nav__filter-select">
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
