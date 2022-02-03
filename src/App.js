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

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const filter = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setCountryFilter(filter);
  };

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
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        {/* <div className="app__main"> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={countryFilter}
                darkMode={darkMode}
                handleSearch={handleSearch}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail countries={countryFilter} darkMode={darkMode} />}
          />
        </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
