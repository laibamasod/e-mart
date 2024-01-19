import React from 'react';
import { useCart } from '../CartContext';
import './style/Cart.css'; // Import your cart-specific styles
import cartImage from '../images/cart.jpg';
const Cart = () => {
  const { cartItems} = useCart();

 

  return (
    <div >
       <div className="container mt-5">
       <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className='card'>
      <h2 className="text-center h2 mb-3 mx-1 mx-md-4 mt-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <div>
        <p className="text-center mb-2 mx-1 mx-md-4 mt-4">Looks like your cart is empty. That's okay! Head to the <a href="/">homepage</a> to add items.</p>
        <div className="h-200 w-200 d-flex flex-column align-items-center justify-content-center ">
  <img
    src={cartImage}
    className="img-fluid"
    alt="Sample"
    style={{ maxHeight: '40%', maxWidth: '40%' }}
  />
</div>

      </div>
      )}
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
