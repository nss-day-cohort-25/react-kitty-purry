import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import PoliticianList from "./components/politician/PoliticianList"
import NavBar from "./components/nav/NavBar"


ReactDOM.render(
    <Router>
        <span>
            <NavBar />
            <Route exact path="/interest" component={PoliticianList} />
            <Route exact path="/" component={PoliticianList} />
        </span>
    </Router>
, document.getElementById("root"))

registerServiceWorker()
