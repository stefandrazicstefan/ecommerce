import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import LoadingSpinner from "./LoadingSpinner";
import { NavLink } from "react-router-dom";
import { Alert } from "@mui/material";
import { useSpring, animated } from "react-spring";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setFilter(res.data); // ?
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const filterProduct = (str) => {
    const updatedList = data.filter((x) => x.category === str);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons_filter">
          <button
            className=""
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className=""
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className=""
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className=""
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className=""
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((item) => {
          return (
            <animated.div
              className="card"
              key={item.id}
              style={props}
            >
              <img
                src={item.image}
                alt=""
              />
              <div className="card_body">
                <h5 className="card_title">{item.title}</h5>
                <p className="card_price">€{item.price}</p>
                <NavLink
                  to={`/products/${item.id}`}
                  className="card_buy_navlink"
                >
                  <button className="card_buy">Buy Now</button>
                </NavLink>
              </div>
              <div className="small_size">
                <h5 className="card_title">{item.title}</h5>
                <div className="small_size_content">
                  <img
                    src={item.image}
                    alt=""
                  />
                  <div className="small_size_card_body">
                    <p className="card_price">€{item.price}</p>
                    <NavLink
                      to={`/products/${item.id}`}
                      className="card_buy_navlink"
                    >
                      <button className="card_buy">Buy Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </animated.div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container_products">
      {/* {alert && (
        <div className="alert">
          <Alert
            variant="outlined"
            severity="success"
            style={{
              fontSize: "1rem",
              backgroundColor: "whitesmoke",
              color: "black",
              display: ,
            }}
          >
            Item added to cart !
          </Alert>
        </div>
      )} */}
      <div className="row heading">
        <div className="item">Latest products</div>
        <hr />
      </div>
      <div className="row items">
        {isLoading ? <LoadingSpinner /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
