import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  const [countries, setCountries] = useState([]);
  // const [countriesShown, setCountriesShown] = useState([]);

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

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {/* <Home countries={countries} /> */}
        {/* <Detail countries={countries} /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="/detail/:id" element={<Detail countries={countries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
