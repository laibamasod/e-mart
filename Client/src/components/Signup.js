import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/Signup.css";
import vectorImage from "../images/vector.jpg";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(null);
  const [repeatpass, setRepeatPass] = useState("");
  const [repeatpassError, setRepeatPassError] = useState(null);

  const handleRPassChange = (event) => {
    setRepeatPass(event.target.value.trim());
  };

  const validateRPass = () => {

    if (repeatpass === "") {
      setRepeatPassError(null);
    } else if (pass===repeatpass) {
      setRepeatPassError(null);
    } else {
      setRepeatPassError("Passwords dont match");
    }
  };
  const handlePassChange = (event) => {
    setPass(event.target.value.trim());
  };

  const validatePass = () => {
    const passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

    if (pass === "") {
      setPassError(null);
    } else if (passRegex.test(pass)) {
      setPassError(null);
    } else {
      setPassError("Letters and Numbers Only (Min 8)");
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setEmailError(null); // Clear email error if email is empty
    } else if (emailRegex.test(email)) {
      setEmailError(null); // Clear email error if email is valid
    } else {
      setEmailError("Invalid email address");
    }
  };

  useEffect(() => {
    validateName();
    validateEmail();
    validatePass();
    validateRPass();
  }, [name, email, pass, repeatpass]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    validateName();
    validateEmail();
    validatePass();
    validateRPass();

    if (!nameError && !emailError && !passError && !repeatpassError) {
    
        const registerInfo = {
          name: name,
          email: email,
          password: pass,
        };

        axios.post('http://localhost:8080/buyerreg/register', registerInfo)
        .then(response => {
          if (response.data.error) {
            console.log("error is ",response.data);
            // Handle error from backend
            const errorMessage = response.data;
            // Display error message below sign up button
            document.getElementById('error-message').textContent = errorMessage;
          } else {
            // console.log('Registration successful');
            // // sessionStorage.setItem('User', JSON.stringify(response.data));
            // console.log(response.data);
            alert('Registration successful');
            navigate('/verify-email');
          }
        })
      
        .catch(error => {
          // Handle network or other client-side errors
          console.error('Registration error:', error);
          const errorMessage = 'Registration failed: Check your network connection or email if already registered';
          // Display generic error message below sign up button
          document.getElementById('error-message').textContent = errorMessage;
        });
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const validateName = () => {
    const nameRegex = /^[a-zA-Z ]+$/;

    if (name === "") {
      setNameError(null);
    } else if (nameRegex.test(name)) {
      setNameError(null);
    } else {
      setNameError("Letters and spaces only (40 max)");
    }
  };
  return (
    <section className="vh-100 mb-5" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h2 mb-5 mx-1 mx-md-4 mt-4">
                      Create your Daraz Account
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4 mt-4">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="fa-lg me-3 fa-fw"
                        />
                        <div className="form-outline flex-fill mb-0 input-container">
                          <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={handleNameChange}
                          />
                          <label className="form-label" htmlFor="name">
                            Full Name
                          </label>
                          {nameError && (
                            <div className="error-message">{nameError}</div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 mt-5">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="fa-lg me-3 fa-fw"
                        />
                        <div className="form-outline flex-fill mb-0 input-container">
                          <input
                            type="text"
                            id="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          {emailError && (
                            <div className="error-message">{emailError}</div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4 mt-5">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="fa-lg me-3 fa-fw"
                        />
                        <div className="form-outline flex-fill mb-0 input-container">
                          <input
                            type="password"
                            id="password"
                            required
                            value={pass}
                            onChange={handlePassChange}
                          />
                          <label className="form-label" htmlFor="pass">
                            Password
                          </label>
                          {passError && (
                            <div className="error-message">{passError}</div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3 mt-5">
                        <FontAwesomeIcon
                          icon={faKey}
                          className="fa-lg me-3 fa-fw"
                        />
                        <div className="form-outline flex-fill mb-0 input-container">
                        <input
                            type="password"
                            id="rpass"
                            required
                            value={repeatpass}
                            onChange={handleRPassChange}
                          />
                          <label className="form-label" htmlFor="rpass">
                            Password
                          </label>
                          {repeatpassError && (
                            <div className="error-message">{repeatpassError}</div>
                          )}
                        </div>
                      </div>
                      <div class="form-check d-flex justify-content-center mt-2 mb-3">
                        <p class="form-check-label">
                          By clicking “SIGN UP”, I agree to Daraz's{" "}
                          <a href="#">Terms of Use & Privacy Policy</a>.
                        </p>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                     
                        <button type="submit" className="signup">
                          SIGN UP
                        </button>
                       
                      </div>
                      <div id="error-message" style={{color: "red"}}></div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={vectorImage} className="img-fluid" alt="Sample" />
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
export default Signup;
