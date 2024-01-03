import React from 'react';


const SellerDashboard = () => {
  const sellerInfo = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget...',
    email: 'john@example.com',
    phone: '+1234567890',
    profilePic: 'https://via.placeholder.com/150', // Replace with actual profile picture URL
    // Add other seller information
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      // Add other product details
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      // Add other product details
    },
    // Add more product objects as needed
  ];

  const addProduct = (newProductData) => {
    // Function placeholder for adding products
    console.log('Adding product:', newProductData);
  };

  return (
    <div className="container mt-5">
      {/* Seller info section */}
      <header className="pb-3 mb-4 border-bottom">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={sellerInfo.profilePic} alt="Profile" className="img-fluid rounded-circle mb-3" />
          </div>
          <div className="col-md-9">
            <h1>{sellerInfo.name}'s Dashboard</h1>
            <p>{sellerInfo.bio}</p>
            <p><strong>Email:</strong> {sellerInfo.email}</p>
            <p><strong>Phone:</strong> {sellerInfo.phone}</p>
            {/* Add other seller information */}
          </div>
        </div>
      </header>

      {/* Add product form section */}
      <section className="mb-4">
        <h2>Add Product</h2>
        {/* Form to add a new product */}
        {/* Placeholder content */}
        <form onSubmit={(e) => { e.preventDefault(); addProduct({ name: 'New Product' }); }}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="productName" />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">Product Description</label>
            <textarea className="form-control" id="productDescription" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </section>

      {/* Product list section */}
      <section>
        <h2>Your Products</h2>
        {/* Display a list of products */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  {/* Add buttons or additional information */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;
