import React from "react";
import "./Car.css";

const Car = props => (
  <div className="car">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCar(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default Car;
