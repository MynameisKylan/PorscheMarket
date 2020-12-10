import React from "react";
import CurrencyFormatter from "./CurrencyFormatter";
import Card from "./Card";

function Cart(props) {
  const calculateTotal = () => {
    let total = 0;
    props.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="content">
      <h1>Your Cart</h1>
      {props.items.map((item, index) => {
        return (
          <div className='cartItem'>
            <Card image={item.image} price={item.price} name={item.name} />
            <p>{`Quantity: `}<input id={index} className='qty' type='number' value={item.quantity} onChange={props.updateQuantity}></input></p>
          </div>
        );
      })}
      <p>{`Total: ${CurrencyFormatter.format(calculateTotal())}`}</p>
    </div>
  );
}

export default Cart;
