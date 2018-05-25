import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/">Home</Link>
                <Link to="/projects">List of Projects</Link>
            </nav>
        );
    }
}

export default NavBar;