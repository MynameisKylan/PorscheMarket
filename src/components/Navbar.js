import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className='navbar'>
        <Link to="/">PorscheTopia</Link>
        <ul className='navlinks'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
