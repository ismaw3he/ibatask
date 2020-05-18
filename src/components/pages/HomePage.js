import React, {Component} from 'react';
import Nav from "../nav";
import Header from "../Header";
import Filters from "../filters";
import Items from "../items";
import Footer from "../Footer";

import {connect} from "react-redux";


const mapStateToProps = state => {
    return{
        data: state.data
    };
};
const mapDispatchToProps = dispatch => {
    return{
        onLoad: (data) => dispatch ({type: "LOAD", payload:data})
    };
};
class HomePage extends Component {
    loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                this.props.onLoad(data);
            });
    };
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <div className={"home-page"}>
                <Nav />
                <Header header={"We're done!"}/>
                <Filters/>
                <Items/>
                <Footer />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);