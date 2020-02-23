import React from "react";
import "../css/responsive.scss";
export function Responsive() {
  return (
    <div className="responsiveWrapper">
      <div className="imgBox">
        <img src={require("../img/iphone_11.png")} alt="iPhone 11 Pro" />
      </div>
      <div className="details">
        <div className="content">
          <h2>
            iPhone 11 Pro
            <span>Apple</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            maiores error cumque a dolorem. Expedita repellat neque corporis
            sint, culpa harum tempore voluptas dolor dolorum cum eaque hic illo
            blanditiis.
          </p>
          <h3>$999</h3>
          <button>Pre-Order Now</button>
        </div>
      </div>
    </div>
  );
}
