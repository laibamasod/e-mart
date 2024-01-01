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
]; // Add other images to this array

const AdvertisementComponent = () => {
  const numberOfAds = images.length;
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Function to switch to the next advertisement after a certain interval (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % numberOfAds);
    }, 5000); // Change the interval time in milliseconds as needed

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
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body p-0 position-relative">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ position: "relative" }}
              >
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={prevSlide}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={nextSlide}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item${
                        index === currentAdIndex ? " active" : ""
                      }`}
                    >
                      <div
                        className="card"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          height: "350px",
                          width: "950px", // Adjust the height as needed
                          position: "relative",
                        }}
                      >
                      </div>
                    </div>
                  ))}
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
                            index === currentAdIndex
                              ? "transparent"
                              : "transparent",
                          border:
                            index === currentAdIndex
                              ? "2px solid #000"
                              : "2px solid #ccc",
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementComponent;
