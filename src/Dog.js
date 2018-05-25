import React, { Component } from 'react';
import "./styles/dog.css"


class Angus extends Component {
    render() {
        return (
            <div className="dog">
                <h3>My Pet</h3>
                <div>Name: {this.props.pet.name}</div>
                <div>Breed: {this.props.pet.breed}</div>
            </div>
        );
    }
  }

export default Angus