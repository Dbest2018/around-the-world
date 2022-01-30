import React from "react";
import "./Country.css";

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country">
      <img src={flag} alt="flag" className="country__img" />

      <div className="country__text">
        <div className="country__text-large">{name}</div>
        <div className="country__text-small">
          Population: <span>{population}</span>
        </div>
        <div className="country__text-small">
          Region: <span>{region}</span>
        </div>
        <div className="country__text-small">
          Capital: <span>{capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
