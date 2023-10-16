// applyMiddleware - to use redux-logger
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// Import the package
import logger from "redux-logger";

// Pass it as a middleware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
