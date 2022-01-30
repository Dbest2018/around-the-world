import React from "react";
import "./Home.css";

import Nav from "../Nav/Nav";
import Country from "../Country/Country";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Country />
    </div>
  );
};

export default Home;
