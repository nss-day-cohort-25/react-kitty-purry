import React, { Component } from 'react';



class Angus extends Component {
    render() {
        return (
            <div>
                <h3>My Pet</h3>
                <div>Name: {this.props.name}</div>
                <div>Breed: {this.props.breed}</div>
            </div>
        );
    }
  }

export default Angus