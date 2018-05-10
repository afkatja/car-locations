import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './data/store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';

import Content from './content';

const history = createBrowserHistory();
persistStore(store);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Content />
				</Router>
			</Provider>
		);
	}
}

export default App;
