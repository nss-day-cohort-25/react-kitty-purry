import React, {Component} from "react"

export const Context = React.createContext()

export class Provider extends Component {
    state = { "politicians": [] }

    componentDidMount () {
        fetch("http://localhost:5000/db/")
            .then(r => r.json())
            .then(db => {
                this.setState(db)
            })
    }

    render () {
        return (
            <Context.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

