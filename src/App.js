import "./App.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Car from "./components/Car";
import seedCars from './seedCars';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    setCart((prevCart) => {
      return prevCart.concat(car);
    });
  };

  const findCar = (model) => {
    return seedCars.find((car) => car.name === model);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inventory">
          <Inventory cars={seedCars} />
        </Route>
        <Route 
          path="/inventory/:model"
          render={(routeProps) => (
            <Car car={findCar(routeProps.match.params.model)} addToCart={addToCart} />
          )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
