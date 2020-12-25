import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/rootSaga";

const middleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  compose(applyMiddleware(...[middleware]), composeEnhancers())
);

middleware.run(rootSaga);

export default Store;
