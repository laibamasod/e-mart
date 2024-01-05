import React from "react";
import adGif from "../images/ad1.gif";

const CenteredAd = () => {
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="row mt-4">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
          <img
            src={adGif}
            alt="Advertisement"
            className="img-fluid"
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
              maxHeight: "auto",
              borderRadius: "80px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredAd;
