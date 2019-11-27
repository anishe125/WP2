import React  from 'react';
import { connect } from 'react-redux';
import { locRequested } from "../../actions";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const MyCity = ({ city, loading, locRequested, errorMessage }) => {
  const updCityInfo = () => locRequested();

  return (
    <div>
      {loading
        ? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        : <div>
          <div style={{ marginBottom: 20, marginTop: 10, marginLeft: 70 }}>
            <Button  onClick={updCityInfo}>Обновить геолокацию</Button>
            {errorMessage !== null ? <Row  class="text-lg-center text-danger" style={{  marginTop: 10}}>{errorMessage}</Row> : <Row></Row>}
          </div>
          {city.error
            ? <div>{city.error}</div>
            : <Row>
                <Col sm={6}>
                  <Row>
                    <div class="display-3">{city.city}</div>
                  </Row>

                      <Row >
                        <Col sm={3}><img width={140} src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} alt=""/></Col>
                        <Col sm={3}><div style={{ marginBottom: 20, marginLeft: 140 , marginRight: 300}} className="display-2">{`${city.temp}°`}</div></Col>
                      </Row>
                    </Col>
                  <Col sm={6}>
                <table class="table">
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
                </Col>
            </Row>
          }
        </div>
      }
    </div>
  )
};

const mapStateToProps = ({ loading, cityByCoords, errorMessage }) => ({
  city: cityByCoords,
  loading,
  errorMessage
});

export default connect(mapStateToProps, { locRequested })(MyCity);