import React from "react";
import './Explore.css'


const Explore = () => {
  return (
    <>
      <div className="elements-content">
        <div className="container1">
          <div className="about-inline-text-center">
            <h3 className="about_inline_h3">Explore Traditional Maharashtrian Nonveg Delicacies </h3>
            <p className="about_inline_p">
            चिकन बिर्याणी, चिकन थाळी, चिकन लॉलीपॉप,
            चिकन मालवणी,मटन बिर्याणी, मटन मसाला, मटन उखर.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
            <div className="card-card-product">
                <div className="info-wrap">
                  <div className="price-wrap-h3">
                    <span className="price-new">चिकन बिर्याणी</span>
                  </div>
                </div>
                <div className="img-wrap">
                  <img className="img_wrap_img"  src="./images/7.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-card-product">
                <div className="info-wrap">
                  <div className="price-wrap-h3">
                    <span className="price-new">चिकन थाळी</span>
                  </div>
                </div>
                <div className="img-wrap">
                  <img className="img_wrap_img"  src="./images/8.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card-card-product">
                <div className="info-wrap">
                  <div className="price-wrap-h3">
                    <span className="price-new">चिकन लॉलीपॉप</span>
                  </div>
                </div>
                <div className="img-wrap">
             
                <img className="img_wrap_img"  src="./images/9.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;