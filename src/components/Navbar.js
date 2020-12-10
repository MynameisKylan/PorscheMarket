import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/">PorscheTopia</Link>
      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fa">&#xf07a;</i>
            {props.cartCount}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
