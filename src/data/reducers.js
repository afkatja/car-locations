import { GET_CITIES, GET_LOCATIONS, GET_CARS } from "./actions";
const initialState = {
	cities: [],
	locations: [],
	cars: []
};

export default (state = initialState, action) => {
	const { type, cities, locations, cars } = action;
	switch (type) {
		case GET_CITIES: {
			return {
				...state,
				cities
			};
		}
		case GET_LOCATIONS: {
			return {
				...state,
				locations
			};
		}
		case GET_CARS: {
			return {
				...state,
				cars
			};
		}
		default:
			return state;
	}
};
