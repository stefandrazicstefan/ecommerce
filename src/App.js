import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, createContext } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import { Alert, Snackbar } from "@mui/material";

export const alertContext = createContext();

function App() {
  const [dropdown, setDropdown] = useState("");
  const [stateAlert, setStateAlert] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = stateAlert;

  const handleClick = () => {
    setStateAlert({ open: true, vertical, horizontal });
  };

  const handleClose = () => {
    setStateAlert({ ...stateAlert, open: false });
  };

  return (
    <alertContext.Provider value={{ handleClick }}>
      <div
        className="app"
        onMouseDown={(e) => {
          setDropdown("");
        }}
      >
        <Snackbar
          className="snackbar"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert
            variant="outlined"
            severity="success"
            style={{
              fontSize: "1rem",
              backgroundColor: "whitesmoke",
              color: "black",
            }}
          >
            Item successfully added to cart!
          </Alert>
        </Snackbar>
        <Navbar></Navbar>

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
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </alertContext.Provider>
  );
}

export default App;
