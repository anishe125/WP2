import React, {Component} from 'react';


export class CityInfo extends Component{
    render() {
        let coord = this.props.data.coord;
        let wind = this.props.data.wind;
        let humidity = this.props.data.humidity;
        let pressure = this.props.data.pressure;
        let clouds = this.props.data.clouds;

        return <div>

            <table className="table">
                <tr>
                    <td>Pressure:</td>
                    <td align={"right"}>{pressure}</td>
                </tr>
                <tr>
                    <td>Wind:</td>
                    <td align={"right"}>{wind}</td>
                </tr>
                <tr>
                    <td>Humidity:</td>
                    <td align={"right"}>{humidity}</td>
                </tr>
                <tr>
                    <td>Coordinates:</td>
                    <td align={"right"}>[{coord}]</td>
                </tr>
            </table>
        </div>

    }
}
