import React, {Component} from 'react';
import {CurrentCity} from "./MyCity/CurrentCity";
import "../css/header.css"
import {Button, Row} from "react-bootstrap";




export class MyCity extends Component {

    constructor(props) {
        super(props);
        this.state = {position: this.defaultPosition};
    }

    componentDidMount() {
        this.getPosition();
    }

    render() {
        return <div>
            {this.CurrentHeader}
            <CurrentCity position={this.state.position}/>
        </div>
    }

    CurrentHeader =
        <Row>
            <div className="display-3 col-5">
                Погода здесь
            </div>
            <div className="col-7">
                <Button className="btn btn-secondary mt-4 " onClick={this.getPosition.bind(this)}>
                    Обновить геопозицию
                </Button>
            </div>
        </Row>;

    defaultPosition = {
        latitude: 55.75,
        longitude: 37.62
    };

    getPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({position: position.coords});

        }, e => {
            this.setState({position: this.defaultPosition})
        });
    }
}
