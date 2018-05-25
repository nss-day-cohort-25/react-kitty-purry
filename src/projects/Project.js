import React, { Component } from "react"


class Project extends Component {
    render() {
        return (
            <article>
                <div>{ this.props.name }</div>
                <div>{ this.props.description }</div>
            </article>
        )
    }
}

export default Project
