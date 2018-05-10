import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import ui from "./reducers";

const middleware = applyMiddleware(thunk, apiMiddleware);
const createStoreWithMiddleware = compose(middleware);

const store = combineReducers({
	ui
});

const storeWithMiddleware = createStoreWithMiddleware(createStore)(store);
export default storeWithMiddleware;
