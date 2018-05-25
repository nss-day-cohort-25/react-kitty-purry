import React, { Component } from 'react';



class Home extends Component {
    render() {
        return (
            <div>
                <div>{this.props.address.street}</div>
                <div>{this.props.address.city}</div>
                <div>{this.props.address.state}</div>
            </div>
        );
    }
  }

export default Home