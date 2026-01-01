import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ flag, name, population, region, capital, id, darkMode }) => {
  const styles = {
    backgroundColor: darkMode
      ? "var(--dark-mode-elements)"
      : "var(--light-mode-elements)",
    color: darkMode ? "var(--dark-mode-text)" : "var(--light-mode-text)",
  };

  return (
    <Link to={`/detail/${id}`} className="link" style={styles}>
      <div className="country">
        <img src={flag} alt="flag" className="country__img" />

        <div className="country__text">
          <div className="country__text-large">{name.common}</div>
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
