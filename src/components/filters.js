import React, {Component} from 'react';

class Filters extends Component {
    render() {
        return (
            <div className={"filter"}>
                <div className={"filters-header"}>
                    <h4>Filters</h4>
                    <p>Pick genre that matches your interest, we will show you movies you may like.</p>
                </div>
                <div className={"filter-buttons"}>
                    <div className={"filter-button-single"}>
                        <p>Tek</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>Cut</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>3-e bolunen</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>4-e bolunen</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>5-e bolunen</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>6-a bolunen</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>8-e bolunen</p>
                    </div>
                    <div className={"filter-button-single"}>
                        <p>10-a bolunen</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;