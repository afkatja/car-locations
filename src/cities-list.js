import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCities } from "./data/actions";

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

class CitiesList extends Component {
  componentWillMount() {
    this.props.getCities();
  }
  render() {
		const { cities } = this.props;
		console.log('cities', cities);
		return (
			<Fragment>
				<StyledList>
					{cities.map(city => <li key={city.id}>{city.name}</li>)}
				</StyledList>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cities: state.ui.cities
});
const mapDispatchToProps = dispatch => bindActionCreators({
	getCities
}, dispatch);

const withState = connect(mapStateToProps, mapDispatchToProps);

export default withState(CitiesList);
