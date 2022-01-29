import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Country />
    </div>
  );
}

export default App;
