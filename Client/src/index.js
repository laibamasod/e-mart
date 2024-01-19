import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
//import App from './App';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/loginComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import PurchaseComponent from './components/purchaseComponent';
import SellerDashboard from './components/sellerDashboardComponent';
import VerifyEmail from './components/VerifyEmail';
import ProductDetailComponent from './components/productDetalComponent';
import SearchResultComponent from './components/SearchResultComponent';
import reportWebVitals from './reportWebVitals';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <Router>
    <Header />
   
 <Routes> 

      <Route path="/" element={<Homepage /> } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/purchase" element={<PurchaseComponent />} />
      <Route path="/sellerDash" element={<SellerDashboard/>}/>
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/product/getOneProducts/:id" element={<ProductDetailComponent />} />
      <Route path="/purchase/:id/:quantity" element={<PurchaseComponent />} />
      <Route path="/search/:keyword" element={<SearchResultComponent />} />
       < Route path="/cart" element={ <Cart /> } />
        {/* Add more routes as needed */}
  </Routes>
    <Footer />
 
</Router>
</CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
