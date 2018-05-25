import React, { Component } from 'react';
import Home from './Home';
import Jaguar from './Car';
import Angus from './Dog';
import "./styles/kittypurry.css"


class KittyPurry extends Component {

    state = {
        firstName: "",
        lastName: "",
        occupation: "",
        address: {},
        fame: "",
        car: {},
        pet: {}
    }

    componentDidMount () {
        fetch("http://localhost:5000/people/1")
            .then(response => response.json())
            .then(kitty => this.setState(kitty))
    }

    render() {
        return (
            <div className="kittyPurry">
                <h3>{this.state.firstName} {this.state.lastName}</h3>
                <h4>{this.state.occupation}</h4>
                <h5>{this.state.fame}</h5>
                <Home address={this.state.address} />
                <Jaguar car={this.state.car} />
                <Angus pet={this.state.pet} />
            </div>
        );
    }
}

export default KittyPurry;
