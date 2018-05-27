import React, { Component } from "react"
import { Context } from "../data/HonestAbeProvider"

class Interest extends Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    const interest = context.state.interests.find(i => i.id === this.props.id)
                    return (
                        <span className="badge badge-light">{interest.name}</span>
                    )

                }}
            </Context.Consumer>
        )
    }
}

export default Interest
