import React, { Component } from "react";
import Car from "./components/Car";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the cars json array
  state = {
    cars
  };

  removeCar = id => {
    // Filter this.state.car for car with an id not equal to the id being removed
    const cars = this.state.cars.filter(car => car.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cars });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Cars List</Title>
        {this.state.cars.map(car => (
          <Car
            removeCar={this.removeCar}
            id={car.id}
            key={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
