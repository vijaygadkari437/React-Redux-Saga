import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers";
import { userSaga } from "./sagas";

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux Store
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

// Run Sagas
sagaMiddleware.run(userSaga);

export default store;
