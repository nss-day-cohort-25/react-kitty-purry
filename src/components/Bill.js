import React, { Component } from "react"
import { Context } from "../data/HonestAbeProvider"
import "./Bill.css"
import Interest from "./Interest";

class Bill extends Component {
    constructor (props) {
        super(props)
        this.key = 1
    }

    render() {
        return (
            <Context.Consumer>
                {context => {
                    const bill = context.state.legislations.find(l => l.id === this.props.id)
                    const billInterests = context.state.legislationinterests.filter(
                        li => li.legislationId === this.props.id
                    )
                    return (
                        <li className="bill">
                            {bill.name}
                            <ul>
                                {billInterests.map(bi => <Interest id={bi.interestId} key={this.key++} /> )}
                            </ul>
                        </li>
                    )

                }}
            </Context.Consumer>
        )
    }
}

export default Bill
