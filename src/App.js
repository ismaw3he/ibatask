import React from 'react';
import './App.css';
import HomePage from "./components/pages/HomePage";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Favorites from "./components/pages/Favorites";

function App() {
    return (
        <Router>
            <div className={"App"}>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/homepage">
                            <HomePage/>
                        </Route>
                        <Route path="/favorites">
                            <Favorites/>
                        </Route>
                    </Switch>
            </div>
        </Router>
    );
}

export default App;
