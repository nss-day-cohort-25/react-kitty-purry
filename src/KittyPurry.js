import React, { Component } from 'react';
import Home from './Home';
import Jaguar from './Car';
import Angus from './Dog';


class KittyPurry extends Component {

    state = {
        firstName: "Steve",
        lastName: "Brownlee",
        occupation: "Lead Instructor at NSS",
        address: {
            street: "1609 Appaloosa Ct",
            city: "Spring Hill",
            state: "TN"
        },
        fame: "Katy Perry's Biggest Fan",
        car: {
            make: "Jaguar",
            model: "XJ"
        },
        pet: {
            species: "Dog",
            name: "Angus",
            breed: "Australian Shepherd"
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.firstName} {this.state.lastName}</h3>
                <h4>{this.state.occupation}</h4>
                <h5>{this.state.fame}</h5>
                <Home address={this.state.address} />
                <Jaguar make={this.state.car.make} model={this.state.car.model} />
                <Angus name={this.state.pet.name} breed={this.state.pet.breed} />
            </div>
        );
    }
}

export default KittyPurry;
