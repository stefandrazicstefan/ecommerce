import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { Alert } from "@mui/material";
import { addCart, delCart } from "../redux/action";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

import { useSpring, animated } from "react-spring";
function Cart() {
  const state = useSelector((state) => state.handleCart);
  const [totalPrice, setTotalPrice] = useState();
  const [stateAlert, setStateAlert] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = stateAlert;

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
  });

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const delProduct = (product) => {
    dispatch(delCart(product));
  };
  useEffect(() => {
    let price = 0;
    state.map((item) => {
      price += item.price * item.qty;
    });
    setTotalPrice(price.toFixed(2));
  }, [state]);

  const handleClick = () => {
    setStateAlert({ open: true, vertical, horizontal });
  };

  const handleClose = () => {
    setStateAlert({ ...stateAlert, open: false });
  };

  const handleCheckout = () => {
    state.map((item) => {
      for (let i = 0; i < item.qty; i++) delProduct(item);
    });
    handleClick();
  };

  return (
    <div className="container">
      <Snackbar
        style={{ marginTop: "20px" }}
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
          Checkout successfully completed!
        </Alert>
      </Snackbar>
      {state.length < 1 ? (
        <div
          style={{
            margin: "50px auto",
            fontSize: "2rem",
          }}
        >
          No items in cart
        </div>
      ) : (
        state.map((item) => {
          return (
            <animated.div
              key={item.id}
              className="parent"
              style={props}
            >
              <div className="row">
                <div className="left_div">
                  <img
                    src={item.image}
                    alt="No image"
                  />
                </div>
                <div className="right_div">
                  <h1>{item.title}</h1>
                  <h2>
                    {item.price}€ * {item.qty} ={" "}
                    {item.price * item.qty}€
                  </h2>
                  <button
                    className="manageQty"
                    onClick={() => addProduct(item)}
                  >
                    <AddBoxOutlinedIcon className="manageQty_icon" />
                  </button>
                  <button
                    className="manageQty"
                    onClick={() => delProduct(item)}
                  >
                    <IndeterminateCheckBoxOutlinedIcon className="manageQty_icon" />
                  </button>
                </div>
              </div>
              <div className="separator"></div>
            </animated.div>
          );
        })
      )}
      {totalPrice !== parseFloat(0).toFixed(2) && (
        <div className="checkout">
          <p>Subtotal: {totalPrice}€</p>
          <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
