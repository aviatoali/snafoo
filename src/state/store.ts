import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { RootState } from './types';
import rootReducer from './reducer';
import snacksSagas from '../features/Snacks/sagas';

const sagas = createSagaMiddleware();
const middleware: [Middleware] = [sagas];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store: Store<RootState> = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

sagas.run(snacksSagas);

export default store;
