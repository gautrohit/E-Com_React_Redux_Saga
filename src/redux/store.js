// // applyMiddleware - to use redux-logger
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
// import logger from "redux-logger";
// // Pass it as a middleware
// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export default store;

// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
