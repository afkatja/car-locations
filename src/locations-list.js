import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { getCities, getLocations, getCars } from "./data/actions";

import styled from "styled-components";
import { colors } from "./variables";

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	li {
		line-height: 1.5;
		padding: 10px 0;
		margin: 10px 0;
		&:not(:last-child) {
			border-bottom: 1px solid ${colors.mediumGrey};
		}
	}
`;

class LocationsList extends Component {
	componentWillMount() {
		this.getLocationsPerCity(this.props.match.params.city);
	}
	constructor(props) {
		super(props);
		this.getLocationsPerCity = city => this.props.getLocations(city);
	}

	render() {
		const { match, locations } = this.props;
		return (
			<Fragment>
				<StyledList>
					{!!locations.length &&
						locations.map(location => (
							<li key={location.id}>
								<Link to={`${location.id}/cars`}>{location.address}</Link>
							</li>
						))}
				</StyledList>
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
