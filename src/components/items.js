import React, {Component} from 'react';
import Card from "./card";
const mapStateToProps = state => {
    return{
        data: state.data
    };
};
class Items extends Component {
    render() {
        return (
            <div className={"items"}>
                <div className="items-header">
                    <h2>Items</h2>
                    <p>Based on your selection of movie tittles we will know what we can recommend you in future to
                        watch.</p>
                </div>
                {console.log(this.props.data)}
                <div className={"cards-container fixed"}>
                    {this.props.data ? this.props.data.slice(0,15).map((index,item)=>{
                        return(
                            <Card/>
                        )
                    }): null}
                </div>
                <div className={"continue-button"}>
                    <p>Continue</p>
                </div>
            </div>
        );
    }
}

export default (mapStateToProps)(Items);