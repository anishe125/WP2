import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import deleteIcon from './svg/delete.svg';
import { cityDelete } from "../../actions";
import Spinner from "react-bootstrap/Spinner";
import {Button, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";


const CityListItem = ({ city, i, cityDelete }) => {
  const [ loading, setLoading ] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if(city && JSON.stringify(city) !== '{}'){
      setLoading(false);}
    else
      setLoading(true);
  }, [city]);

  return (
      <Container style={{marginTop: 20, flex: 1}}>
    <div>
      {loading
        ? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        : <div class="align-content-stretch">
            <Row>
              <div class="display-4" style={{marginLeft: 20}}>
              {!city.error ? `${city.city} ${city.temp}°`: ''}
              </div>
            <div >
                {!city.error ? <img width={120} src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} alt=""/> : ''}
            </div>
            <div  style={{ marginTop: 20, marginLeft: 50}} class="align-self-auto" >
              <button class="btn btn-dark" onClick={deleteCity}>X</button>
            </div>
          </Row>
          {city.error
            ? <div class="h4">{city.error}</div>
            :  <div>
                <table class = "table">
                  <tr>
                    <td>Pressure:</td>
                    <td align={"right"}>{city.pressure} hPa</td>
                  </tr>
                  <tr>
                    <td>Wind:</td>
                    <td align={"right"}>{city.wind} m/s</td>
                  </tr>
                  <tr>
                    <td>Humidity:</td>
                    <td align={"right"}>{city.humidity}%</td>
                  </tr>
                  <tr>
                    <td>Coordinates:</td>
                    <td align={"right"}>[{city.lat}, {city.lon}]</td>
                  </tr>
                </table>
              </div>
          }
        </div>
      }
    </div>
      </Container>
  )
};

export default connect(null, { cityDelete })(CityListItem);