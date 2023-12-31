import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './style/login.css';
import vectorImage from '../images/vector.jpg';

const Login = () => {
  return (
    <section className="vh-100 " style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h2 mb-5 mx-1 mx-md-4 mt-4">Login to your Daraz Account</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4 mt-5">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0 input-container">
                          <input type="text" id="email" required />
                          <label className="form-label" htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 mt-5">
                        <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0 input-container">
                          <input type="password" id="password" required />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mt-2">
                        <a href="#">Forget Password</a>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className='login'>LOGIN</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={vectorImage}
                      className="img-fluid" alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
