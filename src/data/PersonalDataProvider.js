import React, {Component} from "react"

export const MyContext = React.createContext()

export class MyProvider extends Component {
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

    render () {
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

