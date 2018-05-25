import React, { Component } from "react"
import Home from "./Home"
import Jaguar from "./Car"
import Angus from "./Dog"
import { MyContext, MyProvider } from "./data/PersonalDataProvider"

class KittyPurry extends Component {
    render() {
        return (
            <MyProvider>
                <MyContext.Consumer>
                {(context) => (
                    <div>
                        <div>{context.state.firstName}</div>
                        <div>{context.state.lastName}</div>
                        <div>{context.state.occupation}</div>
                        <div>{context.state.game}</div>
                    </div>
                )}
                </MyContext.Consumer>
                <Home />
                <Jaguar />
                <Angus />
            </MyProvider>
        );
    }
}

export default KittyPurry;
