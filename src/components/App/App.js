import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherByCityName, getWeatherByCoord } from "../../getWeather";
import prepareWeatherData from "../../prepareWeatherData";
import getGeoPosition from "../../getGeoPosition";

import {
  addErrorMessage,
  cityByCoordsLoaded,
  cityError,
  cityLoaded,
  cityRequest, clearErrorMessage, deleteCityFromQueue,
  locError,
  locLoaded,
  locRequested,
  updateLoadingStatus
} from '../../actions';
import MyCity from "../MyCity/MyCity";
import CityList from "../CityList/CityList";

const App = (props) => {
  const {
    deleteCityFromQueue,
    addErrorMessage,
    clearErrorMessage,
    cityError,
    cityLoaded,
    cityRequest,
    locLoaded,
    locError,
    cityByCoordsLoaded,
    updateLoadingStatus,
    state
  } = props;
  const {
    apiKey,
    cityDefault,
    isGeoPosAvailable,
    cityByCoords,
    cities,
    citiesQueue
  } = state;


  const successGeoLocCallback = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    locLoaded();
    getWeatherByCoord(lat, lon, apiKey)
      .then((res) => {
        cityByCoordsLoaded(prepareWeatherData(res.data));
      })
      .catch((err) => {
        cityByCoordsLoaded({error: err.message});
      });
  };

  const errorGeoLocCallback = () => {
    locError();
    getWeatherByCityName(cityDefault, apiKey)
      .then((res) => {
        cityByCoordsLoaded(prepareWeatherData(res.data));
      })
      .catch((err) => {
        cityByCoordsLoaded({error: err.message});
      });
  };

  useEffect(() => {
    if(citiesQueue.length > 0){
      if(cities.length < 10) {
        cityRequest();
        getWeatherByCityName(citiesQueue[0], apiKey)
          .then((res) => {
            cityLoaded(prepareWeatherData(res.data));
            clearErrorMessage();
          })
          .catch((err) => {
            cityError();
            addErrorMessage(err.message);
          });
        deleteCityFromQueue();
      } else {
        deleteCityFromQueue();
      }
    }
  }, [
    citiesQueue,
    addErrorMessage,
    clearErrorMessage,
    cities,
    deleteCityFromQueue,
    apiKey,
    cityLoaded,
    cityRequest,
    cityError
  ]);

  useEffect(() => {
    if(isGeoPosAvailable === null)
      getGeoPosition(successGeoLocCallback, errorGeoLocCallback);
  });

  useEffect(() => {
    if(cityByCoords && JSON.stringify(cityByCoords) !== '{}')
      updateLoadingStatus(false);
  }, [cityByCoords, updateLoadingStatus]);




  return (
      <Container  fluid={true} style={{ paddingLeft: 0, paddingRight: 0 }}>

          <Row style={{ marginLeft:  0, marginRight: 0 }} className="justify-content-md-center">
              <MyCity />
          </Row>
        <Row  style={{ marginLeft:  0 , marginRight: 0 }} className="justify-content-md-center">
          <CityList />
        </Row>
      </Container>
  );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {
  cityLoaded,
  cityRequest,
  locError,
  locLoaded,
  locRequested,
  cityByCoordsLoaded,
  updateLoadingStatus,
  cityError,
  deleteCityFromQueue,
  addErrorMessage,
  clearErrorMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
