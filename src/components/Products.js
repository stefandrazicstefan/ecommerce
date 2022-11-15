import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import LoadingSpinner from "./LoadingSpinner";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

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
        {filter.map((item, index) => {
          return (
            <div
              className="card"
              key={index}
            >
              <img
                src={item.image}
                alt=""
              />
              <div className="card_body">
                <h5 className="card_title">{item.title}</h5>
                <p className="card_price">€{item.price}</p>
                <button className="card_buy">Buy Now</button>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container">
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
