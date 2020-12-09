import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

function Card(props) {
  let match = useRouteMatch();

  return (
    <div className="card">
      <Link to={`${match.path}/${props.name}`}>
        <img src={props.image} className="card-img" alt={props.name}></img>
        <p className="card-info">{props.name}</p>
        <p className="card-info">{props.price}</p>
      </Link>
    </div>
  );
}

export default Card;
