import React, {Component} from 'react';
import logo from "../img/logo.png";
import icons from "../img/icons.png";
class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <div className="footer-top">

                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="buttons">

                    </div>
                    <div className="icons">
                        <img src={icons} alt="icons"/>
                    </div>
                </div>

                <div className="copyright">
                    <p>© 2018 Vodi Platform. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;