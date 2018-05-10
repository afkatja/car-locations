import { GET_CITIES } from './actions';
const initialState = {
  cities: []
};

export default (state = initialState, action) => {
  console.log('action is', action);
  const { type, cities } = action;
  switch (type) {
    case GET_CITIES: {
      return {
        ...state,
        cities
      }
    }
    default:
      return state;
  }
};
