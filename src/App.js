import "./App.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Car from "./components/Car";
import seedCars from "./seedCars";
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    const alreadyInCart = cart.some((cartCar) => cartCar.name === car.name);

    if (alreadyInCart) {
      let index = cart.indexOf(
        cart.find((cartCar) => cartCar.name === car.name)
      );
      let newCart = [...cart];
      newCart[index].quantity = cart[index].quantity + 1;
      setCart(newCart);
    } else {
      let newCart = [...cart].concat(car);
      setCart(newCart);
    }
  };

  const updateQuantity = (event) => {
    let newCart = [...cart];
    newCart[event.target.id].quantity = parseInt(event.target.value);
    setCart(newCart);
  }

  const findCar = (model) => {
    return seedCars.find((car) => car.name === model);
  };

  const getCartCount = () => {
    let count = 0;
    cart.forEach((car) => (count += car.quantity));
    return count;
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar cartCount={getCartCount()} />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inventory">
          <Inventory cars={seedCars} />
        </Route>
        <Route
          path="/inventory/:model"
          render={(routeProps) => (
            <Car
              car={findCar(routeProps.match.params.model)}
              handleClick={() =>
                addToCart(findCar(routeProps.match.params.model))
              }
            />
          )}
        />
        <Route exact path='/cart'>
          <Cart items={cart} updateQuantity={updateQuantity} />
        </Route>
        <Route exact path='/checkout'>
          <Checkout items={cart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
