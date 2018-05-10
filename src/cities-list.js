import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCities, getLocations, getCars } from "./data/actions";
import Title from './title';
import List from './list';
import CustomLink from './link';

class CitiesList extends Component {
	componentWillMount() {
		this.props.getCities();
	}

	render() {
		const { cities } = this.props;
		return (
			<Fragment>
				<Title>Cities where Greenwheels cars can be found</Title>
				<List>
					{!!cities.length &&
						cities.map(city => (
							<li key={city.id}>
								<CustomLink to={`${city.id}/locations`}>
									{city.name} - {city.geoPoint.longitude} :{" "}
									{city.geoPoint.latitude}
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

export default withState(CitiesList);
