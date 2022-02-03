import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home countries={countries} darkMode={darkMode} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail countries={countries} darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
