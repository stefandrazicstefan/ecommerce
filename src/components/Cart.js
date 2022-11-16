import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const [totalPrice, setTotalPrice] = useState();
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
    if (price !== 0) setTotalPrice(price.toFixed(2));
  }, [state]);

  return (
    <div className="container">
      {state.map((item) => {
        return (
          <>
            <div
              className="row"
              key={item.id}
            >
              <div className="left_div">
                <img
                  src={item.image}
                  alt="No image"
                />
              </div>
              <div className="right_div">
                <h1>{item.title}</h1>
                <h2>
                  {item.price}€ * {item.qty} = {item.price * item.qty}
                  €
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
          </>
        );
      })}
      {totalPrice && (
        <div className="checkout">
          <p>Subtotal: {totalPrice}€</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
