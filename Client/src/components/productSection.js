import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productImg from "../images/splash.jpg";
import loadingGif from "../images/load.gif";
import "./style/productSection.css";
const ProductSection = () => {
  const products = [
    { id: 1, name: "Product 1", price: 9.99 },
    { id: 2, name: "Product 2", price: 15.99 },
    { id: 3, name: "Product 3", price: 24.99 },
    { id: 4, name: "Product 4", price: 19.99 },
    { id: 5, name: "Product 5", price: 32.99 },
    { id: 6, name: "Product 6", price: 32.99 },
    { id: 7, name: "Product 7", price: 32.99 },
    { id: 8, name: "Product 8", price: 32.99 },
    { id: 9, name: "Product 9", price: 32.99 },
    { id: 10, name: "Product 10", price: 32.99 },
    { id: 11, name: "Product 11", price: 32.99 },
    { id: 12, name: "Product 12", price: 32.99 },
    { id: 13, name: "Product 13", price: 32.99 },
    { id: 14, name: "Product 14", price: 32.99 },
    { id: 15, name: "Product 15", price: 32.99 },
    { id: 16, name: "Product 16", price: 32.99 },
    { id: 17, name: "Product 17", price: 32.99 },
    { id: 18, name: "Product 18", price: 32.99 },
  ];
  const [productsToShow, setProductsToShow] = useState(products.slice(0, 12));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setProductsToShow([
        ...productsToShow,
        ...products.slice(productsToShow.length, productsToShow.length + 6),
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Just For You</h2>
      <div className="row">
        {productsToShow.map((product) => (
          <div key={product.id} className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <div className="card prdt" >
              <img
                src={productImg}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="text-center mt-5">
          <img src={loadingGif} alt="Loading..." className="small-gif"/>
        </div>
      )}
      {productsToShow.length < products.length && (
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
