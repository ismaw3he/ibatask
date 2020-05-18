import React, {Component} from 'react';
class Card extends Component {
    render() {
        return (
            <div className={"card"}>
                <div className={"card-image"}>
                    <div className={"image-hover"}>
                        <p>Add to favorite</p>
                    </div>
                </div>
                <p>Action, Historical, 2015</p>
                <h2>The Lost Viking</h2>
            </div>
        );
    }
}

export default Card;