import React, { useState, useEffect } from "react";

//styles
import CustomScrollIndicatorStyles from "./CustomScrollIndicatorStyles.module.css";

function CustomScrollIndicator({ url }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(" ");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setProductData(data.products);
        setLoading(false);
      }
    } catch (error) {
      <p>{error.message}</p>;
      setLoading(false);
      setErrorState(error.message);
    }
  }
  if (loading) {
    <p>Loading products, please wait</p>;
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = (howMuchScrolled / height) * 100;
    setScrollPercentage(scrollValue);
    console.log(scrollValue);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      //on unmount
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (errorState) {
    <p>{errorState}</p>;
  }
  return (
    <>
      <div className={CustomScrollIndicatorStyles.topContainer}>
        <h1>Custom Scroll Indicator</h1>
        <div
          className={
            CustomScrollIndicatorStyles.scrollProgressTrackingContainer
          }
        >
          <div
            className={CustomScrollIndicatorStyles.currentProgressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={CustomScrollIndicatorStyles.dataContainer}>
        {productData && productData.length > 0
          ? productData.map((dataItem) => (
              <p
                className={CustomScrollIndicatorStyles.product}
                key={dataItem.id}
              >
                {dataItem.title}
              </p>
            ))
          : null}
      </div>
    </>
  );
}

export default CustomScrollIndicator;
