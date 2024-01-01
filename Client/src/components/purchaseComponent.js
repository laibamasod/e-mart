import React from "react";
import productImage from "../images/productImage.jpg"; // Replace with the actual product image path

const PurchaseComponent = () => {
  // Sample data for address, product, and order summary
  const userAddress = {
    street: "123 Main St",
    city: "Example City",
    state: "Example State",
    country: "Example Country",
    zipCode: "12345",
  };

  const productDetails = {
    name: "Example Product",
    image: "path/to/product-image.jpg",
    quantity: 1, // Sample quantity
    // Add more product details as needed
  };

  const orderSummary = {
    totalItems: 1, // Sample total items
    totalPrice: "$100", // Sample total price
    // Add more order summary details as needed
  };

  return (
    <div className="container">
      <div className="row">
        {/* First Card - User Address */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Address</h5>
              <p>Street: {userAddress.street}</p>
              <p>City: {userAddress.city}</p>
              <p>State: {userAddress.state}</p>
              <p>Country: {userAddress.country}</p>
              <p>Zip Code: {userAddress.zipCode}</p>
              <button className="btn btn-primary">
                Change Shipping Address
              </button>
            </div>
          </div>
        </div>

        {/* Third Card - Order Summary */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p>Total Items: {orderSummary.totalItems}</p>
              <p>Total Price: {orderSummary.totalPrice}</p>
              {/* Add more order summary details */}
              <button className="btn btn-success">Place Order</button>
            </div>
          </div>
        </div>
        
        {/* Second Card - Product Description */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Description</h5>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={productImage}
                  alt="Product"
                  className="me-3 img-fluid"
                  style={{ maxWidth: "100px" }}
                />
                <div>
                  <p>Name: {productDetails.name}</p>
                  <p>Quantity: {productDetails.quantity}</p>
                  {/* Add more product details */}
                </div>
              </div>
              {/* Add more product details */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseComponent;
