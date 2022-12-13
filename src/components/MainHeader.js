import React from "react";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="activeLink" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
