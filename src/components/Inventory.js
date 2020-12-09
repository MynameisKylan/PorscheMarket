import React, { useState } from "react";
import Card from "./Card";

function Inventory(props) {
  const [cars] = useState(props.cars);

  return (
    <div className="content">
      <h1>Inventory</h1>
      <div className="inventory">
        {cars.map((car) => {
          return (
            <Card
              image={car.image}
              price={car.price}
              name={car.name}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Inventory;
