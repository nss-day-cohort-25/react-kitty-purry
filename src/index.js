import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import PoliticianList from "./components/PoliticianList"
import NavBar from "./components/nav/NavBar"


ReactDOM.render(
    <Router>
        <div>
            <NavBar />
            <Route exact path="/interest" component={PoliticianList} />
            <Route exact path="/" component={PoliticianList} />
        </div>
    </Router>
, document.getElementById("root"))

registerServiceWorker()
