import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getCities, getLocations, getCars } from './data/actions';

import Title from './title';
import List from './list';

import styled from 'styled-components';
import { colors } from './variables';

const StyledDL = styled.dl`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`;

const StyledDefinitionGroup = styled.div`
	&:not(:last-child) {
		margin-right: 40px;
		flex: 1 1 200px;
	}
	dt,
	dd {
		display: block;
		margin: 0;
		padding: 0;
	}
	dt {
		color: ${colors.lightGrey};
		font-weight: normal;
	}
	dd {
		color: ${props => (props.state === 'FREE' ? colors.brandGreen : '#000')};
		font-weight: ${props => (props.state === 'FREE' ? 700 : 400)};
	}
`;

class CarsList extends Component {
	componentWillMount() {
		const { city, location } = this.props.match.params;
		this.getCarsPerLocation(city, location);
	}
	constructor(props) {
		super(props);
		this.getCarsPerLocation = (city, location) =>
			this.props.getCars(city, location);
	}

	render() {
		const { cars, cities, locations, match } = this.props;
		const currentCityName = !!cities.length
			? cities.filter(({ id }) => id === match.params.city)[0].name
			: '';
		const currentLocationName = !!locations.length
			? locations.filter(({ id }) => id === match.params.location)[0].address
			: '';
		return (
			<Fragment>
				<Title>
					Cars in {currentCityName} on location {currentLocationName}
				</Title>
				<List>
					{!!cars.length &&
						cars.map(car => (
							<StyledDL key={car.id}>
								<StyledDefinitionGroup>
									<dt>License plate</dt>
									<dd>{car.license}</dd>
								</StyledDefinitionGroup>
								<StyledDefinitionGroup>
									<dt>Model</dt>
									<dd>{car.model}</dd>
								</StyledDefinitionGroup>
								<StyledDefinitionGroup>
									<dt>Type</dt>
									<dd>{car.type}</dd>
								</StyledDefinitionGroup>
								<StyledDefinitionGroup state={car.state}>
									<dt>State</dt>
									<dd>{car.state}</dd>
								</StyledDefinitionGroup>
							</StyledDL>
						))}
				</List>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cities: state.ui.cities,
	locations: state.ui.locations,
	cars: state.ui.cars,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getCities,
			getLocations,
			getCars,
		},
		dispatch
	);

const withState = connect(mapStateToProps, mapDispatchToProps);

export default withState(CarsList);
