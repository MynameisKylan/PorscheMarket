import React from "react";

function Car(props) {
  // console.log(props);
  return (
    <div className="content">
      <h1>{props.car.name}</h1>
      <img src={props.car.image} className="card-img" alt={props.car.name}></img>
      <p className="card-info">{props.car.price}</p>
      <button onClick={props.handleClick}>Add to Cart</button>
    </div>
  );
}

export default Car;
