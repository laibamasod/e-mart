import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import AdvertisementComponent from './components/advertisementComponent';
import ProductDetailComponent from './components/productDetalComponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
<AdvertisementComponent/>
<ProductDetailComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
