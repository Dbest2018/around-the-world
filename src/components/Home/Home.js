import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

import Nav from "../Nav/Nav";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const api = axios.create({
    baseURL: "https://restcountries.com/v2/all",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await api.get("./");
      setCountries(data.data);
      return countries;
    }
    fetchData();
  }, [api, countries]);

  return (
    <div className="home">
      <Nav />
      <div className="home__countries">
        {countries.map((country) => {
          return (
            <Country
              flag={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
