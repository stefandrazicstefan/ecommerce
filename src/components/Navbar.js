import React, { useState, useRef, createRef } from "react";
import "./Navbar.css";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ dropdown1, setDropdown1 }) {
  const state = useSelector((state) => state.handleCart);
  const [dropdown, setDropdown] = useState("");
  return (
    <>
      <header>
        <div className="logo">
          <NavLink
            className="logo"
            to="/"
          >
            Sunshine Joy
          </NavLink>
        </div>
        <div className="tab">
          <div className="myName">
            <NavLink
              className="myName"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="myName">
            <NavLink
              className="myName"
              to="/products"
            >
              Products
            </NavLink>
          </div>
          <div className="myName">
            <NavLink
              className="myName"
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div className="myName">
            <NavLink
              className="myName"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="buttons tab">
          <NavLink
            to="/cart"
            className="login"
          >
            <ShoppingCartIcon
              style={{
                marginRight: "1px",
                marginBottom: "-6px",
                fontSize: "28px",
              }}
            />
            {state.length > 0 && (
              <div className="cart_number">
                <p>{state.length}</p>
              </div>
            )}
            {/*{state.length})*/}
          </NavLink>
        </div>
        <div
          className="nav"
          onClick={(e) => {
            dropdown === "" ? setDropdown("flex") : setDropdown("");
          }}
        >
          |||
        </div>
      </header>
      <div
        className="tab1"
        style={{ display: dropdown }}
      >
        <div className="myName t1">Home</div>
        <div className="myName t1">About</div>
        <div className="myName t1">Projects</div>
        <div className="myName t1">Shop</div>
        <div className="myName t1">Contact</div>
      </div>
    </>
  );
}

export default Navbar;
