import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useRef, createRef } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

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
        <Route
          exact
          path="/products/:id"
          element={<Product />}
        />
        <Route
          exact
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </div>
  );
}

export default App;
