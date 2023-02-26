import React from "react";
import "./Static.css";
const Static = () => {
  return (
    <>
      <div className="container_stat">
        <div className="contain_items">
          <p>
            <span className="count">4</span>
          </p>
          <h2>GENERATIONS OLD RECIEPES</h2>
        </div>
        <div className="contain_items">
          <p>
            <span className="count">23</span>
          </p>
          <h2>INGREDIENTS AND SPICES USED</h2>
        </div>
        <div className="contain_items">
          <p>
            <span className="count">9</span>
          </p>
          <h2>THALI VARIATIONS</h2>
        </div>
        <div className="contain_items">
          <p>
            <span className="count">2017</span>
          </p>
          <h2>SERVING SINCE</h2>
        </div>
      </div>
    </>
  );
};

export default Static;
