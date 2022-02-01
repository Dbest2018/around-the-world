import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ flag, name, population, region, capital, id }) => {
  return (
    <Link to={`/detail/${id}`} className="link">
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
    </Link>
  );
};

export default Country;
