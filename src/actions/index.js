const updateLoadingStatus = (loading) => ({
  type: 'UPDATE_LOADING_STATUS',
  loading
});

const cityDelete = (index) => ({
  type: 'DELETE_CITY',
  index
});

const cityRequest = () => ({
  type: 'FETCH_CITY_REQUEST'
});

const cityLoaded = (city) => ({
  type: 'FETCH_CITY_SUCCESS',
  city
});

const cityError = (city = '') => ({
  type: 'FETCH_CITY_ERROR',
  city
});

const locRequested = () => ({
  type: 'FETCH_GEOLOCATION_REQUEST',
  isGeoPosAvailable: null
});

const locLoaded = () => ({
  type: 'FETCH_GEOLOCATION_SUCCESS',
  isGeoPosAvailable: true
});

const locError = () => ({
  type: 'FETCH_GEOLOCATION_FAILURE',
  isGeoPosAvailable: false
});

const cityByCoordsLoaded = (city) => ({
  type: 'FETCH_CITY_BY_COORDS_SUCCESS',
  city
});

const addCityToQueue = (city) => ({
  type: 'ADD_CITY_TO_QUEUE',
  city
});

const deleteCityFromQueue = () => ({
  type: 'DELETE_CITY_FROM_QUEUE'
});

const addErrorMessage = (message) => ({
  type: 'ADD_ERROR_MESSAGE',
  message
});

const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE'
});


export {
  cityRequest,
  cityLoaded,
  locError,
  locLoaded,
  locRequested,
  cityDelete,
  updateLoadingStatus,
  cityByCoordsLoaded,
  cityError,
  addCityToQueue,
  deleteCityFromQueue,
  addErrorMessage,
  clearErrorMessage
};