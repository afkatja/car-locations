import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./data/store";
import { Router, Route } from "react-router-dom";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import Content from './content';
const history = createBrowserHistory();


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
