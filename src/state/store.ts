import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { RootState } from './types';
import rootReducer from './reducer';
// import loginSagas from '../features/Security/Login/sagas';
// import inquiriesSagas from '../features/Inquiry/sagas';
// import appointmentSagas from '../features/Appointment/sagas';
// import imageReviewSagas from '../features/ImageReview/sagas';
// import patientsSagas from '../features/Patients/sagas';
import snacksSagas from '../features/Snacks/sagas';

// TODO: either add note here and in reducer and shit as to why theres
// a higher level object to allow for expansion of functionality with more
// reducers and sagas and shit, or make a documentation readme like an
// expansion guide that explains the usefulness of this.
// Or both, I dunno.

const sagas = createSagaMiddleware();
const middleware: [Middleware] = [sagas];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store: Store<RootState> = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

// sagas.run(loginSagas);
// sagas.run(inquiriesSagas);
// sagas.run(appointmentSagas);
// sagas.run(imageReviewSagas);
// sagas.run(patientsSagas);

sagas.run(snacksSagas);

export default store;
