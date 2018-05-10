import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "./variables";

import Logo from "./Logo";
import CitiesList from "./cities-list";
import LocationsList from "./locations-list";
import CarsList from "./cars-list";

const StyledLogo = styled(Logo)`
	fill: ${colors.brandGreen};
	display: block;
	margin: 20px 0;
`;

export default function Content(props) {
	return (
		<div className="greenwheels">
			<Link to="/"><StyledLogo /></Link>
			<Route exact path="/" render={props => <CitiesList {...props} />} />
			<Route
				exact
				path="/:city/locations"
				render={props => <LocationsList {...props} />}
			/>
			<Route
				exact
				path="/:city/:location/cars"
				render={props => <CarsList {...props} />}
			/>
		</div>
	);
}
