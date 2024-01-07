import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DialogBox from "./dialogBox";
import loadingGif from "../images/load.gif";
import axios from "axios";

const PurchaseComponent = () => {

  const { id, quantity } = useParams();

  const [product, setProduct] = useState(null); // State to store product details
  const [isLoading, setIsLoading] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/product/getOneProducts/${id}`
        ); // Fetch product details by ID
        setProduct(response.data); // Set the fetched product details
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Fetch product details whenever the ID changes
  // Sample data for address, product, and order summary
  const userAddress = {
    street: "123 Main St",
    city: "Example City",
    state: "Example State",
    country: "Example Country",
    zipCode: "12345",
  };

  return (
    <div className="container">
      <div className="row">
        {product ? (
          <>
            {/* User Address Card */}
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

            {/* Order Summary Card */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order Summary</h5>
                  <p>Total Items: {quantity}</p>
                  <p>Total Price: {quantity * product.price}</p>
                  {/* Add more order summary details */}
                  <button className="btn btn-success" onClick={handleShowDialog}>Place Order</button>

                  {showDialog && (
                    <DialogBox
                      message="Order Place Successfully!"
                      onClose={handleCloseDialog}
                    />
                  )}
                  
                </div>
              </div>
            </div>

            {/* Product Description Card */}
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Product Description</h5>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={
                        product.pictureURL
                          ? `data:image/png;base64,${product.pictureURL}`
                          : null
                      }
                      alt="Product"
                      className="me-3 img-fluid"
                      style={{ maxWidth: "100px" }}
                    />
                    <div>
                      <p>Name: {product.name}</p>
                      <p>Quantity: {quantity}</p>
                      {/* Add more product details */}
                    </div>
                  </div>
                  {/* Add more product details */}
                </div>
              </div>
            </div>
          </>
        ) : (
          // Show Loading if data is not available
          isLoading && (
            <div className="text-center mt-5">
              <img src={loadingGif} alt="Loading.." className="small-gif" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PurchaseComponent;
