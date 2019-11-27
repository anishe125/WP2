import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherByCoord = (lat, lon, APIkey) =>
  axios.get(apiUrl, {
    params: {
      appid: APIkey,
      lat: lat,
      lon: lon
    }
  });

const getWeatherByCityName = (cityName, APIkey) =>
  axios.get(apiUrl, {
    params: {
      q: cityName,
      appid: APIkey
    }
  });


export {
  getWeatherByCoord,
  getWeatherByCityName
};