import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

import Nav from "../Nav/Nav";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  // const [countriesShown, setCountriesShown] = useState([]);
  const api = axios.create({
    baseURL: "https://restcountries.com/v2/all",
  });

  useEffect(() => {
    console.log("entering use effect");
    async function fetchData() {
      const data = await api.get("./");
      setCountries(data.data);
      return countries;
    }
    fetchData();
  }, []);

  // function getTenRandomCountries() {
  //   if (countriesShown.length >= 10 || !countries) {
  //     console.log("countries is empty or too full");
  //     return;
  //   }
  //   for (let i = 0; i < 10; i++) {
  //     const randomNum = Math.ceil(Math.random() * countries.length);
  //     setCountriesShown((prevCountriesShown) => [
  //       ...prevCountriesShown,
  //       countries[randomNum],
  //     ]);
  //   }
  // }
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
