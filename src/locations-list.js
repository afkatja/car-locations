import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { getCities, getLocations, getCars } from "./data/actions";

import Title from "./title";
import List from "./list";
import CustomLink from "./link";

class LocationsList extends Component {
	componentWillMount() {
		this.getLocationsPerCity(this.props.match.params.city);
	}
	constructor(props) {
		super(props);
		this.getLocationsPerCity = city => this.props.getLocations(city);
	}

	render() {
		const { match, cities, locations } = this.props;
		const currentCityName = !!cities.length ? cities.filter(({ id }) => id === match.params.city)[0].name : '';
		return (
			<Fragment>
				<Title>Locations in {currentCityName} where Greenwheels cars can be found</Title>
				<List>
					{!!locations.length &&
						locations.map(location => (
							<li key={location.id}>
								<CustomLink to={`${location.id}/cars`}>
									{location.address}
								</CustomLink>
							</li>
						))}
				</List>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cities: state.ui.cities,
	locations: state.ui.locations,
	cars: state.ui.cars
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getCities,
			getLocations,
			getCars
		},
		dispatch
	);

const withState = connect(mapStateToProps, mapDispatchToProps);

export default withState(LocationsList);
