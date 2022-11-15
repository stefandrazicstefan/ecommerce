import React from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="start">
        <div className="text">
          <div className="center">
            <h1>Best shop ever!</h1>
            <p>Winter fashion arrival</p>
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
  );
}

export default Home;
