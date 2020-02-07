import React, {Component} from 'react';
import {MyCity} from "./MyCity";
import {Favorite} from "./Favorite"

export class Page extends Component {
    render() {
        return (
            <div className="ml-5 mr-5 mt-3 mb-3">
                <MyCity/>
                <Favorite/>
            </div>
        );
    }
}
