import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [regionSelected, setRegionSelected] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const filter = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setCountryFilter(filter);
  };

  const handleRegion = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setRegionSelected(value);
    if (value.toLowerCase() === "all") {
      setCountryFilter(countries);
      return;
    }
    const countriesInRegion = countries.filter(
      (country) => country.region.toLowerCase() === value.toLowerCase()
    );
    setCountryFilter(countriesInRegion);
  };

  const api = axios.create({
    baseURL: "https://restcountries.com/v2/all",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await api.get("./");
      setCountries(data.data);
      setCountryFilter(data.data);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countryFilter}
              darkMode={darkMode}
              handleSearch={handleSearch}
              handleRegion={handleRegion}
              regionSelected={regionSelected}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail countries={countryFilter} darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
