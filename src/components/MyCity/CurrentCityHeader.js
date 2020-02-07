import React, {Component} from 'react';
import "../../css/header.css"

export class CurrentCityHeader extends Component {
    render() {
        let name = this.props.data.name;
        let icon = this.props.data.iconLink;
        let temp = this.props.data.temp;
        return <div className="col-6">
            <div className="display-4">{name}</div>
            <div className="row">
                <div className="col-6">
                    <img alt="icon" width="200px" src={icon}/>
                </div>
                <div className="col-6 display-2">{temp}</div>
            </div>
        </div>

    }
}
