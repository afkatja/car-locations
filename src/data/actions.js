import fetch from "isomorphic-fetch";

import { API_URL_CITIES, API_URL_LOCATIONS, API_URL_CARS } from "./endpoints";

export const GET_CITIES = "GET_CITIES";
export function getCities () {
	return function(dispatch) {
		return fetch(API_URL_CITIES, {
			method: "GET"
		})
			.then(response => response.json())
			.then(cities => dispatch({ type: GET_CITIES, cities }));
	};
};
