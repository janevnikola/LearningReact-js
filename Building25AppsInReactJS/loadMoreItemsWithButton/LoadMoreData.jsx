import LoadMoreDataStyles from "./LoadMoreDataStyles.module.css";
import React, { useState, useEffect } from "react";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [numOfClicks, setNumOfClicks] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          numOfClicks === 0 ? 0 : numOfClicks * 20
        }&total=100`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      <p>{error.message}</p>;
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [numOfClicks]);

  useEffect(() => {
    if (products && products.length == 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <p>Loading products, please wait</p>;
  }

  return (
    <>
      <div className={LoadMoreDataStyles.loadMoreDataContainer}>
        <div className={LoadMoreDataStyles.productContainer}>
          {products && products.length
            ? products.map((productItem) => (
                <div
                  className={LoadMoreDataStyles.product}
                  key={productItem.id}
                >
                  <p>{productItem.id}</p>
                  <img src={productItem.thumbnail} alt={productItem.title} />
                  <p>{productItem.title}</p>
                  <button>Add to cart</button>
                </div>
              ))
            : null}
        </div>
        <div className={LoadMoreDataStyles.buttonContainer}>
          <button
            disabled={disableButton}
            onClick={() => setNumOfClicks(numOfClicks + 1)}
          >
            Load more products
          </button>
          <br />
          {disableButton ? <p>No more products to load</p> : null}
        </div>
      </div>
    </>
  );
}

export default LoadMoreData;
