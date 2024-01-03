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
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
 <Routes> 
      <Route path="/" element={ <Homepage /> } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/purchase" element={<PurchaseComponent />} />
      <Route path="/sellerDash" element={<SellerDashboard/>}/>
        {/* Add more routes as needed */}
  </Routes>
    <Footer />
</Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
