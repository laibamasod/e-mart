import React, { useState, useEffect } from "react";
import adPic1 from "../images/adpic1.jpg";
import adPic2 from "../images/adpic2.jpg";
import adPic3 from "../images/adpic3.jpg";
import adPic4 from "../images/adpic4.jpg";
import adPic5 from "../images/adpic5.jpg";
import adPic6 from "../images/adpic6.jpg";
import adPic7 from "../images/adpic7.jpg";
import adPic8 from "../images/adpic8.jpg";
import adPic9 from "../images/adpic9.jpg";
import adPic10 from "../images/adpic10.jpg";
import './style/advertisement.css';
const images = [
  adPic1,
  adPic2,
  adPic3,
  adPic4,
  adPic5,
  adPic6,
  adPic7,
  adPic8,
  adPic9,
  adPic10,
];

const AdvertisementComponent = () => {
  const numberOfAds = images.length;
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % numberOfAds);
    }, 5000);

    return () => clearInterval(interval);
  }, [numberOfAds]);

  const nextSlide = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % numberOfAds);
  };

  const prevSlide = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === 0 ? numberOfAds - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-2">
          <nav className="navbar navbar1  ">
            <div className="container-fluid">
              <ul className="navbar-nav cat-nav navhead">
                <li className="nav-item navitems">
                  <a className="nav-link nav1-link" href="#">
                    Groceries
                  </a>
                </li>
                <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Health and Beauty</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Men's Fashion</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Women's Fashion</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Electronic Devices</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Sports and OutDoor</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Jewellery and Accessories</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">TV and Home Appliances</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Motorbike and Automobiles</a>
      </li>
      <li class="nav-item navitems">
        <a class="nav-link nav1-link" href="#">Pets</a>
      </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <div className="card">
            <div className="card-body p-0 position-relative">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ position: "relative" }}
              >
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item${
                        index === currentAdIndex ? " active" : ""
                      }`}
                    >
                      <div
                        className="card ad-card"
                        style={{
                          backgroundImage: `url(${image})`,
                          height: "389px",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="ad-dots mt-3 d-flex justify-content-center position-absolute bottom-0 w-100">
                  {[...Array(numberOfAds)].map((_, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentAdIndex(index)}
                      className={`dot${
                        index === currentAdIndex ? " active" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        margin: "0 5px",
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor:
                          index === currentAdIndex ? "#000" : "#ccc",
                      }}
                    ></span>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={prevSlide}
                >
                  {/* Previous icon */}
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={nextSlide}
                >
                  {/* Next icon */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementComponent;
