import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Detail />
    </div>
  );
}

export default App;
