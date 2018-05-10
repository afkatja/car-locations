import fetch from "isomorphic-fetch";

import { API_URL_CITIES } from "./endpoints";

export const GET_CITIES = "GET_CITIES";
export function getCities() {
	return function(dispatch) {
		return fetch(API_URL_CITIES, {
			method: "GET"
		})
			.then(response => response.json())
			.then(cities => dispatch({ type: GET_CITIES, cities }));
	};
}

export const GET_LOCATIONS = "GET_LOCATIONS";
export function getLocations(cityId) {
	return function(dispatch) {
		return fetch(`${API_URL_CITIES}/${cityId}/locations`, {
			method: "GET"
		})
			.then(response => response.json())
			.then(city =>
				dispatch({ type: GET_LOCATIONS, locations: city.locations })
			);
	};
}

export const GET_CARS = "GET_CARS";
export function getCars(cityId, locationId) {
	return function(dispatch) {
		return fetch(`${API_URL_CITIES}/${cityId}/locations/cars`, {
			method: "GET"
		})
			.then(response => response.json())
			.then(city => {
				const location = city.locations.filter(({ id }) => id === locationId);
				const cars = !!location ? location[0].cars : [];
				dispatch({ type: GET_CARS, cars });
			});
	};
}
