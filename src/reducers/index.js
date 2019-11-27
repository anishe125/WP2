const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_CITY_TO_QUEUE': {
      const citiesQueue = [...state.citiesQueue];
      citiesQueue.push(action.city);
      return {
        ...state,
        citiesQueue
      };
    }
    case 'DELETE_CITY_FROM_QUEUE': {
      const citiesQueue = [...state.citiesQueue];
      citiesQueue.shift();
      return {
        ...state,
        citiesQueue
      };
    }
    case 'UPDATE_LOADING_STATUS':
      return {
        ...state,
        loading: action.loading
      };
    case 'DELETE_CITY':{
      const cities = [...state.cities];
      cities.splice(action.index, 1);
      return {
        ...state,
        cities,
        inputField: null
      };
    }
    case 'FETCH_CITY_REQUEST':{
      const cities = [...state.cities];
      cities.push({});
      return {
        ...state,
        cities
      };
    }
    case 'FETCH_CITY_ERROR':{
      const cities = [...state.cities];
      const i = cities.filter((item) =>
        (JSON.stringify(item) !== JSON.stringify({}))).length;
      cities.splice(i, 1);
      return {
        ...state,
        cities
      };
    }
    case 'FETCH_CITY_SUCCESS':{
      const cities = [...state.cities];
      const i = cities.filter((item) =>
        (JSON.stringify(item) !== JSON.stringify({}))).length;
      cities[i] = action.city;
      return {
        ...state,
        cities
      };
    }
    case 'FETCH_GEOLOCATION_REQUEST':
      return {
        ...state,
        isGeoPosAvailable: action.isGeoPosAvailable,
        loading: true
      };
    case 'FETCH_GEOLOCATION_SUCCESS':
      return {
        ...state,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_GEOLOCATION_FAILURE':
      return {
        ...state,
        isGeoPosAvailable: action.isGeoPosAvailable
      };
    case 'FETCH_CITY_BY_COORDS_SUCCESS':{
      return {
        ...state,
        cityByCoords: action.city
      };
    }
    case 'ADD_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.message
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: null
      };
    default:
      return state;
  }
};

export default reducer;