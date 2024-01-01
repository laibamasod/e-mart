import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import productImage from "../images/productImage.jpg"; // Replace with the actual product image path

const ProductDetailComponent = () => {
  const navigate = useNavigate(); // Initialize useHistory
  const [quantity, setQuantity] = useState(1); // Quantity state with a default value of 1

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decreasing quantity without going below 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to the server or database)
    console.log(`Submitted quantity: ${quantity}`);
    // You can add your logic to save the data to the database here
  };

  const handleClick = () => {
    navigate('/purchase');
  };

  return (
    <section className="product-detail-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={productImage}
              alt="Product"
              className="product-image"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} // Adjust dimensions here
            />
          </div>
          <div className="col-md-6">
            <h2>Product Name</h2>
            <p>Brand: XYZ</p>
            <p>Rating: 4.5</p>
            <p>Price: $99.99</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3" style={{ maxWidth: "200px" }}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button type="submit" className="btn btn-primary me-3">
                Add to Cart
              </button>
              <button type="submit" className="btn btn-success" onClick={handleClick}>
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailComponent;
