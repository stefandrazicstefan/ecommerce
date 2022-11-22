import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { NavLink } from "react-router-dom";
import { alertContext } from "../App";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    for (let i = 0; i < qty; i++) {
      dispatch(addCart(product));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const { handleClick } = useContext(alertContext);
  const ShowProduct = () => {
    return (
      <div className="item1">
        <div className="left_div">
          <img
            src={product.image}
            alt="Image not loaded"
            className=""
          />
        </div>
        <div className="right_div">
          <h4>{product.category}</h4>{" "}
          <h1 className="title">{product.title}</h1>
          <div className="rating">
            {" "}
            <h3>Rating {product.rating && product.rating.rate} </h3>
            <StarIcon className="star_icon" />
          </div>
          <h1 className="price">€{product.price}</h1>
          <p className="description">{product.description}</p>
          <div className="buttons">
            <div className="qty_div">
              <label
                htmlFor=""
                className="qty"
              >
                Quantity:{" "}
              </label>
              <select
                name="qty"
                className="qty_dropdown"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <NavLink to="/products">
              <button
                className="add_to_cart cart"
                onClick={() => {
                  addProduct(product);
                  handleClick();
                }}
              >
                Add to Cart
              </button>
            </NavLink>
            <NavLink to="/cart">
              <button className="go_to_cart cart">Go to Cart</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container_product">
      {isLoading ? <LoadingSpinner /> : <ShowProduct />}
    </div>
  );
}

export default Product;
