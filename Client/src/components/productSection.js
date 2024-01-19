import React, { useState, useEffect } from "react";
import axios from "axios";
import productImg from "../images/splash.jpg"; // Assuming this is your default product image
import loadingGif from "../images/load.gif";
import { Link } from 'react-router-dom';
import "./style/productSection.css";

const ProductSection = () => {

  const [productsToShow, setProductsToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxProducts, setMaxProducts] = useState(0);

  const loadMoreProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/getAllProducts?offset=${productsToShow.length}`
      ); // Assuming backend API with offset for pagination
      setProductsToShow([...productsToShow, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching more products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8080/product/getAllProducts"
        ); // Assuming your backend API endpoint is "/getAllProducts"
        setProductsToShow(response.data);
        setMaxProducts(response.data.length);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Just For You</h2>
      <div className="row">
        {productsToShow.map((product) => (
          <div key={product._id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <Link
              to={`/product/getOneProducts/${product._id}`}
              className="text-decoration-none"
            >
              <div
                className="card prdt"
                style={{
                  border: "1px solid #ccc",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={
                    product.pictureURL
                      ? `data:image/png;base64,${product.pictureURL}`
                      : productImg
                  }
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="text-center mt-5">
          <img src={loadingGif} alt="Loading..." className="small-gif" />
        </div>
      )}
      {productsToShow.length < maxProducts && (
        <button
          className="btn btn-sm btn-light mx-auto d-block mt-4 custom-load-more-button"
          onClick={loadMoreProducts}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductSection;
