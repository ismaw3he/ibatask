import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div className={"nav-bar"}>
                <div className={"fixed"}>
                    <div className={"nav-buttons"}>
                        <h4><Link to="/homepage">Homepage</Link></h4>
                        <h4><Link to="/favorites">Favorites</Link></h4>
                    </div>

                    <h3>Hello,Adrian</h3>
                </div>
            </div>
        );
    }
}

export default Nav;