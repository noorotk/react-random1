import React from "react";
import { Link } from "react-router-dom";
const products = () => {
  return (
    <div>
      <h1>The products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">bird</Link>
        </li>
        <li>
          <Link to="/products/p3">stone</Link>
        </li>
      </ul>
    </div>
  );
};

export default products;
