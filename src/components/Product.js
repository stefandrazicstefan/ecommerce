import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
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
          <h4>{product.category}</h4>
          <h1 className="title">{product.title}</h1>
          <div className="rating">
            {" "}
            <h3>Rating {product.rating && product.rating.rate} </h3>
            <StarIcon className="star_icon" />
          </div>
          <h1 className="price">€{product.price}</h1>
          <p className="description">{product.description}</p>
          <div className="buttons">
            <button
              className="add_to_cart"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <button className="go_to_cart">Go to Cart</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      {isLoading ? <LoadingSpinner /> : <ShowProduct />}
    </div>
  );
}

export default Product;
