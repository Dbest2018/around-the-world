import React from "react";
import "./Home.css";

import Nav from "../Nav/Nav";
import Country from "../Country/Country";

const Home = ({
  countries,
  darkMode,
  handleSearch,
  handleRegion,
  regionSelected,
}) => {
  const styles = {
    backgroundColor: darkMode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)",
  };

  if (countries.length <= 0) {
    return <div className="home__loading-text">Loading...</div>;
  }
  return (
    <div className="home" style={styles}>
      <Nav
        darkMode={darkMode}
        handleSearch={handleSearch}
        handleRegion={handleRegion}
        regionSelected={regionSelected}
      />
      {countries ? (
        <div className="home__countries">
          {countries.map((country, index) => {
            return (
              <Country
                key={index}
                id={index}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : (
        <h2> Loading... </h2>
      )}
    </div>
  );
};

export default Home;
