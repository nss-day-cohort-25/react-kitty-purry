import React, { Component } from "react"
import { Context, Provider } from "../data/HonestAbeProvider"
import Politician from "./Politician"

class PoliticianList extends Component {
    constructor (props) {
        super(props)
        this.key = 1
    }

    render() {
        return (
            <Provider>
                <Context.Consumer>
                {context => (
                    <div className="projectlist">
                        {context.state.politicians.map(p => <Politician data={p} key={this.key++} /> )}
                    </div>
                )}
                </Context.Consumer>
            </Provider>
        )
    }
}

export default PoliticianList
