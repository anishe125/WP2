const getGeoPosition = (successCallback, errorCallback) => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

export default getGeoPosition;