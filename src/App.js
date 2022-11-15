import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useRef, createRef } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  const [dropdown, setDropdown] = useState("");
  return (
    <div
      className="app"
      onMouseDown={(e) => {
        setDropdown("");
      }}
    >
      <Navbar
        dropdown1={dropdown}
        setDropdown1={setDropdown}
      ></Navbar>

      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/products"
          element={<Products />}
        />
      </Routes>
    </div>
  );
}

export default App;
