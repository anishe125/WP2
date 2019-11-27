const prepareWeatherData = weather => {
  let {
    name,
    main: { temp, humidity, pressure },
    weather: { 0: { main, icon } },
    wind: { speed },
    coord
  } = weather;

  temp = (temp - 273.15).toFixed(0);


  return {
    city: name,
    temp,
    icon,
    main,
    pressure,
    humidity,
    wind: speed,
    lon: coord.lon,
    lat: coord.lat
  }
};

export default prepareWeatherData;