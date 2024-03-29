import { React, useEffect, useState } from "react";
import "./style/Header.css";
import darazlogo from "../images/darazlogo.png";
import logo1 from "../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";


import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  console.log("header has ", userData);
  const handleLogout = () => {
    // Handle logout logic here (clear sessionStorage, redirect user, etc.)
    sessionStorage.removeItem("userData");
    window.location.href = "/";
    console.log(userData);
  };
  const handleCartClick = () => {
    // Check if the user is logged in
    if (userData) {
      // Redirect to the cart page
      navigate("/cart");
    } else {
      // Redirect to the login page
      navigate("/login");
    }
  };
  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
  return (
    <div>
      <div className="d-none d-sm-none d-md-none d-lg-block top-header sticky-top  ">
        <div className="container-fluid px-5 py-2 d-flex align-items-center justify-content-between">
          <div>
            <a href="/sellerDash" className="upper-head mx-2">
              {" "}
              <span>Become a Seller</span>{" "}
            </a>
            <a href="#" className="upper-head mx-2">
              {" "}
              <span>Help & Support</span>
            </a>
            <a href="#" className="upper-head mx-2">
              {" "}
              <span>Daraz Affiliate Program</span>
            </a>
          </div>
          <div>
            <img
              className="hoverable-text small-logo"
              src={logo1}
              alt="Darazlogo"
            />
            <span className="hoverable-text">Save More on App</span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top header-bg ">
        <div className="container-fluid px-5 py-2 d-flex align-items-center justify-content-between">
          <button
            className="navbar-toggler  "
            id="nav-toggle-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon my-toggler"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src={darazlogo} alt="Darazlogo" />
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="form-inline my-2 my-lg-0 flex-grow-1 d-flex justify-content-center"
            >
              <div className="input-group flex-grow-1">
                <input
                  className="form-control py-2 px-2 narrower-input"
                  type="search"
                  placeholder="Search in Daraz"
                  aria-label="Search"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <div className="input-group-append">
                  <Link
                    to={`/search/${searchKeyword}`}
                    className="btn btn-light btn-outline-light px-3"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: "orange" }}
                    />
                  </Link>
                </div>
              </div>
            </form>
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              {userData ? (
                <>
                  <li className="nav-item">
                    <button
                      className="nav-link nav-link1"
                      style={{ color: "white" }}
                    >
                      {userData.name} {/* Display user's name */}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link nav-link1"
                      onClick={handleLogout}
                      style={{ color: "white" }}
                    >
                      Logout {/* Logout button */}
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <a
                      className="nav-link nav-link1"
                      href="/login"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      Login
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link nav-link1"
                      href="/signup"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      Signup
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
              <button  onClick={handleCartClick}className="nav-link nav-link1"  >
                <a
               
                  href="#"
                  style={{ color: "white", textDecoration:"none" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Cart
                
                </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
