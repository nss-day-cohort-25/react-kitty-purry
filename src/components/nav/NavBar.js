import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/interest">New Interest</Link>
                <Link className="nav-link" to="/">Politicians</Link>
            </nav>
        );
    }
}

export default NavBar;
