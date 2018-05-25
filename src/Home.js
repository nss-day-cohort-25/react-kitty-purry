import React, { Component } from 'react';
import { MyContext } from "./data/PersonalDataProvider"


class Home extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <div>
                        <div>{context.state.address.street}</div>
                        <div>{context.state.address.city}</div>
                        <div>{context.state.address.state}</div>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
  }

export default Home