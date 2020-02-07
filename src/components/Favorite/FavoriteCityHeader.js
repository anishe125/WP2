import React, {Component, Fragment} from 'react';


export class FavoriteCityHeader extends Component {

    render() {
        let temp, img;
        if (!this.props.download && ! this.props.error) {
            temp = <span className="display-4 p-2 ml-auto mini-temp">
                {this.props.data.temp}
            </span>;
            img = <img className="ml-lg-5" width="100px" alt="icon" src={this.props.data.iconLink}/>
        }
        return <Fragment>
            <span className="display-4" >
                {this.props.name}
            </span>
            {temp}
            {img}
        </Fragment>
    }

}
