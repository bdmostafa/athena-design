import React from "react";
import bannerImg from '../../../images/banner.png';

const Banner = () => {
  return (
    <div className="row align-items-center mt-5">
      <div className="col-md-6">
        <div className="d-flex justify-content-center d-md-block justify-content-md-start">
          <h1 className="pr-2 pr-md-0">Florence</h1>
          <h1> agency</h1>
        </div>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button href="#pricing" className="default-btn">
          See Pricing
        </button>
      </div>
      <div className="col-md-6 pt-5 pt-md-0">
        <img className="img-fluid" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
