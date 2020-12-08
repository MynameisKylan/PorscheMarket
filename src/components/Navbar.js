import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

function Navbar() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">AK Skin Mart</Link>
        <ul className='navlinks'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;
