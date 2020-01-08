import React from 'react'
import ReactDOM from 'react-dom'
import Login from "./Login";
import {Route, Router} from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Route path="/login" exact component={Login}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'))