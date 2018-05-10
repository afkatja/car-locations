import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './data/store';
import styled from 'styled-components';
import { colors } from './variables';
import Logo from './Logo';
import CitiesList from './cities-list';


const StyledLogo = styled(Logo)`
  fill: ${colors.brandGreen};
  display: block;
  margin: 20px 0;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="greenwheels">
          <StyledLogo />
          <CitiesList />
        </div>
      </Provider>
    );
  }
}

export default App;
