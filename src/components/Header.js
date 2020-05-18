import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <div className={"header-content"}>
                    <p className={"header-step"}>Step 4</p>
                    <h2 className={"header-main"}>{this.props.header}</h2>
                    <h3 className={"header-main"}>Now let us know your preferences.</h3>
                </div>
            </div>
        );
    }
}

export default Header;