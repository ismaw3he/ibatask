import React, {Component} from 'react';
import Nav from "../nav";
import Header from "../Header";
import Filters from "../filters";
import Items from "../items";
import Footer from "../Footer";

class Favorites extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header header={"Favorites"}/>
                <Filters/>
                <Items/>
                <Footer />
            </div>
        );
    }
}

export default Favorites;