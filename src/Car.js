import React, { Component } from 'react';
import "./styles/car.css"


class JaguarXJ extends Component {
    render() {
        return (
            <div className="car">
                <h3>My Favorite Car</h3>
                <div>{this.props.car.make}</div>
                <div>{this.props.car.model}</div>
            </div>
        );
    }
  }

export default JaguarXJ