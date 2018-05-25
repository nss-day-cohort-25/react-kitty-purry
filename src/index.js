import { BrowserRouter as Router, Route } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import KittyPurry from './KittyPurry'
import registerServiceWorker from './registerServiceWorker'
import NavBar from "./nav/NavBar";
import ProjectList from "./projects/ProjectList";


ReactDOM.render(
    <Router>
        <div>
            <NavBar/>
            <Route exact
                path="/"
                component={KittyPurry} />
            <Route exact
                path="/projects"
                component={ProjectList} />
        </div>
    </Router>
    , document.getElementById('root'))
registerServiceWorker()
