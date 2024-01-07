import React, { useState, useEffect } from "react";
import axios from "axios";

const SellerDashboard = () => {
  const [sellerInfo] = useState({
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget...",
    email: "john@example.com",
    phone: "+1234567890",
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture URL
    // Add other seller information
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    productQuantity: "",
    categoryID: "",
    picture: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/category/getAll")
      .then((response) => {
        setCategories(response.data); // Set the fetched categories in state
        console.log(categories)
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      // Add other product details
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    setNewProduct({ ...newProduct, picture: file });
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('price', newProduct.price);
    formData.append('productQuantity', newProduct.productQuantity);
    formData.append('categoryID', newProduct.categoryID);
    formData.append('picture', newProduct.picture);
  
    try {
      const response = await axios.post('http://localhost:8080/product/addProducts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Product added:', response.data);
 
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle the error case
    }
  };

  const handleSeeOrders = () => {
    // Handle logic to navigate to the orders page or display orders
    console.log("See Orders");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Seller Info Card */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <header className="card-header">
              <h5 className="card-title">Seller Information</h5>
            </header>
            <div className="card-body">
              <img
                src={sellerInfo.profilePic}
                alt="Profile"
                className="img-fluid rounded-circle mb-3"
              />
              <h4>{sellerInfo.name}</h4>
              <p>{sellerInfo.bio}</p>
              <p>
                <strong>Email:</strong> {sellerInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {sellerInfo.phone}
              </p>
              {/* Add other seller information */}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Seller Info Card */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <header className="card-header">
              <h5 className="card-title">Add Product</h5>
            </header>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddProduct();
                }}
              >
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productDescription" className="form-label">
                      Description
                    </label>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      id="productDescription"
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productPrice" className="form-label">
                      Price
                    </label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productQuantity" className="form-label">
                      Quantity
                    </label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="productQuantity"
                      name="productQuantity"
                      value={newProduct.productQuantity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productCategory" className="form-label">
                      Category
                    </label>
                  </div>
                  <div className="col-md-9">
                    <select
                      className="form-select"
                      id="productCategory"
                      name="categoryID"
                      value={newProduct.categoryID}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-3">
                    <label htmlFor="productPicture" className="form-label">
                      Photo (JPEG)
                    </label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="file"
                      className="form-control"
                      id="productPicture"
                      name="photo"
                      accept=".jpg, .jpeg"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Product list section */}
      <section>
        <h2>Your Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  {/* ... (Other product information) ... */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* See orders button (positioned in top right corner) */}
      <button
        className="btn btn-info position-fixed top-0 end-0 m-3"
        onClick={handleSeeOrders}
      >
        See Orders
      </button>
    </div>
  );
};

export default SellerDashboard;
