import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  const [dropdown, setDropdown] = useState("");

  const ref = useRef();

  const size = useWindowSize();
  useEffect(() => {
    if (size.width > "870") setDropdown("");
  }, [size.width]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <section ref={ref}>
      <header>
        <div className="logo">
          <NavLink
            className="logo"
            to="/"
          >
            Shopping Site
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
        <div
          className="nav"
          onClick={(e) => {
            dropdown === "" ? setDropdown("flex") : setDropdown("");
          }}
        >
          |||
        </div>
        <div className="buttons cart_tab">
          <NavLink
            to="/cart"
            className="login"
            onClick={() => setDropdown("")}
          >
            <ShoppingCartIcon
              style={{
                marginRight: "1px",
                marginBottom: "-6px",
                fontSize: "30px",
              }}
            />
            {state.length > 0 && (
              <div className="cart_number">
                <p>{state.length}</p>
              </div>
            )}
          </NavLink>
        </div>
      </header>
      <div
        className="tab1"
        style={{ display: dropdown }}
      >
        <div className="myName t1">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            className=""
            to="/"
            onClick={() => setDropdown("")}
          >
            Home
          </NavLink>
        </div>
        <div className="myName t1">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            className=""
            to="/products"
            onClick={() => setDropdown("")}
          >
            Products
          </NavLink>
        </div>
        <div className="myName t1">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            className=""
            to="/about"
            onClick={() => setDropdown("")}
          >
            About
          </NavLink>
        </div>
        <div className="myName t1">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            className=""
            to="/contact"
            onClick={() => setDropdown("")}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
