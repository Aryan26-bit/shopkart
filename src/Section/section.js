import React, { useEffect, useState } from "react";
import "./../Section/section.css";

function section({ product }) {
  return (
    <>
      {/* <p className="mm">New Products</p> */}
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%" }}
        />

        <h2 className="ww">{product.title}</h2>
        <h2 className="xx">{product.description}</h2>
        <p className="ww">${product.price}</p>
      </div>
    </>
  );
}

export default section;
