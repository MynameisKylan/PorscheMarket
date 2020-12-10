import React from "react";
import { Link } from 'react-router-dom';
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
          <div className="cartItem">
            <Card image={item.image} price={item.price} name={item.name} />
            <p>
              {`Quantity: `}
              <input
                id={index}
                className="qty"
                type="number"
                value={item.quantity}
                onChange={props.updateQuantity}
              ></input>
            </p>
          </div>
        );
      })}
      <h2>{`Total: ${CurrencyFormatter.format(calculateTotal())}`}</h2>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
