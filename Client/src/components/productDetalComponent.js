import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import loadingGif from "../images/load.gif";
import AdvertisementComponent from "./advertisementComponent";

const ProductDetailComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL params
  const [product, setProduct] = useState(null); // State to store product details
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1); // Quantity state with a default value of 1

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
    navigate(`/purchase/${id}/${quantity}`);
  };

  return (
    <>
    <div>
      
    </div>
    <section className="product-detail-section">
      <div className="container">
        {product ? (
          <div className="card">
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={
                    product.pictureURL
                      ? `data:image/png;base64,${product.pictureURL}`
                      : null
                  }
                  alt="Product"
                  className="card-img-top product-image"
                  style={{ maxWidth: "100%", height: "auto" }} // Adjust dimensions here
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="card-text">Description: {product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  {/* Rest of the product details */}
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
                    <button type="submit" className="btn btn-success">
                      Buy Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          isLoading && (
            <div className="text-center mt-5">
              <img src={loadingGif} alt="Loading.." className="small-gif" />
            </div>
          )
        )}
      </div>
    </section>
    </>
  );
};

export default ProductDetailComponent;
