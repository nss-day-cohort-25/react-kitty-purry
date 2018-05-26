import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="mainNavigation shoNuff" id="myId">
                <Link to="/react-kitty-purry/">Home</Link>
                <Link to="/react-kitty-purry/projects/">List of Projects</Link>
            </nav>
        );
    }
}

export default NavBar;