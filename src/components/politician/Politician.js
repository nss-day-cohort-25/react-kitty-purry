import React, { Component } from "react"
import { Context } from "../../data/HonestAbeProvider"
import Bill from "../Bill"

class Politician extends Component {
    constructor (props) {
        super(props)
        this.key = 0
    }

    render () {
        return (
            <div>
                {this.props.data.name.first} {this.props.data.name.last}
                <ol>
                <Context.Consumer>
                {context => (
                    context.state.politicianlegislations.filter(pl => {
                        return pl.politicianId === this.props.data.id
                    }).map(pl => (
                        <Bill id={pl.legislationId} key={this.key++} />
                    ))
                )}
                </Context.Consumer>
                </ol>
            </div>
        )
    }
}

export default Politician
